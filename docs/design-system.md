# Design System

## Current state

`src/app/page.tsx` has a placeholder homepage built before the real LSSPM
brief was available: English copy, a generic cool-grey/brass ledger-style
palette, Source Serif 4 + IBM Plex Sans. It does not reflect the real
institution and should be treated as scaffolding to replace, not a finished
design.

## What the real brief requires

- Primary language French; the design system must not hard-code copy in
  components — content needs to be swappable per FR/AR/EN, with proper RTL
  support for Arabic.
- Logo: authoritative asset expected at `/public/branding/lsspm-logo.png`
  (not present in the repo yet) — derive the palette from it rather than
  choosing one independently. Do not redraw or reinterpret the logo.
- Visual language: blue/green/turquoise/white/neutral dark grey, restrained
  and institutional — not a generic SaaS, startup, clinic, or university
  template. Avoid heavy gradients, glassmorphism, or decorative animation.

Next design pass should start from the actual logo file once supplied.
