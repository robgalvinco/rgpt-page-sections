---
image: rgpt-iYwEuhcn.jpg
categories:
  - Call To Action
video:
---
# Purpose:
This section acts as a compelling landing page hero and outcomes overview for an online bootcamp, specifically targeting creatives interested in AI-driven filmmaking. By combining powerful visuals, strong typography, and clear value propositions, it builds trust and drives conversions. The layout speaks directly to potential students—highlighting the course cost, benefits, and learning outcomes. It's especially effective for course creators and digital educators aiming to attract serious learners with a premium offering.

# Design Notes:

## Hero Section (Top)
* Two-column layout:
  - Left: full-width image of a cinematic scene with rounded corners
  - Right: course title, description, price, and CTA button
* Typography:
  - Bold serif heading in navy for emphasis (“The World’s First Bootcamp…”)
  - Supporting paragraph in smaller sans-serif font for readability
  - Price is bolded and italicized for emphasis (“$749 Per Artist”)
* CTA button:
  - Rectangular with rounded corners
  - Bright yellow background (`background-color: #FFD500`) and bold navy text
  - Uses `hover: opacity` or slight shadow for interactivity

## Section Divider (“By the end of this course…”)
* Center-aligned subheading in bold navy
* Uses increased top margin or padding to separate from the hero section

## Outcomes Section (3 Columns)
* Each column includes:
  - Rectangular image with large border-radius
  - Bold title below the image (navy text, likely H4)
  - Supporting paragraph in lighter navy text
* All cards are uniformly sized and evenly spaced using CSS Grid or Flexbox
* Images are cinematic and thematically consistent with the course, reinforcing professionalism and visual storytelling

## Visual Styling & Implementation
* Background is light beige or off-white for warm contrast against navy and yellow
* Text styling emphasizes key points using font weight, case, and color
* Rounded corners on all images and buttons maintain a friendly, premium look
* Suggested layout:
  - `CSS Grid` for outcome cards (`grid-template-columns: repeat(3, 1fr)`)
  - `flex` or `grid` for top two-column hero area
  - Responsive breakpoints to stack content vertically on mobile
