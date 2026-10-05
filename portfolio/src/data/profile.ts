// Every public fact on the site lives here or in projects.ts / posts.ts.
// Edit copy in these files; components only render what they are given.

export const profile = {
  name: 'Medhansh Sharma',
  handle: 'medhu0505',
  roles: ['Security Researcher', 'AI/ML Developer'],
  school: 'Air Force Bal Bharati School',
  city: 'New Delhi, India',
  intro:
    'I am a student at Air Force Bal Bharati School in New Delhi. Most of my time goes into two things: finding vulnerabilities in production systems on public bug bounty programs, and building machine learning systems that run on the device they serve.',
  email: 'medhu0505@gmail.com',
  links: {
    github: 'https://github.com/medhu0505',
    linkedin: 'https://www.linkedin.com/in/medhanshsharma05/',
    hackerone: 'https://hackerone.com/StickyBugger',
    // Set to your Discord username (e.g. "medhu") to show it in Contact.
    discord: null as string | null,
  },
  // Point this at a .glb in /public/models once the 3D avatar is ready,
  // e.g. '/models/avatar.glb'. While null, the hero shows a procedural scan figure.
  avatar: null as string | null,
}

export const security = {
  reportsSubmitted: '40+',
  hackeroneHandle: 'StickyBugger',
  programs: [
    'CrowdStrike',
    'Visa',
    'Eternal',
    'Netflix',
    'Flipkart',
    'Anthropic',
    'OpenAI',
    'Clear',
  ],
  focus: [
    { title: 'Recon at scale', body: 'Subdomain enumeration, DNS triage and asset discovery with subfinder, httpx, dnsx, amass and my own Python tooling.' },
    { title: 'Subdomain takeover', body: 'Dangling CNAMEs against unclaimed cloud resources. I built Takeover Hunter because I needed a faster way to triage them.' },
    { title: 'Web and API', body: 'Misconfigured CORS, exposed secrets in shipped JavaScript, sensitive files, open redirects and broken access control.' },
    { title: 'Mobile', body: 'Android application testing alongside the web surface it talks to.' },
  ],
}

export const stats = [
  { value: '40+', label: 'bug reports submitted to companies including Netflix, Visa and OpenAI' },
  { value: 'USAII', label: 'award at an international hackathon for SignSpeak' },
  { value: '0.27%', label: 'battery health error from my from-scratch Gaussian process model' },
  { value: 'x86_64', label: 'operating system written from scratch that boots on real hardware' },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Machine learning',
    items: ['PyTorch', 'ONNX Runtime', 'MediaPipe', 'Gaussian processes', 'Reinforcement learning', 'INT8 quantisation', 'NumPy / SciPy', 'LLM tool use'],
  },
  {
    group: 'Offensive security',
    items: ['Recon automation', 'Subdomain takeover', 'Web & API testing', 'Mobile testing', 'nuclei', 'subfinder / httpx / dnsx', 'Report writing'],
  },
  {
    group: 'Software',
    items: ['Python', 'TypeScript', 'React', 'FastAPI', 'Flask', 'SQLAlchemy', 'Supabase / Postgres', 'Docker'],
  },
  {
    group: 'Systems & hardware',
    items: ['C11', 'NASM x86_64', 'Paging & interrupts', 'QEMU / GDB', 'ESP8266', 'Arduino'],
  },
]
