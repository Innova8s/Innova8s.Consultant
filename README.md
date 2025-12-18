AI Consultant — theme changes

Color scheme applied (per user request):
- Primary accent: #0066ff (used for buttons, interactive elements, accents)
- Background / Surfaces: #ffffff (white)
- Text / Dark elements: #000000 (pure black)
- Gradients: hero and footer use blue (#0066ff) → black (#000000) gradients
- Borders / Subtle accents: #e6e6e6

Files updated:
- `styles.css` — root color variables, gradients, button styles, hero texture overlay, responsive sizing
- `AI Consultant.html` — single-file standalone copy (inlined CSS/JS) updated to match the palette

How to revert:
- Restore the original `:root` variables in `styles.css` (look for older commits or replace variables with previous hex values like #263238 for text and prior accent hex).
- Or replace `--accent` / `--text` / `--bg` values in `:root` with your preferred colors.

Notes:
- Interactive elements (primary/secondary buttons, PDF link, nav underline) now use the blue accent.
- The hero has a blue-to-black gradient plus a subtle repeating-linear-gradient texture.
- Text is set to pure black for maximum contrast. If you prefer softer dark slate, change `--text` to a softer value.

If you'd like, I can also add a visual diff screenshot or a CSS comment block showing the previous values for easy revert.