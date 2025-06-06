---
image: rgpt-QyPUzIo1.jpg
categories:
  - Hero Banner
video:
---
# Purpose:
This section acts as a high-impact, urgency-driven hero banner designed to convert visitors by emphasizing the financial value of copywriting. It is especially effective for course creators and coaches looking to market their program’s ROI with social proof, time-sensitive discounts, and bold headlines. The strategic combination of a countdown timer and a strong monetary claim builds trust and encourages immediate action, helping maximize conversions during a promotional window.

# Design Notes:

## Hero Section (Main Headline)
* Large, bold, all-caps serif heading "WRITE WORDS THAT MAKE YOU MONEY" centered on the page
* Supporting subhead in regular weight above, smaller, with generous letter-spacing
* Emphasized claim: “$100 million in student revenue” in bold within a muted sans-serif line

## Visual Styling
* Background gradient from pale pink (#FEE9F1) to soft pastel yellow (#FFF4D9)
* Pink underline decoration below testimonial quote (likely `border-bottom` or SVG)
* High-contrast black text over pastel background improves readability

## Call to Action (CTA)
* Pink CTA button ("Get The Copy Cure for 50% OFF Now") with pill-shaped border-radius (`border-radius: 9999px`)
* White text on vibrant pink background (#EA4B8A) with subtle drop shadow for emphasis
* Centered below body text with margin-top for spacing

## Countdown Bar
* Sticky announcement bar at top using full-width yellow background (#FFEB3B)
* Countdown timer with hours/minutes/seconds shown in bold with monospaced styling
* Right-aligned “Claim My Discount” button in magenta-pink with border-radius
* Flexbox used for spacing between timer and CTA (`justify-content: space-between`)

## Layout and Spacing
* Content is center-aligned within a max-width container (`max-width: 720px; margin: 0 auto`)
* Generous vertical padding (`padding: 4rem 1rem`) to make the hero section feel breathable and prominent

## Implementation Guidance
* Use CSS linear gradient background (`background: linear-gradient(to bottom, #fee9f1, #fff4d9)`)
* Countdown timer likely built with JavaScript and styled using Flexbox (`display: flex; gap: 1rem`)
* CTA buttons can use hover transitions (`transition: all 0.3s ease`) for subtle scale or color shifts
* Consider adding aria-live region for countdown accessibility
