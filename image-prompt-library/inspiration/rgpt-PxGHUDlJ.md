---
image: rgpt-PxGHUDlJ.jpg
categories:
  - Features
  - Content
  - Checklist
video:
---
# Purpose:
This section communicates the core values behind the learning platform, which helps build trust and alignment with course creators, coaches, and membership site owners. By clearly stating educational principles such as quality, accessibility, and growth, it reassures prospective users that the platform is mission-driven and learner-focused. This builds emotional resonance and appeals to values-based purchasing decisions, which is especially important in education and coaching contexts.

# Design Notes:

## Layout Structure
* Two-column layout using `Flexbox` or `CSS Grid`
* Left column contains a stylized illustration inside a rounded-corner card
* Right column stacks three value statements vertically with aligned icons and headings

## Key Visual Elements
* Custom illustration with hand-drawn style and thematic icons (lightbulb, rocket, pencil)
* Numbered icons use minimalist outlined circles for sequence: `1`, `2`, `3`
* Headings are bold, black (`font-weight: 600–700`), and use a larger font size than body text
* Descriptions are muted gray and wrapped under each heading for compactness

## Spacing and Positioning
* Equal vertical spacing between value blocks for visual balance
* Adequate left margin on value list to balance illustration width
* Icon–heading–text stack is left-aligned with consistent gutter spacing

## Visual Styling
* Clean white background with subtle card fill behind illustration (`#f9f9fb` or very light gray)
* Slight rounding on image container corners (`border-radius: 1rem`)
* Section badge “Core Principles” styled as a pill tag in pastel purple (`#cbb5fd` or similar)

## Implementation Guidance
* Layout: `CSS Flexbox` with `gap: 2rem` or `grid-template-columns: 1fr 1fr` for left/right content
* Numbered icons: Circle text elements with `border: 2px solid #000`, `border-radius: 50%`, and `font-weight: bold`
* Illustration area: `img` or `inline SVG`, centered within a padded container
* Ensure the section is responsive by stacking image above text on mobile with `flex-direction: column-reverse`

