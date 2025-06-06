---
image: rgpt-zF75Qo6c.jpg
categories:
  - Testimonials
  - Video
video:
---
# Purpose:
This testimonial hero section is designed to showcase authentic learner success stories, fostering trust and social proof for prospective students. For course creators and membership site owners, highlighting real faces and experiences builds credibility and creates emotional resonance. This format is especially effective in increasing conversions by demonstrating tangible results from real users in a clean, inviting layout.

# Design Notes:

## Section Layout
* Center-aligned vertical layout with tight heading hierarchy:
  - Small green pill-shaped label (“Success stories”) at the top
  - Large, bold main heading ("What our learners say") with color emphasis on a key word ("learners" in lighter gray or highlight)
  - Subheading in mid-gray with smaller font, providing supportive context

## Testimonial Avatars
* Four circular profile images of students, horizontally aligned
* Equal spacing between avatars — use `display: flex; justify-content: center; gap: 2rem`
* One image has a blurred effect with a play icon overlay — indicates a video testimonial
  - Use `filter: blur(2px)` on image, `position: absolute` overlay icon centered
  - Icon is a white triangle (FontAwesome or SVG) on transparent or semi-dark circle background

## Avatar Styling
* Circular frames: `border-radius: 50%`, consistent size (`width: 120–140px`)
* Slight shadow or soft edge for image elevation — use `box-shadow` or `filter: drop-shadow`

## Typography
* Heading: large sans-serif with mixed font weights/colors — implement with `<span>` or `<strong>` for "learners"
* Subheading: `font-size: 1rem`, `color: #666`, max-width container with center alignment
* Pill label: light green background, rounded full-pill shape (`border-radius: 999px`), all caps text

## Implementation Guidance
* Use `flexbox` for horizontal avatar layout and `gap` for spacing
* Add hover effect for video testimonial avatar: increase brightness or scale slightly
* Responsive: stack avatars in two rows or enable horizontal scroll on small screens
* Optional: clicking on avatars can open modals or carousel with detailed video/text testimonials
