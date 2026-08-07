# BUSY Medical Top-up Premium Calculator — Renewal Year 2026

A compact, embeddable premium calculator card fixed at **4in × 2.5in**.

## Files
- `index.html` — markup
- `style.css` — styling (card is locked to 4in × 2.5in via CSS)
- `script.js` — premium calculation logic
- `logo.jpg` — BUSY logo

## How to use
1. Open `index.html` directly in a browser, or upload the whole folder to GitHub Pages / Netlify / any static host.
2. To embed on an existing page, drop the `.card` element in an `<iframe>` sized to `4in x 2.5in` (≈384px × 240px at 96dpi), or copy the CSS/HTML directly into your page.
3. To update premium rates for future renewal years, edit the `rates` object at the top of `script.js`.
4. To change the year label, edit the `.badge` text ("Renewal Year 2026") in `index.html`.

## Replacing the old files
Simply overwrite your existing `index.html`, `style.css`, `script.js`, `README.md`, and `logo.jpg` with the files in this package — no other changes needed.
