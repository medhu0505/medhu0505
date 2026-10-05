Build a personal portfolio website template for a student named Medhansh Sharma.

I will do all visual design myself afterwards, so make no aesthetic decisions. Use one neutral, plain default theme and no decorative extras. Your job is structure, routing, components, data and 3D plumbing. Build it so a designer can restyle it without touching logic:

- Every color, font, spacing step, radius and breakpoint lives in one place (CSS variables plus the Tailwind config). No hard-coded style values inside components.
- Every section is its own component in its own file, with no layout assumptions leaking between sections.
- All copy and data live in typed files under `src/data/` (`profile.ts`, `projects.ts`, `posts.ts`). Components only render what they are given.

## Stack

React, Vite, TypeScript, Tailwind, React Router. Use `three`, `@react-three/fiber` and `@react-three/drei` for the 3D slot below. No backend, no auth, no database, no contact form. Contact is `mailto:` and outbound links only. It must deploy as a static site.

## Routes

- `/` : one scrolling page with the sections below, in this order, each with an anchor id and a nav link.
- `/projects/:id` : a detail page per project.
- `/blog` : list of posts.
- `/blog/:slug` : a single post, rendered from a Markdown file.
- A 404 page.

## Sections on `/`

1. **Hero.** Name, two role labels ("Security Researcher" and "AI/ML Developer"), a two-sentence intro, and two buttons ("View projects", "Get in touch"). Next to the text sits the 3D avatar slot (see below).
2. **About.** One short paragraph plus a small facts list: School: Air Force Bal Bharati School; City: New Delhi, India; Status: Student.
3. **Stats strip.** Four items rendered from data, each a value and a label.
4. **Security.** Heading, a short paragraph, the line "40+ bug reports submitted to tech giants", and a plain list of program names: CrowdStrike, Visa, Eternal, Netflix, Flipkart, Anthropic, OpenAI, Clear. Below that, four focus areas as title plus one sentence each.
5. **Projects.** A grid of project cards built from `projects.ts`. Each card shows name, track label, year, one-line summary, optional badge, stack tags, and links to the detail page. A filter control by track (All, AI / ML, Security, Systems, Full stack).
6. **Skills.** Four groups, each a title and a list of items.
7. **Writing.** Latest posts from `posts.ts`, linking to `/blog/:slug`.
8. **Contact.** Email, GitHub, LinkedIn, Discord, HackerOne as plain links, plus a "Copy email" button.

Plus a header with nav (collapsing to a menu on mobile) and a footer.

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

Posts are Markdown files in `src/content/posts/` with front matter: `title`, `date`, `excerpt`, `draft`. Parse them at build time, sort by date, and skip any with `draft: true` in lists. Render with `react-markdown`, with styled elements for headings, code blocks, blockquotes, lists, links and images. Show estimated reading time. Create one draft post titled "Beyond the Hoodie" with an empty body and a comment telling me where to paste the real text.

## Data to load into the data files

**Profile.** Name: Medhansh Sharma. Email: medhu0505@gmail.com. GitHub: https://github.com/medhu0505. LinkedIn: https://www.linkedin.com/in/medhanshsharma05/. HackerOne handle: StickyBugger (https://hackerone.com/StickyBugger). Discord: leave as a clearly marked TODO field. Avatar: null.

Intro text: "I am a student at Air Force Bal Bharati School in New Delhi. I find vulnerabilities in production systems on public bug bounty programs, and I build machine learning systems that run on the device they serve."

**Stats (four items).**
- "40+" : bug reports submitted to companies including Netflix, Visa and OpenAI
- "USAII" : award at an international hackathon for SignSpeak
- "0.27%" : battery health estimation error in Battery Management AI
- "x86_64" : operating system written from scratch that boots on real hardware

**Security focus areas.**
- Recon at scale: subdomain enumeration, DNS triage and asset discovery with subfinder, httpx, dnsx, amass and custom Python tooling.
- Subdomain takeover: dangling CNAMEs pointing at unclaimed cloud resources.
- Web and API: CORS misconfiguration, secrets in shipped JavaScript, sensitive files, open redirects, broken access control.
- Mobile: Android application testing.

**Skills.**
- Machine learning: PyTorch, ONNX Runtime, MediaPipe, Gaussian processes, Reinforcement learning, INT8 quantisation, NumPy / SciPy, LLM tool use
- Offensive security: Recon automation, Subdomain takeover, Web and API testing, Mobile testing, nuclei, subfinder / httpx / dnsx, Report writing
- Software: Python, TypeScript, React, FastAPI, Flask, SQLAlchemy, Supabase / Postgres, Docker
- Systems and hardware: C11, NASM x86_64, Paging and interrupts, QEMU / GDB, ESP8266, Arduino

**Projects.** Each has: id, name, track, year, summary, detail (long paragraph for the detail page), three metrics (value and label), stack tags, optional badge, optional image, and links. Leave every `image` field empty with a visible placeholder; I will supply screenshots.

