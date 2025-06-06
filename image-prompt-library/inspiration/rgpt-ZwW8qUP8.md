---
image: rgpt-ZwW8qUP8.jpg
categories:
  - Call To Action
video:
---
# Purpose:
This community-building section aims to establish global reach and credibility by highlighting member diversity and inclusivity. For online course creators and platform owners, it fosters social proof and belonging — two powerful motivators that increase signups and engagement. The dual-row, animated image carousel reinforces an active, growing network and makes the user feel part of something vibrant and expansive.

# Design Notes:

## Layout Structure
* Vertical layout with three major parts:
  1. Small category tag ("Community") in a purple pill-style label
  2. Headline and subheading text, center-aligned
  3. Call-to-action button followed by dual animated image rows

## Typography
* Heading: bold, black sans-serif with mixed line length — visually anchored to "150+ countries"
* Subheading: smaller paragraph text in mid-gray with `max-width: 600px` and `text-align: center`
* Button: bright purple with white text, rounded (`border-radius: 999px`), and inline arrow icon (→)

## Image Marquee Carousel
* Two horizontal rows of avatar images:
  - Each image is a square with rounded corners (`border-radius: 0.5rem`)
  - Top row scrolls left to right, bottom row scrolls right to left — infinite looping
* Equal image sizing and spacing — `gap: 0; white-space: nowrap;`
* Fade-in and fade-out edges on both sides using gradient overlays (`::before`, `::after`) or `mask-image`

## Motion Behavior
* Continuous marquee animation — best done via `@keyframes`:
```css
@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
}
