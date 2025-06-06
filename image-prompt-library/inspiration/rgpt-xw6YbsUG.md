---
image: rgpt-xw6YbsUG.jpg
categories:
  - Content
  - Modules
video:
---
# Purpose:
This course curriculum section is designed to introduce potential students to the content structure of a course in a visually engaging way. For online course creators or membership platform owners, it builds trust and excitement by showcasing the scope and depth of the program. It helps users evaluate the value of the course, visualize their learning journey, and feel confident in enrolling — especially effective for high-ticket or expertise-based topics like AI.

# Design Notes:

## Section Layout
* Two-column layout: left column contains curriculum text, right column features a vibrant visual
* Container has rounded corners and soft shadow — use `border-radius: 1rem` and `box-shadow: 0 8px 20px rgba(0,0,0,0.05)`
* Clean white background with generous padding and spacing inside the content card

## Typography & Structure
* Section title "Course curriculum" in large serif font (or semi-serif), centered
* Subtitle paragraph below uses a lighter weight and smaller font for subtle guidance — text centered, max-width container
* Inside card:
  - Module heading (“Module 1”) in smaller font
  - Title (“Introduction”) in bold, large sans-serif
  - Supporting paragraph in medium gray, left-aligned, readable line-height

## Lesson List
* Numbered list of 5 lesson titles, each prefixed with a purple circle containing a white number — use `border-radius: 50%`, `background-color: #7C3AED` (or similar), white text, consistent size
* List styled for vertical clarity — use `display: flex; align-items: center` for each item row

## Icon Row (Bottom)
* Compact row below the list showing:
  - Number of lessons icon with label (e.g. “2 lessons”)
  - Duration icon (e.g. “2 hours”)
* Each uses a pill-style container with subtle border and small icon left of text — `border-radius: 999px`, `font-size: 0.8rem`, icon likely FontAwesome

## Right Side (Visual)
* Highly detailed digital artwork with rounded corners — consistent styling with left card
* Responsive resizing, maintain aspect ratio and alignment — use `object-fit: cover` or `img` with `max-width: 100%`

## Implementation Guidance
* Use `display: grid; grid-template-columns: 1fr 1fr; gap: 2rem` for desktop, and stack on mobile
* Lesson numbers: use inline `span` or custom class with `display: inline-flex; justify-content: center; align-items: center`
* Pill indicators: `padding: 0.25rem 0.75rem; background: #f3f4f6; border: 1px solid #e5e7eb`

