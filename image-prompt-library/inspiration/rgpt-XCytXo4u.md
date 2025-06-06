---
image: rgpt-XCytXo4u.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing section is designed to help users easily compare membership plans and choose the one that best matches their needs. For course creators, coaches, or platform owners, clearly tiered pricing with feature highlights helps reduce friction in the purchase decision, communicates value, and drives conversions. The side-by-side layout creates visual contrast and simplifies decision-making by making differences between plans immediately clear.

# Design Notes:

## Section Layout
* Dark background for the entire section, enhancing contrast with the pricing cards
* Section heading includes bold text with color-highlighted keywords ("Perfect Plan" in orange) — implement with `<span>` and brand accent color
* Subheading below in lighter gray, smaller font, centered for symmetry

## Pricing Cards
* Two-column layout with each plan inside a card-style container
* Left card (Professional Plan):
  - White background with black text
  - Label "PROFESSIONAL" in outlined pill shape — `border: 1px solid`, `border-radius: 999px`, and small padding
  - Price in large bold font (`$299 / month`)
  - Supporting subtitle in gray, smaller font
  - Feature list uses black checkmark icons and left-aligned bullets
  - Full-width black CTA button at bottom with white text and rounded corners

* Right card (Elite Plan):
  - Bright orange background with dark text and subtle visual hierarchy
  - Label "ELITE" in a filled pill shape with similar styling
  - Price emphasized in same large font (`$499 / month`)
  - Feature list includes all Professional features + added value items
  - Black CTA button identical to the other plan for visual balance

## Feature Lists
* List items use consistent checkmark icons (FontAwesome or SVG), possibly bolded text for some keywords
* Vertical spacing between each feature for scannability
* Use `ul` with custom styles or `div` blocks with icon-text pair layout (`display: flex; align-items: center`)

## Visual Styling & Effects
* Rounded corners on both cards — use `border-radius: 1rem` for a soft modern look
* Shadow or elevation effect is subtle or nonexistent due to contrast-driven design
* Buttons styled with hover states — e.g., `transform: scale(1.03); box-shadow` or background transition

## Implementation Guidance
* Use `CSS Grid` or `Flexbox` with `gap` for side-by-side card layout
* Add media queries to stack the plans vertically on mobile screens (`flex-direction: column`)
* Set equal padding and card height for alignment across both plans
* CTA buttons should use the same class styles for consistency across plan tiers
