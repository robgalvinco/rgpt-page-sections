---
image: rgpt-w1Z9AJO7.jpg
categories:
  - Content
video:
---
# Purpose:
This comparison section is designed to illustrate the cost and complexity of hiring a professional copywriter, positioning an alternative (likely DIY tools or platform solution) as more efficient and affordable. For online course creators and membership site owners, this helps validate their concerns about outsourcing, reduces decision fatigue, and builds a case for choosing the platform's offering. The format educates users while guiding them gently toward the preferred solution.

# Design Notes:

## Section Structure
* Full-width vertical layout with soft pink background to differentiate from surrounding sections — use `background-color: #fdecee` or similar
* Central heading at the top in serif or elegant sans-serif font for a polished, authoritative tone
* Two stacked content blocks labeled "Scenario 1" and "Scenario 2", separated by a centered "or..." divider — align text center and use italic font or smaller size for emphasis

## Scenario Cards
* Each scenario sits inside a white box with light shadows and rounded corners — use `box-shadow`, `border-radius`, and `padding`
* Yellow pill-shaped label ("SCENARIO 1", "SCENARIO 2") at the top of each card — implemented with `inline-block`, `border-radius: 999px`, and bold black text
* Scenario 1: Heading in bold serif/sans-serif font followed by a short paragraph describing high-end copywriter costs
* Scenario 2: Slightly longer explanation with a bulleted checklist — uses pink checkmark icons (possibly FontAwesome or inline SVGs) for clarity and visual rhythm

## Checklist Items (Scenario 2)
* Each point begins with a pink check icon followed by explanatory text
* Text is left-aligned for readability, using consistent line height and spacing between items
* Font weight is regular, with potential bolding on key phrases

## Spacing & Alignment
* Even vertical padding around section and consistent spacing between scenario cards
* Max-width container centered on the page using `margin: 0 auto; max-width: 800px;`
* Use Flexbox or Grid for vertical stacking and centering

## Implementation Guidance
* Pills: `background-color: #FFD700`, `padding: 0.25rem 0.75rem`, `font-weight: bold`, `border-radius: 999px`
* Checkmark icons: FontAwesome or SVG with `color: #e95fa3`
* Ensure mobile responsiveness by stacking with adequate padding and adjusting font sizes
* Scenario boxes should have consistent vertical rhythm — apply uniform `padding`, `margin-bottom`, and `line-height`
