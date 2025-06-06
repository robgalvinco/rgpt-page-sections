---
image: rgpt-oqbjTy6V.jpg
categories:
  - Call To Action
video:
---
# Purpose:
This section is a high-impact promotional banner targeting online business owners, coaches, and course creators looking to elevate their brand. It encourages urgency with a limited-time offer and leverages value-based language ("Blueprint", "50% off") to drive conversions. This design pattern is effective in membership and course sites to trigger impulse buys or previews, especially during campaigns or launches.

# Design Notes:

## Layout Structure
* Single centered container on a dark background
* Large heading text stacked above two call-to-action buttons
* Layout uses `Flexbox` or `Grid` for column alignment with buttons in a row below text

## Typography
* Headline uses bold sans-serif font with clear hierarchy:
  - "Limited time offer : Save 50%" in high-contrast white
  - "on the Brand Growth Blueprint" in a gradient tone for visual depth
* Font size significantly larger than surrounding content, creating a strong focal point

## Visual Styling
* Gradient text effect on lower line: likely `background: linear-gradient()` with `-webkit-background-clip: text` and `color: transparent`
* Rounded dark card (`border-radius: 1.5rem`, `background-color: #1A1A1A`) to stand out against black page background
* Soft shadow to subtly elevate the card

## Call-to-Action Buttons
* Two contrasting styles:
  - Primary: Bright orange button ("Access for $99") with white text, rounded pill shape
  - Secondary: Dark ghost button with white border and text ("Get a Free Preview")
* Button pair encourages both urgency and low-risk exploration (FOMO + curiosity)
* Likely includes hover and active states: scale or brightness transitions

## Implementation Guidance
* Use `Flexbox` for vertical centering and button alignment
* Apply gradient text effect with `background-clip: text` and `text-fill-color: transparent`
* Buttons styled with consistent padding, `border-radius: 9999px`, and `transition: all 0.3s ease`
* Card shadow can use `box-shadow: 0 10px 20px rgba(0,0,0,0.3)`

