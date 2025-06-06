---
image: rgpt-obqktlMq.jpg
categories:
  - FAQs
video:
---
# Purpose:
This FAQ section helps reduce purchasing hesitation and increases user trust by providing answers to common questions in a clean, accessible format. For course creators and membership sites, it's a key conversion-support tool that reassures potential students while also offering a clear next step to get personalized help if needed.

# Design Notes:

## Layout Structure
* Two-column layout:
  - Left side: contact encouragement and CTA
  - Right side: accordion-style FAQ entries
* Utilizes responsive `CSS Grid` or `Flexbox` with a medium-wide breakpoint for mobile stacking

## Left Panel (Support Callout)
* White card with soft shadow and rounded corners
* Content includes:
  - Bold heading: “Still Have Questions?”
  - Inline link: “Contact Us” in underline style
  - Small horizontal avatar stack showing support members (`border-radius: 50%`, overlap with `z-index`)
  - Button: "Start Learning Now" with dark gradient (`linear-gradient`) and pill shape

## Right Panel (FAQ Accordion)
* Series of collapsible cards with question text
* Each FAQ item uses:
  - White background with subtle box shadow
  - Rounded corners (`border-radius: 12px`)
  - Expand/collapse icon (+/x) aligned right
  - When expanded, answer text appears with a soft fade and vertical spacing

## Typography
* Section title: “Frequently Asked Questions!” in bold, large sans-serif
  - Uses emphasis with exclamation for friendly tone
* FAQ items: bold questions and smaller, readable answers
* Link text in blue or underlined to differentiate action

## Visual Styling
* Soft radial gradient background in lavender/pink tones adds warmth and personality (`background: radial-gradient(...)`)
* Subtle shadows and white card layering for depth
* Icons for FAQ (+/x) likely implemented with SVGs or CSS pseudo-elements

## Interaction & Implementation
* Accordion functionality handled with JavaScript (toggle height and visibility)
* FAQ content wrapped in `<details>` or `aria-expanded` divs for accessibility
* Contact link anchors to a separate contact section or opens a modal
* Avatars likely use `Flex` with negative margin for overlapping effect
