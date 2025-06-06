---
image: rgpt-JfjfjQva.jpg
categories:
  - Pricing
video:
---
# Purpose:
This hero section is designed to promote an online course—The Copy Cure—using emotionally persuasive design and high-converting visual elements. It's crafted to appeal to coaches, course creators, and small business owners looking to improve their copywriting skills. The bold color palette, product mockups, urgency messaging (“50% OFF”), and benefit-driven headline all combine to increase excitement and conversion. It serves as both a visual sales pitch and lead capture trigger.

# Design Notes:

## Hero Container
* Full-width section with bold pink background (`background-color: #D94F8E`)
* Content is center-aligned for maximum focus and impact
* High visual density concentrated in the center using layered mockups and product previews

## Product Mockup Area
* Central graphic includes multiple devices (tablet, laptop, phone) and printed materials
* Mockups are layered with shadows for a 3D, tangible feel (achieved via image stacking and drop shadows)
* Top-right “50% OFF” burst badge uses radial shape and white all-caps text—likely SVG or PNG overlay

## Heading & Subheading
* “The Copy Cure” in large serif font with high contrast (white on pink)
* “Everything You Need…” subheading in smaller serif font, styled with line breaks and centered text
* Below that, a short description paragraph in a lighter tone (smaller sans-serif)

## Call-to-Action Button
* Full-width, pill-shaped yellow button (`background-color: #FFF26B`) with dark text
* Button includes clear, first-person copy: “Yes, I’m Ready! Give Me The Copy Cure for 50% off”
* Likely uses `hover: brightness(90%)` or slight scale transform on interaction

## Visual Styling & Implementation
* Use Flexbox or `text-align: center` for vertical and horizontal centering
* Layered product images placed in a `relative` container, stacked with `z-index`
* “50% OFF” burst shape created via inline SVG or decorative `clip-path` polygon
* Button uses generous padding and `border-radius: 999px` for pill shape
* Responsive considerations: mockups stack vertically on smaller screens, text sizes adjust via media queries
