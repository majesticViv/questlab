# QuestLab — Backend Document

## Scope Note
Phase 1 (landing page) requires minimal backend: a single Supabase table for waitlist signups. This document defines the full project structure so the landing page lives within an architecture that scales into the full app without restructuring.

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14+ (App Router) | SSR, file-based routing, API routes, Vercel-native |
| Styling | Tailwind CSS 3.4+ | Utility-first, fast iteration, responsive out of the box |
| Animation | Framer Motion | Declarative scroll animations, AnimatePresence for FAQ, reduced-motion support |
| Database | Supabase (PostgreSQL) | Free tier sufficient for MVP, real-time optional, easy auth later |
| Hosting | Vercel | Zero-config Next.js deployment, preview URLs, free tier |
| Font loading | Google Fonts (Lexend) + local (Canela Text) | Lexend via `next/font/google`, Canela via `next/font/local` |
| Analytics | Vercel Analytics (optional) | Built-in, no extra setup |
| Email (future) | Resend or Supabase Edge Functions | For waitlist confirmation emails (not in Phase 1) |

---

## Database Schema

### Phase 1: Waitlist table only

```sql
-- Run this in Supabase SQL editor
create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null unique,
  role text not null check (role in ('parent', 'teacher', 'school_admin', 'other')),
  organization text,
  source text default 'landing_page',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Policy: allow anonymous inserts (for the landing page form)
create policy "Allow anonymous inserts" on public.waitlist
  for insert
  with check (true);

-- Policy: block all reads from client (admin only via Supabase dashboard)
-- No select policy = no client-side reads

-- Index on email for uniqueness checks
create index idx_waitlist_email on public.waitlist (email);

-- Add phone column (run if table already exists)
-- ALTER TABLE public.waitlist ADD COLUMN phone text;
```

### Future tables (not created in Phase 1, documented for planning)

- `users` — Auth-linked user profiles (parent, teacher, kid)
- `experiments` — Experiment definitions (variables, constraints, content)
- `trials` — Per-user experiment trial data
- `progress` — XP, streaks, badges, completed quests
- `customization` — Avatar/rocket cosmetic state

---

## TypeScript Types

```typescript
// types/waitlist.ts

export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'teacher' | 'school_admin' | 'other';
  organization?: string;
  source: string;
  created_at: string;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  role: WaitlistEntry['role'];
  organization?: string;
}
```

---

## API Functions

### POST /api/waitlist

Phase 1 uses a Next.js API route (not direct Supabase client calls from the browser) to keep the Supabase service key server-side.

```typescript
// app/api/waitlist/route.ts

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  const body = await request.json();

  // Validate
  if (!body.name || !body.email || !body.role) {
    return NextResponse.json(
      { error: 'Name, email, and role are required.' },
      { status: 400 }
    );
  }

  // Insert
  const { data, error } = await supabase
    .from('waitlist')
    .insert({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      role: body.role,
      organization: body.organization?.trim() || null,
    })
    .select()
    .single();

  if (error) {
    if (error.code === '23505') {
      // Unique constraint violation (duplicate email)
      return NextResponse.json(
        { error: 'This email is already on the waitlist.' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data.id }, { status: 201 });
}
```

---

## Environment Variables

```bash
# .env.local (NEVER committed to git)

SUPABASE_URL=            # https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=    # service_role key (server-side only)
NEXT_PUBLIC_SUPABASE_URL=  # same URL (if needed client-side later)
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # anon key (if needed client-side later)
```

For Phase 1, only `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are needed (server-side API route).

---

## File Structure

```
questlab/
├── app/
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   ├── page.tsx                  # Landing page (imports all sections)
│   ├── globals.css               # Tailwind imports + CSS custom properties
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # POST endpoint for waitlist
│   └── (future)/                 # Future app routes go here
│       ├── login/
│       ├── dashboard/
│       ├── map/
│       └── experiment/
│
├── components/
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Audiences.tsx         # Parents/Teachers split
│   │   ├── Team.tsx
│   │   ├── FAQ.tsx
│   │   ├── WaitlistForm.tsx      # Bottom CTA form
│   │   └── Header.tsx            # Sticky nav
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── Accordion.tsx
│   └── (future)/                 # Future app components
│
├── lib/
│   ├── assets.ts                 # Centralized image path config
│   ├── content.ts                # All landing page copy/text
│   ├── supabase.ts               # Supabase client init (server)
│   └── (future)/
│       └── supabase-client.ts    # Browser-side Supabase (when needed)
│
├── types/
│   └── waitlist.ts
│
├── public/
│   ├── images/                   # Landing page image assets
│   │   └── (placeholder files)
│   ├── fonts/                    # Local font files (Canela Text)
│   └── favicon.ico
│
├── docs/                         # Project documentation
│   ├── 01_PRD.md
│   ├── 02_User_Flow.md
│   ├── 03_Design_Document.md
│   ├── 04_Backend_Document.md
│   └── 05_Security_Checklist.md
│
├── .claude/
│   ├── rules/
│   │   ├── memory-profile.md
│   │   ├── memory-preferences.md
│   │   ├── memory-decisions.md
│   │   └── memory-sessions.md
│   └── settings.json
│
├── CLAUDE.md
├── .env.local                    # Environment vars (git-ignored)
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Deployment (Vercel)

### First deploy:

1. Push repo to GitHub
2. Go to vercel.com → "New Project" → import the GitHub repo
3. Framework preset: Next.js (auto-detected)
4. Add environment variables in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
5. Deploy

### Subsequent deploys:
- Every push to `main` triggers auto-deploy
- Every push to a branch creates a preview URL

### Domain:
- Use Vercel's default `.vercel.app` subdomain initially
- Add custom domain later when ready
