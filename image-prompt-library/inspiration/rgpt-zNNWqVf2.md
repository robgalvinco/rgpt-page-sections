---
image: rgpt-zNNWqVf2.jpg
categories:
  - Content
  - Icon Cards
  - Features
video:
---
# Purpose:
This section highlights the platform’s core values to build alignment and trust with potential users—particularly instructors, students, or members evaluating the platform for long-term use. By articulating guiding principles like community, affordability, access, and personalization, course creators and coaches can emotionally resonate with their audience and reinforce brand identity.

# Design Notes:

## Layout Structure
* Four equal-width feature blocks in a horizontal row
* Each block contains:
  - A rounded square background with soft pastel tint
  - Top-aligned icon in black (with accent highlights where applicable)
  - Bold title text (value name)
  - Supporting text below in smaller, gray font

* Use `CSS Grid` or `Flexbox` with `gap: 2rem` for spacing between cards

## Typography & Icons
* Section heading:
  - “Our Core” in bold black
  - “Values” in bold purple for emphasis — use `<span style="color: #A78BFA;">`
* Titles: bold (`font-weight: 700`)
* Descriptions: subdued gray (`color: #666`), one or two lines max
* Icons:
  - Vector-style icons with consistent stroke weight
  - Slight use of purple or accent tones on icon elements (e.g., in “Community First”)

## Background & Card Styling
* Each card has:
  - Soft background tint (light purple, peach, teal, yellow)
  - Rounded corners (`border-radius: 1rem`)
  - Padding inside — `padding: 1.5rem`
  - Icon positioned top-left or top-center, with generous space above text

## Color Palette
* Purple (#A78BFA) as primary accent
* Soft pastels:
  - Light violet for Community
  - Peach for Cost-effectiveness
  - Mint for Accessibility
  - Cream for Personalization

## Implementation Guidance
* Use `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` for responsive layout
* Icons can be inline SVGs or FontAwesome — center-aligned on mobile view
* Consider hover effects (e.g., subtle scale or shadow): `transform: scale(1.02); box-shadow: 0 4px 12px rgba(0,0,0,0.06)`
* Stack vertically on mobile with consistent spacing
