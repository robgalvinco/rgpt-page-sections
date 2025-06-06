---
image: rgpt-yHFIKXOA.jpg
categories:
  - Content
  - Features
  - Icon Cards
video:
---
# Purpose:
This benefits-focused section is designed to build trust and demonstrate value by listing key reasons to enroll in a course or membership. The sticky left column draws attention to the core message ("Master IT Skills with Confidence") while the scrollable right column keeps users engaged as they explore each benefit. For online course creators and membership site owners, this layout increases clarity and retention while elegantly handling long content without overwhelming the user.

# Design Notes:

## Layout Structure
* Two-column layout:
  - **Left column** (sticky): Contains headline, supporting paragraph, and CTA button
  - **Right column** (scrollable): Series of benefit cards with icons and short descriptions
* Implement using `position: sticky; top: [value];` on the left column and overflow scroll on the right container (or vertical page scroll with internal sticky element)

## Left Column (Sticky Area)
* Top label in accent color (“Benefits”) — small, light, letter-spaced text
* Bold heading (“Master IT Skills with Confidence”) in large sans-serif
* Supporting paragraph in mid-gray for readability
* CTA button (“Explore courses”) styled as black pill — `border-radius: 999px`, white text, hover scale or glow

## Right Column (Scrollable Cards)
* Vertical stack of feature cards — use `display: flex; flex-direction: column; gap: 1.25rem;`
* Each card includes:
  - Gradient-colored icon inside a soft square (`border-radius: 0.75rem`, `padding`, light drop shadow)
  - Bold title and smaller supporting paragraph — all left-aligned
* Cards have soft drop shadows and white backgrounds — `box-shadow: 0 2px 8px rgba(0,0,0,0.04)`, `background: #fff`

## Visual Styling
* Overall section uses a soft, neutral background with subtle color gradient behind the right column
* Icon backgrounds use light pastel gradients — apply via `linear-gradient()` with purple/pink/blue tones
* Typography maintains hierarchy via `font-size`, `font-weight`, and `line-height` spacing

## Implementation Guidance
* Use `CSS Grid` or `Flexbox` with `grid-template-columns: 1fr 2fr` or `flex: 1 0 30% / 70%` split
* Sticky left column: `position: sticky; top: 3rem; height: fit-content;`
* For mobile: Stack vertically with full-width sticky heading at the top or collapse benefits into an accordion
* Animate right column scroll appearance (optional) using intersection observer or scroll-triggered classes
