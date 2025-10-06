# Panda Digital - Design Guidelines

## Design Approach: Reference-Based Modern Marketing

**Selected References:** Linear (typography & animations), Stripe (color sophistication), Framer (motion design), Vercel (modern web aesthetics)

**Core Principles:**
- Bold, confident visual language that showcases marketing expertise
- Strategic use of motion to create engagement without overwhelming
- Premium feel that builds trust with international clients
- Bridge Chinese and global aesthetics with sophisticated design choices

---

## Color Palette

### Dark Mode (Primary)
- **Background:** 8 8% 8% (deep charcoal)
- **Surface:** 8 8% 12% (elevated panels)
- **Primary Brand:** 150 60% 45% (panda bamboo green - represents growth & China connection)
- **Accent:** 340 75% 55% (vibrant coral/red - energy & Chinese cultural reference)
- **Text Primary:** 0 0% 95%
- **Text Secondary:** 0 0% 65%

### Light Mode
- **Background:** 0 0% 98%
- **Surface:** 0 0% 100%
- **Primary Brand:** 150 65% 40% (deeper green)
- **Accent:** 340 70% 50%
- **Text Primary:** 0 0% 10%
- **Text Secondary:** 0 0% 40%

---

## Typography

**Families (Google Fonts):**
- Headings: 'Space Grotesk' (modern, geometric, tech-forward)
- Body: 'Inter' (clean, professional readability)

**Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-4xl md:text-5xl font-bold
- Subheadings: text-xl md:text-2xl font-medium
- Body: text-base md:text-lg leading-relaxed
- Small: text-sm

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 20, 24, 32
- Micro spacing: gap-2, p-4
- Component spacing: p-8, gap-8
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl

**Grid Strategy:**
- Hero: Full-width with max-w-7xl inner container
- Services: 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Team: 3-column grid (grid-cols-1 md:grid-cols-3)
- Testimonials: 2-column grid (grid-cols-1 lg:grid-cols-2)

---

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-xl)
- Logo left, nav center, CTA button right
- Mobile: Hamburger menu with slide-in overlay
- Smooth scroll behavior between sections

### Hero Section (Landing)
- **Large Hero Image:** Yes - Dynamic marketing/digital workspace imagery showing global collaboration
- Split layout: 60% text content, 40% floating graphic/mockup
- Animated gradient mesh background
- Dual CTAs: Primary "Get Started" (solid), Secondary "View Our Work" (outline with blur background)
- Floating badge: "Trusted by 500+ Chinese Companies Going Global"

### Service Cards
- Glassmorphic cards with subtle border glow on hover
- Icon (Heroicons) + Title + 2-line description
- Staggered entrance animations
- Hover: Lift effect (scale-105) with subtle shadow

### Team Cards
- Clean card with team member photo (circular or rounded-2xl)
- Overlay gradient on hover revealing role details
- Name + Designation always visible
- Subtle parallax effect on scroll

### Testimonial Cards
- Quote-first layout with large quotation marks
- Company logo integration (top-right or inline)
- Client name + company + country flag
- Rotating carousel for Chinese client spotlight

### Contact Form
- Floating card design with subtle shadow
- Input fields with border-b underline style (modern, minimal)
- Focused state: Accent color underline growth animation
- Success state with checkmark animation

### Footer
- 4-column layout: About, Services, Contact, Social
- Newsletter signup with inline form
- Social icons with hover color transitions
- Trust badges: "ISO Certified", "Google Partner", "Meta Business Partner"

---

## Animations & Motion

**Libraries:** Framer Motion via CDN

**Animation Strategy:**
- Scroll-triggered fade-in-up for sections (stagger: 0.1s)
- Hero: Parallax background movement (subtle, -20px range)
- Service cards: Scale & rotate on hover (scale-105, rotate-1)
- Floating elements: Gentle bob animation (translateY: 0-10px, 3s loop)
- Page transitions: Fade + slide (200ms duration)
- Form submission: Button morph to checkmark

**Performance:** Use `transform` and `opacity` only, will-change sparingly

---

## Images

### Required Images:
1. **Hero Image:** Modern office/team collaboration with digital screens, international flags visible - vibrant, aspirational (1920x1080)
2. **Services Background:** Abstract tech pattern or gradient mesh (subtle, 50% opacity)
3. **Team Members:** 3 professional headshots with consistent lighting/background
4. **Testimonial Logos:** Client company logos (Chinese & international)
5. **About Page:** Agency workspace or team celebration photo

### Image Treatment:
- Rounded corners (rounded-2xl) for all photos
- Subtle gradient overlays on hero images
- Lazy loading with blur-up placeholders
- Responsive srcset for performance

---

## Page-Specific Layouts

### Landing Page Sections (in order):
1. Hero with large image + animated headline + dual CTAs
2. Trust Bar: Animated number counters (500+ clients, 95% success rate, 50+ countries)
3. Services Grid: 4 cards with icons + hover effects
4. Featured Case Study: Large image + metrics + testimonial
5. Why Choose Us: 2-column (image left, benefits list right)
6. Global Reviews Carousel: Spotlighting Chinese client success
7. CTA Section: Bold headline + primary action
8. Footer with newsletter

### About Us Page:
- Mission statement with gradient background
- Team grid (3 members) with hover interactions
- Company values with icon + text blocks
- Journey timeline (optional: scroll-triggered reveal)

### Contact Page:
- Hero headline + subtext
- 2-column: Form (left 60%) + Contact info + Map (right 40%)
- Social media icon grid with hover animations
- Response time badge: "We reply within 24 hours"

---

## Accessibility & Responsiveness

- Focus states: 2px accent color ring with offset
- Dark mode toggle in header (moon/sun icon)
- Mobile: Single column, touch-friendly 44px tap targets
- Reduced motion respect: `prefers-reduced-motion` disables animations
- Semantic HTML: proper heading hierarchy, ARIA labels
- Form validation with clear error states (red-500 text + icon)

---

**Design Philosophy:** Create a premium, globally-minded digital experience that demonstrates Panda Digital's expertise through the website itself - proving they can execute sophisticated marketing by showcasing it live.