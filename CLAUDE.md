# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Sadykov Group sp. z o.o.**, a Polish employment and legalization agency serving CIS-country nationals. No build step — files are served directly as-is.

## Running Locally

Open any HTML file in a browser, or serve with any static file server:

```
npx serve .
# or
python -m http.server 8000
```

There is no build, lint, or test command.

## Pages and Their Files

| Page | HTML | CSS | JS |
|------|------|-----|-----|
| Main landing page | `index.html` | `css/styles.css` | `js/script.js`, `js/asoapp.js` |
| Public vacancies list | `wakaty.html` | `css/stylewak.css` | `js/jswak.js` |
| Admin vacancies panel | `vacancies.html` | `css/vacancies.css` | `js/vscript.js` |
| Privacy policy | `privacy-policy.html` | — | — |

## Internationalization (i18n)

There are **two separate i18n systems** — do not mix them:

- **`index.html`** uses `data-i18n` and `data-i18n-placeholder` HTML attributes. `js/script.js` calls `setLanguage(lang)` which fetches `lang/{lang}.json` and applies translations at runtime. Translation files: `lang/en.json`, `lang/ru.json`, `lang/pl.json`. Default language is `pl`, persisted in `localStorage`.

- **`wakaty.html`** uses a hardcoded `TRANSLATIONS` object inside `js/jswak.js` (no external fetch). Translation keys are applied by `jswak.js` directly.

When adding new translatable strings to `index.html`, add the `data-i18n="key"` attribute and add the key to all three `lang/*.json` files.

## Contact Form

The form in `index.html#contact` POSTs `FormData` to a Google Apps Script Web App URL hardcoded in the inline `<script>` at the bottom of `index.html`. `vacancies.html` admin panel (`js/vscript.js`) also uses a Google Apps Script API — its URL placeholder (`YOUR_WEB_APP_URL_HERE`) must be replaced before use.

## External CDN Dependencies

All loaded from CDN — no local copies:
- **AOS** (Animate On Scroll) — initialized in `js/asoapp.js`
- **Font Awesome 6.0** — icons throughout
- **Google Fonts** — Poppins on `index.html`, Inter on `wakaty.html`
- **flag-icons** — language switcher flags in `index.html`

## Design Tokens

CSS custom properties defined in `css/styles.css `:root`:

```
--primary-color: #1E2B20   (dark green)
--secondary-color: #9AE66E (lime green)
--border-radius: 25px
```

`css/stylewak.css` has its own separate token set. `css/styles.minify.css` and `js/script.min.js` are minified copies — edit the originals, not the minified files.

## Header Scroll Behavior

`js/script.js` toggles `.transparent` / `.scrolled` classes on `.header` based on `window.scrollY > 50`. Both `index.html` and `wakaty.html` implement this independently.
