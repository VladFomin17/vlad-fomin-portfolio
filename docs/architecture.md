# Architecture

## Current structure

- `app/layout.tsx` — global metadata and document shell.
- `app/page.tsx` — single landing-page route.
- `app/globals.css` — shared design tokens and responsive layout styles.
- `docs/` — project documentation.

## Strategy

The first version uses one route and server-rendered React components. Sections
remain plain semantic HTML until interaction or repeated composition justifies
a component split. Project images will live under `public/` and use native
image loading controls where needed.

Metadata is defined in `app/layout.tsx`, including the page title,
description, and Open Graph basics.
