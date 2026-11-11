const sv = {
  lang: "sv",
  locale: "sv_SE",
  langName: "Svenska",
  meta: {
    homeTitle: "Matti Koenis – Applikationsutvecklare under utbildning på Swisscom",
    homeDescription:
      "Personlig portfolio för Matti Koenis, applikationsutvecklare under utbildning på Swisscom i Zürich. Om mig, tekniska och sociala kompetenser, erfarenhet på Swisscom och kontakt.",
    projectTitle: (name) => `${name} – Projektinblick | Matti Koenis`,
    privacyTitle: "Integritet | Matti Koenis",
    privacyDescription: "Integritetspolicy för mattikoenis.ch: vilka uppgifter som behandlas när du besöker sidan eller skickar ett meddelande.",
    notFoundTitle: "Sidan hittades inte | Matti Koenis",
    jobTitle: "Applikationsutvecklare under utbildning",
  },
  nav: {
    about: "Om mig",
    skills: "Kompetenser",
    experience: "Erfarenhet",
    projects: "Projekt",
    contact: "Kontakt",
    menu: "Meny",
    openMenu: "Öppna menyn",
    closeMenu: "Stäng menyn",
    skip: "Hoppa till innehållet",
    language: "Språk",
    home: "Startsida",
    primary: "Huvudnavigering",
  },
  hero: {
    badge: "Applikationsutvecklare under utbildning · Swisscom",
    greeting: "Hej, jag är",
    name: "Matti Koenis",
    claim: "Från idé till pålitlig, modern mjukvara.",
    lead:
      "Jag utbildar mig till applikationsutvecklare på Swisscom i Zürich. Mina styrkor ligger i fokuserat, självständigt och teamorienterat arbete – från moderna webbapplikationer och Microsoft Power Platform till koordinering i utvecklingsteamet.",
    ctaAbout: "Mer om mig",
    ctaSkills: "Utforska kompetenser",
    ctaContact: "Kontakta mig",
    status: "Redo för nästa steg efter lärlingsperioden",
    location: "Zürichregionen, Schweiz",
    roleTag: "Från aug 2026: Team Halo – Host (Web Dev)",
    cards: [
      { label: "Fokus", value: "Moderna applikationer & webb", detail: "React, TypeScript & Power Platform" },
      { label: "Arbetsstil", value: "Självständig & teamstark", detail: "Pålitlig, strukturerad & kommunikativ" },
      { label: "Intressen", value: "Ekonomi, tech & idrott", detail: "Finance, nya appar & aktiv balans" },
    ],
  },
  about: {
    label: "Om mig",
    title: "Professionell, fokuserad och öppen för nytt.",
    intro:
      "Jag utbildar mig för närvarande till applikationsutvecklare på Swisscom. Det som driver mig är att lösa praktiska problem med ren teknik, genomtänkt struktur och ett tydligt uttryck.",
    paragraphs: [
      "I vardagen på Swisscom utvecklar jag lösningar med Microsoft Power Platform, SharePoint och moderna webbteknologier. Från augusti 2026 tar jag dessutom en teamlead-roll som Host i Team Halo med ansvar för koordinering och samarbete inom webbutveckling.",
      "Utöver teknik har jag ett stort intresse för ekonomi, finansmarknader och digitala produkter. Som balans till skärmen behöver jag rörelse och idrott – på tennisbanan, på gymmet, i skidbacken eller ute i löpspåret.",
    ],
    portraitAlt: "Porträtt av Matti Koenis",
    portraitCaption: "Matti Koenis · Swisscom Zürich",
    highlightsTitle: "Det som kännetecknar mig",
    highlights: [
      {
        icon: "briefcase",
        title: "Applikationsutvecklare under utbildning",
        text: "På Swisscom utvecklas jag kontinuerligt genom olika praktikrotationer och arbetar med rena, moderna och praktiska lösningar.",
      },
      {
        icon: "languages",
        title: "Fyra språk i vardagen",
        text: "Uppvuxen flerspråkigt med tyska, nederländska och svenska samt stark engelska från 9 års skola och dagligt IT-arbete.",
      },
      {
        icon: "code",
        title: "Mindset & kvalitet",
        text: "Fokuserad, självständig och teamstark – med genuint intresse för ekonomi, datorer och moderna applikationer.",
      },
    ],
    languagesTitle: "Språk",
    languagesSubtitle: "Kommunikation i vardagen & på jobbet",
    languageItems: [
      { code: "DE", name: "Tyska", level: "Modersmål", pct: 100 },
      { code: "NL", name: "Nederländska", level: "Andraspråk / Flytande", pct: 90 },
      { code: "EN", name: "Engelska", level: "Flytande i IT & vardag (9 år)", pct: 80 },
      { code: "SV", name: "Svenska", level: "God samtalsförmåga", pct: 70 },
    ],
    hobbiesTitle: "Intressen & hobbyer",
    hobbiesSubtitle: "Det som ger mig energi utanför koden",
    hobbies: [
      { icon: "trophy", name: "Tennis", detail: "Fokus, strategi & precision på banan" },
      { icon: "dumbbell", name: "Gym & Fitness", detail: "Disciplin & styrketräning som rutin" },
      { icon: "snowflake", name: "Skidåkning", detail: "Vintersport i de schweiziska alperna" },
      { icon: "footprints", name: "Löpning", detail: "Uthållighet & klart huvud utomhus" },
    ],
  },
  skills: {
    label: "Kompetenser",
    title: "Teknisk grund & starkt samarbete.",
    intro:
      "En bred teknisk grund från min utbildning på Swisscom, yrkesskolemoduler och egna applikationer – kombinerat med ett tydligt och pålitligt arbetssätt.",
    techTitle: "Tekniska skills",
    techSubtitle: "Teknologier, verktyg & praktisk användning",
    filterAll: "Alla",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databaser",
      cloud: "Cloud & DevOps",
      tools: "Tools & Analytics",
    },
    techItems: [
      { category: "frontend", name: "React", context: "Moderna webbappar, komponenter & state", where: "Praktik & webbprojekt", featured: true },
      { category: "frontend", name: "JavaScript", context: "ES2024, asynkron logik & DOM/API:er", where: "Codemix & webbutveckling", featured: true },
      { category: "frontend", name: "TypeScript", context: "Typsäkra applikationer & datamodeller", where: "Webbapplikationer", featured: true },
      { category: "frontend", name: "CSS & Tailwind", context: "Responsiva layouter, designsystem & rörelse", where: "Alla webbfrontends", featured: true },
      { category: "frontend", name: "PowerApps Canvas", context: "Affärsapplikationer & UI-flöden", where: "Swisscom vardag", featured: true },
      { category: "backend", name: "Node.js", context: "API:er, skript & backendtjänster", where: "Fullstack-utveckling", featured: true },
      { category: "backend", name: "Power Automate", context: "Automatiserade arbetsflöden & integrationer", where: "Swisscom DevOps", featured: true },
      { category: "backend", name: "Java", context: "Objektorienterad programmering & REST (Quarkus)", where: "Modul 223 & utbildning", featured: false },
      { category: "database", name: "SharePoint", context: "Datalistor, behörigheter & verksamhetslösningar", where: "Swisscom DevOps", featured: true },
      { category: "database", name: "SQL", context: "Relationella datamodeller, frågor & joins", where: "Utbildning & projekt", featured: true },
      { category: "database", name: "MongoDB", context: "Dokumentorienterad NoSQL-lagring", where: "Databasmoduler", featured: false },
      { category: "database", name: "MariaDB", context: "Relationell databasadministration", where: "Databasmoduler", featured: false },
      { category: "cloud", name: "Microsoft Power Platform", context: "End-to-end-affärsappar & governance", where: "Swisscom kärnfokus", featured: true },
      { category: "cloud", name: "Docker", context: "Containerisering & devcontainer-miljöer", where: "DevOps & applikationer", featured: false },
      { category: "tools", name: "VS Code", context: "Daglig utvecklingsmiljö & felsökning", where: "Daglig användning", featured: false },
      { category: "tools", name: "Git & GitHub", context: "Versionshantering, branches & arbetsflöden", where: "Daglig användning", featured: true },
      { category: "tools", name: "IntelliJ IDEA", context: "IDE för Java- & backendutveckling", where: "Utbildning", featured: false },
      { category: "tools", name: "Power BI", context: "Datamodellering, rapporter & dashboards", where: "Swisscom DevOps", featured: false },
    ],
    socialTitle: "Sociala kompetenser & arbetsstil",
    socialSubtitle: "Hur jag samarbetar i team och projekt",
    socialItems: [
      {
        icon: "users",
        name: "Social styrka",
        description: "Empati, öppenhet och starka mellanmänskliga färdigheter i det dagliga samarbetet.",
      },
      {
        icon: "handshake",
        name: "Teamarbete",
        description: "Bidra pålitligt i teamet, dela kunskap och nå gemensamma mål tillsammans.",
      },
      {
        icon: "message",
        name: "Tydlig kommunikation",
        description: "Förklara tekniska ämnen klart och konkret – både i teamet och gentemot intressenter.",
      },
      {
        icon: "target",
        name: "Självständigt arbete",
        description: "Ta sig an uppgifter strukturerat, ta ansvar och hålla fokus hela vägen i mål.",
      },
      {
        icon: "lightbulb",
        name: "Lösningsfokus",
        description: "Tänka pragmatiskt, utforska nya idéer och bygga rena, hållbara lösningar.",
      },
    ],
    positioning: {
      tag: "Framåtblick",
      title: "Redo för nästa steg efter lärlingsperioden.",
      description:
        "Den här sidan visar hur jag arbetar och positionerar mig: professionellt, tydligt, modernt och med genuint intresse för bra samarbete. Jag söker möjligheter där jag kan fortsätta utvecklas och bidra aktivt.",
      bringTitle: "Det jag bidrar med",
      bringText:
        "Ett rent arbetssätt, fokus, självständighet och laganda – tillsammans med teknisk nyfikenhet och viljan att ständigt utvecklas.",
      standTitle: "Det jag står för",
      standText:
        "Tydlig kommunikation, pålitlighet och moderna applikationer med ett rent, genomtänkt uttryck.",
    },
  },
  experience: {
    label: "Erfarenhet",
    title: "Min resa som applikationsutvecklare på Swisscom.",
    intro:
      "Under min utbildning på Swisscom roterar jag genom olika praktikstationer – från direkt IT-support och Power Platform-automatisering till att koordinera ett webbutvecklingsteam.",
    current: "Kommande / Aktuell roll",
    items: [
      {
        period: "Från aug 2026",
        title: "Team Halo – Host",
        place: "Swisscom · Zürich / Bern",
        text: "Teamlead-roll i webbutvecklingsteamet med ansvar för koordinering, samarbete, planering och moderna webblösningar.",
        tags: ["Web Development", "Frontend", "Teamledning", "Koordinering"],
      },
      {
        period: "Aug 2025 – aug 2026",
        title: "Power Platform DevOps",
        place: "Swisscom · Zürich",
        text: "Utveckling, drift och vidareutveckling av PowerApps-, Power BI-, Power Automate- och SharePoint-lösningar med DevOps-metodik.",
        tags: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
      },
      {
        period: "Feb 2025 – jul 2025",
        title: "Codemix programmeringsprojekt",
        place: "Swisscom · Zürich",
        text: "Strukturerad introduktion till mjukvaruutveckling med fokus på solida grunder, webbteknologier och praktisk tillämpning.",
        tags: ["HTML", "CSS", "JavaScript", "Grundkoncept"],
      },
      {
        period: "Aug 2024 – feb 2025",
        title: "Future Work Specialist",
        place: "Swisscom · Zürich / Bern",
        text: "Projekt kring framtidens arbetsmodeller samt direkt IT-support genom floorwalking och stöd till medarbetare.",
        tags: ["IT-support", "Kommunikation", "Teamarbete"],
      },
    ],
  },
  projects: {
    label: "Praktiska exempel",
    title: "Inblick i egna applikationer",
    intro:
      "Som komplement till min utbildning bygger jag egna webb- och mjukvaruprojekt för att fördjupa mig i nya teknologier.",
    featured: "Utvalt projekt",
    viewCase: "Visa detaljer",
    live: "Live-demo",
    code: "GitHub",
    liveUnavailable: "Lokalt / Repository",
    otherTitle: "Ytterligare utbildningsprojekt",
    other: {
      punchclock: {
        title: "Punch Clock (Modul 223)",
        text: "Multi-user-applikation för tidrapportering med Java/Quarkus, PostgreSQL och Docker-devcontainer inklusive UML-analys.",
      },
    },
  },
  projectTexts: {
    tdown: {
      tagline: "Interaktiv 3D-jordglob i realtid för flygtrafik, fartyg, satelliter och ISS.",
      summary:
        "Kombinerar fyra öppna livedataströmmar i en mjuk 3D-vy byggd med React, TypeScript, three.js och en egen Deno-proxy.",
      coverAlt:
        "Skärmbild av tdown: en 3D-jord med live flygtrafik, lagerval och realtidsräknare.",
      role: "Eget projekt: koncept, design, utveckling och driftsättning",
      sections: [
        {
          heading: "Översikt",
          paragraphs: [
            "tdown samlar flygtrafik, sjöfart, satellitbanor och ISS position på en interaktiv jordglob. Varje lager kan slås av och på; ett klick öppnar detaljpaneler med bilder och kort fakta.",
            "All data kommer från fritt tillgängliga källor: adsb.fi, AISStream, wheretheiss.at och Celestrak.",
          ],
        },
        {
          heading: "Utmaningar och lösningar",
          items: [
            {
              title: "Flygdata utan CORS",
              text: "ADS-B-API:er skickar inga CORS-headers. En egen proxy på Deno Deploy hämtar adsb.fi i rutor om 250 NM, slår ihop allt och levererar ett kompakt format.",
            },
            {
              title: "Tusentals fartyg utan hack",
              text: "AIS-positioner kommer via en WebSocket, samlas i en Map och skickas till React var tredje sekund.",
            },
            {
              title: "Satelliter beräknade i webbläsaren",
              text: "Banelement (TLE) från Celestrak beräknas i webbläsaren med SGP4-modellen från satellite.js – inklusive ISS-passager.",
            },
            {
              title: "Verifierade fartygsfoton",
              text: "Foton på fartyg visas bara vid en entydig matchning via IMO-numret i Wikidata eller Wikimedia Commons.",
            },
          ],
        },
        {
          heading: "Funktioner",
          list: [
            "Fyra livelager: flyg (ADS-B), fartyg (AIS), ISS och satelliter",
            "3D-jordglob med three.js och React Three Fiber",
            "Kartvy med Leaflet och satellitbilder",
            "Egen position och förutsägelse av ISS-passager",
            "Detaljpaneler med bilder och fakta från Wikipedia",
            "Installerbar som progressiv webbapp",
          ],
        },
      ],
      result:
        "tdown är öppet tillgänglig på tdowner.com och visar tusentals flygplan och satelliter samtidigt i webbläsaren.",
    },
    neuroflap: {
      tagline: "AI-simulering där 150 fåglar på egen hand lär sig spela Flappy Bird genom neuroevolution.",
      summary:
        "Neuralt nätverk (5→8→1) och genetisk algoritm skrivna från grunden i ren Python – med livevisualisering av nätverket.",
      coverAlt:
        "Skärmbild av NeuroFlap under AI-träning med livevisualisering av det neurala nätverket och fitnesskurva.",
      galleryAlt: ["Skärmbild av NeuroFlap i läget ”spela själv” jämfört med AI:ns bästa poäng."],
      role: "Eget projekt: koncept, simulering, AI och visualisering",
      sections: [
        {
          heading: "Översikt",
          paragraphs: [
            "Var och en av de 150 fåglarna styrs av ett eget litet neuralt nätverk. För varje generation förbättras nätverken genom selektion, korsning och mutation tills de bästa fåglarna flyger felfritt genom rören.",
          ],
        },
        {
          heading: "Så fungerar det",
          items: [
            {
              title: "Neuralt nätverk från grunden",
              text: "Ett feedforward-nätverk (5 → 8 → 1) med tanh och sigmoid i ren Python utan externa ML-bibliotek.",
            },
            {
              title: "Genetisk algoritm",
              text: "Elitism, turneringsurval, uniform korsning och gaussisk mutation optimerar vikterna mellan generationerna.",
            },
            {
              title: "Gör inlärningen synlig",
              text: "Ledarens neurala nätverk och inlärningskurvan ritas i realtid bredvid spelfältet.",
            },
            {
              title: "Ren arkitektur & tester",
              text: "Simulering och AI är frikopplade från renderingen och täcks av en pytest-svit.",
            },
          ],
        },
        {
          heading: "Funktioner",
          list: [
            "Svärmvy med alla 150 fåglar där ledaren framhävs",
            "Människoläge: spela själv mot AI:ns bästa resultat",
            "Stegrad svårighet och snabbspolning upp till 30×",
            "Körs direkt i webbläsaren tack vare pygbag (WebAssembly)",
          ],
        },
      ],
      result:
        "Redan efter några få generationer klarar agenterna banan pålitligt; simuleringen körs både på desktop och i webbläsaren.",
    },
    "ai-compare": {
      tagline: "Jämförelseplattform för 280+ AI-modeller med verifierad källa för varje uppgift.",
      summary:
        "Strukturerad katalog och direktjämförelse för priser, kontextfönster och benchmarks byggd med Next.js, TypeScript, Supabase och Zod.",
      coverAlt: "Översiktsgrafik för AI Compare: 280+ modeller, 35 leverantörer och källhänvisning per datapunkt.",
      role: "Eget projekt: koncept, datamodell, design och utveckling",
      sections: [
        {
          heading: "Översikt",
          paragraphs: [
            "AI Compare gör AI-modeller från olika leverantörer objektivt jämförbara: priser, kontextfönster, modaliteter, kapabiliteter och benchmarks – varje värde har en källa och ett kontroll-datum.",
          ],
        },
        {
          heading: "Principer för pålitlig data",
          items: [
            {
              title: "Varje uppgift har en källa",
              text: "Varje fakta sparas med källa och kontroll-datum och valideras med Zod-scheman.",
            },
            {
              title: "Tydliga saknade värden",
              text: "Ej publicerade uppgifter visas öppet som ”ej redovisat” istället för att gissas.",
            },
            {
              title: "Objektiva jämförelser",
              text: "Jämförelsen av upp till fyra modeller lyfter bara fram mätbara fakta och prisskillnader.",
            },
          ],
        },
        {
          heading: "Funktioner",
          list: [
            "Filtrerbar katalog med rutnäts- och tabellvy",
            "Direktjämförelse av 2 till 4 modeller inklusive kostnadskalkylator",
            "AI Finder-assistent och kommandopalett (Ctrl+K)",
            "Testad med Vitest och Playwright",
          ],
        },
      ],
      result:
        "Komplett fullstack-arkitektur med Next.js App Router, TypeScript och PostgreSQL/Supabase.",
    },
  },
  caseStudy: {
    back: "Tillbaka till översikten",
    role: "Roll",
    period: "Period",
    stack: "Teknologier",
    links: "Länkar",
    result: "Resultat",
    next: "Nästa projekt",
    gallery: "Ytterligare vy",
  },
  contact: {
    label: "Kontakt",
    title: "Låt oss connecta.",
    intro:
      "För utbyte, möjligheter efter lärlingsperioden eller ett första samtal är jag lätt att nå. Skriv gärna ett mejl eller använd formuläret direkt.",
    emailLabel: "E-post",
    copy: "Kopiera e-post",
    copied: "Kopierad!",
    linkedin: "LinkedIn",
    github: "GitHub",
    locationLabel: "Plats",
    locationValue: "Zürichregionen, Schweiz",
    formTitle: "Skicka ett direkt meddelande",
    name: "Ditt namn",
    email: "Din e-postadress",
    message: "Meddelande",
    messagePlaceholder: "Hej Matti, jag hör av mig angående …",
    submit: "Skicka meddelande",
    sending: "Skickar …",
    success: "Tack! Ditt meddelande har skickats – jag återkommer så snart som möjligt.",
    error: "Det gick tyvärr inte att skicka. Skriv gärna direkt till:",
    required: "Fyll i det här fältet.",
    invalidEmail: "Ange en giltig e-postadress.",
    privacyNote: "Dina uppgifter används enbart för att svara på ditt meddelande.",
    privacyLink: "Integritet",
  },
  footer: {
    role: "Applikationsutvecklare under utbildning på Swisscom · Zürich",
    ctaTitle: "Redo för ett samtal?",
    ctaText: "Jag ser fram emot spännande kontakter, feedback eller möjligheter efter min utbildning.",
    source: "GitHub Repository",
    top: "Till toppen",
    privacy: "Integritet",
  },
  privacy: {
    title: "Integritet",
    updated: "Senast uppdaterad: november 2026",
    sections: [
      {
        heading: "Personuppgiftsansvarig",
        paragraphs: ["Matti Koenis, Zürichregionen, Schweiz. Kontakt: matti@koenis.ch"],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Den här webbplatsen levereras via GitHub Pages (GitHub Inc., USA). Vid besök behandlar GitHub tekniskt nödvändiga anslutningsdata såsom IP-adress i serverloggar. Mer information: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "Inga kakor, ingen spårning",
        paragraphs: [
          "Den här webbplatsen sätter inga kakor och använder inga analys- eller spårningstjänster. Typsnitt och bilder laddas direkt från den här domänen.",
        ],
      },
      {
        heading: "Kontaktformulär",
        paragraphs: [
          "När du använder kontaktformuläret skickas namn, e-postadress och meddelande till mig via e-post genom tjänsten EmailJS (emailjs.com). Jag använder uppgifterna enbart för att svara på din förfrågan och raderar dem därefter.",
        ],
      },
      {
        heading: "Externa länkar",
        paragraphs: [
          "Länkar till GitHub, LinkedIn och externa projektsidor leder till tredjepartstjänster som omfattas av sina egna integritetspolicyer.",
        ],
      },
      {
        heading: "Dina rättigheter",
        paragraphs: [
          "Du kan när som helst begära registerutdrag, rättelse eller radering av dina personuppgifter genom att mejla matti@koenis.ch.",
        ],
      },
    ],
  },
  notFound: {
    title: "Den här sidan hittades inte.",
    text: "Adressen kan ha ändrats. På startsidan hittar du all information om mig.",
    back: "Till startsidan",
  },
};

export default sv;
