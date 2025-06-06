---
image: rgpt-JS8ohHoj.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This hero section is designed to motivate visitors to invest in their personal growth by enrolling in expert-led online courses. It targets learners—especially aspiring entrepreneurs, creators, and professionals—by using emotional appeal and credibility indicators (such as student count and avatars). The goal is to boost conversions through bold typography, direct CTAs, and relatable visuals, making it highly effective for course creators, coaches, or membership owners who want to drive immediate action.

# Design Notes:

## Layout Structure
* Center-aligned vertical layout with headline, subheadline, button, avatars, and image
* Generous vertical spacing between elements maintains clarity and rhythm
* Responsive stacking ensures clean mobile experience

## Heading & Subheading
* Headline in serif font with split-color emphasis:
  - “You Can Make is in Yourself” in golden-yellow (`#E5B85A`) to highlight self-investment
  - Contrast maintained with the rest of the heading in white
* Subheadline in smaller, light gray sans-serif font for contrast and hierarchy

## Call to Action
* Rounded-pill button in golden-yellow with dark text
* Simple text: “Start Learning Today”
* Likely uses `hover: brightness()` or slight scaling for interactivity

## Social Proof (Avatars + Count)
* Row of 4 circular avatar images with slight overlap (`border-radius: 50%`, `margin-left: -8px`)
* Below avatars: text “Joins 28,500+ like students” in small, muted font for subtle reinforcement

## Image Area
* Full-width, high-resolution image of a student working at a desk
* Rounded corners and subtle drop shadow suggest card-like treatment
* Positioned with ample margin below the CTA stack to act as contextual reinforcement

## Visual Styling & Implementation
* Background color: dark slate/black for elegance and contrast
* Button styling: `border-radius: 999px`, `padding: 12px 24px`
* Use `Flexbox` or `grid` for centered vertical alignment
* Avatar images likely managed with absolute or relative positioning for overlap
* Ensure image is `max-width: 100%` and has `object-fit: cover` to maintain aspect ratio
