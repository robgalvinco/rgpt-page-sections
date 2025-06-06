---
image: rgpt-XL3aL5fF.jpg
categories:
  - Call To Action
  - Hero Banner
video:
---
# Purpose:
This hero-style promotional section is designed to sell a low-ticket offer in a visually engaging way, perfect for course creators or membership site owners launching a specific class or mini-program. It combines urgency, bold messaging, and clear value for the price point. The strong imagery, contrasted text, and layered guarantees help boost trust and conversions — especially for cold traffic or first-time buyers interested in trying out the course content.

# Design Notes:

## Layout Structure
* Two-column layout: left side with text content, right side with course-related image
* Fullscreen-width with max-width container for content
* Content uses `display: flex; align-items: center; justify-content: space-between` and likely stacks vertically on mobile

## Left Column (Content)
* Top logo and brand name ("MASTERY INSIGHTS") with FontAwesome crown icon in white — small caps styling
* Course title ("Acrylic Painting Made Easy 2.0") in hot pink color
* Large bold headline with stacked line breaks and high contrast white font
* Subheadline ("Only $85") in larger text, bold for pricing emphasis
* Supporting value line: pink "ENROLL NOW" text followed by bonus resources in white — partial text emphasis via `<strong>` or span
* CTA Button: Bright pink with white text, large and full-width — use `border-radius`, `padding`, and hover/active states (e.g. `background: #e02b75`)
* Guarantee text at the bottom in italic white, small font — meant to increase buyer confidence without cluttering the main pitch

## Right Column (Visual)
* Feature image: Rounded corners, highly saturated painting, likely meant to represent course output
* Positioned over dark purple/red blurred background with subtle gradient or vignette effect — implement using `linear-gradient` overlay or CSS blend mode
* Image size is balanced to complement text block without overwhelming it

## Visual Styling
* Dark gradient overlay on left side with high opacity for text legibility — use `::before` pseudo-element or gradient `div` layering
* Colors: hot pink accent (#ff2f76), deep purple/red background (#1b0b2e or similar), bright white text
* Font: clean sans-serif with bold weights for heading, medium for subheading, and light for guarantee

## Implementation Guidance
* Background blending via `background-blend-mode: multiply` or layered `linear-gradient` with image
* Button hover: `transform: scale(1.05)`, `box-shadow: 0 4px 10px rgba(255, 47, 118, 0.4)`
* Responsive: Stack content vertically on smaller screens with image appearing below text
* Rounded image: `border-radius: 1rem` or `overflow: hidden` on container
