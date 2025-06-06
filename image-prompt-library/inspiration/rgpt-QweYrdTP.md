---
image: rgpt-QweYrdTP.jpg
categories:
  - Features
  - Content
  - Icon Cards
video:
---
# Purpose:
This section is designed to communicate the core learning outcomes of an art course, specifically targeting creators interested in acrylic techniques. It effectively builds trust and excitement by outlining tangible skill development, while also highlighting unique value propositions like style improvement and faster sales. This benefits course creators by preemptively answering questions about content quality and differentiation, thereby increasing conversions and minimizing drop-off from undecided users.

# Design Notes:

## Intro Heading Section
* Section tag "From Beginner to Advanced" in bright pink (`#F73C7A`) with small caps style and center alignment
* Bold headline "What You Will Learn" in black with large font-size and tight line-height
* Supporting paragraph is full-width, center-aligned with medium font weight and soft word spacing for readability

## Feature Grid (4 Columns)
* Layout uses a four-column grid (`CSS Grid` or `Flexbox with wrap`) on desktop, stacked layout on mobile
* Each column is vertically centered with icon, title, and description
* Even padding and margin between items (`gap: 2rem`) to balance content

## Icons
* Flat outline icons in matching pink tone (#F73C7A), visually consistent across all four points
* Icons are approximately 48x48px and centered above each heading
* SVG icons likely used for scalability and theme control (consider inline SVG for color customization)

## Typography
* Subheadings (e.g. "BEAUTIFY ACRYLICS") in all caps, bold (`font-weight: 700`)
* Descriptions below in regular sentence case, centered with consistent width control (via `max-width: 220px`)
* Spacing between headings and descriptions is uniform, approximately 0.5rem

## Implementation Guidance
* Use `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` for responsiveness
* Ensure icons and headings are consistently aligned using `flex-direction: column; align-items: center`
* Icons can be styled via `fill: currentColor` for easier theming
* Apply `margin-top` to paragraph blocks to create visual rhythm below each heading

## Visual Styling
* Overall clean white background for high contrast
* Icon and accent color is consistently pink (#F73C7A) across all elements
* No card borders or background boxes—rely on spacing and icon anchoring for separation
