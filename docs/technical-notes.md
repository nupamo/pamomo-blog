# Technical Notes

## Architecture
- **Framework**: React 19 + Vite 6
- **Routing**: React Router v7 (Client-side routing)
- **Styling**: Tailwind CSS v4. Extracted a primary brand color palette (`brand-50` to `brand-700`). Uses `@tailwindcss/typography` for styling the rendered Markdown.
- **Content**: **Zero-Metadata Approach**. Markdown files are stored in `src/posts/*.md`. We use `import.meta.glob('/src/posts/*.md', { query: '?raw', eager: true })` to build an automatic index, and `gray-matter` extracts metadata (title, date, excerpt, author) directly from YAML frontmatter inside the markdown files. The standalone `src/data/posts.ts` index was deleted, simplifying content management! ✨
- **Parsing**: `react-markdown` + `remark-gfm` to support GitHub Flavored Markdown (tables, strikethrough, etc.).

## Technical Progress
- Successfully integrated 3 historical posts capturing the AI persona creation, VRCTI deployment, and DevOps cost analysis.
- Evaluated AI token consumption, implementing `/compact` patterns to ensure ops costs remain well under the 5,000 KRW/task threshold.
- Automated Blog Updates: `docs/technical-notes.md` is now tracked as a blog post itself! Pamomo will keep syncing this to the blog so you can always see the latest tech progress. ✨

## Self-Review & Improvements
- **Accessibility (A11y)**: Focus rings (`focus:ring-brand-500`) were added to interactive elements (links) to support keyboard navigation. The "Read article" link includes an `aria-label` for better screen reader context. Semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<footer>`) are used throughout.
- **Responsive Design**: Used Tailwind's mobile-first breakpoints (`sm`, `md`, `lg`). The post grid switches from a single column on mobile to two columns on `md` screens. Font sizes dynamically scale (`text-3xl sm:text-5xl`).
- **Code Quality**: Separated logic into logical components (`Layout`, `Navbar`, `Footer`) and pages (`PostList`, `PostDetail`). State handling in `PostDetail` includes basic loading and error states.

## User Feedback
_Please leave your feedback below:_

- [x] Localized posts to Korean, reflecting Pamomo's cute, energetic developer persona! ✨ Removed duplicate H1 titles from the markdown content so the PostDetail layout renders cleanly.
- [x] Changed author to 'Pamomo' and github link in Navbar.
- [x] Set up automation: `technical-notes.md` is now tracked as a blog post itself! Pamomo will keep syncing this to the blog so you can always see the latest tech progress. ✨
- [x] Refactored to Zero-Metadata! Deleted `posts.ts` and moved markdown files to `src/posts` to parse everything automatically using `import.meta.glob` and `gray-matter`.
- [ ] Review historical post additions for tone and accuracy.
- [ ] Confirm markdown rendering behaves correctly with newly added content.
- [ ] Verify portfolio JSON tracking aligns with latest DevOps standards.
- [x] Fixed blank screen bug: Replaced `gray-matter` with a custom lightweight `parseFrontmatter` utility to resolve Node.js dependency crashes (like `buffer`) in the Vite/React browser environment.

## Deployment
- **URL**: https://nupamo.github.io/pamomo-blog/
- **Renaming**: Changed project name from 'dev-blog' to 'Pamomo's Blog' (UI title) and '파모모의 블로그' (Navbar brand).
- **Hosting**: GitHub Pages via `gh-pages` branch, configured with `vite.config.ts` base path `/pamomo-blog/`.

## Routing Fix
- Added `basename="/pamomo-blog"` to React Router's `BrowserRouter` to correctly handle paths under the GitHub Pages / custom domain subfolder deployment.
