# QuestLab — User Flow Document

## Scope Note
This document covers **Phase 1: Landing Page** flows only. App flows (signup, onboarding, experiment engine, space map) will be added in future phases.

---

## Flow Diagram

```
[User arrives at URL]
        │
        ▼
┌─────────────────────┐
│   S1: HERO SECTION   │
│                       │
│  Logo + Tagline +     │
│  "Join the Waitlist"  │
│  button               │
└──────────┬────────────┘
           │ scroll
           ▼
┌─────────────────────┐
│  S2: HOW IT WORKS    │
│  5-phase visual flow │
└──────────┬────────────┘
           │ scroll
           ▼
┌─────────────────────┐
│  S3: FEATURES        │
│  3 feature cards     │
└──────────┬────────────┘
           │ scroll
           ▼
┌─────────────────────┐
│  S4: PARENTS/TEACHERS│
│  Split messaging     │
└──────────┬────────────┘
           │ scroll
           ▼
┌─────────────────────┐
│  S5: TEAM / VISION   │
│  Minimal bios        │
└──────────┬────────────┘
           │ scroll
           ▼
┌─────────────────────┐
│  S6: FAQ             │
│  Accordion items     │
└──────────┬────────────┘
           │ scroll
           ▼
┌─────────────────────┐
│  S7: BOTTOM CTA      │
│  Waitlist form       │
│  [Name] [Email]      │
│  [Role] [Org]        │
│  [Submit]            │
└──────────┬────────────┘
           │ submit
           ▼
    ┌──────┴──────┐
    │  Success?   │
    ├─ Yes ───────┼──▶  Show "You're on the list!" state
    └─ No ────────┘──▶  Show inline validation errors
```

---

## Screen-by-Screen Details

### S1: Hero Section

```
┌──────────────────────────────────────────────┐
│                                              │
│              (purple background)             │
│                                              │
│            🪐  QuestLab                      │
│                                              │
│    Every kid is born a scientist,            │
│    so QuestLab puts the Quest back           │
│    in their Question.                        │
│                                              │
│         [ Join the Waitlist ]                │
│                                              │
│  ~~~~~~~~ green landscape ~~~~~~~~~~         │
│         🧑‍🚀 (character on hill)              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- "Join the Waitlist" button → smooth scroll to S7 (bottom CTA form)
- Scroll down → parallax: landscape compresses, planet drifts, content sections revealed

**Animation on load (sequence):**
1. Purple bg: immediate
2. Landscape: fade-in from bottom (0.4s)
3. Planet: rises from behind landscape (0.8s, ease-out with slight overshoot)
4. Logo + wordmark: fade + scale in (0.5s)
5. Tagline: fade up (0.3s staggered)
6. CTA button: fade in (0.3s staggered)

**Scroll-driven animation:**
- 0-30vh scroll: hero stays composed
- 30-80vh scroll: landscape slides down and toward bottom-left, scales to ~60%. Planet drifts up slightly, opacity reduces to ~40%. Character scales with landscape.
- 80vh+: hero elements are mostly off-screen or minimal, content sections take over

---

### S2: How It Works

```
┌──────────────────────────────────────────────┐
│                                              │
│  Accessible learning through virtual         │
│  sandbox experimentation                     │
│                                              │
│  ①──────②──────③──────④──────⑤              │
│  Explore  Predict  Experiment  Analyze  Explain│
│  (desc)  (desc)   (desc)     (desc)   (desc)│
│                                              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- Scroll into view → each step fades in with 0.1s stagger
- Hover on step (desktop) → slight lift + expanded description
- No click actions

---

### S3: Feature Highlights

```
┌──────────────────────────────────────────────┐
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 🚀       │ │ 🤖       │ │ 🌌       │    │
│  │Experiment │ │AI Lab    │ │Space     │    │
│  │Engine     │ │Assistant │ │World     │    │
│  │           │ │          │ │          │    │
│  │(desc)     │ │(desc)    │ │(desc)    │    │
│  └──────────┘ └──────────┘ └──────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- Scroll into view → cards fade up with stagger
- Hover (desktop) → subtle scale + shadow lift
- No click actions

---

### S4: For Parents / For Teachers

```
┌──────────────────────────────────────────────┐
│                                              │
│  ┌── For Parents ──┐ ┌── For Teachers ──┐   │
│  │                  │ │                   │   │
│  │ • bullet points  │ │ • bullet points   │   │
│  │ • tailored to    │ │ • tailored to     │   │
│  │   parent needs   │ │   teacher needs   │   │
│  │                  │ │                   │   │
│  └──────────────────┘ └───────────────────┘   │
│                                              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- Desktop: both columns visible simultaneously
- Mobile: tab toggle ("For Parents" | "For Teachers") or stacked with clear headers
- No click actions beyond tab switching on mobile

