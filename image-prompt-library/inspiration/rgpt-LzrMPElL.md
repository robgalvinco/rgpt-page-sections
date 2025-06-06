---
image: rgpt-LzrMPElL.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing section is designed to drive subscription conversions by presenting a clear, benefit-stacked comparison between two membership tiers. With a focus on urgency ("Lock in Your Price Today") and visual reinforcement of value, it helps coaches and course platform owners highlight key feature differences and guide users toward a high-value decision. The section supports persuasive marketing by showing savings, exclusive features, and limited-time incentives.

# Design Notes:

## Section Header
* Headline uses serif typography with mixed weight ("Lock in Your Price Today") in white for emphasis
* Subheading in light gray sans-serif offers motivational nudge to act
* Positioned on a dark gradient background with subtle overlay for contrast

## Pricing Toggle
* "Annual / Monthly" switch is centered and styled as a pill toggle
* Active selection is visually highlighted with a white fill and darker inactive state
* Likely implemented using `button group` with conditional classes and `aria-selected` support

## Pricing Cards (Two Columns)
* Side-by-side card layout using `CSS Grid` or `Flexbox` with spacing between
* Cards have:
  - Rounded corners
  - Dark backgrounds with subtle borders or shadows
  - Consistent internal padding and vertical spacing

### Self Development Plan (Left Card)
* $42/month, billed annually, with “SAVE 14%” badge in green
* List of features with checkmarks (FontAwesome or inline SVG)
* Inaccessible features shown with strikethrough text and dimmed color
* CTA button:
  - Rounded yellow gradient with full width
  - Text: “Join Campus Today”
  - Below it: subtle note ("Lock-in your price before it goes up")

### Millionaire Blueprints Plan (Right Card)
* $59/month, billed annually, “SAVE 15%” badge and “BEST VALUE” tag in yellow pill
* Same styling structure as left card, but includes all features with active checkmarks
* Extra CTA reinforcement through placement of “BEST VALUE” badge (absolutely positioned or top-right `div`)
* Slight glow or gradient on background to add visual emphasis

## Visual Styling & Implementation
* Use `box-shadow`, `border-radius`, and `linear-gradient` for button styling
* Checkmark list built with flex alignment and spacing between icon and text
* Responsive: Stack cards vertically with margin between on smaller viewports
* Use `transform: scale()` or `hover: brightness()` for button interactions
* Accessibility: ensure toggle and button states are keyboard-navigable
