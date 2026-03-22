# QuestLab Landing Page — Product Requirements Document

## ⚠️ Implementation Notes for Claude Code

- All images must be loaded from a centralized config (`/lib/assets.ts` or equivalent). No hardcoded image paths in components. Every visual asset should be swappable by updating one file.
- Placeholder images must be built-in (CSS gradients, SVG shapes, or solid color blocks) so the page renders fully without any external image files.
- Hero animation must be scroll-driven using native CSS scroll-timeline or a lightweight library (Framer Motion preferred). No heavy animation libraries (GSAP is acceptable only if Framer Motion cannot achieve the effect).
- All animations must respect `prefers-reduced-motion`. When reduced motion is active, show the final composed state immediately with a simple fade-in.
- The page must be fully responsive across desktop, tablet (iPad landscape/portrait), and mobile. Design desktop-first, adapt down.
- Every section must be a self-contained component so sections can be reordered, removed, or added without breaking the page.
- Font loading: Lexend via Google Fonts, Canela Text via local font files (or fallback to system serif if not available). Implement `font-display: swap` to prevent layout shift.
- Copy/text content should live in a single content file (`/lib/content.ts`) separate from components, so copy can be updated without touching component code.

---

## Overview

| Field | Value |
|-------|-------|
| App name | QuestLab |
| Purpose | Pre-launch landing page for waitlist collection, product explanation, and investor-readiness |
| Primary audiences | Parents of K-6 children, teachers/schools/camps, investors/stakeholders |
| Platform | Responsive web (desktop + tablet + mobile) |
| Tech stack | Next.js 14+ (App Router), Tailwind CSS, Supabase (waitlist backend) |
| Fonts | Lexend (sans-serif, headings + body), Canela Text (serif, accent/taglines) |
| Domain | TBD |

---

## Screens & Features

This is a single-page site with seven distinct sections, each built as an independent component.

### S1 — Hero Section

**When:** First thing the user sees on page load.

**Layout:**
- Full viewport height (100vh)
- Deep purple background fills entire viewport
- Green landscape illustration anchored to bottom edge
- Small character figure standing on the central hill of the landscape
- Planet (purple/lavender sphere) positioned upper-center, above and behind the landscape

**Animation sequence on load:**
1. Purple background is immediately present (no animation needed)
2. Green landscape fades in from bottom (0.4s ease-out)
3. Planet rises from behind the landscape to its resting position (0.8s ease-out, slight overshoot settle)
4. QuestLab logo (planet icon + wordmark) fades and scales in at center (0.5s, starts after planet settles)
5. Tagline text fades up below logo (0.3s, staggered after logo)
6. CTA button fades in below tagline (0.3s, staggered after tagline)

**Content:**
- QuestLab logo (planet icon + "QuestLab" wordmark)
- Tagline: "Every kid is born a scientist, so QuestLab puts the Quest back in their Question."
- CTA button: "Join the Waitlist" → scrolls to bottom waitlist form OR opens inline modal

**Scroll behavior:**
- As user scrolls past ~30vh, the landscape compresses downward and drifts toward bottom-left corner
- Planet drifts slightly upward and fades to reduced opacity
- Character remains visible but scales down
- This parallax transition reveals the "How It Works" section beneath
- The effect should feel like the camera is pulling back from a planet surface into space

**Image assets (all placeholder-ready):**
- `hero-bg`: Deep purple gradient (placeholder: CSS radial gradient)
- `hero-landscape`: Green rolling hills illustration (placeholder: CSS clip-path with green gradient)
- `hero-planet`: Purple/lavender sphere (placeholder: CSS radial gradient circle)
- `hero-character`: Small astronaut/explorer figure (placeholder: simple SVG silhouette)

---

### S2 — How It Works

**When:** User scrolls past the hero section.

**Purpose:** Show the 5-phase experiment learning flow in a visual, scannable format.

**Section header:** "Accessible learning through virtual sandbox experimentation"

**Content:** Five steps displayed as a horizontal sequence (desktop) or vertical stack (mobile):

| Step | Label | Short description |
|------|-------|-------------------|
| 1 | Explore | Play with variables freely. Get a feel for how things work. |
| 2 | Predict | Make a guess. What do you think will happen and why? |
| 3 | Experiment | Run trials. Change one thing at a time. Collect data. |
| 4 | Analyze | Look at your results. What patterns do you see? |
| 5 | Explain | Understand the science behind what you found. |

**Visual treatment:**
- Each step gets a numbered icon or small illustration (placeholder-ready)
- A connecting line or path links the steps (evoking a space travel route)
- Subtle entrance animation as each step scrolls into view (staggered fade-up)

---

### S3 — Feature Highlights

**When:** Below "How It Works."

**Purpose:** Showcase the three core differentiators that matter to all audiences.

**Layout:** Three feature cards in a row (desktop) or stacked (mobile). Each card has an icon/illustration area, a headline, and 1-2 sentences.

**Features to highlight:**

1. **Experiment Engine**
   - Headline: "Real experiments, not worksheets"
   - Description: Kids design rockets, test variables, and collect their own data. Every quest follows the scientific method from hypothesis to conclusion.

2. **AI Lab Assistant**
   - Headline: "A lab partner that asks the right questions"
   - Description: An in-game AI companion helps kids notice patterns and think through their results without giving away the answers.

3. **Space World Exploration**
   - Headline: "A universe of science to explore"
   - Description: Each planet is a new experiment. Kids earn XP, customize their rocket, and build a collection of completed quests.

