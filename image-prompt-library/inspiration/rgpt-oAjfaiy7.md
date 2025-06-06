---
image: rgpt-oAjfaiy7.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This hero section aims to instantly capture attention and emotionally engage aspiring artists by positioning the platform as a transformational opportunity. It encourages immediate action through a confident value proposition and bold visual styling. For creators or coaches selling art programs, this is an effective method to drive conversions, establish brand voice, and inspire community connection.

# Design Notes:

## Layout Structure
* Full-screen hero section with background video or image of a focused artist
* Content centered both vertically and horizontally using `Flexbox` or `Grid`
* Overlay gradient applied for legibility enhancement

## Headline & Subheadline
* Bold, all-caps main headline: “BECOME THE ARTIST YOU WERE BORN TO BE”
  - Large font size, white sans-serif with tight line height
* Subheadline in smaller, medium-weight font: “Build Your Skills. Find Your Voice. Connect with Community.”
  - Also white, with `letter-spacing` for openness

## Call-to-Action Button
* Centered hot pink button: “GET STARTED TODAY!”
* Pill-shaped with `border-radius: 999px`, bold white text, and `padding: 14px 24px`
* Hover state likely includes slight scale-up or brightness adjustment

## Background & Overlay
* Full-bleed background image (or video) of artist painting
* Semi-transparent pink-to-clear gradient overlay from bottom to center
  - Achieved via `linear-gradient(rgba(255,0,128,0.7), rgba(255,0,128,0))`
* Organic torn-edge bottom border adds handcrafted visual flair
  - Likely implemented with inline SVG or masked image border

## Visual Styling & Implementation
* Typography:
  - `font-size: 3–4rem` for heading on desktop, reduced on mobile
  - Strong contrast ensured through white text and gradient overlay
* Button interaction:
  - Use `:hover` and `:focus-visible` states for accessibility
* Section height set to `100vh` for immersive hero experience

## Responsive Behavior
* Text remains centered and scales down on mobile
* Button reflows to full-width under text stack
* Image scales using `object-fit: cover` and retains focal point with `object-position`
