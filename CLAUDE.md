# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Règles de travail

- Réponds-moi toujours en français.
- Je ne suis pas développeur : explique simplement ce que tu fais et pourquoi, sans jargon inutile.
- Avant toute modification importante, propose-moi un plan et attends mon accord.
- Après chaque étape qui fonctionne, propose-moi de faire un commit avec un message clair.
- Ne mets jamais de mot de passe, de clé API ou de donnée sensible dans le code.

## Agent skills

- Skills (from `mattpocock/skills`, copied from the `registre_cartes` project) live in `.claude/skills/`; `skills-lock.json` records their source and hash.

### Issue tracker

Issues and specs live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
