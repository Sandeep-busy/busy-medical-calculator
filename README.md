# Medical Top-up Premium Calculator — Renewal 2026-27

A calculator-styled widget, sized like a chat/panel window (max 760px wide, centered), with:
- Plan selector showing the actual plan names from the renewal letter — **IRIS FAM 20 (4+2 Lac)**, **SAPP. LITE FAM 20 (4+3 Lac)**, **Ether FAM 20 (4+4 Lac)**
- Green LCD-style display showing the live premium total
- Key-pad grid for all 10 age bands
- Footnote: "** Select members based on Age Band to determine the applicable premium."
- Orange "AC · Reset" key

## Files
- `index.html` — markup
- `style.css` — calculator styling
- `script.js` — premium calculation logic

## Updating
- To change premium rates for a future renewal year, edit the `rates` object at the top of `script.js` (the three keys correspond to the three plan options in `index.html`, in the same order).
- To rename plans or change the badge/year text, edit the `<option>` labels and `.badge` text in `index.html`.

## Replacing the old files
Overwrite your existing `index.html`, `style.css`, and `script.js` with the files in this package — same filenames, so no other references break.
