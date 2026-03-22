# QuestLab — Security Checklist

## Scope Note
Phase 1 (landing page) has a minimal attack surface: a single form that writes to a database. This checklist covers that surface thoroughly and flags future considerations for when auth and user data are introduced.

---

## Phase 1: Landing Page — Pre-Deployment

### Environment & Secrets
- [ ] `.env.local` is listed in `.gitignore`
- [ ] `SUPABASE_SERVICE_KEY` is only used in server-side code (`app/api/` routes), never in client components
- [ ] No secrets or API keys appear in any client-side bundle (verify with `next build` + inspect output)
- [ ] Vercel environment variables are set and scoped correctly (Production + Preview)

### Waitlist Form Security
- [ ] Email validation: client-side (HTML5 + regex) AND server-side in API route
- [ ] Input sanitization: all text fields trimmed, email lowercased
- [ ] Role field constrained to enum values server-side (reject anything outside 'parent', 'teacher', 'school_admin', 'other')
- [ ] SQL injection protection: using Supabase client (parameterized queries by default), no raw SQL from user input
- [ ] Duplicate email handling: return 409 with user-friendly message, no information leakage about existing entries
- [ ] Rate limiting: implement basic rate limiting on `/api/waitlist` (e.g., 5 requests per IP per minute via Vercel Edge middleware or a simple in-memory counter)
- [ ] CSRF: Next.js API routes with same-origin fetch are reasonably protected; add explicit origin check if concerned
- [ ] Form does not store sensitive data (no passwords, no payment info, no PII beyond name + email)

### Database Security
- [ ] Row Level Security (RLS) enabled on `waitlist` table
- [ ] Only INSERT policy exists for anonymous access (no SELECT, UPDATE, DELETE from client)
- [ ] Waitlist data viewable only through Supabase dashboard (admin access)
- [ ] Supabase anon key is NOT used in Phase 1 (service key used server-side only)

### HTTP & Headers
- [ ] HTTPS enforced (Vercel handles this automatically)
- [ ] Add security headers via `next.config.js`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy`: restrict scripts to self, inline (for Next.js), and trusted CDNs only
- [ ] No sensitive data in URL parameters

### Dependencies
- [ ] Run `npm audit` before deploy, fix any high/critical vulnerabilities
- [ ] Pin major dependency versions in `package.json`
- [ ] Use `next/font` for font loading (no external font CDN script tags)

### Content & Assets
- [ ] No placeholder text that could be mistaken for real content in production
- [ ] All external links (if any) use `rel="noopener noreferrer"`
- [ ] No console.log statements with sensitive data left in production code

---

## Phase 1: Post-Deploy Verification

- [ ] Submit a test waitlist entry; verify it appears in Supabase dashboard
- [ ] Submit a duplicate email; verify 409 response and user-friendly error message
- [ ] Submit with missing required fields; verify 400 response
- [ ] Submit with malformed email; verify client-side and server-side rejection
- [ ] Inspect page source / network tab: confirm no API keys or secrets exposed
- [ ] Test on mobile (real device): form submits correctly, success state shows
- [ ] Check `prefers-reduced-motion`: page renders correctly without animations
- [ ] Lighthouse audit: check for security warnings and accessibility score (target 90+)
- [ ] Verify HTTPS lock icon in browser

---

## Future Phases: Pre-Auth Security Considerations (Not Implemented Yet)

These items become relevant when user accounts and the full app are built:

- [ ] Authentication via Supabase Auth (email + password or magic link)
- [ ] COPPA compliance for child users (parental consent flow)
- [ ] Session management and token refresh
- [ ] Role-based access control (parent vs teacher vs child)
- [ ] AI assistant input sanitization (prevent prompt injection)
- [ ] Experiment data: ensure kids cannot access other kids' data
- [ ] Content Security Policy tightened for app routes
- [ ] Regular dependency audits scheduled
- [ ] Data retention and deletion policy (GDPR/COPPA readiness)
