---
image: rgpt-IOKJWGbB.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing section is designed to help prospective learners evaluate and choose between subscription tiers based on their learning goals and budget. It clearly distinguishes self-paced versus guided experiences to support different user needs, from casual learners to more committed students. This layout enhances transparency, supports conversion by emphasizing value (e.g. “Save 30%”), and makes upgrades more appealing with visually distinct and benefit-rich premium options.

# Design Notes:

## Section Header
* Centered pre-heading ("Pricing") in a pill-shaped blue badge (CSS `border-radius + background-color`)
* Main heading uses bold sans-serif font with split color styling: “Choose your” in black, “plan” in gray
* Subheading with smaller font explains the value proposition (live calls vs. video lessons)

## Toggle Control (Monthly / Yearly)
* Centered toggle switch styled as a segmented control with soft shadows and rounded corners
* "Save 30%" badge above the Yearly option in a neon green pill, offset with absolute positioning
* Switch uses `button` elements with conditional styling to show selected state (likely `:active` or `aria-selected`)

## Pricing Cards
* Two-column layout: left (Basic), right (Pro)
* Cards have equal height, with consistent padding and vertical alignment using Flexbox or CSS Grid
* Both cards use white text on colored buttons and consistent spacing between plan details

### Basic Plan Card
* White background with light shadow and large `border-radius`
* Icon at top (open book style) indicates plan type (FontAwesome or inline SVG)
* Features listed with checkmark icons and line spacing
* CTA button styled in vibrant blue (`background-color`) with full width and rounded corners

### Pro Plan Card
* Bright lime green background creates emphasis (highlighted/featured state)
* Crown icon (FontAwesome or SVG) suggests premium tier
* Extra benefits are listed with bold text emphasis
* CTA button is black with white text, full width, and rounded corners

## Implementation Guidance
* Use `display: flex` with `gap` between pricing cards and toggle control
* Apply `box-shadow` and `border-radius` to each card for elevation
* For toggle, consider `role="tablist"` with `aria-pressed` states for accessibility
* Ensure cards stack vertically on mobile with appropriate padding and margin
* Use consistent vertical spacing (`margin-bottom`) between list items and sections
