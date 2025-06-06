---
image: rgpt-nrgns47y.jpg
categories:
  - Content
  - Features
  - Image Cards
video:
---
# Purpose:
This section highlights the platform’s core achievements and value metrics—content volume, course offerings, and user base—to build trust and credibility. It’s ideal for online educators and training platforms looking to demonstrate scale and effectiveness to prospective learners or enterprise clients. The clean visual stats paired with enterprise logos provide social proof and reinforce professionalism.

# Design Notes:

## Section Header
* Centered heading: “Boost Your Skills” in bold black sans-serif
* Small pill-style label above heading: “We Offer” with icon (likely inline SVG)
* Supporting paragraph below in muted gray, explaining the purpose of the offerings

## Stats Grid
* Three equally sized cards in a horizontal row, each with:
  - Icon (soft-glow 3D style, unique per stat)
  - Large stat in bold (e.g. "100+")
  - Label in smaller uppercase font (e.g. “HOURS OF CONTENT”)
* Cards have:
  - Rounded corners (`border-radius: 24px`)
  - Subtle gradients and glow effects using `box-shadow` and `linear-gradient` backgrounds
  - Slight perspective tilt for visual dimension (can be achieved with `transform: rotateY()` or skew)

## Icons
* Calendar (Hours of Content) – red-pink tone
* Envelope/Document (Courses) – blue tone
* User group (Students) – purple tone
* All icons centered in soft pill-shaped containers with drop shadows for depth

## Partner Logos (Bottom Row)
* Logo list centered below stat cards
* Grayscale SVG-style logos for companies like “Startup”, “Codelify”, “Blockly”, etc.
* Logos spaced evenly with horizontal padding and `opacity: 0.7` for minimal visual noise

## Visual Styling & Implementation
* Background: soft radial gradient in pale blue/purple hue
* Use `CSS Grid` or `Flexbox` for responsive layout
* Cards adjust to stack vertically on small screens with equal spacing
* Consistent use of typography: `font-weight: 700` for numbers, `400–500` for labels
* Soft shadows and transitions for hover/focus interactivity (`transition: all 0.3s ease`)

