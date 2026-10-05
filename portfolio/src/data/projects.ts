export type Track = 'AI / ML' | 'Security' | 'Systems' | 'Full stack'

export type Project = {
  id: string
  name: string
  track: Track
  year: string
  summary: string
  detail: string
  metrics: { value: string; label: string }[]
  stack: string[]
  image?: string
  badge?: string
  links: { label: string; href: string }[]
  note?: string
}

export const projects: Project[] = [
  {
    id: 'bms',
    name: 'Battery Management AI',
    track: 'AI / ML',
    year: '2026',
    summary:
      'An AI copilot for laptop batteries. It estimates real battery health, forecasts when the pack needs replacing, plans the charge that wears it least and flags dangerous faults weeks before they turn critical.',
    detail:
      'It runs on the real battery of the Windows machine it is installed on and on a physics-based simulation of 440 laptops. The Gaussian process, the Q-learning policy, the MLP and the INT8 quantisation are written from scratch, with no PyTorch or scikit-learn, so the maths stays inspectable. A Claude-powered copilot with 13 analysis tools explains any device or the whole fleet.',
    metrics: [
      { value: '0.27%', label: 'health error vs 5.4% for a cycle-counting gauge' },
      { value: '65%', label: 'less capacity loss than charging to 100%' },
      { value: '~4 mo', label: 'early warning before swelling turns critical' },
    ],
    stack: ['Python', 'NumPy / SciPy', 'Gaussian process', 'Q-learning', 'MILP (HiGHS)', 'ONNX INT8', 'FastAPI', 'Claude tool use'],
    image: '/projects/bms.webp',
    links: [{ label: 'Source', href: 'https://github.com/medhu0505/Battery-Management-AI' }],
  },
  {
    id: 'signspeak',
    name: 'SignSpeak',
    track: 'AI / ML',
    year: '2026',
    summary:
      'A real-time American Sign Language interpreter. Hand tracking and letter classification run entirely on the device, in the browser or as an Android app, and nothing is ever uploaded.',
    detail:
      'MediaPipe extracts 21 hand landmarks per frame. They are normalised, buffered into 30-frame windows and classified by a custom LSTM I trained in PyTorch and exported to ONNX. It ships with a live interpreter, a guided practice mode and a sign-language Hangman game.',
    metrics: [
      { value: '275 KB', label: 'LSTM model, A to Z' },
      { value: '30 FPS', label: 'on-device inference' },
      { value: '100%', label: 'offline once loaded' },
    ],
    stack: ['React', 'TypeScript', 'MediaPipe', 'ONNX Runtime Web', 'PyTorch', 'Capacitor'],
    image: '/projects/signspeak.webp',
    badge: 'USAII international hackathon award',
    links: [
      { label: 'Live demo', href: 'https://sign-speak-rho.vercel.app' },
      { label: 'Source', href: 'https://github.com/medhu0505/SignSpeak' },
      { label: 'Devpost', href: 'https://devpost.com/software/signspeak-kceyum' },
    ],
  },
  {
    id: 'bughuntr',
    name: 'BUGHUNTR',
    track: 'Security',
    year: '2026',
    summary:
      'A vulnerability scanning and orchestration platform. Fourteen scanner modules run through one engine with scan lifecycle management, and every finding is captured as an immutable feature snapshot to build labelled ML training data from real scan output.',
    detail:
      'Modules cover subdomain takeover, S3 and Azure Blob exposure, CORS, secrets in served JavaScript, sensitive files, open redirects, security headers, DNS zone transfers, SPF/DMARC, rate limiting and Nuclei templates. Scan targets pass through an allow/deny policy that acts as the SSRF boundary, and a Redis-backed mode scales workers horizontally.',
    metrics: [
      { value: '14', label: 'scanner modules' },
      { value: 'v6.2', label: 'current release' },
      { value: '1 image', label: 'Docker build with pinned scanner binaries' },
    ],
    stack: ['React', 'TypeScript', 'Flask', 'SQLAlchemy', 'Redis', 'Docker', 'Nuclei'],
    links: [{ label: 'Request access', href: 'mailto:medhu0505@gmail.com?subject=BUGHUNTR' }],
    note: 'Proprietary. Source available on request.',
  },
  {
    id: 'takeover-hunter',
    name: 'Takeover Hunter',
    track: 'Security',
    year: '2026',
    summary:
      'The companion SaaS to BUGHUNTR, focused on one bug class. It finds dangling DNS records that point at unclaimed cloud resources, verifies them twice and writes the HackerOne report.',
    detail:
      'Enumeration through subfinder and assetfinder feeds a DNS triage stage that follows CNAME chains and spots wildcard and NXDOMAIN records. Candidates are fingerprinted against 18+ cloud providers, probed over HTTP with 30 concurrent workers and streamed to the browser over server-sent events.',
    metrics: [
      { value: '18+', label: 'cloud provider fingerprints' },
      { value: '30', label: 'concurrent scan workers' },
      { value: '2×', label: 'verification before a report' },
    ],
    stack: ['Python', 'Flask', 'dnspython', 'SSE', 'Docker', 'Railway'],
    links: [
      { label: 'Live demo', href: 'https://web-production-88530.up.railway.app' },
      { label: 'Source', href: 'https://github.com/medhu0505/takeover-hunter' },
    ],
  },
  {
    id: 'nitros',
    name: 'NitrOS',
    track: 'Systems',
    year: '2026',
    summary:
      'A hobby operating system for x86_64, written from scratch in C11 and NASM. It boots on real hardware through both legacy BIOS and UEFI.',
    detail:
      'The kernel runs in 64-bit long mode in the higher half. Everything after the Multiboot2 handoff is NitrOS code: paging, its own GDT and IDT, a framebuffer console, a VFS, a preemptive scheduler and ring 3 userspace. The syscall boundary is bit-compatible with Linux, so statically linked Linux binaries can eventually run unmodified.',
    metrics: [
      { value: 'BIOS + UEFI', label: 'boots on real machines' },
      { value: 'Linux ABI', label: 'compatible syscall interface' },
      { value: '29', label: 'shell commands' },
    ],
    stack: ['C11', 'NASM', 'x86_64', 'GRUB / Multiboot2', 'QEMU', 'GDB'],
    image: '/projects/nitros.webp',
    links: [{ label: 'Source', href: 'https://github.com/medhu0505/NitrOS' }],
  },
  {
    id: 'vanmate',
    name: 'VanMate',
    track: 'Full stack',
    year: '2025',
    summary:
      'A web app that connects parents with private school van operators. Parents book a seat for their child and see vans on a map. Operators run their fleet, routes and bookings from a dashboard.',
    detail:
      'It started as a student startup pitch in September 2025. Every table sits behind Postgres Row Level Security, and roles are assigned server-side by a security-definer trigger so a client can never promote itself to operator.',
    metrics: [
      { value: 'RLS', label: 'on every table' },
      { value: '2', label: 'role-based dashboards' },
      { value: 'CI', label: 'lint, typecheck and build on every push' },
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Mapbox GL', 'Tailwind'],
    image: '/projects/vanmate.webp',
    links: [{ label: 'Source', href: 'https://github.com/medhu0505/VanMate' }],
  },
]
