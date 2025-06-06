---
image: rgpt-MkAkfQW5.jpg
categories:
  - Features
  - Content
video:
---
# Purpose:
This section introduces the platform's mission and capabilities in delivering simplified IT education for a broad audience. It appeals to learners across experience levels by emphasizing clarity, expert-led instruction, and credential opportunities. For course creators and educational business owners, this layout builds credibility while encouraging exploration through key metrics and strong calls to action.

# Design Notes:

## Section Layout
* Two-column layout:
  - Left: headline, image
  - Right: supporting text, stats, CTA buttons
* Uses Flexbox or CSS Grid for balanced alignment and responsive stacking on smaller screens

## Heading & Subheading
* “IT Skills Simplified for Every Learner” in bold black sans-serif font
* Light purple “About us” tag above the heading for context
* Subheading paragraph uses a light gray sans-serif font for explanation and clarity

## Image Block (Left)
* Rounded corner image of learner with headphones and tablet
* Sized to align vertically with the right column’s stat grid
* Responsive handling with `object-fit: cover` and padding below on mobile view

## Statistic Grid (Right)
* Four stat cards arranged in 2x2 grid:
  - Each card has a white background with soft drop shadow and large bold numeral
  - Secondary label below numeral in smaller gray text
* Cards use `border-radius` and `padding`, implemented via `CSS Grid` or Flexbox with gap
* Cards are likely `<div>`s styled as tiles for semantic flexibility

## Call-to-Action Buttons
* Two horizontal buttons:
  - “Explore courses”: solid black background, white text
  - “Contact us”: white background with black border and text
* Both use pill-shaped styling (`border-radius: 999px`) with equal padding
* Positioned beneath the stat grid with `gap` or `margin-top`

## Visual Styling & Implementation
* Background includes soft gradient on right side (pink/blue) using `radial-gradient` or SVG blob
* Typography hierarchy clearly defined via size and weight
* Ensure hover states:
  - Solid button: darkens or lifts on hover
  - Outline button: fills or changes border thickness
* Section likely wrapped in `max-width` container with center alignment
