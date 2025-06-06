---
image: rgpt-svXIUqMX.jpg
categories:
  - Pricing
video:
---
# Purpose:
This pricing section is designed to clearly communicate the value and structure of a tiered subscription model, making it easy for course buyers to compare options and commit. By visually distinguishing the most popular plan and emphasizing trust signals (ratings and reviews), the section builds credibility and nudges users toward conversion. For course creators or membership site owners, this layout effectively supports revenue growth by showcasing upsell opportunities in a transparent, user-friendly way.

# Design Notes:

## Pricing Layout
* Three-column layout using `CSS Grid` or `Flexbox` for equal width cards with consistent spacing
* Center card (Pro Plan) is visually emphasized as "Popular Plan" with a floating label—achievable via absolute positioning and a rotated badge
* Plan cards are vertically aligned with a soft gradient or off-white background and subtle box shadow for depth

## Typography & Visual Hierarchy
* Plan names in small bold text, pricing in large bold numbers (`font-size: ~2rem`), and sub-labels ("/mo", "Billed annually") in lighter gray for contrast
* Feature lists use checkmarks and crossed items to show inclusions/exclusions—can use FontAwesome icons or custom SVGs with conditional styling
* Most popular plan button uses solid black fill; others use bordered buttons with hover states

## Visual Styling
* Background gradient has soft pastel tones with radial blur (likely implemented via `background: radial-gradient(...)`)
* Rounded corners (`border-radius: 2xl`) and soft drop shadows (`box-shadow: rgba(...)`) for a modern card feel
* Hover state for cards may include slight scale-up (`transform: scale(1.02)`) and shadow enhancement

## Conversion & Trust Elements
* Trust metric ("Trusted by 70k+ students") displayed with 5-star icons and review count—use `Flexbox` for inline alignment
* 4.8 rating and review count positioned top-right for social proof reinforcement
* "Get Started" CTA button inside each card supports quick decision-making and anchors to purchase flow

## Implementation Guidance
* Use `CSS Grid` with `grid-template-columns: repeat(3, 1fr)` for responsive layout
* Use `position: absolute` for the "Popular Plan" badge with `transform: rotate(-10deg)` for visual flair
* Use conditional classes to style available vs unavailable features (`text-gray-400` or `opacity-50` for disabled lines)
* Animate button hover states with `transition: all 0.2s ease-in-out`
