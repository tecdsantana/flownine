## Problem

On mobile (<1024px), the H1 "Consultoria de Dados, IA e People Analytics para empresas" and its paragraph are rendered off-screen to the left. Playwright confirms the H1's bounding box sits at x ≈ -780 on a 390px viewport, so only the buttons and tech marquee are visible.

Root cause is in `src/components/HeroSection.tsx`:

- The wrapper is `flex flex-col lg:flex-row items-center`.
- On mobile (column direction), `items-center` shrinks each child to its content width.
- The text child has `flex-1` (no explicit width) and the H1 inside carries `max-w-3xl` (768px) plus `tracking-wider`, so the text block renders ~768px wide and gets pushed outside the 390px viewport.
- The buttons/marquee below stay centered because their own widths are small.

## Fix (presentation-only, `src/components/HeroSection.tsx`)

1. Add `w-full` to the text-column wrapper (`<div className="flex-1 animate-fade-in">`) so it fills the mobile column instead of shrinking to the H1's intrinsic width.
2. Change the H1 `max-w-3xl` → `max-w-full lg:max-w-3xl` so the title wraps within the viewport on mobile and keeps the 3xl cap on desktop.
3. Change the paragraph `max-w-2xl` → `max-w-full lg:max-w-2xl` for the same reason.
4. Leave the right-side visual column (`flex-1 max-w-lg`) alone — it's empty content and doesn't affect the issue.

No changes to copy, colors, layout on desktop, or any business logic.

## Verification

- Re-run the Playwright mobile screenshot at 390×800 and confirm the H1 + paragraph are visible and left-aligned within the viewport.
- Spot-check desktop (≥1024px) to confirm the two-column layout and max-widths are unchanged.
