---
image: rgpt-wiXSYdR6.jpg
categories:
  - Icon Cards
  - Features
video:
---
# Purpose:
This feature highlights section is crafted to answer the "why us?" question for prospective students or members considering joining an educational program or membership platform. For course creators and coaches, it’s a conversion-boosting module that builds trust, communicates career value, and addresses common hesitations. The clear, benefits-driven layout empowers users to visualize personal success and aligns with the aspirational messaging common in education-based funnels.

# Design Notes:

## Section Layout
* Centered, narrow-width content with a top label ("Why Educore?") styled as a pill button — use `border-radius: 999px`, `padding`, and a brand color background
* Main heading in bold black text, centered for impact — large font size and `margin-bottom` for spacing
* Content organized into a **two-row by three-column grid**, ideal for `CSS Grid` with `grid-template-columns: repeat(3, 1fr)` and even row/column spacing

## Feature Cards
* Each card consists of:
  - A circular icon container (light purple background, FontAwesome or custom icons inside)
  - Bold heading text for the benefit (e.g., “High Paying”, “Work From Home”)
  - Supporting paragraph in smaller, muted gray font for explanation
* Icons vary per benefit but share the same styling — consistent size, padding, and alignment
* Use `display: flex; flex-direction: column; align-items: start` within each card for clean vertical alignment

## Typography & Visual Hierarchy
* Headings: bold, mid-sized, with tight top spacing to the icon and looser spacing below
* Paragraphs: use `font-size: 0.9rem` or `14–15px`, `color: #666` for softer tone
* All cards maintain equal width and spacing — implement consistent `gap` or `padding`

## Styling & Implementation
* Background: light gray (`#f5f5f5`) for neutral contrast
* Icon circle: `background-color: #ede9fe`, `border-radius: 50%`, `padding: 0.75rem`, `display: inline-flex`, and centralized icon
* Responsive design: shift to single column or stacked layout on mobile using `media queries`
* Cards can be reused across multiple sections via components (e.g., React or Vue slot components)

## Implementation Tips
* Use `grid-gap` or `gap` in `CSS Grid` for clean spacing
* Maintain fixed height or use `min-height` to align card blocks on different screen sizes
* Button-like pill at the top can use `text-transform: uppercase` and small shadow for emphasis

