---
image: rgpt-ngauXnN3.jpg
categories:
  - Content
  - Icon Cards
  - Features
video:
---
# Purpose:
This section presents a course selection grid tailored to users' goals, helping learners quickly find the most relevant educational path. For course creators and education platform owners, it's an effective way to guide enrollment by clearly segmenting offerings based on skill level or objective. It encourages user interaction and boosts clarity by connecting each course type to a distinct outcome.

# Design Notes:

## Section Header
* Centered headline: “Choose the right course for your goals”
  - Uses bold black for “Choose the right” and lighter gray for “course for your goals” to create typographic hierarchy
* Green pill-shaped label “Courses” above the heading for categorical context

## Course Card Grid
* 2x2 grid layout with four course cards:
  - Beginner English
  - Business English
  - Conversational English
  - IELTS / TOEFL Prep
* Even spacing and equal width/height for each card using `CSS Grid` with `gap`

## Card Design
* Each card includes:
  - Icon (color-coded line-style SVG or FontAwesome)
  - Course title in bold sans-serif
  - One-line description in light gray
  - CTA button in light gray pill style with black text (e.g. “Learn the basics”)
* Icons:
  - Blue open book (Beginner)
  - Suit and tie (Business)
  - Speech bubble (Conversational)
  - Graduation cap (IELTS/TOEFL)
* Buttons use `border-radius: 999px` and consistent padding for cohesion

## Visual Styling & Implementation
* Background is white with light shadow or border around each card (`box-shadow` or `border: 1px solid #EEE`)
* Font sizes:
  - Title: `font-size: 1.25rem`, weight `600–700`
  - Description: `font-size: 0.95rem`, weight `400`, color `#6B6B6B`
* Responsive:
  - Stack into single column or 2-column layout on smaller screens
  - CTA buttons may stack below text with full width if space is constrained
