# QuestLab — Design Document

## ⚠️ Critical Rules

- All images loaded from `/lib/assets.ts`. No hardcoded paths in components.
- Every image slot must have a built-in CSS/SVG placeholder that renders without external files.
- Respect `prefers-reduced-motion`: skip all entrance and scroll animations, show final state with simple fade.
- Font loading must use `font-display: swap`. Page must not flash unstyled text or shift layout on font load.
- All scroll-driven animations must be performant (use `transform` and `opacity` only, no layout-triggering properties).
- Minimum touch target size: 44x44px on all interactive elements.
- Color contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text).

---

## Design Philosophy

1. **Composed, not cluttered.** Every element earns its space. White space is structural, not decorative.
2. **Character without childishness.** The visual tone speaks to kids through wonder and to adults through polish. The page should feel like a product made by a real team, with a personality that kids would trust and adults would respect.
3. **Motion with purpose.** Animations exist to direct attention and communicate spatial relationships (the planet rising, the landscape receding). Nothing moves just to move.
4. **Accessible by default.** Readable type sizes, strong contrast, keyboard-navigable, reduced-motion-safe.

---

## Color Palette

```css
:root {
  /* Primary */
  --color-bg-deep: #1a0a2e;          /* Deep purple — hero background base */
  --color-bg-mid: #2d1854;           /* Mid purple — gradient blend */
  --color-purple-accent: #7c4dff;    /* Bright purple — buttons, accents */
  --color-purple-light: #b388ff;     /* Light purple — hover states, highlights */

  /* Planet */
  --color-planet-base: #9b7cc5;      /* Lavender — planet body */
  --color-planet-highlight: #d4b8e8; /* Light lavender — planet highlight */
  --color-planet-shadow: #5a3d7a;    /* Dark purple — planet shadow */

  /* Landscape */
  --color-land-dark: #2d5a27;        /* Dark green — landscape shadows */
  --color-land-mid: #4a8c3f;         /* Mid green — landscape body */
  --color-land-light: #6db35f;       /* Light green — landscape highlights */

  /* Neutrals */
  --color-white: #ffffff;
  --color-off-white: #f5f3f7;        /* Slight purple tint — section backgrounds */
  --color-gray-100: #e8e4ed;
  --color-gray-300: #b8b0c4;
  --color-gray-500: #7a7189;
  --color-gray-700: #4a4258;
  --color-gray-900: #1e1a28;

  /* Semantic */
  --color-text-primary: #ffffff;      /* On dark backgrounds */
  --color-text-body: #1e1a28;         /* On light backgrounds */
  --color-text-muted: #7a7189;        /* Secondary text on light bg */
  --color-success: #4caf50;
  --color-error: #ef5350;
}
```

**Note:** These colors are derived from the hero image. The exact hex values should be refined against the final assets. The palette should feel like it grew out of the illustration, not like it was picked from a color tool independently.

---

## Typography

```css
:root {
  /* Font families */
  --font-display: 'Lexend', system-ui, sans-serif;
  --font-accent: 'Canela Text', Georgia, 'Times New Roman', serif;

  /* Scale (desktop) */
  --text-hero: 3.5rem;       /* 56px — hero tagline only */
  --text-h1: 2.5rem;         /* 40px — section headers */
  --text-h2: 1.75rem;        /* 28px — feature card headlines */
  --text-h3: 1.25rem;        /* 20px — sub-headers */
  --text-body: 1.0625rem;    /* 17px — body copy */
  --text-small: 0.875rem;    /* 14px — captions, labels */

  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;

  /* Font weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}
```

