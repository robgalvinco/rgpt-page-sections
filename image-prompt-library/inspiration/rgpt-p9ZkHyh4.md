---
image: rgpt-p9ZkHyh4.jpg
categories:
  - Features
  - Icon Cards
video:
---
# Purpose:
This section highlights the value proposition of an educational program by showcasing what makes it stand out. It is designed to build trust and differentiate the offer by emphasizing benefits like career advancement, hands-on experience, and community. For course creators and membership owners, this layout is ideal for boosting conversions by validating the learning experience with clearly structured proof points and reinforcing long-term value.

# Design Notes:

## Section Title
* Center-aligned heading in large serif font for credibility and elegance
* Subheading uses smaller sans-serif text with medium opacity to soften and contextualize the message

## Feature Grid
* Two-row grid layout with three columns per row (`CSS Grid` or `Flexbox with `wrap`)
* Each feature is placed in a dark rounded-rectangle card with subtle border (`border-radius: 12px; border: 1px solid rgba(255,255,255,0.1)`)
* Consistent spacing between cards with even padding and alignment

## Icon and Text Styling
* Yellow/gold accent icons for each feature (likely custom SVG or icon font set)
* Icons are top-left aligned inside each card
* Titles in bold white sans-serif, short and benefit-focused
* Descriptions in smaller, muted gray text for readability without overwhelming emphasis

## Visual Styling
* Dark blurred video background or gradient overlay to add depth while keeping the foreground readable
* Cards use translucent background (`background-color: rgba(0,0,0,0.4)`) for contrast
* Hover state can use `box-shadow` or slight `transform: scale(1.02)` for subtle interactivity

## Implementation Guidance
* Use `CSS Grid` with `gap: 1.5rem` and `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` for responsive layout
* Icons can be loaded from FontAwesome or as inline SVG with `fill: #ffc107` or similar accent color
* Apply `backdrop-filter: blur(10px)` for frosted glass effect if supported
* Add `transition: all 0.3s ease` for smooth card animations
