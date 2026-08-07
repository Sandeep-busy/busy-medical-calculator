# Medical Top-up Premium Calculator — Renewal Year 2026

A full-page premium calculator that fills the entire browser viewport with no scrolling, on desktop or mobile.

## Files
- `index.html` — markup
- `style.css` — full-page, no-scroll layout (header, plan selector, 10 age-band inputs in a grid, result footer)
- `script.js` — premium calculation logic

## How it works
- The page locks to `100vh` / `100vw` and lays out header, controls, the age-band grid, and the result footer using flexible (`vh`/`clamp()`) sizing, so all 10 age rows are always visible at once — no scrollbar on any screen size.
- On narrow screens (≤700px) the age-band grid reflows from 5×2 to 2×5 so everything still fits without scrolling.

## Updating
- To change premium rates for a future renewal year, edit the `rates` object at the top of `script.js`.
- To change the year label, edit the `.badge` text ("Renewal Year 2026") in `index.html`.

## Replacing the old files
Overwrite your existing `index.html`, `style.css`, and `script.js` with the files in this package — same filenames, so no other references break. (No logo file is used in this version.)
