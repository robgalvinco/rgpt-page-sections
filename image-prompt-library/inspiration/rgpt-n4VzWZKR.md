---
image: rgpt-n4VzWZKR.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing comparison section is designed to convert visitors into paying students by presenting two clear purchase options—self-paced learning and coaching-enhanced learning. It helps coaches, course creators, and membership site owners communicate value tiers and drive urgency to enroll. The layout emphasizes transparency, benefits, and ease of choice, supporting both budget-conscious and premium-oriented buyers.

# Design Notes:

## Layout Structure
* Two-column card layout with equal width:
  - Left: base course
  - Right: course + coaching (premium)
* Cards are center-aligned with rounded corners, drop shadows, and soft cream backgrounds
* Layout uses CSS Grid or Flexbox with `gap` and `justify-content: center`

## Headings & Subtext
* Section heading: “Course Pricing” in bold, centered black sans-serif
* Subheading in smaller size and gray text emphasizes urgency and inclusion of updates

## Pricing Cards
* Each card includes:
  - Plan name in bold
  - Short plan description in smaller text
  - Price in large bold type (`$99` and `$399`)
  - “one-time fee” in light gray next to price

## Feature List
* Bulleted features with orange icons (video, content, access, updates)
* Coaching plan includes an additional item: “Two 40-min 1:1 sessions with instructor” with person icon
* Icons use consistent size and left padding (`display: flex; align-items: center; gap`)

## Call-to-Action Buttons
* Both plans use large, rounded buttons labeled “Enroll today”
  - Left button: bright orange background with white text
  - Right button: solid black background with white text
* Buttons styled with `border-radius: 999px`, subtle shadow, and `hover: scale()` or `brightness()`

## Refund Disclaimer
* Footer text below cards with refund policy in small, centered font
* Covers both plans and sets expectations clearly

## Visual Styling & Implementation
* Cream-tinted backgrounds on cards created via `background-color: #FFF8F0` (or similar)
* Icons are likely inline SVG or emoji-style assets
* Text is left-aligned within cards, with ample `padding: 24px`
* Responsive: stack cards vertically on smaller screens with consistent spacing
