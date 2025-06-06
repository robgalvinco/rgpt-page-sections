---
image: rgpt-QLrgeXn0.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This section serves as a high-conversion promotional banner for a video content creation bootcamp, tailored to coaches and online educators looking to grow their influence through mobile-friendly video strategies. It builds urgency and excitement with a compelling headline, trust-building visuals of the instructor, and strong value-based pricing. The offer empowers course creators to take action quickly, making video creation accessible and unintimidating—key for increasing user-generated content and community engagement within a membership platform.

# Design Notes:

## Hero Section
* Bold, centered headline with dual-tone emphasis: core phrase in dark pink, italics in purple-pink for emotional impact
* Subheadline above in smaller serif font adds context without clutter
* Uses `text-align: center` with large line-height for easy readability
* Font styling mixes bold sans-serif (`font-weight: 700`) with italic serif (for emphasis) using `<em>` or `span class`

## Video & Mockup Area
* Left-aligned embedded video thumbnail framed in a soft card with light drop shadow
* Right-aligned collage of course device mockups (tablet, laptop, mobile, etc.)
* Use `Flexbox` with `align-items: center` and `gap` for side-by-side layout

## CTA Area
* Prominent green button with icon on left (camera emoji or FontAwesome `fa-video`)
* Full-width button with rounded corners and soft shadow, contrasting teal background (`#00bfa6`) and white text
* Button text includes urgency (“Instant Lifetime Access”) and price clarity

## Pricing Banner
* Bottom banner with high-contrast background (`#ec5990`) and white bold price copy
* Strikethrough on original price using `<del>` or `text-decoration: line-through`
* “Just $27 Today” emphasized with handwritten-style underline (SVG or `::after` element)

## Visual Styling
* Bright pink/purple color palette aimed at female entrepreneur audience (`#ec5990`, `#ff69b4`, `#ffd1e3`)
* Rounded corners on all modules and cards (`border-radius: 1rem`)
* Subtle box shadows (`box-shadow: 0 8px 24px rgba(0,0,0,0.08)`) for depth

## Implementation Guidance
* Use CSS `grid-template-columns: 1fr 1fr` for main content split
* Implement video embed with responsive container (`aspect-ratio: 16 / 9`)
* Price callout can use `position: relative` with `::after` pseudo-element to add brush stroke underline (SVG path or custom background image)
* Responsive layout stacks vertically on mobile using media queries and adjusts padding
