---
image: rgpt-SXJYXaEW.jpg
categories:
  - Modules
video:
---
# Purpose:
This curriculum section introduces the core structure and time investment of a video editing course, helping prospective students evaluate its scope and credibility. For course creators and membership site owners, this section builds authority and sets expectations by showcasing the depth of the training. Highlighting the number of videos and hours upfront helps drive conversions by showing tangible value, while the design conveys professionalism and clarity.

# Design Notes:

## Curriculum Header
* Large, bold headline with mixed color emphasis ("build skills" and "launch your career" in orange) — implement using `<span>` with a `text-orange-500` class for color contrast
* Sans-serif font with high legibility and generous line spacing for clarity
* Responsive text hierarchy — scales well across breakpoints

## Chapter Breakdown Section
* Small caps for metadata ("CHAPTER 1", "84 VIDEOS", "28 HOURS") — can use `text-xs uppercase tracking-wider text-gray-400`
* Title of the chapter in large, clean font — consistent with H2 styling
* Supporting paragraph in muted gray for low contrast but readable explanatory content

## Visual Integration
* Right-aligned image in rounded-corner container with subtle shadow
* Image shows a realistic workspace — reinforces relatability for online learners
* Suggested layout: `CSS Flexbox` or `CSS Grid` with `grid-template-columns: 1fr 1fr` for text and image side-by-side

## Visual Styling
* Dark background (`#000` or `#111`) with high contrast white/orange typography
* Highlight color (`#F9A825` or similar warm amber) used sparingly for conversion-driving phrases
* Padding and white space help focus the viewer’s eye on key messages

## Implementation Guidance
* Use `clamp()` in CSS for responsive font sizes on headline
* Use `Flexbox` or `Grid` to switch from side-by-side (desktop) to stacked layout (mobile)
* Add scroll animations (e.g., fade-in or slide-in) using `IntersectionObserver` or libraries like `AOS.js`
* Ensure good color contrast for accessibility (especially on black background)
