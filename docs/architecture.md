# Architecture

## Current structure

- `app/layout.tsx` - global metadata and document shell.
- `app/page.tsx` - single landing-page route.
- `app/components/Portfolio/` - data-backed project section and gallery styles.
- `app/components/About/`, `Services/`, `Process/`, `Contact/` - semantic landing-page sections.
- `app/globals.css` - shared design tokens and responsive layout styles.
- `docs/` - project documentation.

## Strategy

The first version uses one route and server-rendered React components. Project
images live under `public/projects/`, render through `next/image`, and use a
CSS scroll-snap gallery without client-side state.

Metadata is defined in `app/layout.tsx`, including the page title,
description, and Open Graph basics.

Content is limited to statements supported by the supplied portfolio document.
The verified GitHub profile is currently the only contact destination.
