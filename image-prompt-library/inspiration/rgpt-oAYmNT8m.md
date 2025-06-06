---
image: rgpt-oAYmNT8m.jpg
categories:
  - Call To Action
video:
---
# Purpose:
This quick-access utility section is designed to improve user experience and reduce friction by helping visitors immediately find courses or answers to common questions. For course creators and platform owners, it’s a strategic element to support conversion and retention by guiding users to high-intent actions without overwhelming them with too many options.

# Design Notes:

## Layout Structure
* Two horizontally aligned cards in a responsive flexbox or grid layout
* Each card serves as a gateway to a key user flow:
  - Course discovery
  - FAQ resolution
* Cards are centered with consistent spacing and padding

## Card Components
* Light lavender background cards with large border-radius (`border-radius: 24px`)
* Each card includes:
  - Black and white line-style illustration (likely SVG or Lottie-compatible)
  - Short heading in bold black text
  - CTA button in vibrant blue (“Explore Courses” / “Explore FAQs”)

## Typography
* Headings are short and conversational:
  - Sentence case for natural tone
  - Emphasis on readability with high contrast (black on soft background)
* Button text is white, bold, and all-caps on a blue button (`background-color: #4B00FF` or similar)

## CTA Buttons
* Rounded rectangle buttons (`border-radius: 12px`) with centered alignment
* Hover effect likely includes:
  - Slight shadow or brightness shift
  - Cursor pointer and scale effect via `transform: scale(1.03)`

## Background & Visual Integration
* Section uses a two-tone split:
  - Top portion: light lavender or white
  - Bottom base: solid bright purple
* Cards slightly overlap the purple base using negative margin or `position: relative` with `z-index`
* Creates visual lift and segmentation

## Implementation Guidance
* Use `Flexbox` for horizontal alignment with `gap: 2rem` or `justify-content: space-around`
* Illustrations should be SVGs for scalability and easy style overrides
* Use `max-width: 600px` per card for readable responsiveness
* On smaller screens: stack cards vertically with adequate padding (`padding: 24px`)