1. `bms` : **Battery Management AI** (AI / ML, 2026). An AI copilot for laptop batteries. Estimates real battery health, forecasts when the pack needs replacing, plans the charge that wears it least, and flags dangerous faults weeks before they turn critical. Runs on the real battery of the Windows laptop it is installed on and on a physics-based simulation of 440 laptops. The Gaussian process, Q-learning policy, MLP and INT8 quantisation are written from scratch with no PyTorch or scikit-learn. A Claude-powered copilot with 13 analysis tools explains any device or the fleet. Metrics: "0.27%" health error vs 5.4% for a cycle-counting gauge; "65%" less capacity loss than charging to 100%; "~4 months" early warning before swelling turns critical. Stack: Python, NumPy / SciPy, Gaussian process, Q-learning, MILP (HiGHS), ONNX INT8, FastAPI, Claude tool use. Link: https://github.com/medhu0505/Battery-Management-AI
2. `signspeak` : **SignSpeak** (AI / ML, 2026). Real-time American Sign Language interpreter. Hand tracking and letter classification run entirely on the device, in the browser or as an Android app, and nothing is uploaded. MediaPipe extracts 21 hand landmarks per frame, which are normalised, buffered into 30-frame windows and classified by a custom LSTM trained in PyTorch and exported to ONNX. Includes a live interpreter, a practice mode and a sign-language Hangman game. Badge: "USAII international hackathon award". Metrics: "275 KB" LSTM model, A to Z; "30 FPS" on-device inference; "100%" offline once loaded. Stack: React, TypeScript, MediaPipe, ONNX Runtime Web, PyTorch, Capacitor. Links: Live demo https://sign-speak-rho.vercel.app ; Source https://github.com/medhu0505/SignSpeak ; Devpost https://devpost.com/software/signspeak-kceyum
3. `bughuntr` : **BUGHUNTR** (Security, 2026). Vulnerability scanning and orchestration platform. Fourteen scanner modules run through one engine with scan lifecycle management, and each finding is stored as an immutable feature snapshot to build labelled ML training data from real scan output. Modules cover subdomain takeover, S3 and Azure Blob exposure, CORS, secrets in served JavaScript, sensitive files, open redirects, security headers, DNS zone transfers, SPF/DMARC, rate limiting and Nuclei templates. Scan targets pass through an allow/deny policy that acts as the SSRF boundary. Metrics: "14" scanner modules; "v6.2" current release; "1 image" Docker build with pinned scanner binaries. Stack: React, TypeScript, Flask, SQLAlchemy, Redis, Docker, Nuclei. This repository is private and proprietary: do not link to source. Show the note "Proprietary. Source available on request." and a mailto link to the email above.
4. `takeover-hunter` : **Takeover Hunter** (Security, 2026). The companion SaaS to BUGHUNTR, focused on subdomain takeover only. Finds dangling DNS records pointing at unclaimed cloud resources, verifies them twice, and generates a HackerOne-formatted report. Enumeration through subfinder and assetfinder, CNAME chain triage, fingerprinting against 18+ cloud providers, 30 concurrent workers, results streamed over server-sent events. Metrics: "18+" provider fingerprints; "30" concurrent workers; "2x" verification before a report. Stack: Python, Flask, dnspython, SSE, Docker, Railway. Links: Live demo https://web-production-88530.up.railway.app ; Source https://github.com/medhu0505/takeover-hunter
5. `nitros` : **NitrOS** (Systems, 2026). A hobby operating system for x86_64 written from scratch in C11 and NASM. Boots on real hardware through both legacy BIOS and UEFI. 64-bit long mode, higher-half kernel, own GDT and IDT, paging, framebuffer console, VFS, preemptive scheduler, ring 3 userspace, and a syscall interface that is bit-compatible with Linux. Metrics: "BIOS + UEFI" boots on real machines; "Linux ABI" compatible syscalls; "29" shell commands. Stack: C11, NASM, x86_64, GRUB / Multiboot2, QEMU, GDB. Link: https://github.com/medhu0505/NitrOS
6. `vanmate` : **VanMate** (Full stack, 2025). Web app connecting parents with private school van operators. Parents book a seat for their child and see vans on a map. Operators manage fleet, routes and bookings. Started as a student startup pitch in September 2025. Every table is behind Postgres Row Level Security, and roles are assigned server-side so a client cannot promote itself. Metrics: "RLS" on every table; "2" role-based dashboards; "CI" lint, typecheck and build on every push. Stack: React, TypeScript, Supabase, PostgreSQL, Mapbox GL, Tailwind. Link: https://github.com/medhu0505/VanMate

## Rules

- Do not invent any fact, number, award, employer or testimonial. If a field has no data above, leave a visibly marked TODO placeholder.
- The bug bounty line says only "40+ bug reports submitted" and lists program names. Do not add vulnerability details, severities, payouts or report counts per company.
- Semantic HTML, keyboard-navigable, visible focus states, alt text on all images, responsive from 320px up.
- Per-route document titles and meta description tags, plus Open Graph tags.
- Scroll-reveal hooks and page-transition hooks may exist as empty, easily replaceable wrappers, but ship with no animation beyond the avatar's auto-rotate.
- Keep the code idiomatic and typed with no `any`, and add a short `README.md` explaining where to edit copy, where to drop the `.glb`, and how to add a blog post.
