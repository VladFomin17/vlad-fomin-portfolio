# Architecture

## Current structure

- `app/layout.tsx` - global metadata and document shell.
- `app/site.ts` - canonical production URL shared by metadata routes.
- `app/robots.ts`, `app/sitemap.ts`, static social images - crawl and share metadata.
- `app/page.tsx` - single landing-page route.
- `app/components/Portfolio/` - data-backed project section and gallery styles.
- `app/components/About/`, `Services/`, `Stack/`, `Process/`, `Faq/`, `Contact/` - semantic landing-page sections.
- `app/components/Reveal/` - client-only IntersectionObserver wrapper for scroll reveals.
- `app/components/SectionCta/` - shared contact CTA used after content sections.
- `app/components/SiteHeader/` - sticky header that reacts to scroll direction.
- `app/components/ThemeToggle/` - persisted light/dark theme control.
- `app/globals.css` - shared design tokens and responsive layout styles.
- `docs/` - project documentation.

## Strategy

The first version uses one route and server-rendered React components. Project
images live under `public/projects/`, render through `next/image`, and use a
CSS scroll-snap portfolio carousel and layered screenshot gallery without
client-side state. The portfolio carousel uses a small client-side index for
cyclic arrow navigation and keeps the active card centered. Decorative motion
uses CSS keyframes and respects `prefers-reduced-motion`.

Content sections are revealed once as they enter the viewport. The wrapper
keeps server-rendered content visible before hydration and disables motion for
users who prefer reduced motion.

Theme tokens live in `app/globals.css`. A small inline script applies the saved
or system theme before paint to avoid a color flash.

The sticky header uses a passive scroll listener throttled with
`requestAnimationFrame`. It hides while scrolling down and returns immediately
when scrolling up.

Metadata is defined in `app/layout.tsx`, including the page title,
description, canonical URL, Open Graph, Twitter, and JSON-LD basics.

Content is limited to statements supplied by the portfolio owner. FAQ answers,
Telegram, and email are rendered directly from the confirmed contact details.
