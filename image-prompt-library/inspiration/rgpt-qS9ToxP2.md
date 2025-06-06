---
image: rgpt-qS9ToxP2.jpg
categories:
  - Instructors
video:
---
# Purpose:
This "About the Creator" section provides authentic, personal storytelling to establish trust and credibility with prospective course participants—especially those seeking transformation through structured challenges. It humanizes the instructor while reinforcing the brand's commitment to realistic fitness journeys. For coaches and course creators, this section demonstrates how personal narrative can become a key conversion asset—connecting emotionally with audiences while showing tangible success metrics.

# Design Notes:

## Two-Column Layout
* Uses a responsive two-column layout: left for text narrative, right for photo and credibility points
* Flexbox or CSS Grid with `grid-template-columns: 1fr 1fr` and vertical alignment center

## Personal Story Text Block (Left)
* Large heading with mixed-weight styling ("Created by" in black, "Mike Dee" in bold blue)
* Body copy with selective inline highlights in blue: key phrases wrapped in `<span class="highlight">` using `color: #007BFF` or similar
* Line spacing is generous with medium-width line length (about 60–70 characters per line)
* Paragraphs are short for scannability, with strategic line breaks
* Emphasized phrases like “focused timeframe with specific goals” and “sustainable approach” reinforce the program’s clarity

## Image & Highlights Column (Right)
* Image of speaker inside rounded card with soft shadow (`box-shadow: 0 4px 20px rgba(0,0,0,0.1)`)
* Light blue border and curved corners (`border-radius: 12px`)
* Hand-drawn arrow SVG overlay or positioned pseudo-element using absolute positioning (`::after` with background-image or SVG path)

## Achievement Checklist
* Set of stacked cards with icons (checkmarks) and text descriptions
* Blue accent bar on left edge of each item (or light blue border)
* Icon + text aligned horizontally with `flex` and `gap`
* FontAwesome `fa-circle-check` or similar for visual affirmation

## Styling & Implementation Notes
* Uses a soft blue grid background (`background: repeating-linear-gradient(...)`) for subtle structure
* Text highlights via `span.highlight { color: #007BFF; font-weight: 500; }`
* Checklist block built with CSS cards or `<ul>` with styled `<li>` components inside a `div` with padding and rounded corners
* On mobile, stack the layout vertically with the image above or below the text (media query `@media (max-width: 768px)`)

## Optional Enhancements
* Arrow can animate slightly on page load using `transform: translateY(-5px)` with transition
* Consider adding light hover effects to checklist items (`hover: background-color: rgba(0,0,0,0.05)`)
