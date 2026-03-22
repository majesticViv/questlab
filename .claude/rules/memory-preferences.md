# Preferences

## Animation
- All animations must respect `prefers-reduced-motion` (show final state with simple fade when reduced motion is on)
- Use Framer Motion for all animations. GSAP only if Framer cannot achieve the effect.
- Scroll-driven animations: use transform and opacity only (no layout-triggering properties)
- Hero animation: layered parallax with planet rise, landscape compression on scroll
- Section entrances: fade-up with stagger, triggered by intersection observer

## Design
- Visual tone: polished with character (not cartoonish, not corporate)
- Fonts: Lexend (sans, all headings/body/UI) + Canela Text (serif, hero tagline + vision statement ONLY)
- Color palette: deep purple bg, green landscape accents, purple accent for buttons. Derived from hero illustration.
- All images loaded from centralized config (`/lib/assets.ts`). Every asset must have a CSS/SVG placeholder fallback.
- Minimum touch target: 44x44px. Color contrast: WCAG AA.

## Code
- TypeScript strict mode
- All copy/text in `/lib/content.ts`, not hardcoded in components
- Each landing page section is a self-contained component in `components/landing/`
- Future app routes use `app/(future)/` directory pattern
- Server-side Supabase calls only (service key never in client bundle)
- No `console.log` in production code

## UX
- Two waitlist CTAs only: hero section + bottom of page. Not pushy.
- FAQ: accordion behavior, one item open at a time
- Sticky header appears only after scrolling past hero
- Form validation: inline errors, no alert dialogs
- Success state persists via localStorage for returning visitors
