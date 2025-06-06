---
image: rgpt-qe7ar4VI.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This section promotes a course focused on generative AI, designed to attract creatives and educators interested in emerging technologies. By showcasing visually stunning AI-generated artwork and emphasizing skill-building in tools like ChatGPT and DALL·E, it appeals to creators seeking to stay ahead in the digital landscape. For online course instructors and membership site owners, this section helps position their offerings as cutting-edge, inspiring confidence and excitement among potential learners while signaling innovation and future-readiness.

# Design Notes:

## Hero Section
* Split layout with left-heavy image grid and right-aligned headline text
* Responsive two-column layout using `CSS Grid` or `Flexbox` with `wrap-reverse` for mobile
* Right column features a large headline with a color-accented phrase (“Generative AI”) in purple (`#5f3dc4`)

## Key Visual Elements
* Grid of AI-generated images arranged in a collage-style layout
* Image cards have rounded corners (`border-radius: 1rem`) and no borders
* Star rating indicator centered below body copy
* Circular avatar images of students add social proof below the stars

## Spacing and Positioning
* Tight vertical rhythm: headline > paragraph > rating > avatars all stack with consistent spacing
* Equal spacing between image cards using `gap` in `CSS Grid`
* Center alignment for text section enhances visual hierarchy

## Visual Styling
* Purple gradient or flat tone used to highlight keywords
* Light gray/purple background (`#f9f7fe` or similar) provides contrast to image colors
* Font pairings use modern serif or geometric sans-serif for “magic” appeal

## Implementation Guidance
* Use `CSS Grid` with `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` for responsive image tiling
* Apply `overflow: hidden` and `border-radius` on images for clean card effect
* Avatar group: `Flexbox` row with slight overlap using `margin-left: -10px` on subsequent avatars
* Headline styling: wrap keywords in a `<span>` with a special class for color emphasis
