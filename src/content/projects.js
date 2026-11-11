// Sprachunabhängige, belegbare Projektdaten (Quelle: GitHub-Repositories von matti24).
export const projects = [
  {
    slug: "tdown",
    name: "tdown",
    years: "2024 – 2026",
    live: "https://www.tdowner.com",
    repo: "https://github.com/matti24/tdown",
    stack: ["React 19", "TypeScript", "three.js", "React Three Fiber", "satellite.js", "Leaflet", "Deno Deploy", "Tailwind CSS"],
    cover: { base: "tdown-globe", widths: [800, 1280, 1530], width: 1530, height: 956 },
    gallery: [],
  },
  {
    slug: "neuroflap",
    name: "NeuroFlap",
    years: "2026",
    live: "https://matti24.github.io/Hacked-FlappyBird/",
    repo: "https://github.com/matti24/Hacked-FlappyBird",
    stack: ["Python", "pygame", "pygbag / WebAssembly", "pytest"],
    cover: { base: "neuroflap-training", widths: [640, 1140], width: 1140, height: 720 },
    gallery: [{ base: "neuroflap-play", widths: [640, 1140], width: 1140, height: 720 }],
  },
  {
    slug: "ai-compare",
    name: "AI Compare",
    years: "2026",
    live: "https://ai-compare-two.vercel.app",
    repo: "https://github.com/matti24/AIcomparison",
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts", "Zod", "Supabase / PostgreSQL", "Vitest", "Playwright"],
    cover: { base: "ai-compare", widths: [800, 1280, 1600], width: 1600, height: 1000 },
    gallery: [],
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const CONTACT = {
  email: "matti@koenis.ch",
  linkedin: "https://www.linkedin.com/in/matti-koenis-4b6462334/",
  github: "https://github.com/matti24",
  sourceRepo: "https://github.com/matti24/myportfolio",
};
