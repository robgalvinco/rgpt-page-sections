---
image: rgpt-mQ1Tmbdm.jpg
categories:
  - Events
video:
---
# Purpose:
This event highlight section is designed to showcase a featured upcoming event—in this case, the Annual Golf Championship. It serves to draw attention, inform users of event details, and drive attendance or engagement. This layout is especially effective for coaches, community builders, or membership site owners who host live or in-person events and need a clean, visual format to promote them.

# Design Notes:

## Layout Structure
* Two-column horizontal card layout:
  - Left: event image
  - Right: event name, description, date, and location
* Uses Flexbox or CSS Grid with `align-items: center` and padding between columns
* Outer container has rounded corners and drop shadow for elevation

## Visual Content (Left)
* Event image is a square format with rounded corners (`border-radius`)
* Maintains consistent sizing relative to text block
* Image fills container via `object-fit: cover`

## Textual Content (Right)
* Heading: “Annual Golf Championship” in large, bold sans-serif font
* Description paragraph in smaller gray text with comfortable line spacing
* Icon + text rows for:
  - **Date**: Calendar icon + “March 15, 2025”
  - **Location**: Map pin icon + venue name
* Icons likely from FontAwesome or Material Icons with light gray fill

## Typography & Icons
* Uses clear typographic hierarchy:
  - Title: `font-size: 1.5–2rem`, bold
  - Body: `font-size: 1rem`, normal weight
  - Meta info: smaller font with icon alignment
* Icon/text rows are horizontally aligned with `gap` or inline-flex layout

## Visual Styling & Implementation
* Background color: soft beige or off-white for a friendly, premium look
* Card background: white with `border-radius: 20px` and `box-shadow: subtle`
* Section likely centered within a `max-width` wrapper
* Responsive behavior: stack image above text block on smaller screens with margin adjustments