---

### S5: Team / Vision

```
┌──────────────────────────────────────────────┐
│                                              │
│  "We believe every child deserves to learn   │
│   science the way scientists actually do     │
│   it — by experimenting."                    │
│                                              │
│       (photo)          (photo)               │
│     Alex Zhang       Vivian Ren              │
│        CEO              COO                  │
│                                              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- None. Static display.

---

### S6: FAQ

```
┌──────────────────────────────────────────────┐
│                                              │
│  Frequently Asked Questions                  │
│                                              │
│  ▸ What ages is QuestLab for?               │
│  ▾ Is QuestLab free?                        │
│    └─ We're building toward launch...        │
│  ▸ Does it align with school standards?     │
│  ▸ What devices does it work on?            │
│  ▸ Is it safe for kids?                     │
│  ▸ Can teachers use it in the classroom?    │
│  ▸ How can I stay updated?                  │
│                                              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- Click question → expand answer with smooth height transition
- Click again → collapse
- Only one open at a time (accordion behavior)

---

### S7: Bottom CTA / Waitlist Form

```
┌──────────────────────────────────────────────┐
│                                              │
│         Be the first to explore              │
│  Join the QuestLab waitlist and we'll let    │
│  you know when we're ready for launch.       │
│                                              │
│  ┌─────────────────────────────────┐        │
│  │ Name          [______________]  │        │
│  │ Email         [______________]  │        │
│  │ I am a...     [▾ Select role ]  │        │
│  │ School / Org  [______________]  │        │
│  │                                 │        │
│  │     [ Join the Waitlist ]       │        │
│  └─────────────────────────────────┘        │
│                                              │
└──────────────────────────────────────────────┘
```

**Interactions:**
- Tab through fields normally
- Submit → client-side validation first
  - Name: required, non-empty
  - Email: required, valid email format
  - Role: required, must select one
  - Org: optional
- On validation fail → inline error messages below each field
- On validation pass → POST to Supabase
  - On success → form replaced with "You're on the list! We'll be in touch." message
  - On error → "Something went wrong. Please try again." with retry option

**Post-submission state:**
- Success state persists via localStorage so returning visitors see it
- "Already signed up? We'll be in touch soon." replaces form on return visits

---

## Navigation

**Header (sticky on scroll):**
- QuestLab logo (small, left-aligned)
- Nav links: How It Works | Features | FAQ
- "Join Waitlist" button (right-aligned, scrolls to S7)
- Header appears after scrolling past the hero section (hidden during hero)

**Footer:**
- © 2026 QuestLab
- Links: Privacy Policy (placeholder) | Terms (placeholder) | Contact email
- Social links: placeholders for Twitter/X, LinkedIn (if applicable)

---

## Responsive Behavior Summary

| Element | Desktop (1200px+) | Tablet (768-1199px) | Mobile (<768px) |
|---------|--------------------|---------------------|-----------------|
| Hero | Full composition | Full composition, scaled | Simplified: stacked vertically, reduced parallax |
| How It Works | Horizontal 5-step row | Horizontal, compressed | Vertical stack |
| Features | 3-column cards | 2+1 grid | Single column stack |
| Parents/Teachers | Side-by-side columns | Side-by-side, narrower | Tabbed or stacked |
| Team | Centered row | Centered row | Stacked |
| FAQ | Centered accordion | Centered accordion | Full-width accordion |
| Waitlist Form | Centered card | Centered card | Full-width |

---

## Animation Notes Summary

| Animation | Trigger | Duration | Easing | Notes |
|-----------|---------|----------|--------|-------|
| Landscape fade-in | Page load | 0.4s | ease-out | Bottom-up slide |
| Planet rise | After landscape | 0.8s | ease-out + overshoot | Simulates moonrise |
| Logo appear | After planet | 0.5s | ease-out | Fade + slight scale |
| Tagline appear | After logo | 0.3s | ease-out | Fade up |
| CTA appear | After tagline | 0.3s | ease-out | Fade in |
| Hero parallax | Scroll (30-80vh) | Scroll-driven | linear | Landscape compresses, planet fades |
| Section entrance | Scroll into viewport | 0.5s per element | ease-out | Fade-up with stagger |
| FAQ accordion | Click | 0.25s | ease-in-out | Height transition |
| Header reveal | Scroll past hero | 0.3s | ease-out | Slide down from top |
