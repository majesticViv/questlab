# Past Decisions

## Tech Stack
- Next.js 14+ App Router chosen for SSR, SEO, and Vercel-native deployment
- Tailwind CSS for rapid styling iteration
- Framer Motion for animations (preferred over GSAP for declarative API and reduced-motion support)
- Supabase for waitlist backend (free tier sufficient, scales into full app later)
- Vercel for hosting (zero-config Next.js, preview URLs)

## Architecture
- Landing page and future app live in the same Next.js project (not separate repos)
- Future app routes go in `app/(future)/` to keep landing page stable during development
- All images centralized in `/lib/assets.ts` with placeholder fallbacks so the site renders without any external images
- All text content centralized in `/lib/content.ts` for easy copy editing
- Waitlist form submits to `/api/waitlist` server-side route (not direct Supabase client calls) to keep service key off the client

## Design
- Hero uses layered parallax: purple bg → green landscape → planet rises → logo/text appears → CTA
- On scroll, landscape compresses downward and planet fades, revealing content sections
- "Accessible learning through virtual sandbox experimentation" moved from hero to How It Works section header
- Hero tagline stays: "Every kid is born a scientist, so QuestLab puts the Quest back in their Question."
- Parent/Teacher section uses side-by-side columns on desktop, tabs on mobile
- Team section kept minimal: Alex Zhang (CEO), Vivian Ren (COO), names + roles only

## Waitlist
- Full form: name (required), email (required), role dropdown (required), school/org (optional)
- Duplicate emails return friendly 409 error
- Success state persisted in localStorage to prevent re-submission on return visits
