---
image: rgpt-r5vqHYvG.jpg
categories:
  - Content
  - Stats
video:
---
# Purpose:
This section is designed to build trust and convey social proof by showcasing the program's reach and community size. It reassures potential students—especially artists and creatives—that the program is credible, globally embraced, and actively supporting a vibrant learning network. These trust-building metrics help course creators and membership site owners boost conversion by highlighting the scale and satisfaction of their audience.

# Design Notes:

## Statistic Highlight Section
* Three-column layout with centered alignment, equal spacing, and consistent typography hierarchy
* Each metric presented in large bold sans-serif font (likely 2–3x base size) for visual impact
* Supporting descriptions in uppercase, smaller text with slightly increased letter spacing for readability and balance

## Visual Styling
* Light lavender-to-white gradient background using `linear-gradient(to top, #e7def9, #ffffff)`
* Organic torn paper edge at bottom created using `inline SVG path` or a `mask-image` on the container for soft transition into next section
* Text and numbers in black or very dark gray for strong contrast

## Layout and Spacing
* Section likely structured with CSS Flexbox or Grid (`display: flex; justify-content: space-around`)
* Equal padding above and below content block to create clean white space (`padding: 4rem 2rem`)
* Container width capped (e.g., `max-width: 960px; margin: auto`) for legibility on large screens

## Implementation Guidance
* Use responsive units (e.g., `rem`, `%`, or `vw`) to maintain proportional sizing on mobile
* Add `text-align: center` to each stat block and apply `gap` in Flex/Grid for consistent spacing
* Organic edge can be implemented via SVG `<path>` with transparent fill or using `clip-path: polygon(...)`
* Consider using `intersection observer` to animate numbers counting up on scroll for engagement
