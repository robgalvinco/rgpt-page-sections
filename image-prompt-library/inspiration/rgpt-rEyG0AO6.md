---
image: rgpt-rEyG0AO6.jpg
categories:
  - Instructors
video:
---
# Purpose:
This section introduces mentors to prospective students, establishing authority and trust by showcasing experienced professionals involved in the program. For coaches, course creators, or membership site owners, featuring real mentors with notable design credentials strengthens credibility and communicates value. It helps prospective learners feel more confident about the support they’ll receive, boosting conversions and enrollment.

# Design Notes:

## Layout Structure
* Horizontal grid layout displaying mentor cards in a single row
* Each card is vertically stacked: image on top, name and title below
* Uniform card width and consistent spacing between each profile block

## Key Visual Elements
* Square portrait images with rounded corners for modern, friendly aesthetic
* Bold white names and lighter gray subtitles create clear visual hierarchy
* Profile images have subtle hover overlay effect (likely darkening + slight zoom)

## Spacing and Positioning
* Even padding around each card ensures clean separation
* Image-to-text spacing uses vertical margin or padding (~0.5–1em)
* Overall horizontal alignment maintained with Flexbox or CSS Grid

## Interactive Elements
* Possible hover effect on images or entire cards: `transform: scale(1.03)` with `transition`
* No active buttons present, but cards could link to bio modals or mentor pages

## Visual Styling
* Dark background (#000 or near-black) with white and muted gray typography for contrast
* Rounded image corners (`border-radius: 1rem` or `lg`)
* Text alignment is left-aligned and vertically stacked

## Implementation Guidance
* Use Flexbox or CSS Grid for responsive horizontal layout (`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`)
* Maintain equal card width with `max-width` and `min-width` to avoid overflow
* Apply `object-fit: cover` to image elements to ensure uniform framing
* Use `:hover` pseudo-class with `transition: transform 0.3s ease-in-out` for subtle interactivity
