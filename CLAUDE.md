# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
```

## Architecture

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, `@iconify/react`

**Data flow:** All 9 API endpoints at `https://www.shubhkumar.in/api/*` are fetched in parallel in `app/page.tsx` (a server component) using `Promise.all`. Responses are cached for 1 hour via `next: { revalidate: 3600 }`. See `lib/api.ts` for all fetch functions.

**Folder structure:**
- `app/` — Next.js App Router (layout, page, globals.css)
- `components/` — One file per section + shared utilities
- `lib/api.ts` — Typed fetch wrappers for all 9 APIs
- `types/index.ts` — TypeScript interfaces matching API shapes

**Component split:**
- Server components: About, Experience, Skills, Services, Certificates, Contact, Footer, SectionHeader
- Client components (`"use client"`): Navigation (scroll state + mobile menu), Hero (Framer Motion entry animations), Testimonials (interactive carousel), AnimateOnScroll (scroll-triggered animations)

**API endpoints used:**

| Export | Endpoint | Type |
|--------|----------|------|
| `getMe` | `/api/me` | `Me` |
| `getSocials` | `/api/socials` | `Social[]` |
| `getContacts` | `/api/contacts` | `Contact[]` |
| `getNav` | `/api/nav` | `Nav` |
| `getExperience` | `/api/experience` | `Experience[]` |
| `getSkills` | `/api/skills` | `Skill[]` |
| `getServices` | `/api/services` | `Service[]` |
| `getTestimonials` | `/api/testimonials` | `Testimonial[]` |
| `getCertificates` | `/api/certificates` | `Certificate[]` |

## Design System

"Graphite Panel" aesthetic — flat, hairline-bordered, single-accent.

**Key rules:**
- One hairline border style everywhere — `border border-outline` (or `outline-variant` for lower-emphasis dividers). No glass/blur, no drop shadows, no glow.
- No pure black — use `surface` (#0f131a) or `surface-container-lowest` (#0b0e13)
- Single accent color: signal green `primary` (#2fe28c). No secondary/tertiary hues — those tokens are collapsed to graphite neutrals.
- Flat fills only — no gradients on buttons, text, or panels.
- Motion is intentionally minimal: the hero's one-time entrance fade is the only decorative animation on the site. Everything else renders statically; hover states are plain color transitions, not transforms/springs.

**Surface hierarchy (darkest→lightest):** `surface-container-lowest` → `surface-container-low` → `surface-container` → `surface-container-high` → `surface-container-highest`

**Typography:** `font-headline` / `font-body` = IBM Plex Sans (headlines/paragraphs), `font-label` = IBM Plex Mono (eyebrows, badges, nav, timestamps), tracking-tighter on headlines

**Reusable CSS classes** (in `globals.css`):
- `.btn-primary` — flat signal-green CTA button
- `.btn-ghost` — hairline-border ghost button
- `.badge` — mono label chip, hairline border
- `.surface-card` — the one card treatment: `bg-surface-container-low` + `border-outline` hairline, hover shifts border to `primary/50`
- `.gradient-text` — solid signal-green text (name kept for compat, no longer a gradient)
- `.section-base` — standard section padding + max-width

**Skill icons:** The `/api/skills` response returns icons as `{ light: string, dark: string }` base64 data URIs or URL strings. Always use the `dark` variant. Helper: `getIconSrc(icon: Skill["icon"])` in `components/Skills.tsx`.
