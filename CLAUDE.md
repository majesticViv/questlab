# QuestLab

## Quick Reference
- Pre-launch landing page for a K-6 science experiment learning platform
- Next.js 14+ (App Router) + Tailwind CSS + Framer Motion + Supabase
- Currently Phase 1: landing page + waitlist only. Full app is future work.
- All images load from `/lib/assets.ts`. No hardcoded image paths anywhere.
- All copy/text lives in `/lib/content.ts`. No hardcoded strings in components.
- Respect `prefers-reduced-motion` on every animation.
- Fonts: Lexend (sans, everything) + Canela Text (serif, hero tagline + vision statement only)

## MANDATORY
After any significant work:
1. Update .claude/rules/memory-decisions.md with new choices
2. Update .claude/rules/memory-sessions.md with progress
Do this DURING work, not at the end.

## File Locations
- Project rules: .claude/rules/*.md
- Design specs: docs/03_Design_Document.md
- User flows: docs/02_User_Flow.md
- Backend: docs/04_Backend_Document.md
- Security: docs/05_Security_Checklist.md
- Image config: lib/assets.ts
- Content/copy: lib/content.ts
- Images directory: public/images/

## Data Model
- Single table `waitlist`: id (uuid), name, email (unique), role (enum), organization (nullable), source, created_at
- API route at `/api/waitlist` handles inserts server-side
- Supabase service key used server-side only, never exposed to client

## Key Files
- `app/page.tsx`: Landing page, imports all section components
- `app/layout.tsx`: Root layout with fonts and metadata
- `app/api/waitlist/route.ts`: Waitlist POST endpoint
- `components/landing/Hero.tsx`: Hero section with scroll-driven parallax
- `components/landing/WaitlistForm.tsx`: Bottom CTA waitlist form
- `lib/assets.ts`: Central image path registry (swap images here)
- `lib/content.ts`: All text content (edit copy here)

## Architecture Notes
- Each landing page section is a self-contained component in `components/landing/`
- Future app routes go in `app/(future)/` directory
- Future app components go in `components/(future)/`
- This separation keeps landing page stable while app develops

## Git
- Never include "Co-authored-by" in commit messages
