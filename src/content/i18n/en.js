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
  home: {
    nav: { about: "About", path: "Path", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      intro:
        "I’m training as an application developer at Swisscom in Zurich. I work with focus and independently – and I’m at my best in a strong team.",
      status: "Open to the next step after my apprenticeship",
      current: "Host in Team Halo since August 2026",
      ctaPath: "See my path",
      titlesLabel: "My profession in my four languages",
    },
    about: {
      title: "About",
      motto: "Transforming your ideas into reliable software.",
      lead: "At Swisscom I move through different teams and learn how good software comes together – from IT support and the Microsoft Power Platform to web development.",
      photoAlt: "Black-and-white portrait of Matti Koenis",
      facts: [
        { term: "Languages", text: "German, Dutch and Swedish – plus English from nine years at school." },
        { term: "Interests", text: "Business, finance and strategy, computers and new applications." },
        { term: "Balance", text: "Tennis, gym, skiing and running." },
        { term: "Work style", text: "Focused, independent and team-oriented." },
      ],
      bringTitle: "What I bring",
      bringText:
        "A clean way of working, focus, independence and team spirit – plus technical curiosity and the will to keep developing.",
      standTitle: "What I stand for",
      standText: "Clear communication, reliability and modern applications with a clean presentation.",
    },
    path: {
      title: "Path",
      heading: "With every station, my vocabulary grows.",
      lead: "Since August 2024 I’ve been learning in changing teams at Swisscom. Every station adds new terms, tools and responsibilities.",
      cloudLabel: "My professional vocabulary",
      count: (n, total) => `${n} of ${total} terms`,
      newWords: "New words",
      currentLabel: "now",
      stations: {
        futurework: {
          period: "Aug 2024 – Feb 2025",
          title: "Future Work Specialist",
          place: "Swisscom, Zurich and Bern",
          text: "Project on shaping future ways of working, plus IT support as a floorwalker.",
        },
        codemix: {
          period: "Feb 2025 – Jul 2025",
          title: "Codemix programming project",
          place: "Swisscom, Zurich",
          text: "A structured introduction to software development, focused on fundamentals and practical application.",
        },
        powerplatform: {
          period: "Aug 2025 – Aug 2026",
          title: "Power Platform DevOps",
          place: "Swisscom, Zurich",
          text: "Developing and managing PowerApps, Power BI and SharePoint solutions with DevOps practices.",
        },
        halo: {
          period: "Since Aug 2026",
          title: "Team Halo – Host",
          place: "Swisscom, Zurich and Bern",
          text: "Team lead role in the web development team with responsibility for coordination, collaboration and modern web solutions.",
        },
        school: {
          period: "Since 2024",
          title: "Vocational school and own projects",
          place: "Alongside the job",
          text: "At school and in my own projects on GitHub I learn further programming languages, databases and tools.",
        },
      },
      next: {
        label: "Next",
        title: "Ready for the next step after my apprenticeship.",
        text: "This site shows how I position myself: professional, clear, modern and genuinely interested in good collaboration. I’m looking for opportunities where I can keep growing and actively help shape things.",
        cta: "Get in touch",
      },
    },
    skills: {
      title: "Skills",
      heading: "Everything at a glance.",
      lead: "The tools I work with – deliberately without percentage bars. Where I learned them is shown in my path.",
      groups: { frontend: "Frontend", backend: "Backend", database: "Databases", cloud: "Cloud & DevOps", tools: "Tools" },
      inspectHint: "Hover or tap a skill to see where I picked it up.",
      learnedIn: "Picked up at",
      toStation: "Go to station",
      socialTitle: "Social competencies",
      social: [
        { name: "Social awareness", description: "Empathy and strong interpersonal skills" },
        { name: "Teamwork", description: "Collaborating and reaching shared goals" },
        { name: "Communication", description: "Clear and effective communication" },
        { name: "Independent work", description: "Ownership and self-management" },
        { name: "Solution mindset", description: "Creative problem solving and innovation" },
      ],
    },
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
      summary: "Prices, context windows, capabilities and benchmarks of around 300 models from 35 providers, every figure sourced.",
      coverAlt: "Screenshot of the AI Compare home page with a search field, the “Compare Models” and “Explore Models” buttons and a note that 300 models from 35 providers are tracked.",
      role: "Personal project: concept, data model, design and development",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "AI Compare makes AI models comparable: pricing, context windows, modalities, capabilities, benchmarks and API access. The live version tracks around 300 models from 35 providers with 317 cited sources (as of 11 November 2026).",
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
      result: "AI Compare is publicly available at ai-compare-two.vercel.app; the complete code is on GitHub.",
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
    cooldown: "You just sent a message. Please wait a minute or email me directly at:",
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
