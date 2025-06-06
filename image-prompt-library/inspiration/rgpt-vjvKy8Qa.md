---
image: rgpt-vjvKy8Qa.jpg
categories:
  - Content
  - Video
video:
---
# Purpose:
This testimonial section serves as a powerful trust-building tool for online course instructors, coaches, or membership site owners. By combining a real person’s video and a written quote, it creates authenticity and emotional connection, helping to overcome objections and drive conversions. Featuring a named individual with a recognizable image and affiliation adds credibility and signals a vibrant, engaged community. The clean design keeps the focus on the story while subtly prompting video engagement.

# Design Notes:

## Testimonial Card Layout
* Two-column horizontal layout: left side image, right side text
* Rounded corners on the outer container and testimonial image — use `border-radius` on both
* Image has a “Play Video” button overlaid in the bottom-left corner — button includes an icon and label, likely implemented with `position: absolute` on the image container and `display: flex` inside the button
* Right column contains testimonial quote in large readable serif or sans-serif font, left-aligned with generous line spacing
* Quote is followed by an author section: small circular avatar (matching main image), bold name, divider dot, and brand name in stylized font or weight contrast

## Spacing & Alignment
* Balanced vertical alignment between image and text using `align-items: center` via Flexbox
* Padding and margin between columns create ample whitespace for a clean, digestible layout
* The card sits on a light off-white background with soft shadows or inner padding to visually separate it from the rest of the page

## Visual Styling & Implementation
* Soft background color on outer container (`#f9f6f1` or similar)
* Video button styling: white background with dark border and icon; rounded corners, hover state could include subtle scaling or shadow
* Typography hierarchy: quote in larger font, name in bold, organization name in brand-styled font
* Avatar and image should use the same source for consistency — avatar likely displayed with `width: 32px; border-radius: 50%`

## Implementation Guidance
* Use `display: flex` with `gap` or `margin-right` for spacing between image and text
* Image container: `position: relative` to allow absolute positioning of the play button
* Ensure responsiveness by stacking columns vertically on small screens using media queries or `flex-direction: column`
