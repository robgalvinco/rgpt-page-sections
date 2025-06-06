---
image: rgpt-VSDMxYDM.jpg
categories:
  - Features
  - Content
  - Icon cards
video:
---
# Purpose:
This section showcases completed student challenges, offering both inspiration and social proof for new or prospective members. It's ideal for online course creators or coaching platforms promoting habit-based programs, especially in health, fitness, or self-improvement niches. By displaying real challenge examples, it creates momentum, encourages participation, and reinforces credibility. The interactive layout and action-oriented copy invite users to start their own journey, supporting higher engagement and conversions.

# Design Notes:

## Heading Area
* Large, bold, multi-line headline with mixed font weights and color emphasis — "30 Day Challenges" in bright blue, "Our Students Have Completed" in black
* Supporting paragraph text is centered and includes emphasized phrases using bold styling — best implemented with `<strong>` tags or CSS `font-weight`
* Hand-drawn arrow graphic pointing toward the headline — best implemented with SVG or inline image for flexibility

## Call to Action
* Prominent blue button labeled “Start Your 30 Day Challenge!” centered below the paragraph
* Rounded corners and high contrast background — use `border-radius` and hover state with slight shadow or brightness shift

## Challenge Grid
* Responsive 3-column grid layout with cards, likely using `CSS Grid` or `Flexbox` with `flex-wrap`
* Each card:
  - White background with light shadow or soft border
  - Rounded corners for smooth, modern look
  - Bottom border highlighted in bright blue for emphasis
  - Emoji icon followed by challenge title with part of the text in bold or colored span — use `display: flex` or `inline-flex` for alignment
* Text styling mixes regular and bold weights to highlight activity focus (“Run 5km”, “Yoga”)

## Spacing & Layout
* Even vertical and horizontal spacing between cards — use consistent `gap` or `margin` values in the grid
* Top and bottom padding ensures breathing room around the section
* Cards should maintain equal height for clean alignment, with consistent emoji and text alignment

## Implementation Guidance
* Grid: `display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem`
* Arrow: use inline SVG or a background image positioned via `position: absolute` or relative placement above text
* Cards: `box-shadow` for elevation, `border-radius`, and blue `border-bottom` using `border-bottom: 3px solid #1DA1F2` (or matching brand color)
* Ensure responsive design with stacking layout on mobile (e.g. `grid-template-columns: 1fr` below certain breakpoints)
