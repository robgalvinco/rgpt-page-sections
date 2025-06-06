---
image: rgpt-VqGwHPAr.jpg
categories:
  - Instructors
video:
---
# Purpose:
This section is designed to establish credibility and personal connection by featuring a founder or instructor message. For online course creators, coaches, or membership site owners, this format strengthens trust and humanizes the brand. It communicates mission and empathy directly, helping potential members feel understood and aligned with the program’s goals. Such storytelling often leads to stronger emotional resonance, which boosts engagement and conversion.

# Design Notes:

## Instructor/Founder Highlight Section
* Center-aligned layout inside a card-style container with dark background and rounded corners — use `border-radius` and a solid `#111` or similar for the background
* Top section includes circular portrait image with subtle drop shadow for depth — achieved via `border-radius: 50%` and optional `box-shadow`
* Name is displayed above the image in bold white text, with a smaller subheading below for title and credentials in lighter gray
* Below the profile area is a large, center-aligned quote block with multi-line text and smart line breaks to emphasize key messaging

## Typography & Hierarchy
* Clear visual hierarchy: name (bold, medium size), title/subtitle (small, light), quote (large, medium-weight sans-serif)
* Quote text color is light gray (`#ccc` or similar) for subtle contrast on black background
* Inline emphasis on readability and balance, with generous padding inside the container

## Spacing & Alignment
* Equal padding top and bottom; use `padding: 4rem 2rem` (or equivalent relative values)
* Balanced vertical stacking of image, name, subheading, and text with consistent spacing
* Max-width applied to quote block to prevent overly long line lengths — use `max-width: 700px` and `margin: 0 auto`

## Implementation Guidance
* Use Flexbox or Grid with `place-items: center` for full vertical centering within the container
* Responsive layout should maintain central alignment and scale text/image gracefully
* Apply `text-shadow` minimally or increase line-height for improved legibility on dark backgrounds
