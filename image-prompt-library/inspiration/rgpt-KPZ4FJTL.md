---
image: rgpt-KPZ4FJTL.jpg
categories:
  - Call To Action
video:
---
# Purpose:
This section highlights the core value and bonus offerings of an online masterclass tailored to artists and creative entrepreneurs. It’s structured to quickly communicate benefits, reinforce credibility with instructor names, and drive conversions through a low-cost, high-value CTA. For course creators and membership site owners, this layout is ideal for clearly showcasing what’s included and enticing users with strong visual product mockups and bonus materials.

# Design Notes:

## Layout Structure
* Two-column horizontal layout:
  - Left: image collage of mockups on various devices
  - Right: bulleted benefit list and CTA
* Balanced spacing and vertical alignment between columns ensures clean visual hierarchy

## Product Mockup Area (Left Column)
* Layered visual assets of course material displayed on laptop, tablet, phone, and print
* Overlapping layout with slight shadows to give a tangible, 3D product feel
* Uses red paintbrush texture in background as a decorative element (`position: absolute` or inline SVG)

## Text Content Area (Right Column)
* Bold section title: “What You Get” in large sans-serif font
* Primary bullets:
  - Each line starts with a pink dot bullet
  - Benefits are written in concise, scannable phrases
* Bonus Material subheading in bold followed by:
  - “FREE” callouts in all caps and pink to create urgency and perceived value
  - Supporting text in regular font weight for contrast

## CTA Button
* Wide button at bottom of right column
* Bright pink background with white text
* Rounded corners with pill styling (`border-radius: 999px`)
* Text uses urgency and value stacking: “Only $25 Plus Lifetime Access!”

## Visual Styling & Implementation Guidance
* Use Flexbox or CSS Grid for two-column responsive layout
* Button hover state can include `box-shadow` or slight scale (`transform: scale(1.03)`)
* Bullet list styled with `::before` or `<li>` elements with custom `::marker`
* Image collage should be wrapped in a relatively positioned container for layering
* Paintbrush background can be implemented via inline SVG or as a positioned PNG with transparency
* Ensure mockups are `max-width: 100%` and maintain consistent margins between devices
