---
image: rgpt-YNtFxwul.jpg
categories:
  - Testimonials
video:
---
# Purpose:
This marquee-style testimonial banner is designed to create dynamic social proof through continuous motion. For course creators and membership site owners, it reinforces trust, builds excitement, and highlights student satisfaction without taking up much vertical space. The constant flow of positive quotes subtly encourages conversions by showcasing community validation in a lightweight, engaging format.

# Design Notes:

## Layout Structure
* Full-width banner section with center-aligned marquee text animation
* Rectangular container with rounded corners — use `border-radius: 1rem`
* Background color: solid golden yellow (`#FFC400` or similar) for high energy and contrast
* Padding inside container creates breathing room — use `padding: 1.5rem` or equivalent
* Container sits on a light neutral section background for contrast

## Typography
* Sans-serif font with medium weight
* Quote snippets are interspersed with student names using em dash or quotation syntax
* Spacing between quotes is consistent — achieved by separating each with `" "` or `•`
* Font color: dark navy or black for strong contrast on yellow background

## Marquee Behavior
* Horizontal scrolling (left-to-right or right-to-left) — use `CSS animation` with `@keyframes` or `<marquee>` alternative (JS or CSS-only solution)
* Multiple rows stacked (optional): Each row scrolls at a slightly different speed for visual depth
* Infinite looping — animation resets seamlessly after content cycles through

## Implementation Guidance
* Use a container `overflow: hidden` and animate a child div with `white-space: nowrap; animation: marquee 30s linear infinite;`
* For multiple rows:
  ```css
  .marquee-row:nth-child(even) { animation-duration: 40s; }
  .marquee-row:nth-child(odd) { animation-direction: reverse; }
