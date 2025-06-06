---
image: rgpt-QT21grz8.jpg
categories:
  - Pricing
video:
---
# Purpose:
This membership pricing section promotes a recurring subscription model for online course creators and coaching platforms, designed to increase long-term customer value through ongoing access to premium resources. It emphasizes convenience and exclusivity to boost conversion rates among committed learners. For instructors or membership site owners, this layout presents a compelling offer that highlights the breadth of access, encourages engagement through community perks, and fosters retention with fresh content delivery.

# Design Notes:

## Header Section
* Bold headline with large font size and dual-line structure for emphasis
* Subtitle centered beneath headline with reduced opacity (`opacity: 0.6`) for subtle hierarchy
* Section label "Membership" in light purple (`#A362E6`), small caps, using `font-weight: 500`

## Membership Card
* Centered box with white background and soft gradient border (`border: 1px solid transparent; background: white; border-radius: 14px`)
* Outer border uses a subtle purple-pink gradient via `border-image: linear-gradient(to right, #A362E6, #DD6BD7) 1`
* Shadowed card (`box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05)`) gives visual elevation

## Content Structure
* Header "Membership" in bold, left-aligned
* Price ($49/month) aligned right using `display: flex; justify-content: space-between; align-items: center`
* Divider line below header using `border-top: 1px solid #E5E7EB`

## Feature List
* Bulleted list of 6 benefits, each with a purple checkmark icon (`✔️`) using `list-style: none` and `::before` or inline SVG
* Icon color matches theme purple (`#A362E6`)
* Each item has consistent spacing (`margin-bottom: 0.75rem`), text slightly indented

## Call-to-Action Button
* Rounded black button (`background: #000; color: #fff; border-radius: 9999px`)
* Button label: “Buy Membership” with hover state that may use subtle scaling or background color transition (`transform: scale(1.03)` on hover)

## Background & Effects
* Abstract blurred triangle shapes in blue and purple positioned via absolute/fixed elements in the background
* CSS blur filters (`filter: blur(40px)`) applied to soft, glowing gradients for atmospheric depth
* Use of `z-index: -1` ensures background stays behind content

## Responsive Guidance
* Card and headline centered using `flex-direction: column; align-items: center`
* Padding around card scales on smaller screens (`padding: 2rem 1.5rem`)
* Consider stacking price below headline on narrow viewports with `flex-wrap: wrap` behavior
