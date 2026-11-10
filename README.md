# mattikoenis.ch

Portfolio von Matti Koenis – Applikationsentwickler in Ausbildung bei Swisscom.

Statisch vorgerenderte React-App (Vite + Tailwind CSS v4) in vier Sprachen (DE, EN, NL, SV), ausgeliefert über GitHub Pages.

## Entwicklung

```bash
npm install
npm run dev       # Dev-Server (clientseitig gerendert)
npm run build     # Client-Build, SSR-Build und Prerendering aller Seiten nach dist/
npm run preview   # Produktions-Build lokal ansehen: http://localhost:4173
npm run lint
```

## Aufbau

| Bereich | Ort |
| --- | --- |
| Seiten (Start, Case Study, Datenschutz, 404) | `src/pages/` |
| Komponenten (Header, Globus, Formular …) | `src/components/` |
| Texte pro Sprache | `src/content/i18n/{de,en,nl,sv}.js` |
| Projektdaten (Links, Stack, Bilder) | `src/content/projects.js` |
| Routen, SEO-Head, CSP | `src/lib/routes.js`, `src/lib/head.js` |
| Prerendering, Sitemap, 404.html | `scripts/prerender.mjs` |
| Bilder (AVIF/WebP), Schriften, OG-Bilder | `public/images/`, `public/fonts/`, `public/og/` |

Jede Seite wird beim Build als eigenes HTML mit Titel, Beschreibung, Canonical, `hreflang`, Open Graph und JSON-LD erzeugt. Im Browser wird nur die jeweilige Sprachdatei geladen.

## Neues Projekt hinzufügen

1. Eintrag in `src/content/projects.js` ergänzen (Slug, Links, Stack, Bild).
2. Texte unter `projectTexts.<slug>` in allen vier Sprachdateien ergänzen.
3. Bilder als `public/images/<name>-<breite>.{avif,webp}` ablegen.
4. Optional: Social-Preview `public/og/og-<slug>.png` (1200 × 630).

## Kontaktformular

Das Formular sendet über die EmailJS-REST-API. Konfiguration über `.env` (siehe `.env.example`).
Die EmailJS-IDs sind öffentliche Client-Kennungen. Im EmailJS-Dashboard sollte die Nutzung auf die eigene Domain beschränkt sein.

## Schriften

Geist und Geist Mono (SIL Open Font License, siehe `public/fonts/OFL-LICENSE.txt`), selbst gehostet.