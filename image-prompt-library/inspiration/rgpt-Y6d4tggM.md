---
image: rgpt-Y6d4tggM.jpg
categories:
  - Call To Action
  - Content
video:
---
# Purpose:
This section emphasizes mobile accessibility and convenience, reassuring users that they can engage with the course content anytime, anywhere. For online course creators or membership site owners, it removes friction for busy learners, increases appeal to mobile-first audiences, and highlights flexibility as a selling point. The visual of a course displayed on a smartphone reinforces the message and boosts trust through interface transparency.

# Design Notes:

## Layout Structure
* Two-column layout: left side with smartphone mockup, right side with headline and CTA
* Background uses a soft, pastel gradient from purple to blue — implement with `linear-gradient` or `background-image: radial-gradient(...)` and subtle blur

## Left Side (Mockup)
* iPhone mockup featuring an actual course UI screen — displayed as a realistic device mockup with screen content embedded
* Rounded corners and shadow give depth — use `border-radius: 2rem` and `box-shadow`
* Course UI includes recognizable elements like breadcrumb nav, title, duration tags, and thumbnail image

## Right Side (Text & CTA)
* Heading: large, bold black text with line breaks for balance — "Learn Anytime, Anywhere..." styled with strong contrast
* Supporting paragraph uses lighter gray, smaller font — provides use-case context (commuting, breaks, flexibility)
* Button: pill-style black CTA ("Buy Membership") with white text — `border-radius: 999px`, hover effects like scale or light shadow

## Spacing & Responsiveness
* Section uses full width with centered content and generous padding — content area constrained via `max-width`
* Columns stack vertically on mobile, with phone above text
* Text is aligned left for readability; image is center-aligned in its container

## Implementation Guidance
* Use `display: flex; justify-content: space-between; align-items: center;` for desktop
* Gradient background: `background: linear-gradient(to bottom right, #dfe8ff, #fcefff)`
* Device image can be SVG-based or image with transparent background and proper z-index layering
* Ensure mobile-first optimization using media queries: `@media (max-width: 768px) { flex-direction: column; }`