**Image assets (all placeholder-ready):**
- `feature-experiment`: Illustration of rocket builder interface (placeholder: styled div mockup)
- `feature-ai`: Illustration of AI character chatting (placeholder: chat bubble SVG)
- `feature-world`: Illustration of space map (placeholder: dot-and-line constellation SVG)

---

### S4 — For Parents / For Teachers

**When:** Below feature highlights.

**Purpose:** Speak directly to the two buyer personas with tailored messaging.

**Layout:** Two-column split (desktop), stacked tabs or accordion (mobile).

**For Parents:**
- "Science your kid actually wants to do after school"
- Experiment-based, not video-based
- Aligned to real science standards (NGSS)
- Progress updates sent to your inbox weekly
- Safe, ad-free, no in-app purchases

**For Teachers:**
- "A virtual lab that runs itself"
- Plug-and-play: standards-aligned experiments ready to assign
- Replaces prep-heavy physical labs on tight schedules
- Built-in data collection and student progress tracking
- Works on school devices (web-based, no install)

---

### S5 — Team / Vision

**When:** Below parent/teacher section.

**Purpose:** Establish credibility. Minimal treatment.

**Content:**
- One-liner vision statement: "We believe every child deserves to learn science the way scientists actually do it — by experimenting."
- Team:
  - Alex Zhang — CEO
  - Vivian Ren — COO
- Optional: link to fuller "About" page (future)

**Layout:** Centered text block with small headshots or avatar placeholders.

---

### S6 — FAQ

**When:** Below team section.

**Purpose:** Pre-answer the most common questions from all three audiences.

**Format:** Expandable accordion (click to reveal answer).

**Questions to include:**

1. What ages is QuestLab for?
   - QuestLab is designed for kids roughly ages 6 to 12 (K through 6th grade).

2. Is QuestLab free?
   - We're building toward launch. Join the waitlist for early access — pricing details will come later.

3. Does QuestLab align with school science standards?
   - Yes. All experiments are aligned to Next Generation Science Standards (NGSS).

4. What devices does it work on?
   - QuestLab runs in any modern web browser on desktop, laptop, or tablet. No download or install needed.

5. Is it safe for kids?
   - Absolutely. There are no ads, no in-app purchases, and the AI assistant is guardrailed to stay on-topic and age-appropriate.

6. Can teachers use it in the classroom?
   - Yes. QuestLab is designed to work as a standalone virtual lab session. Teacher tools and class management features are in development.

7. How can I get involved or stay updated?
   - Join our waitlist below. We'll send updates as we approach launch.

---

### S7 — Bottom CTA / Waitlist Form

**When:** Final section before footer.

**Purpose:** Convert visitors who have read through the page.

**Headline:** "Be the first to explore"
**Subtext:** "Join the QuestLab waitlist and we'll let you know when we're ready for launch."

**Form fields:**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | text | yes | First name is sufficient |
| Email | email | yes | Validated client + server side |
| Role | select | yes | Options: Parent, Teacher, School Admin, Other |
| School / Organization | text | no | Free text, optional |

**On submit:**
- Validate all fields client-side
- Write to Supabase `waitlist` table
- Show success state: "You're on the list! We'll be in touch."
- Disable re-submission (show success state persistently via localStorage flag)

**Design note:** This form should feel inviting, not transactional. Generous spacing, clear labels, no pressure language.

---

## Data Model

| Table | Field | Type | Notes |
|-------|-------|------|-------|
| waitlist | id | uuid | Primary key, auto-generated |
| waitlist | name | text | First name |
| waitlist | email | text | Unique, validated |
| waitlist | role | text | Enum: parent, teacher, school_admin, other |
| waitlist | organization | text | Nullable, free text |
| waitlist | created_at | timestamptz | Auto-set on insert |
| waitlist | source | text | Default: 'landing_page', for future tracking |

---

## Image Assets Inventory

| Asset key | Description | Placeholder strategy | Final format |
|-----------|-------------|---------------------|--------------|
| hero-bg | Deep purple sky gradient | CSS radial-gradient | PNG or keep CSS |
| hero-landscape | Green rolling hills | CSS clip-path + gradient | PNG with transparency |
| hero-planet | Purple/lavender sphere | CSS radial-gradient circle | PNG with transparency |
| hero-character | Small explorer figure on hill | Simple SVG silhouette | PNG with transparency |
| logo-icon | QuestLab planet icon | CSS circle with gradient | SVG |
| logo-wordmark | "QuestLab" text | Rendered in Lexend font | SVG or font rendering |
| feature-experiment | Rocket builder UI mockup | Styled div with border | PNG or SVG illustration |
| feature-ai | AI assistant character | Chat bubble SVG | PNG or SVG illustration |
| feature-world | Space map overview | Dot-and-line SVG | PNG or SVG illustration |
| team-alex | Alex Zhang headshot | Gray circle placeholder | JPG/PNG |
| team-vivian | Vivian Ren headshot | Gray circle placeholder | JPG/PNG |

All assets loaded via `/lib/assets.ts` config file. Swap by changing paths in one place.

---

## Out of Scope for v1 (Landing Page)

- User authentication / login
- Full app pages (map, experiment engine, dashboard)
- Payment or subscription flows
- Blog or content pages
- Analytics dashboard (basic Supabase insert counts are sufficient)
- SEO beyond basic meta tags and OG image
- Internationalization / multi-language support
- Email automation (Supabase collects; email campaigns are a separate tool)
