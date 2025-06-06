---
image: rgpt-z2rQY7or.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing table section is designed to clearly present subscription options and incentivize users to take action by locking in their rate. For course creators or membership site owners, this layout simplifies comparison, drives conversions through visual hierarchy, and highlights value via tiered features. It supports decision-making by combining urgency ("before it goes up") with clarity and a strong mid-tier callout.

# Design Notes:

## Layout Structure
* Three-column pricing grid — left to right: Self Development, Wealth Creation, Millionaire Fastlane
* Center column marked as “BEST VALUE” — highlighted visually to draw attention
* Use `CSS Grid` or `Flexbox` with `gap: 2rem; justify-content: space-between;`

## Pricing Cards
* All cards share the same structure:
  - Plan name at top (light gray text)
  - Large, bold price (e.g., `$39`) with `/month` in smaller text
  - Checklist of features with check or X icons — use `FontAwesome` or SVG icons
  - CTA button at the bottom: full-width pill button in gold gradient
  - Footnote below button: subtle gray small-text callout

* Center card:
  - Slight shadow or gold border (`border: 2px solid #FFD700`)
  - Gradient background from top gold to dark gold (`linear-gradient`)
  - "BEST VALUE" badge in top right corner — pill style, small font, black text on gold background

## Feature Checklist
* Each list item:
  - Includes icon (✓ or ✕) and text
  - Features not included are shown in gray and struck through (`text-decoration: line-through; color: #888`)
  - Use `ul > li` with consistent vertical spacing

## Typography & Button Styling
* Headings: serif or transitional sans-serif for elegance
* Price: large size (`font-size: 2rem+`), tight spacing with subtext
* Button:
  - Bright gold background with dark text
  - Rounded (`border-radius: 999px`) and hover shadow or gradient shift

## Visual Styling & Background
* Entire section on a dark background (`#0f0f0f` or similar)
* Text uses high contrast: white, gray, and gold
* Cards have rounded corners and slight elevation (`box-shadow: 0 4px 10px rgba(0,0,0,0.2)`)

## Implementation Guidance
* Cards: `border-radius: 1rem; padding: 2rem; background-color: #111`
* Middle card: `z-index: 2`, use media query to adjust emphasis stacking on mobile
* Ensure accessibility: button labels should be descriptive (e.g., “Join Campus with $39 Plan”)
