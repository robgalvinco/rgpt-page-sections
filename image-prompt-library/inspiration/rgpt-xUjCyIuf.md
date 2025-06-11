---
image: rgpt-xUjCyIuf.jpg
categories:
  - Content
  - Icon cards
  - Features
video:
---
# Purpose:
This instructional process section helps demystify the course signup journey for new or hesitant users, particularly valuable for online course creators and membership platform owners. By breaking the process into three simple steps with supportive visuals and minimal text, it reduces friction and boosts confidence in taking action. The friendly, visual approach is ideal for onboarding, especially for users unfamiliar with how course platforms work.

# Design Notes:

## Section Layout
* Three-column horizontal layout with equal-width steps — use `CSS Grid` or `Flexbox` with `justify-content: space-between`
* Step layout includes:
  - Icon inside a soft square container
  - Step number and bold title
  - Supporting explanatory paragraph

## Typography & Heading
* Section heading uses large bold text with emphasized word ("Learn") in italic and orange — use `<span style="color: #F97316; font-style: italic;">`
* Subheading centered below heading in lighter gray text, small font-size for subtle guidance
* Step titles in `font-weight: 600–700`, followed by lighter body copy in muted gray

## Icons & Arrows
* Each step has a unique orange outline icon inside a rounded square — consistent padding and light stroke weight
* Icons spaced above step titles — centered alignment
* Between steps, dotted curved arrows visually indicate progression — likely inline SVG or absolute-positioned decorative element

## Colors & Visual Styling
* Clean white background with black and orange accents
* Icons use orange stroke color only — maintains visual consistency without overwhelming
* Dashed arrows use light gray or soft orange for a non-distracting flow
* Card or icon containers use very light background with rounded corners — apply `border-radius: 0.5rem` and `padding: 1rem`

## Implementation Guidance
* Use `grid-template-columns: repeat(3, 1fr)` with `gap` for layout
* Arrow lines: inline SVG paths with `stroke-dasharray` for dotted effect and `transform: rotate()` as needed
* On mobile: stack steps vertically with arrows hidden or rearranged (use media queries)
* Ensure accessibility by keeping text legible, providing `alt` tags for icons if image-based
