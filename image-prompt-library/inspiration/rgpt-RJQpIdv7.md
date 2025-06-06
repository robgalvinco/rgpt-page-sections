---
image: rgpt-RJQpIdv7.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing section is designed to drive conversions by clearly presenting two purchase options—Lite and Pro—for a 30-day fitness challenge. It simplifies decision-making for potential buyers by using a side-by-side comparison format that highlights added value in the premium tier. This strategy is effective for coaches and course creators seeking to boost average order value, offer scalable self-serve access, and upsell personalized coaching to more motivated clients.

# Design Notes:

## Layout Structure
* Two-column grid layout comparing Lite and Pro plans
* Aligned headings, pricing, and CTA buttons for visual symmetry
* Centered title section above with bold headline and testimonial badge cluster

## Key Visual Elements
* Pricing cards use white backgrounds with light blue border accents
* Plan names ("Lite" and "Pro") styled with blue highlights to draw distinction
* Checkmarks used consistently for included features (blue) and excluded ones (gray/strikethrough)
* CTA buttons use consistent full-width layout with bright blue fill

## Spacing and Positioning
* Equal vertical spacing between features within each card
* Pricing is bold and large to quickly capture attention
* Group of student avatars and 5-star rating centered beneath heading builds trust

## Interactive Elements
* CTA buttons ("Start Your 30 Day Challenge!") likely link to checkout or signup pages
* Cards may include hover elevation effect (e.g., `box-shadow` on hover)

## Visual Styling
* Soft blue theme communicates trust and calmness, consistent with health/wellness focus
* Border radius on cards and buttons (`border-radius: 1rem`)
* Icons use consistent line style, likely SVG or FontAwesome

## Implementation Guidance
* Use `CSS Grid` or `Flexbox` for responsive side-by-side pricing cards
* Maintain consistent padding (`p-6` to `p-8`) inside cards for clarity
* Use utility-first CSS or Tailwind classes for hover effects (`hover:shadow-xl`, `transition`)
* For excluded items, apply `text-gray-400` + `line-through` styling
