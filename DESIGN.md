# Design System Specification: Graphite Panel

## 1. Overview & Creative North Star: "The Graphite Panel"
This design system trades the ornamented, glowing "Digital Monolith" aesthetic for something closer to an instrument panel: flat graphite-blue surfaces, one hairline border style, and a single signal-green accent used sparingly to mark what matters — status, links, and calls to action. Depth comes from panel separation, not blur or shadow. Motion is nearly absent by design: the interface should read as calm and settled, not animated.

The reference is technical and editorial at once — closer to a well-designed CLI dashboard or an engineering spec sheet than a marketing site. Every surface is a flat panel; every boundary is the same 1px hairline; every accent is the same green.

---

## 2. Color & Surface Architecture
The palette is rooted in deep graphite-blue (`#0f131a`), with a single signal-green accent (`#2fe28c`) reserved for interactive and status elements.

### The "One Hairline" Rule
**Explicit Instruction:** Every card, panel, and section boundary uses the *same* 1px border style — `border border-outline` (`#3a4453`). Never mix border-less "glow" separation with bordered separation; never introduce a second border color or width. Lower-emphasis dividers (footer rules, section dividers) use `outline-variant` (`#232a36`) instead of a second style.

### Surface Hierarchy
*   **Base Layer:** `surface` (#0f131a) or `surface-container-lowest` (#0b0e13).
*   **Card Layer:** `surface-container-low` (#141920) — this is what `.surface-card` uses.
*   **Component Layer:** `surface-container` (#1a2029) or `surface-container-high` (#212836) for nested/interactive elements.
*   No glass, no backdrop-blur, no floating "frosted" layers. Panels sit flush against the base surface, separated only by the hairline border.

### The Single Accent
`primary` (#2fe28c, signal green) is the only accent color in the system. There is no secondary or tertiary hue — those tokens exist for API compatibility but are mapped to graphite neutrals, not a second color. Use green for: links on hover, the one active CTA, active nav/tab state, status dots, and icon emphasis. Do not use green as a large fill except on `.btn-primary`.

---

## 3. Typography: IBM Plex
Pair **IBM Plex Sans** (headlines & body) with **IBM Plex Mono** (labels).

*   **Display & Headlines (IBM Plex Sans, 600–700):** `tracking-tighter` (-0.03em) on all headline sizes.
*   **Body (IBM Plex Sans, 400):** `body-md`-equivalent copy at 1.6–1.9 line-height.
*   **Labels & Mono (IBM Plex Mono):** Every eyebrow label, badge, nav item, timestamp, and stat caption uses the mono face, uppercase, wide tracking. This is what signals "instrument panel" over "generic SaaS site" — use it consistently, not just occasionally.

---

## 4. Elevation & Depth
Depth is achieved through **panel separation**, not shadow or blur.

*   **No drop shadows.** Not even soft/colored ones. A panel is either on the base surface or one step up in the surface hierarchy — that's the only depth cue.
*   **No glow.** No `box-shadow` ambient glows, no `shadow-glow` utility. If something needs to look "active" or "focused," shift its border color to `primary/50`, not its shadow.
*   **The hover rule:** on hover, `.surface-card` shifts its border from `outline` to `primary/50`. That is the *only* interactive treatment for cards — no lift, no scale, no tilt.

---

## 5. Components

### The Flat Card
`.surface-card` is the single card primitive for the entire site: `bg-surface-container-low`, `border border-outline`, `rounded-lg`, hover → `border-primary/50`. Every card-shaped thing (stat tile, service card, project card, testimonial, contact row, experience entry) is this class. Do not introduce a second card style, a second radius, or a second border weight.

### Interactive Elements
*   **Buttons:**
    *   *Primary:* Flat `primary` fill, `on-primary` text, no border, no gradient. `md` (0.375rem) corner radius. Hover = slightly brighter fill, no transform.
    *   *Ghost:* Transparent, `border-outline`. Hover = border shifts to `primary/60`, text to `primary`.
*   **Badges/Chips:** `.badge` — mono, uppercase, hairline border, no filled background.
*   **Timeline (Experience section):** a single hairline vertical rule (`bg-outline`) connects flat, bordered circular markers to `.surface-card` entries. This is the one place a connecting line is used — don't reuse the pattern elsewhere.

### Motion — Cut to One Moment
The hero's initial entrance (a single `opacity`/`translateY` fade on mount, ~0.6s) is the *only* decorative animation on the site. Specifically avoid:
*   Infinite/looping animations (pulsing badges, floating labels, rotating rings, marquees).
*   Scroll-triggered reveal-on-view animations per section.
*   Hover transforms (tilt, scale, lift, spotlight-follow-cursor).
*   Auto-advancing carousels.

Where feedback is still needed (nav active state, card hover, button hover), use a plain CSS `transition-colors` — never a spring, never a transform.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use the mono face for every small/uppercase label — it's load-bearing for the aesthetic.
*   **Do** keep every border the same color and weight (`border-outline`, 1px).
*   **Do** let whitespace and the surface hierarchy do the work depth used to do.

### Don't:
*   **Don't** add a gradient anywhere — text, buttons, or backgrounds.
*   **Don't** add a second accent color. If something needs emphasis, use `primary` or restrained neutral weight/size, not a new hue.
*   **Don't** add hover transforms, springs, or looping animations. If in doubt, remove the motion rather than tune it.
