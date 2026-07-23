# AGENTS.md

## Project

Personal portfolio website for a frontend developer.

The website is a commercial landing page whose primary goal is to convert visitors into clients.

Every decision should improve:

- trust
- readability
- conversion
- maintainability
- performance

---

# Tech Stack

- Next.js
- TypeScript
- Vite
- pnpm
- SCSS Modules
- Framer Motion
- React Icons

Do not introduce unnecessary dependencies.

---

# Styling

Use CSS Modules.

Do NOT use:

- Tailwind
- Styled Components
- Emotion

Prefer semantic class names.

Use CSS variables.

Desktop-first responsive layout.

---

# Architecture

Prefer:

- reusable components
- composition
- clean folder structure
- separation of concerns

Avoid:

- duplicated code
- large files
- unnecessary abstractions

---

# Performance

Optimize images.

Lazy load where appropriate.

Avoid unnecessary renders.

Keep Lighthouse score high.

---

# Accessibility

Semantic HTML.

Keyboard accessible.

Proper heading hierarchy.

Meaningful alt text.

---

# SEO

Every page must contain:

- title
- description
- Open Graph

Semantic markup.

---

# Documentation

Documentation is part of the project.

Whenever architecture changes or important decisions are made:

- update docs/architecture.md
- update docs/changelog.md if functionality changes
- update docs/tasks.md when completing tasks

Never leave documentation outdated.

---

# Git Workflow

Maintain a clean local repository.

Work in small logical tasks.

After completing every meaningful task:

1. Review your changes.
2. Remove dead code.
3. Ensure the project builds.
4. Commit.

Use commit messages like:

feat:
fix:
refactor:
style:
docs:

Avoid huge commits.

Commits should represent one logical change.

Never mix unrelated changes.

Push only after stable milestones.

---

# Working Process

Before implementation:

1. Understand existing code.
2. Inspect documentation.
3. Explain implementation plan.
4. Implement.
5. Self-review.
6. Update documentation.
7. Commit.

Always think before coding.

Never implement features blindly.

---

# Communication

If requirements are ambiguous:

Ask one clarifying question.

Otherwise make the best engineering decision and explain important tradeoffs.

---

# Quality Checklist

Before considering work complete:

✔ Project builds

✔ No TypeScript errors

✔ No ESLint errors

✔ Responsive

✔ Accessible

✔ Optimized

✔ No dead code

✔ Documentation updated

✔ Commit created