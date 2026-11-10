const en = {
  lang: "en",
  locale: "en_GB",
  langName: "English",
  meta: {
    homeTitle: "Matti Koenis – Application Developer Apprentice at Swisscom",
    homeDescription:
      "Portfolio of Matti Koenis, application developer apprentice at Swisscom in Zurich. Projects built with React, TypeScript, three.js, Python and the Microsoft Power Platform.",
    projectTitle: (name) => `${name} – Case study | Matti Koenis`,
    privacyTitle: "Privacy | Matti Koenis",
    privacyDescription: "Privacy policy for mattikoenis.ch: which data is processed when you visit the site or send a message.",
    notFoundTitle: "Page not found | Matti Koenis",
    jobTitle: "Application Developer Apprentice",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    about: "About",
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
    eyebrow: "Application developer apprentice · Swisscom · Zurich",
    title: "I build applications that make complex data easy to understand.",
    lead:
      "At work with the Microsoft Power Platform, in my own projects with React, TypeScript and three.js – for example a 3D globe that shows aircraft, ships and satellites live.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    status: "Open to opportunities after my apprenticeship",
    globeLabel: "Zurich · 47.37° N, 8.54° E",
    globeHint: "Drag to rotate",
  },
  facts: [
    { value: "3", label: "independent projects, public on GitHub" },
    { value: "4", label: "languages: German, Dutch, Swedish, English" },
    { value: "4", label: "hands-on rotations during my apprenticeship" },
  ],
  projects: {
    label: "Projects",
    title: "Selected work",
    intro:
      "Three personal projects, all public on GitHub. Every case study shows which problem I solved and how.",
    featured: "Featured project",
    viewCase: "Read case study",
    live: "View live",
    code: "Code on GitHub",
    liveUnavailable: "Live version currently unavailable",
    otherTitle: "More work",
    other: {
      punchclock: {
        title: "Punch Clock",
        text: "Practice project for module 223: time tracking with Quarkus, PostgreSQL and a Docker dev container, including an as-is analysis with UML diagrams.",
      },
    },
  },
  projectTexts: {
    tdown: {
      tagline: "An interactive 3D globe showing aircraft, ships, satellites and the ISS in real time.",
      summary: "Several open live data sources on one rotating globe – right in the browser, without paid APIs.",
      coverAlt:
        "Screenshot of tdown: a 3D Earth with thousands of aircraft icons over the Americas, layer toggles for flights, ships, ISS and satellites, and live counters.",
      role: "Personal project: concept, design, development and deployment",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "tdown brings air traffic, shipping, satellite orbits and the position of the ISS together on an interactive globe. Each layer can be toggled; clicking an object opens a detail panel with images and short facts. A flat map view with satellite imagery is available as well.",
            "All data comes from freely accessible sources: adsb.fi, AISStream, wheretheiss.at and Celestrak.",
          ],
        },
        {
          heading: "Challenges and solutions",
          items: [
            {
              title: "Flight data without CORS",
              text: "ADS-B APIs send no CORS headers and offer no free global endpoint. A custom proxy on Deno Deploy therefore queries adsb.fi in 250 NM tiles – about one request per second, within the public limit – merges everything into a global snapshot and serves a compact format.",
            },
            {
              title: "Thousands of ships without stutter",
              text: "AIS positions arrive over a WebSocket. They are collected in a Map and handed to React in batches only every three seconds. Up to 20,000 ships; vessels that stop reporting are removed.",
            },
            {
              title: "Satellites without a server",
              text: "Orbital elements (TLE) from Celestrak are propagated in the browser with the SGP4 model from satellite.js – for Starlink, OneWeb and GPS. The same basis predicts the next visible ISS passes over your location.",
            },
            {
              title: "No image rather than a wrong one",
              text: "Ship photos only appear when they can be matched unambiguously – via the IMO number in Wikidata or a matching result on Wikimedia Commons. Otherwise the field deliberately stays empty.",
            },
          ],
        },
        {
          heading: "Features",
          list: [
            "Four live layers: flights (ADS-B), ships (AIS), ISS and satellites",
            "3D globe built with three.js and React Three Fiber",
            "Map view with Leaflet and satellite imagery",
            "Your own location and upcoming ISS passes",
            "Detail panels with images and facts from Wikipedia",
            "Installable as a progressive web app (manifest and service worker)",
          ],
        },
      ],
      result:
        "tdown is publicly available at tdowner.com. In a snapshot taken on 10 November 2026, the globe showed around 6,500 aircraft and 8,000 satellites at the same time.",
    },
    neuroflap: {
      tagline: "An AI that teaches itself Flappy Bird in front of your eyes – neural networks and genetic algorithm built from scratch.",
      summary: "150 birds learn to fly through neuroevolution. No training data, no backpropagation, no ML library.",
      coverAlt:
        "Screenshot of NeuroFlap during AI training: birds fly through pipes; on the right, generation statistics, a live visualisation of the neural network and a fitness graph.",
      galleryAlt: ["Screenshot of NeuroFlap in “play yourself” mode, showing your own score next to the AI’s best score."],
      role: "Personal project: concept, simulation, AI and visualisation",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "Each of the 150 birds is controlled by its own small neural network. At first, every bird crashes immediately. With each generation the networks improve – until the best birds fly practically forever. Nobody showed them how.",
          ],
        },
        {
          heading: "How it works",
          items: [
            {
              title: "Neural network from scratch",
              text: "A feedforward network (5 → 8 → 1) with tanh and sigmoid, in pure Python. Inputs: height, vertical speed, distance to the next pipe and distance to the upper and lower edge of the gap.",
            },
            {
              title: "Genetic algorithm",
              text: "The best networks survive (elitism). Parents are chosen by tournament selection, combined by uniform crossover and varied by Gaussian mutation. Fitness = survival time plus a bonus per pipe passed.",
            },
            {
              title: "Making learning visible",
              text: "The current leader’s network is drawn live – positive and negative weights in colour, active neurons light up. A fitness graph shows the learning curve across generations.",
            },
            {
              title: "Built to be tested",
              text: "Simulation and AI are fully separated from rendering and run headless. A pytest suite covers the network, the genetic operators and the simulation.",
            },
          ],
        },
        {
          heading: "Features",
          list: [
            "Swarm view of all 150 birds, with the leader highlighted",
            "Human mode: play against the AI’s best score",
            "Progressive difficulty – narrower gaps, higher speed",
            "Time-lapse up to 30× to watch the learning process",
            "Also runs in the browser thanks to pygbag (Python as WebAssembly)",
          ],
        },
      ],
      result:
        "In the documented example run, the breakthrough comes in generation 8: a best score of 48 instead of 2 in generation 1. The code is published under the MIT licence.",
    },
    "ai-compare": {
      tagline: "An independent database and comparison platform for AI models – every fact with a source.",
      summary: "Prices, context windows, capabilities and benchmarks of more than 280 models from 35 providers, every figure sourced.",
      coverAlt: "Typographic project graphic for AI Compare with the key figures 280+ models, 35 providers and a source for every fact.",
      role: "Personal project: concept, data model, design and development",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "AI Compare makes AI models comparable: pricing, context windows, modalities, capabilities, benchmarks and API access. According to the project documentation, the catalogue covers more than 280 models from 35 providers (data as of 1 October 2026).",
          ],
        },
        {
          heading: "Principles for trustworthy data",
          items: [
            {
              title: "Every fact has a source",
              text: "Each fact is stored as a value with its source, the date it was checked and the date it was updated. Known values without a source fail validation.",
            },
            {
              title: "Unknown stays unknown",
              text: "Missing values are shown as “not disclosed” – never as zero, “no” or “free”. There is no invented overall score.",
            },
            {
              title: "Only objective highlights",
              text: "Comparisons only highlight measurable extremes, such as the lowest published price or the largest context window.",
            },
          ],
        },
        {
          heading: "Features",
          list: [
            "Explorer with URL-synced filters, grid and table views",
            "Compare 2 to 4 models, including “differences only” and a cost calculator",
            "AI Finder: a four-step wizard with explained matches",
            "Command palette (Ctrl+K), release feed and benchmark explorer",
            "Admin studio with schema validation and protection against stale drafts",
          ],
        },
        {
          heading: "Technology",
          paragraphs: [
            "Next.js App Router with server-side rendering, TypeScript, Tailwind CSS and Radix UI. Data lives in normalised Supabase/PostgreSQL tables and is validated with Zod. On top: structured data (JSON-LD), sitemaps, dynamic Open Graph images, consent-based analytics and tests with Vitest and Playwright.",
          ],
        },
      ],
      result: "The complete code is available on GitHub. The live version is currently unavailable.",
    },
  },
  caseStudy: {
    back: "All projects",
    role: "Role",
    period: "Period",
    stack: "Technologies",
    links: "Links",
    result: "Outcome",
    next: "Next project",
    gallery: "Another view",
  },
  experience: {
    label: "Experience",
    title: "Stages of my apprenticeship",
    intro: "Hands-on application development at Swisscom – from IT support and Power Platform solutions to coordinating a web team.",
    current: "Current",
    items: [
      {
        period: "Since Aug 2026",
        title: "Team Halo – Host",
        place: "Zurich / Bern",
        text: "Team lead role in the web development team, responsible for coordination, collaboration and modern web solutions.",
        tags: ["Web development", "Frontend", "Team lead", "Coordination"],
      },
      {
        period: "Aug 2025 – Aug 2026",
        title: "Power Platform DevOps",
        place: "Zurich",
        text: "Developing and maintaining solutions with PowerApps, Power BI and SharePoint using DevOps practices.",
        tags: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
      },
      {
        period: "Feb 2025 – Jul 2025",
        title: "Codemix programming project",
        place: "Zurich",
        text: "A structured introduction to software development, focused on fundamentals and practical application.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        period: "Aug 2024 – Feb 2025",
        title: "Future Work Specialist",
        place: "Zurich / Bern",
        text: "Project on shaping future ways of working, plus IT support through floorwalking.",
        tags: ["IT support", "Communication", "Teamwork"],
      },
    ],
  },
  about: {
    label: "About",
    title: "Focused work, better together.",
    paragraphs: [
      "I am an application developer apprentice at Swisscom in Zurich. Day to day I build solutions with the Microsoft Power Platform; since August 2026 I have taken on a team lead role in web development as host of Team Halo.",
      "In my free time I build my own projects – ideally where data, visualisation and clean engineering meet. I work in a focused and independent way, and I value clear communication and good teamwork just as much.",
    ],
    portraitAlt: "Black-and-white portrait of Matti Koenis",
    languagesTitle: "Languages",
    languages: ["German", "Dutch", "Swedish", "English"],
    interestsTitle: "Interests",
    interests: "Business, computers and new applications – balanced with tennis, fitness, skiing and running.",
  },
  skills: {
    title: "Skills with evidence",
    intro: "Instead of percentage bars: where I have actually used each technology.",
    evidenceLabel: "Used in",
    groups: [
      {
        title: "Power Platform & Microsoft 365",
        items: [
          { name: "Power Apps (Canvas)", evidence: ["swisscom"] },
          { name: "Power Automate", evidence: ["swisscom"] },
          { name: "SharePoint", evidence: ["swisscom"] },
          { name: "Power BI", evidence: ["swisscom"] },
        ],
      },
      {
        title: "Web & frontend",
        items: [
          { name: "React", evidence: ["tdown"] },
          { name: "TypeScript", evidence: ["tdown", "ai-compare"] },
          { name: "Next.js", evidence: ["ai-compare"] },
          { name: "three.js", evidence: ["tdown"] },
          { name: "Tailwind CSS", evidence: ["tdown", "ai-compare"] },
          { name: "HTML, CSS, JavaScript", evidence: ["codemix"] },
        ],
      },
      {
        title: "Data & backend",
        items: [
          { name: "PostgreSQL / Supabase", evidence: ["ai-compare", "punchclock"] },
          { name: "Python", evidence: ["neuroflap"] },
          { name: "Java / Quarkus", evidence: ["punchclock"] },
          { name: "Docker", evidence: ["punchclock"] },
          { name: "Deno Deploy", evidence: ["tdown"] },
        ],
      },
      {
        title: "Quality & tooling",
        items: [
          { name: "Git & GitHub Actions", evidence: ["tdown"] },
          { name: "Vitest & Playwright", evidence: ["ai-compare"] },
          { name: "pytest", evidence: ["neuroflap"] },
        ],
      },
    ],
    moreTitle: "Also familiar with",
    more: "Node.js, SQL, MongoDB, MariaDB, VS Code, IntelliJ",
    evidenceNames: { swisscom: "Swisscom", codemix: "Codemix", punchclock: "Punch Clock" },
  },
  contact: {
    label: "Contact",
    title: "Let’s talk.",
    intro: "About opportunities after my apprenticeship, projects or simply a first conversation. Email is the fastest way to reach me.",
    emailLabel: "Email",
    copy: "Copy address",
    copied: "Copied",
    linkedin: "LinkedIn",
    github: "GitHub",
    formTitle: "Or write to me here",
    name: "Name",
    email: "Email",
    message: "Message",
    messagePlaceholder: "What is it about?",
    submit: "Send message",
    sending: "Sending …",
    success: "Thank you! Your message has arrived. I will get back to you as soon as I can.",
    error: "Sorry, that didn’t work. Please email me directly:",
    required: "Please fill in this field.",
    invalidEmail: "Please enter a valid email address.",
    privacyNote: "Your details are only used to reply to your message.",
    privacyLink: "Privacy",
  },
  footer: {
    role: "Application developer apprentice at Swisscom",
    source: "Source code of this website",
    top: "Back to top",
    privacy: "Privacy",
  },
  privacy: {
    title: "Privacy",
    updated: "Last updated: November 2026",
    sections: [
      { heading: "Controller", paragraphs: ["Matti Koenis, Zurich area, Switzerland. Contact: matti@koenis.ch"] },
      {
        heading: "Hosting",
        paragraphs: [
          "This website is served via GitHub Pages (GitHub Inc., USA). When you visit, GitHub processes technically necessary data such as your IP address in server log files. Details: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "No cookies, no tracking",
        paragraphs: ["This website sets no cookies and uses no analytics or tracking services. Fonts and images are loaded directly from this domain."],
      },
      {
        heading: "Contact form",
        paragraphs: [
          "If you use the contact form, your name, email address and message are sent to me by email via the EmailJS service (emailjs.com). I only use this information to reply to your request and delete it once it is no longer needed for that purpose. You can also email me directly instead.",
        ],
      },
      {
        heading: "External links",
        paragraphs: ["Links to GitHub, LinkedIn and my project sites lead to third-party services, which have their own privacy policies."],
      },
      {
        heading: "Your rights",
        paragraphs: ["You can request information about the data I hold about you at any time, and ask for it to be corrected or deleted. An email to matti@koenis.ch is enough."],
      },
    ],
  },
  notFound: {
    title: "This page doesn’t exist.",
    text: "The address may have changed. You will find all projects on the home page.",
    back: "Go to home page",
  },
};

export default en;
