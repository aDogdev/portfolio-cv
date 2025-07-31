# Copilot Instructions for AI Coding Agents

## Project Overview

- This is a personal portfolio and CV site built with [Astro](https://astro.build/).
- The main data source is `cv.json`, which follows the [JSON Resume schema](https://jsonresume.org/schema/).
- The project structure is component-driven, with all UI sections in `src/components/Sections/` and shared components in `src/components/`.
- Layouts are in `src/layouts/`, and global styles are in `src/styles/`.

## Key Files & Directories

- `cv.json`: Main data file for resume content. All dynamic content is sourced from here.
- `src/components/Sections/`: Contains Astro components for each CV section (e.g., `About.astro`, `Experience.astro`).
- `src/pages/index.astro`: Main entry point, assembles all sections.
- `src/data/`, `src/i18n/`: For static data and internationalization (if used).
- `public/`: Static assets (images, favicon, etc.).

## Patterns & Conventions

- All content is driven by `cv.json`. To update the site, edit this file.
- Section components expect props matching the JSON Resume schema structure.
- Use Astro's component syntax for all UI. No React/Vue/Svelte code is present.
- Styles are organized per-section in `src/styles/`, with `global.css` for base styles.
- Icons are Astro components in `src/icons/`.
- No client-side JavaScript unless strictly necessary (see `KeyboardManager.astro`).

## Developer Workflows

- **Install dependencies:** `pnpm install`
- **Start dev server:** `pnpm dev`
- **Build for production:** `pnpm build`
- **Preview production build:** `pnpm preview`
- No test suite is present as of July 2025.

## Integration & Extensibility

- To add new sections, create a new Astro component in `src/components/Sections/` and update `index.astro` to include it.
- To add new data fields, update `cv.json` and the relevant section component.
- Follows the JSON Resume schema for maximum compatibility with external tools.

## References

- Based on designs by Bartosz Jarocki and project ideas from Miguel Ángel Durán (see `README.md`).

---

For any unclear conventions or missing documentation, ask the user for clarification or examples from the codebase.