**Usage rules:**
- Lexend for all headings, body text, UI labels, and buttons
- Canela Text for the hero tagline and the vision statement in the team section only
- Never use Canela Text for body copy or UI elements (it's a display serif, not a reading serif)

**Responsive type scale:**
- Mobile: reduce `--text-hero` to 2rem, `--text-h1` to 1.75rem, `--text-h2` to 1.375rem
- Tablet: reduce `--text-hero` to 2.75rem, others stay or reduce slightly

---

## Element Structure (for image replacement)

Each image slot follows this pattern in components:

```jsx
{/* Example: Hero Planet */}
<div className="hero-planet" data-asset="hero-planet">
  {assets.heroPlanet ? (
    <img src={assets.heroPlanet} alt="QuestLab planet" />
  ) : (
    <div className="hero-planet-placeholder">
      {/* CSS gradient circle fallback */}
    </div>
  )}
</div>
```

All asset keys map to `/lib/assets.ts`:

```typescript
export const assets = {
  heroBg: null,           // or '/images/hero-bg.png'
  heroLandscape: null,    // or '/images/hero-landscape.png'
  heroPlanet: null,       // or '/images/hero-planet.png'
  heroCharacter: null,    // or '/images/hero-character.png'
  logoIcon: null,         // or '/images/logo-icon.svg'
  logoWordmark: null,     // or '/images/logo-wordmark.svg'
  featureExperiment: null,
  featureAi: null,
  featureWorld: null,
  teamAlex: null,
  teamVivian: null,
} as const;
```

Set any value to a path string to replace the placeholder with a real image.

---

## Screen Layouts

### Hero (S1)

```
Desktop (1440px viewport):
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [bg: radial gradient from --color-bg-mid center     │
│   to --color-bg-deep edges, full viewport]           │
│                                                      │
│          ┌──────────┐                                │
│          │  Planet   │  ← centered, top ~25% of vh   │
│          │  (180px)  │                                │
│          └──────────┘                                │
│                                                      │
│       🪐 QuestLab         ← logo + wordmark, center  │
│                            font: Lexend 700, 3rem    │
│                                                      │
│    "Every kid is born a scientist,                   │
│     so QuestLab puts the Quest                       │
│     back in their Question."                         │
│              ↑ font: Canela Text 400, 3.5rem         │
│              ↑ max-width: 720px, centered            │
│                                                      │
│       [ Join the Waitlist ]                          │
│         ↑ bg: --color-purple-accent                  │
│         ↑ text: white, Lexend 600                    │
│         ↑ padding: 14px 32px                         │
│         ↑ border-radius: 8px                         │
│                                                      │
│ ~~~~ landscape ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  │
│         🧑‍🚀  ← character centered on tallest hill     │
│              ↑ bottom: 0, layered above landscape    │
└──────────────────────────────────────────────────────┘
```

**Z-index stacking (bottom to top):**
1. Purple gradient background
2. Landscape illustration
3. Character figure
4. Planet (positioned behind landscape initially, rises above on load)
5. Logo + text + CTA (topmost, centered)

### Content Sections (S2-S7)

```
All content sections:
- Background: --color-off-white (alternating with --color-white for visual rhythm)
- Max content width: 1120px, centered
- Section padding: 96px vertical (desktop), 64px (tablet), 48px (mobile)
- Section headers: Lexend 700, --text-h1, --color-text-body
- Body text: Lexend 400, --text-body, --color-text-body, max-width 680px for readability
```

### Sticky Header (appears after hero)

```
┌──────────────────────────────────────────────────────┐
│  🪐 QuestLab    How It Works  Features  FAQ    [Join Waitlist] │
│  ↑ logo small   ↑ nav links, Lexend 500       ↑ button small  │
│  height: 64px   bg: white/95% opacity + backdrop-blur          │
└──────────────────────────────────────────────────────┘
```

---

## Component Spacing System

```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
}
```

---

## Button Styles

```css
/* Primary CTA */
.btn-primary {
  background: var(--color-purple-accent);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: var(--weight-semibold);
  font-size: var(--text-body);
  padding: 14px 32px;
  border-radius: 8px;
  transition: background 0.2s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--color-purple-light);
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}

/* Header CTA (smaller) */
.btn-header {
  /* Same as primary but: */
  padding: 8px 20px;
  font-size: var(--text-small);
}
```

---

## Animation Specifications

| Animation | Trigger | Duration | Easing | Transform Properties | Notes |
|-----------|---------|----------|--------|---------------------|-------|
| Landscape enter | Page load | 400ms | cubic-bezier(0.25, 0.46, 0.45, 0.94) | translateY(40px) → 0, opacity 0 → 1 | First element to appear |
| Planet rise | Load + 400ms delay | 800ms | cubic-bezier(0.34, 1.56, 0.64, 1) | translateY(120px) → 0, opacity 0 → 1 | Overshoot ease simulates gravitational settle |
| Logo appear | Load + 1200ms delay | 500ms | ease-out | scale(0.95) → 1, opacity 0 → 1 | Subtle scale, mostly opacity |
| Tagline appear | Load + 1600ms delay | 300ms | ease-out | translateY(12px) → 0, opacity 0 → 1 | Light upward drift |
| CTA appear | Load + 1800ms delay | 300ms | ease-out | opacity 0 → 1 | Fade only, no movement |
| Scroll parallax (landscape) | Scroll 30-80vh | Scroll-driven | linear | translateY(0) → translateY(30vh), scale(1) → scale(0.6), opacity 1 → 0.3 | Compresses and drifts |
| Scroll parallax (planet) | Scroll 30-80vh | Scroll-driven | linear | translateY(0) → translateY(-20vh), opacity 1 → 0.4 | Drifts upward, fades |
| Section entrance | Intersection observer, threshold 0.15 | 500ms per element | ease-out | translateY(24px) → 0, opacity 0 → 1 | Stagger children by 100ms |
| FAQ expand | Click | 250ms | ease-in-out | height 0 → auto (use max-height trick or Framer Motion AnimatePresence) | Smooth accordion |
| Header reveal | Scroll past 100vh | 300ms | ease-out | translateY(-100%) → 0 | Slides in from top |

---

## Image Asset Checklist

| Asset | Dimensions (desktop) | Format | Placeholder | Provided? |
|-------|---------------------|--------|-------------|-----------|
| hero-bg | 1920x1080+ | PNG or CSS gradient | CSS radial-gradient | ☐ (use CSS) |
| hero-landscape | 1920x~400 | PNG (transparent bg) | CSS clip-path green | ☐ |
| hero-planet | ~200x200 | PNG (transparent bg) | CSS radial-gradient circle | ☐ |
| hero-character | ~60x80 | PNG (transparent bg) | SVG silhouette | ☐ |
| logo-icon | 48x48 | SVG | CSS circle | ☐ |
| logo-wordmark | variable | SVG or font render | Lexend bold text | ☐ (use font) |
| feature-experiment | 320x240 | PNG/SVG | Styled mockup div | ☐ |
| feature-ai | 320x240 | PNG/SVG | Chat bubble SVG | ☐ |
| feature-world | 320x240 | PNG/SVG | Constellation SVG | ☐ |
| team-alex | 120x120 | JPG/PNG | Gray circle + initials | ☐ |
| team-vivian | 120x120 | JPG/PNG | Gray circle + initials | ☐ |

All images optimized with Next.js `<Image>` component for automatic sizing and WebP conversion.
