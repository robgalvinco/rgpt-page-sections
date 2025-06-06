---
image: rgpt-VZo2vdyg.jpg
categories:
  - Hero Banner
  - Call To Action
video:
---
# Purpose:
This hero section is crafted to attract prospective students by clearly communicating the value proposition of the platform: learning English in a modern, effective way. For course creators or membership site owners, it combines clean visual hierarchy with conversion-focused elements like a free trial button, social proof, and star ratings. It emphasizes credibility and ease-of-access, encouraging users to take the first step toward learning through minimal friction.

# Design Notes:

## Heading Area
* Large, bold primary heading ("Learn English") stacked above a secondary, softer gray heading ("the smart way") — implemented with different `font-weight` and color contrast for visual hierarchy
* Supporting paragraph uses standard font size, centered alignment, and dark gray color to describe the offering clearly and concisely
* All content centered inside a narrow-width container — use `max-width` with `margin: auto` and `text-align: center`

## Call to Action Buttons
* Two horizontally-aligned buttons:
  - Primary CTA ("Start free trial") in bright blue with white text and rounded corners
  - Secondary CTA ("Explore courses") in soft gray with dark text — both styled with `border-radius`, `padding`, and a small shadow
* Use `display: flex` or `inline-flex` with `gap` to control spacing between buttons

## Social Proof Elements
* 5 green star icons (likely FontAwesome) indicating top-rated service
* Centered caption text below stars — light gray text with a slightly smaller font size
* Row of overlapping avatar images with circular borders and soft green outline — use `border-radius: 50%`, `border`, and negative `margin-left` for overlap effect

## Spacing & Visual Balance
* Generous vertical spacing between heading, paragraph, buttons, and testimonial row
* Whitespace-driven design with light background and no visual clutter
* Subtle gradient or blurred blob at the bottom of the section background (if visible on full page) — achievable with a `radial-gradient` or `CSS blur filter` on a pseudo-element

## Implementation Guidance
* Use Flexbox or Grid to stack and center content
* Apply `font-size` and `line-height` scaling based on screen size for responsive typography
* Buttons should include `:hover` and `:focus` states for accessibility — e.g., `box-shadow` or `transform: scale(1.03)`
* Avatar stacking: use `position: relative` and `z-index` to layer properly; optionally animate on hover for engagement
