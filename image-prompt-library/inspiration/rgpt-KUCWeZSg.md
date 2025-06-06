---
image: rgpt-KUCWeZSg.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This hero section is designed to quickly capture attention and encourage users to start a 30-day fitness challenge. It combines visual storytelling (video), motivational testimonials, and a clear CTA to convert visitors into participants. Ideal for fitness coaches or course creators, it builds social proof and immediacy, motivating action through community validation and multimedia engagement.

# Design Notes:

## Layout Structure
* Vertical stack layout with:
  - Testimonial banner at top
  - Headline and CTA in middle
  - Embedded video at the bottom
* Center-aligned elements with generous vertical spacing

## Top Testimonial Bar
* Row of three testimonial quotes at the top with 5-star ratings (FontAwesome or inline SVGs)
* Text is centered and uses italics or quotation marks for clarity
* Positioned against a dark navy grid background (`background-image: grid lines` or SVG pattern)

## Hero Text & CTA
* Headline: “30 Days to a Stron|” — uses animated cursor to simulate typing (CSS `::after` animation or JS typing effect)
* “Stron|” highlighted in bright blue for dynamic emphasis (`#0094FF`)
* Subheading: One-line sentence in light gray text, supporting headline
* CTA button:
  - Bright blue with white text (“Start Your 30 Day Challenge!”)
  - Rounded corners and hover effect (e.g. `box-shadow` or `transform: scale(1.05)`)

## Social Proof (Below Button)
* Row of overlapping circular avatars (`border-radius: 50%`, `margin-left: -8px`)
* “Trusted by 100+ students” text with yellow stars
* Likely implemented with Flexbox and `align-items: center`

## Embedded Video (Bottom)
* Large video thumbnail with play button overlaid (light blue circle)
* Rounded corners (`border-radius`) and subtle border (`border: 2px solid #0094FF`)
* Play icon centered via `position: absolute` with button hover scale effect
* Speaker icon in upper-right corner (mute/unmute toggle)

## Background & Styling
* Dark navy background with grid pattern adds visual structure (`background-image: repeating grid`)
* Light blue doodle/arrow icon at upper right of video frame adds playfulness (inline SVG or pseudo-element)
* Use of white and blue text maintains readability and brand cohesion

## Implementation Guidance
* Use Flexbox for vertical stacking and centered alignment
* Grid background via `background-image: linear-gradient(...)` or SVG asset
* Typing cursor effect can be done with CSS animation or JavaScript typing libraries
* Ensure video is responsive (`max-width: 100%`) and optimized for performance
