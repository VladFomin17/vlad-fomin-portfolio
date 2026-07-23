# Architecture

## Current structure

- `app/layout.tsx` - global metadata and document shell.
- `app/page.tsx` - single landing-page route.
- `app/components/Portfolio/` - data-backed project section and gallery styles.
- `app/components/About/`, `Services/`, `Stack/`, `Process/`, `Faq/`, `Contact/` - semantic landing-page sections.
- `app/components/Reveal/` - client-only IntersectionObserver wrapper for scroll reveals.
- `app/components/SectionCta/` - shared contact CTA used after content sections.
- `app/globals.css` - shared design tokens and responsive layout styles.
- `docs/` - project documentation.

## Strategy

The first version uses one route and server-rendered React components. Project
images live under `public/projects/`, render through `next/image`, and use a
CSS scroll-snap portfolio carousel and layered screenshot gallery without
client-side state. Decorative motion uses CSS keyframes and respects
`prefers-reduced-motion`.

Content sections are revealed once as they enter the viewport. The wrapper
keeps server-rendered content visible before hydration and disables motion for
users who prefer reduced motion.

Metadata is defined in `app/layout.tsx`, including the page title,
description, and Open Graph basics.

Content is limited to statements supplied by the portfolio owner. FAQ answers,
Telegram, and email are rendered directly from the confirmed contact details.
