const en = {
  lang: "en",
  locale: "en_GB",
  langName: "English",
  meta: {
    homeTitle: "Matti Koenis – Application Developer Apprentice at Swisscom",
    homeDescription:
      "Personal portfolio of Matti Koenis, application developer apprentice at Swisscom in Zurich. About me, technical & social skills, Swisscom experience and contact.",
    projectTitle: (name) => `${name} – Project insight | Matti Koenis`,
    privacyTitle: "Privacy | Matti Koenis",
    privacyDescription: "Privacy policy for mattikoenis.ch: which data is processed when you visit the site or send a message.",
    notFoundTitle: "Page not found | Matti Koenis",
    jobTitle: "Application Developer Apprentice",
  },
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    language: "Language",
    home: "Home",
    primary: "Main navigation",
  },
  hero: {
    badge: "Application Developer Apprentice · Swisscom",
    greeting: "Hi, I’m",
    name: "Matti Koenis",
    claim: "Transforming ideas into reliable, modern software.",
    lead:
      "I am an application developer apprentice at Swisscom in Zurich. My strengths lie in focused, independent and team-oriented work – from modern web applications and the Microsoft Power Platform to coordinating a web development team.",
    ctaAbout: "More about me",
    ctaSkills: "Explore skills",
    ctaContact: "Get in touch",
    status: "Ready for the next step after my apprenticeship",
    location: "Zurich area, Switzerland",
    roleTag: "From Aug 2026: Team Halo – Host (Web Dev)",
    cards: [
      { label: "Focus", value: "Modern Applications & Web", detail: "React, TypeScript & Power Platform" },
      { label: "Work style", value: "Independent & team-strong", detail: "Reliable, structured & communicative" },
      { label: "Interests", value: "Business, Tech & Sports", detail: "Finance, modern apps & active balance" },
    ],
  },
  about: {
    label: "About me",
    title: "Professional, focused and open to new ideas.",
    intro:
      "I am currently training as an application developer at Swisscom. What drives me is solving real-world problems with clean engineering, thoughtful structure and a sharp visual presentation.",
    paragraphs: [
      "In my day-to-day work at Swisscom I build solutions with the Microsoft Power Platform, SharePoint and modern web technologies. Starting in August 2026, I also take on a team lead role as Host in Team Halo, coordinating collaboration and modern web solutions.",
      "Beyond software, I have a strong interest in business, financial markets and digital products. Away from the screen, sports keep me balanced and focused – on the tennis court, at the gym, skiing in the mountains or out for a run.",
    ],
    portraitAlt: "Portrait of Matti Koenis",
    portraitCaption: "Matti Koenis · Swisscom Zurich",
    highlightsTitle: "What defines me",
    highlights: [
      {
        icon: "briefcase",
        title: "Application developer apprentice",
        text: "At Swisscom I continuously grow across hands-on rotations and work on clean, modern and practical software solutions.",
      },
      {
        icon: "languages",
        title: "Four languages in daily life",
        text: "Raised multilingual with German, Dutch and Swedish, plus strong English across 9 years of school and daily tech work.",
      },
      {
        icon: "code",
        title: "Mindset & standards",
        text: "Focused, independent and team-driven – with genuine interest in business, computers and modern applications.",
      },
    ],
    languagesTitle: "Languages",
    languagesSubtitle: "Communication in daily life & at work",
    languageItems: [
      { code: "DE", name: "German", level: "Native speaker", pct: 100 },
      { code: "NL", name: "Dutch", level: "Second language / Fluent", pct: 90 },
      { code: "EN", name: "English", level: "Fluent in IT & daily life (9 yrs)", pct: 80 },
      { code: "SV", name: "Swedish", level: "Good conversational proficiency", pct: 70 },
    ],
    hobbiesTitle: "Interests & balance",
    hobbiesSubtitle: "What gives me energy outside of code",
    hobbies: [
      { icon: "trophy", name: "Tennis", detail: "Focus, strategy & precision on court" },
      { icon: "dumbbell", name: "Gym & Fitness", detail: "Discipline & strength training routine" },
      { icon: "snowflake", name: "Skiing", detail: "Winter sports in the Swiss Alps" },
      { icon: "footprints", name: "Running", detail: "Endurance & a clear head outdoors" },
    ],
  },
  skills: {
    label: "Skills",
    title: "Technical foundation & strong collaboration.",
    intro:
      "A broad technical foundation built across my Swisscom apprenticeship, vocational modules and personal applications – paired with a clear, dependable working style.",
    techTitle: "Technical skills",
    techSubtitle: "Technologies, tools & practical context",
    filterAll: "All",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      cloud: "Cloud & DevOps",
      tools: "Tools & Analytics",
    },
    techItems: [
      { category: "frontend", name: "React", context: "Modern web apps, components & state", where: "Practice & web projects", featured: true },
      { category: "frontend", name: "JavaScript", context: "ES2024, async logic & DOM/APIs", where: "Codemix & web development", featured: true },
      { category: "frontend", name: "TypeScript", context: "Type-safe applications & data models", where: "Web applications", featured: true },
      { category: "frontend", name: "CSS & Tailwind", context: "Responsive layouts, design systems & motion", where: "All web frontends", featured: true },
      { category: "frontend", name: "PowerApps Canvas", context: "Business applications & custom UI flows", where: "Daily work at Swisscom", featured: true },
      { category: "backend", name: "Node.js", context: "APIs, scripts & backend services", where: "Full-stack development", featured: true },
      { category: "backend", name: "Power Automate", context: "Automated workflows & integrations", where: "Swisscom DevOps", featured: true },
      { category: "backend", name: "Java", context: "Object-oriented programming & REST (Quarkus)", where: "Module 223 & training", featured: false },
      { category: "database", name: "SharePoint", context: "Data lists, permissions & business solutions", where: "Swisscom DevOps", featured: true },
      { category: "database", name: "SQL", context: "Relational data modelling, queries & joins", where: "Training & projects", featured: true },
      { category: "database", name: "MongoDB", context: "Document-oriented NoSQL storage", where: "Database modules", featured: false },
      { category: "database", name: "MariaDB", context: "Relational database administration", where: "Database modules", featured: false },
      { category: "cloud", name: "Microsoft Power Platform", context: "End-to-end business apps & governance", where: "Swisscom core focus", featured: true },
      { category: "cloud", name: "Docker", context: "Containerisation & devcontainer setups", where: "DevOps & applications", featured: false },
      { category: "tools", name: "VS Code", context: "Daily development environment & debugging", where: "Daily use", featured: false },
      { category: "tools", name: "Git & GitHub", context: "Version control, branching & CI workflows", where: "Daily use", featured: true },
      { category: "tools", name: "IntelliJ IDEA", context: "IDE for Java & backend engineering", where: "Vocational training", featured: false },
      { category: "tools", name: "Power BI", context: "Data modelling, reports & dashboards", where: "Swisscom DevOps", featured: false },
    ],
    socialTitle: "Social competencies & working style",
    socialSubtitle: "How I collaborate in teams and projects",
    socialItems: [
      {
        icon: "users",
        name: "Social awareness",
        description: "Empathy, openness and strong interpersonal skills in everyday collaboration.",
      },
      {
        icon: "handshake",
        name: "Teamwork",
        description: "Contributing reliably, sharing knowledge and achieving shared goals together.",
      },
      {
        icon: "message",
        name: "Clear communication",
        description: "Explaining technical topics clearly and concisely – both within the team and with stakeholders.",
      },
      {
        icon: "target",
        name: "Independent work",
        description: "Approaching tasks with structure, taking ownership and staying focused through to completion.",
      },
      {
        icon: "lightbulb",
        name: "Solution mindset",
        description: "Thinking pragmatically, exploring new ideas and building clean, maintainable solutions.",
      },
    ],
    positioning: {
      tag: "Outlook",
      title: "Ready for the next step after my apprenticeship.",
      description:
        "This site shows how I work and position myself: professional, clear, modern and genuinely interested in strong collaboration. I am looking for opportunities where I can keep growing and actively contribute.",
      bringTitle: "What I bring",
      bringText:
        "A clean working style, focus, independence and team spirit – combined with technical curiosity and the drive to continuously improve.",
      standTitle: "What I stand for",
      standText:
        "Clear communication, reliability and modern applications with a clean, thoughtful presentation.",
    },
  },
  experience: {
    label: "Experience",
    title: "My journey as an application developer at Swisscom.",
    intro:
      "During my apprenticeship at Swisscom I rotate through diverse hands-on teams – from direct IT support and Power Platform automation to coordinating a web development team.",
    current: "Upcoming / Current Role",
    items: [
      {
        period: "From Aug 2026",
        title: "Team Halo – Host",
        place: "Swisscom · Zurich / Bern",
        text: "Team lead role in the web development team with responsibility for coordination, collaboration, planning and modern web solutions.",
        tags: ["Web Development", "Frontend", "Team lead", "Coordination"],
      },
      {
        period: "Aug 2025 – Aug 2026",
        title: "Power Platform DevOps",
        place: "Swisscom · Zurich",
        text: "Development, operation and evolution of PowerApps, Power BI, Power Automate and SharePoint solutions using DevOps practices.",
        tags: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
      },
      {
        period: "Feb 2025 – Jul 2025",
        title: "Codemix programming project",
        place: "Swisscom · Zurich",
        text: "Structured introduction to software engineering with a focus on clean fundamentals, web technologies and practical application.",
        tags: ["HTML", "CSS", "JavaScript", "Core concepts"],
      },
      {
        period: "Aug 2024 – Feb 2025",
        title: "Future Work Specialist",
        place: "Swisscom · Zurich / Bern",
        text: "Project shaping future working models alongside direct IT floorwalking support and employee enablement.",
        tags: ["IT Support", "Communication", "Teamwork"],
      },
    ],
  },
  projects: {
    label: "Practical examples",
    title: "Selected personal applications",
    intro:
      "Alongside my apprenticeship, I build personal web and software projects to explore new technologies hands-on.",
    featured: "Selected project",
    viewCase: "View details",
    live: "Live demo",
    code: "GitHub",
    liveUnavailable: "Local / Repository",
    otherTitle: "Additional training project",
    other: {
      punchclock: {
        title: "Punch Clock (Module 223)",
        text: "Multi-user time-tracking application built with Java/Quarkus, PostgreSQL and Docker devcontainers including UML analysis.",
      },
    },
  },
  projectTexts: {
    tdown: {
      tagline: "Interactive 3D real-time globe for air traffic, ships, satellites and the ISS.",
      summary:
        "Combines four open real-time data streams in a smooth 3D view built with React, TypeScript, three.js and a custom Deno proxy.",
      coverAlt:
        "Screenshot of tdown: a 3D Earth with live air traffic, layer toggles and real-time counters.",
      role: "Personal project: concept, design, development and deployment",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "tdown brings air traffic, shipping, satellite orbits and the position of the ISS together on an interactive globe. Each layer can be toggled; clicking an object opens a detail panel with images and short facts.",
            "All data comes from freely accessible sources: adsb.fi, AISStream, wheretheiss.at and Celestrak.",
          ],
        },
        {
          heading: "Challenges and solutions",
          items: [
            {
              title: "Flight data without CORS",
              text: "ADS-B APIs send no CORS headers and offer no free global endpoint. A custom proxy on Deno Deploy queries adsb.fi in 250 NM tiles, merges everything into a global snapshot and serves a compact format.",
            },
            {
              title: "Thousands of ships without stutter",
              text: "AIS positions arrive over a WebSocket, are collected in a Map and handed to React in batches every three seconds.",
            },
            {
              title: "Satellites propagated in the browser",
              text: "Orbital elements (TLE) from Celestrak are propagated in the browser with the SGP4 model from satellite.js – including visible ISS pass predictions.",
            },
            {
              title: "Verified vessel photos",
              text: "Ship photos only appear when they can be matched unambiguously via the IMO number in Wikidata or Wikimedia Commons.",
            },
          ],
        },
        {
          heading: "Features",
          list: [
            "Four live layers: flights (ADS-B), ships (AIS), ISS and satellites",
            "3D globe built with three.js and React Three Fiber",
            "Map view with Leaflet and satellite imagery",
            "Location-based ISS pass predictions",
            "Detail panels with images and facts from Wikipedia",
            "Installable as a progressive web app",
          ],
        },
      ],
      result:
        "tdown is publicly available at tdowner.com and renders thousands of aircraft and satellites simultaneously in the browser.",
    },
    neuroflap: {
      tagline: "AI simulation where 150 birds teach themselves Flappy Bird through neuroevolution.",
      summary:
        "Neural network (5→8→1) and genetic algorithm written from scratch in pure Python – with live network visualisation.",
      coverAlt:
        "Screenshot of NeuroFlap during AI training with live visualisation of the neural network and fitness curve.",
      galleryAlt: ["Screenshot of NeuroFlap in “play yourself” mode compared against the AI’s best score."],
      role: "Personal project: concept, simulation, AI and visualisation",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "Each of the 150 birds is controlled by its own small neural network. Across generations the networks improve via selection, crossover and mutation until the best birds navigate the pipes effortlessly.",
          ],
        },
        {
          heading: "How it works",
          items: [
            {
              title: "Neural network from scratch",
              text: "A feedforward network (5 → 8 → 1) with tanh and sigmoid written in pure Python without external ML libraries.",
            },
            {
              title: "Genetic algorithm",
              text: "Elitism, tournament selection, uniform crossover and Gaussian mutation optimise the weights across generations.",
            },
            {
              title: "Making learning visible",
              text: "The leader’s neural network and the fitness curve are rendered live right next to the game view.",
            },
            {
              title: "Clean architecture & tests",
              text: "Simulation and AI are decoupled from rendering and covered by a pytest test suite.",
            },
          ],
        },
        {
          heading: "Features",
          list: [
            "Swarm view of all 150 birds with the current leader highlighted",
            "Human mode: play yourself against the AI’s best score",
            "Progressive difficulty and time-lapse up to 30×",
            "Runs in the browser via pygbag (WebAssembly)",
          ],
        },
      ],
      result:
        "Within just a few generations the agents reliably master the course; the simulation runs both on desktop and in the browser.",
    },
    "ai-compare": {
      tagline: "Comparison platform for 280+ AI models with a verified source for every fact.",
      summary:
        "Structured catalogue and side-by-side comparison for pricing, context windows and benchmarks built with Next.js, TypeScript, Supabase and Zod.",
      coverAlt: "Overview graphic of AI Compare: 280+ models, 35 providers and source attribution per data point.",
      role: "Personal project: concept, data model, design and development",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "AI Compare makes AI models across providers objectively comparable: pricing, context windows, modalities, capabilities and benchmarks – every value is backed by a source and verification date.",
          ],
        },
        {
          heading: "Principles for trustworthy data",
          items: [
            {
              title: "Every claim has a source",
              text: "Each fact is stored with its source and verification date and validated through Zod schemas.",
            },
            {
              title: "Transparent missing values",
              text: "Undisclosed specifications are clearly marked as “not disclosed” rather than guessed.",
            },
            {
              title: "Objective comparisons",
              text: "Side-by-side comparison of up to four models highlights only measurable differences and pricing.",
            },
          ],
        },
        {
          heading: "Features",
          list: [
            "Filterable explorer with grid and table views",
            "Side-by-side comparison of 2 to 4 models including cost calculator",
            "AI Finder assistant and command palette (Ctrl+K)",
            "Tested with Vitest and Playwright",
          ],
        },
      ],
      result:
        "Full-stack architecture built with Next.js App Router, TypeScript and PostgreSQL/Supabase.",
    },
  },
  caseStudy: {
    back: "Back to overview",
    role: "Role",
    period: "Period",
    stack: "Technologies",
    links: "Links",
    result: "Outcome",
    next: "Next project",
    gallery: "Additional view",
  },
  contact: {
    label: "Contact",
    title: "Let’s connect.",
    intro:
      "For an exchange, opportunities after my apprenticeship or an initial conversation, I am easy to reach. Feel free to send me an email or use the form directly.",
    emailLabel: "Email",
    copy: "Copy email",
    copied: "Copied!",
    linkedin: "LinkedIn",
    github: "GitHub",
    locationLabel: "Location",
    locationValue: "Zurich area, Switzerland",
    formTitle: "Send a direct message",
    name: "Your name",
    email: "Your email address",
    message: "Message",
    messagePlaceholder: "Hi Matti, I’m reaching out regarding …",
    submit: "Send message",
    sending: "Sending …",
    success: "Thank you! Your message has been sent – I will get back to you as soon as possible.",
    error: "Something went wrong while sending. Please email me directly at:",
    required: "Please fill out this field.",
    invalidEmail: "Please enter a valid email address.",
    privacyNote: "Your details are used solely to reply to your message.",
    privacyLink: "Privacy",
  },
  footer: {
    role: "Application Developer Apprentice at Swisscom · Zurich",
    ctaTitle: "Ready to talk?",
    ctaText: "I look forward to connecting, exchanging ideas or discussing opportunities after my apprenticeship.",
    source: "GitHub Repository",
    top: "Back to top",
    privacy: "Privacy",
  },
  privacy: {
    title: "Privacy",
    updated: "Last updated: November 2026",
    sections: [
      {
        heading: "Controller",
        paragraphs: ["Matti Koenis, Zurich area, Switzerland. Contact: matti@koenis.ch"],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "This website is served via GitHub Pages (GitHub Inc., USA). When you visit a page, GitHub processes technically required connection data such as your IP address in server log files. Details: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "No cookies, no tracking",
        paragraphs: [
          "This website sets no cookies and uses no analytics or tracking services. Fonts and images are served directly from this domain.",
        ],
      },
      {
        heading: "Contact form",
        paragraphs: [
          "When you use the contact form, your name, email address and message are sent to me by email via EmailJS (emailjs.com). I use this data solely to answer your enquiry and delete it afterwards.",
        ],
      },
      {
        heading: "External links",
        paragraphs: [
          "Links to GitHub, LinkedIn and external project pages lead to third-party services governed by their own privacy policies.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You may request information about, correction of or deletion of any personal data I hold at any time by emailing matti@koenis.ch.",
        ],
      },
    ],
  },
  notFound: {
    title: "This page wasn’t found.",
    text: "The address may have changed. You will find all information about me on the home page.",
    back: "Go to home page",
  },
};

export default en;
