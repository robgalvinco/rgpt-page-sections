---
image: rgpt-hWGJo7W4.jpg
categories:
  - Call To Action
video:
---
# Purpose:
This section serves as a hero banner to capture attention and drive course enrollment, specifically targeting aspiring UI/UX designers. It combines bold messaging, social proof (via student avatars), and dual call-to-action buttons to increase engagement and conversions. The design leverages a vibrant background and community visuals to foster trust, urgency, and inclusivity—key elements that motivate potential learners to take action in an educational or coaching environment.

# Design Notes:

## Hero Section Container
* Full-width container with a bold purple background and slight border-radius on corners
* Uses a two-column layout (text on left, floating avatars on right) with ample horizontal padding
* Rounded corners and slight drop shadow suggest card-style visual separation from the page

## Text & CTA Area (Left Column)
* Headline uses large, bold sans-serif font with high contrast (white text on purple)
* Subheadline uses smaller, medium-weight sans-serif font in a lighter shade of purple/white for readability
* Two buttons:
  - “Enroll Now”: white background, black arrow icon (FontAwesome), dark text
  - “See Curriculum”: white outline style, same font and padding for visual cohesion
* Buttons have rounded corners and generous padding for tap-friendly design
* Likely implemented with Flexbox and consistent vertical spacing (`gap` or `margin-bottom`)

## Social Proof (Right Column)
* Multiple circular avatar images scattered in an organic, dynamic layout
* Overlapping, floating-style placement gives a sense of community and activity
* Avatars are evenly spaced using absolute positioning or CSS grid with manual offsets
* Avatars are all circular (`border-radius: 50%`) and use drop shadow or border for visual separation
* Purple abstract lines or curved shapes in background are likely inline SVG or pseudo-elements (`::before`) for visual interest

## Visual Styling & Implementation Guidance
* Use `display: flex` with `justify-content: space-between` for main layout
* Avatar images positioned with `position: absolute` or inside a relatively positioned container for fluid overlapping layout
* Use inline SVG or background image for abstract curves on right side
* Buttons should use hover states with `box-shadow` or background color transitions
* Mobile responsive layout should stack columns vertically and reduce avatar count
