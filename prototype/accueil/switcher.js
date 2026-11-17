/*
 * PROTOTYPE — à jeter. Barre flottante pour passer d'une variante à l'autre.
 * Flèches ← → du clavier ou boutons de la barre.
 */
(function () {
  var variantes = [
    { cle: 'A', nom: 'Corporate épuré', fichier: 'variante-a.html' },
    { cle: 'B', nom: 'Nature premium', fichier: 'variante-b.html' },
    { cle: 'C', nom: 'Moderne & dynamique', fichier: 'variante-c.html' }
  ];
  var actuel = variantes.findIndex(function (v) {
    return location.pathname.indexOf(v.fichier) !== -1;
  });
  if (actuel < 0) actuel = 0;

  function aller(delta) {
    var i = (actuel + delta + variantes.length) % variantes.length;
    location.href = variantes[i].fichier;
  }

  var barre = document.createElement('div');
  barre.setAttribute('aria-label', 'Choix de la variante (prototype)');
  barre.style.cssText = [
    'position:fixed', 'left:50%', 'bottom:18px', 'transform:translateX(-50%)', 'z-index:99999',
    'display:flex', 'align-items:center', 'gap:6px', 'padding:6px', 'border-radius:999px',
    'background:#111', 'color:#fff', 'font:600 13px/1 system-ui,sans-serif',
    'box-shadow:0 8px 30px rgba(0,0,0,.35)', 'border:2px dashed #ff3d7f'
  ].join(';');

  function bouton(texte, titre, delta) {
    var b = document.createElement('button');
    b.textContent = texte;
    b.title = titre;
    b.style.cssText = 'all:unset;cursor:pointer;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#2a2a2a;font-size:16px';
    b.onclick = function () { aller(delta); };
    return b;
  }

  var etiquette = document.createElement('span');
  etiquette.style.cssText = 'padding:0 12px;white-space:nowrap';
  var v = variantes[actuel];
  etiquette.textContent = 'Prototype · ' + v.cle + ' (' + v.nom + ') · ' + (actuel + 1) + '/' + variantes.length;

  barre.appendChild(bouton('←', 'Variante précédente', -1));
  barre.appendChild(etiquette);
  barre.appendChild(bouton('→', 'Variante suivante', 1));
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(barre); });

  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    if (e.key === 'ArrowLeft') aller(-1);
    if (e.key === 'ArrowRight') aller(1);
  });
})();
