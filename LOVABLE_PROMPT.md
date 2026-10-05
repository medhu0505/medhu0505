Build a personal portfolio website template.

I will do all visual design and write all copy myself afterwards, so make no aesthetic decisions and invent no content. Use one neutral, plain default theme and no decorative extras. Every piece of text, number, name and link in the template must be an obvious placeholder, for example "[Your Name]", "[Role One]", "[Project Name 1]", "Lorem ipsum" body text, and "https://example.com" links. Your job is structure, routing, components, typed data and 3D plumbing.

Build it so a designer can restyle it without touching logic:

- Every color, font, spacing step, radius and breakpoint lives in one place (CSS variables plus the Tailwind config). No hard-coded style values inside components.
- Every section is its own component in its own file, with no layout assumptions leaking between sections.
- All copy and data live in typed files under `src/data/` (`profile.ts`, `projects.ts`, `posts.ts`). Components only render what they are given. Export the TypeScript types for each data shape.

## Stack

React, Vite, TypeScript, Tailwind, React Router. Use `three`, `@react-three/fiber` and `@react-three/drei` for the 3D slot below. No backend, no auth, no database, no contact form. Contact is `mailto:` and outbound links only. It must deploy as a static site.

## Routes

- `/` : one scrolling page with the sections below, in this order, each with an anchor id and a nav link.
- `/projects/:id` : a detail page per project.
- `/blog` : list of posts.
- `/blog/:slug` : a single post, rendered from a Markdown file.
- A 404 page.

## Sections on `/`

1. **Hero.** Name, two role labels, a short intro, and two buttons ("Primary action", "Secondary action"). Next to the text sits the 3D avatar slot (see below).
2. **About.** One short paragraph plus a small facts list of label and value pairs (three placeholder rows).
3. **Stats strip.** Four items rendered from data, each a value and a label.
4. **Highlight section.** A heading, a short paragraph, one headline line, a plain list of eight placeholder names, and below that four focus areas as title plus one sentence each. Name the component generically so I can repurpose it.
5. **Projects.** A grid of project cards built from `projects.ts`. Each card shows name, category label, year, one-line summary, optional badge, stack tags, and a link to the detail page. A filter control by category: "All" plus three placeholder categories derived from the data, not hard-coded.
6. **Skills.** Four groups, each a title and a list of items.
7. **Writing.** Latest posts from `posts.ts`, linking to `/blog/:slug`.
8. **Contact.** Email, and five outbound social links as plain links, plus a "Copy email" button.

Plus a header with nav (collapsing to a menu on mobile) and a footer.

## Placeholder data shapes

**Profile.** `name`, `roles: string[]`, `intro`, `email`, `facts: {label, value}[]`, `links: {github, linkedin, discord, other1, other2}`, `avatar: string | null` (null).

**Stats.** Four items: `{ value, label }`.

**Highlight section.** `{ heading, paragraph, headline, names: string[8], focus: {title, body}[4] }`.

**Skills.** Four groups: `{ group, items: string[] }`, with four placeholder items each.

**Projects.** Six placeholder projects, each with: `id`, `name`, `category`, `year`, `summary`, `detail` (long paragraph for the detail page), `metrics: {value, label}[3]`, `stack: string[]`, optional `badge`, optional `image`, `links: {label, href}[]`, optional `note`. Spread the six across three categories. Make one project use `note` and a `mailto:` link instead of a source link, to demonstrate that variant. Leave every `image` empty and render a visible image placeholder.

## 3D avatar slot (three.js)

Build an `AvatarCanvas` component using react-three-fiber and drei.

- It takes a `modelUrl?: string` prop, read from `profile.avatar`. I will drop a `.glb` into `/public/models/` later and set that one field.
- If `modelUrl` is empty or fails to load, render a simple placeholder primitive, with no error shown to the visitor.
- Neutral lighting and an environment map. Gentle auto-rotate. Orbit controls limited to horizontal rotation, no zoom, no pan, so page scrolling still works on touch devices.
- Lazy-load the whole 3D bundle so it does not block first paint. Show a plain empty box of the same size while loading.
- Pause rendering when the canvas is off-screen. Respect `prefers-reduced-motion` by disabling auto-rotate.
- Wrap it in an error boundary so a WebGL failure never breaks the page.

The component must be reusable, so I can mount the same avatar on other pages later.

## Blog

Posts are Markdown files in `src/content/posts/` with front matter: `title`, `date`, `excerpt`, `draft`. Parse them at build time, sort by date, and skip any with `draft: true` in lists. Render with `react-markdown`, with styled elements for headings, code blocks, blockquotes, lists, links and images. Show estimated reading time. Create two placeholder posts with Lorem ipsum bodies that exercise every Markdown element, and one extra post with `draft: true` and an empty body.

## Rules

- Do not invent any real fact, number, name, award, employer, company or testimonial. Every value is a placeholder.
- Semantic HTML, keyboard-navigable, visible focus states, alt text on all images, responsive from 320px up.
- Per-route document titles and meta description tags, plus Open Graph tags, all reading from the data files.
- Scroll-reveal hooks and page-transition hooks may exist as empty, easily replaceable wrappers, but ship with no animation beyond the avatar's auto-rotate.
- Keep the code idiomatic and typed with no `any`, and add a short `README.md` explaining where to edit copy, where to drop the `.glb`, and how to add a blog post.
