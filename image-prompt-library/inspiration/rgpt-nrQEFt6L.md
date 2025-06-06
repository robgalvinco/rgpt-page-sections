---
image: rgpt-nrQEFt6L.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This hero section is designed to inspire users to take immediate action by framing self-investment through education as the highest-value opportunity. With a blend of emotional appeal, visual relatability, and strong social proof, it effectively builds trust and drives conversions for coaches and course creators offering online programs or digital memberships.

# Design Notes:

## Layout Structure
* Full-width, split overlay layout:
  - Background: full-bleed photo of happy, relatable learners
  - Foreground: content aligned left and vertically centered
* Uses `position: relative` and `z-index` layering to overlay content over image with dark gradient mask

## Headline & Subtext
* Large, two-line headline with typographic emphasis:
  - “The Best Investment” in white serif
  - “You Can Make is in Yourself” in gold (`#F5C44C`) for motivational contrast
* Supporting paragraph in light gray with smaller font for clarity and context

## CTA Button
* Solid gold button (“Start Learning Today”) with pill shape
* Hover state likely includes brightness or slight scale (`transform: scale(1.03)`)
* Rounded corners (`border-radius: 999px`) and `padding: 12px 24px`

## Social Proof
* Row of overlapping circular avatars (`border-radius: 50%`, `margin-left: -8px`)
* Text: “Joins 28,500+ like students” in small, muted gray for understated credibility
* Avatar and text container aligned horizontally using `Flexbox`

## Background & Visual Effects
* Background image darkened via gradient overlay (`linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))`)
* Foreground text remains highly legible due to strong contrast and controlled spacing

## Implementation Guidance
* Use `absolute` or `pseudo-element` gradient overlay for background treatment
* Responsive design should reposition content to center-align on mobile
* Text container likely capped with `max-width: 600px` and `padding: 4rem`

