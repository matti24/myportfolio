const sv = {
  lang: "sv",
  locale: "sv_SE",
  langName: "Svenska",
  meta: {
    homeTitle: "Matti Koenis – Applikationsutvecklare under utbildning på Swisscom",
    homeDescription:
      "Portfolio för Matti Koenis, applikationsutvecklare under utbildning på Swisscom i Zürich. Projekt med React, TypeScript, three.js, Python och Microsoft Power Platform.",
    projectTitle: (name) => `${name} – Fallstudie | Matti Koenis`,
    privacyTitle: "Integritet | Matti Koenis",
    privacyDescription: "Integritetspolicy för mattikoenis.ch: vilka uppgifter som behandlas när du besöker sidan eller skickar ett meddelande.",
    notFoundTitle: "Sidan hittades inte | Matti Koenis",
    jobTitle: "Applikationsutvecklare under utbildning",
  },
  nav: {
    projects: "Projekt",
    experience: "Erfarenhet",
    about: "Om mig",
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
    eyebrow: "Applikationsutvecklare under utbildning · Swisscom · Zürich",
    title: "Jag utvecklar applikationer som gör komplex data begriplig.",
    lead:
      "I jobbet med Microsoft Power Platform, i egna projekt med React, TypeScript och three.js – till exempel en 3D-jordglob som visar flygplan, fartyg och satelliter i realtid.",
    ctaProjects: "Se projekten",
    ctaContact: "Kontakta mig",
    status: "Öppen för möjligheter efter utbildningen",
    globeLabel: "Zürich · 47,37° N, 8,54° O",
    globeHint: "Dra för att rotera",
  },
  facts: [
    { value: "3", label: "egna projekt, öppna på GitHub" },
    { value: "4", label: "språk: tyska, nederländska, svenska, engelska" },
    { value: "4", label: "praktikstationer under utbildningen" },
  ],
  projects: {
    label: "Projekt",
    title: "Utvalda arbeten",
    intro: "Tre egna projekt, alla öppna på GitHub. Varje fallstudie visar vilket problem jag löste och hur.",
    featured: "Utvalt projekt",
    viewCase: "Läs fallstudien",
    live: "Se live",
    code: "Kod på GitHub",
    liveUnavailable: "Liveversionen är inte tillgänglig just nu",
    otherTitle: "Fler arbeten",
    other: {
      punchclock: {
        title: "Punch Clock",
        text: "Övningsprojekt i modul 223: tidrapportering med Quarkus, PostgreSQL och en Docker-devcontainer, inklusive en nulägesanalys med UML-diagram.",
      },
    },
  },
  projectTexts: {
    tdown: {
      tagline: "En interaktiv 3D-jordglob som visar flygplan, fartyg, satelliter och ISS i realtid.",
      summary: "Flera öppna livedatakällor på en roterande jordglob – direkt i webbläsaren, utan betalda API:er.",
      coverAlt:
        "Skärmbild av tdown: en 3D-jord med tusentals flygplanssymboler över Amerika, lagerval för flyg, fartyg, ISS och satelliter samt liveräknare.",
      role: "Eget projekt: koncept, design, utveckling och driftsättning",
      sections: [
        {
          heading: "Översikt",
          paragraphs: [
            "tdown samlar flygtrafik, sjöfart, satellitbanor och ISS position på en interaktiv jordglob. Varje lager kan slås av och på; ett klick öppnar en detaljpanel med bilder och kort information. Dessutom finns en platt kartvy med satellitbilder.",
            "All data kommer från fritt tillgängliga källor: adsb.fi, AISStream, wheretheiss.at och Celestrak.",
          ],
        },
        {
          heading: "Utmaningar och lösningar",
          items: [
            {
              title: "Flygdata utan CORS",
              text: "ADS-B-API:er skickar inga CORS-headers och erbjuder ingen gratis global endpoint. En egen proxy på Deno Deploy hämtar därför adsb.fi i rutor om 250 NM – ungefär en förfrågan per sekund, inom den publika gränsen –, slår ihop allt till en global ögonblicksbild och levererar ett kompakt format.",
            },
            {
              title: "Tusentals fartyg utan hack",
              text: "AIS-positioner kommer via en WebSocket. De samlas i en Map och lämnas till React i omgångar bara var tredje sekund. Högst 20 000 fartyg; fartyg som slutar rapportera tas bort.",
            },
            {
              title: "Satelliter utan egen server",
              text: "Banelement (TLE) från Celestrak räknas fram i webbläsaren med SGP4-modellen i satellite.js – för Starlink, OneWeb och GPS. På samma grund förutsäger tdown nästa synliga ISS-passage över din plats.",
            },
            {
              title: "Hellre ingen bild än en felaktig",
              text: "Foton på fartyg visas bara när de kan kopplas entydigt – via IMO-numret i Wikidata eller en matchande träff på Wikimedia Commons. Annars förblir fältet medvetet tomt.",
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
            "Installerbar som progressiv webbapp (manifest och service worker)",
          ],
        },
      ],
      result:
        "tdown är öppet tillgänglig på tdowner.com. Vid en ögonblicksbild den 10 november 2026 visade jordgloben ungefär 6 500 flygplan och 8 000 satelliter samtidigt.",
    },
    neuroflap: {
      tagline: "En AI som lär sig Flappy Bird framför dina ögon – neurala nätverk och genetisk algoritm byggda från grunden.",
      summary: "150 fåglar lär sig flyga genom neuroevolution. Utan träningsdata, utan backpropagation, utan ML-bibliotek.",
      coverAlt:
        "Skärmbild av NeuroFlap under AI-träning: fåglar flyger genom rör; till höger statistik per generation, en livevisualisering av det neurala nätverket och en fitnessgraf.",
      galleryAlt: ["Skärmbild av NeuroFlap i läget ”spela själv” med din egen poäng bredvid AI:ns bästa resultat."],
      role: "Eget projekt: koncept, simulering, AI och visualisering",
      sections: [
        {
          heading: "Översikt",
          paragraphs: [
            "Var och en av de 150 fåglarna styrs av ett eget litet neuralt nätverk. I början kraschar alla direkt. Med varje generation blir nätverken bättre – tills de bästa fåglarna flyger i princip oändligt. Ingen har visat dem hur.",
          ],
        },
        {
          heading: "Så fungerar det",
          items: [
            {
              title: "Neuralt nätverk från grunden",
              text: "Ett feedforward-nätverk (5 → 8 → 1) med tanh och sigmoid, i ren Python. Indata: höjd, vertikal hastighet, avstånd till nästa rör och avstånd till öppningens över- och underkant.",
            },
            {
              title: "Genetisk algoritm",
              text: "De bästa nätverken behålls (elitism). Föräldrar väljs genom turneringsurval, kombineras med uniform korsning och förändras med gaussisk mutation. Fitness = överlevnadstid plus bonus för varje passerat rör.",
            },
            {
              title: "Gör inlärningen synlig",
              text: "Den aktuella ledarens nätverk ritas live – positiva och negativa vikter i färg, aktiva neuroner lyser. En fitnessgraf visar inlärningskurvan över generationerna.",
            },
            {
              title: "Byggt för att testas",
              text: "Simulering och AI är helt separerade från renderingen och körs headless. En pytest-svit testar nätverket, de genetiska operatorerna och simuleringen.",
            },
          ],
        },
        {
          heading: "Funktioner",
          list: [
            "Svärmvy med alla 150 fåglar, ledaren framhävd",
            "Människoläge: spela själv mot AI:ns bästa resultat",
            "Stegrad svårighet – smalare öppningar, högre tempo",
            "Tidsförlopp upp till 30× för att följa inlärningen",
            "Körs även i webbläsaren tack vare pygbag (Python som WebAssembly)",
          ],
        },
      ],
      result:
        "I den dokumenterade exempelkörningen kommer genombrottet i generation 8: bästa poäng 48 jämfört med 2 i generation 1. Koden är publicerad under MIT-licens.",
    },
    "ai-compare": {
      tagline: "En oberoende databas och jämförelseplattform för AI-modeller – varje uppgift med källa.",
      summary: "Priser, kontextfönster, förmågor och benchmarks för fler än 280 modeller från 35 leverantörer, varje siffra med källa.",
      coverAlt: "Typografisk projektbild för AI Compare med nyckeltalen 280+ modeller, 35 leverantörer och en källa per uppgift.",
      role: "Eget projekt: koncept, datamodell, design och utveckling",
      sections: [
        {
          heading: "Översikt",
          paragraphs: [
            "AI Compare gör AI-modeller jämförbara: priser, kontextfönster, modaliteter, förmågor, benchmarks och API-åtkomst. Enligt projektdokumentationen omfattar katalogen fler än 280 modeller från 35 leverantörer (data per 1 oktober 2026).",
          ],
        },
        {
          heading: "Principer för pålitlig data",
          items: [
            {
              title: "Varje uppgift har en källa",
              text: "Varje uppgift lagras som ett värde med källa, kontrolldatum och uppdateringsdatum. Kända värden utan källa klarar inte valideringen.",
            },
            {
              title: "Okänt förblir okänt",
              text: "Saknade värden visas som ”ej offentliggjort” – aldrig som noll, ”nej” eller ”gratis”. Det finns inget påhittat totalbetyg.",
            },
            {
              title: "Bara objektiva markeringar",
              text: "Jämförelser markerar enbart mätbara ytterligheter, till exempel det lägsta publicerade priset eller det största kontextfönstret.",
            },
          ],
        },
        {
          heading: "Funktioner",
          list: [
            "Utforskare med URL-synkade filter, rutnäts- och tabellvy",
            "Jämför 2 till 4 modeller, inklusive ”bara skillnader” och kostnadskalkylator",
            "AI Finder: en guide i fyra steg med förklarade träffar",
            "Kommandopalett (Ctrl+K), releaseflöde och benchmark-utforskare",
            "Adminstudio med schemavalidering och skydd mot inaktuella utkast",
          ],
        },
        {
          heading: "Teknik",
          paragraphs: [
            "Next.js App Router med serverrendering, TypeScript, Tailwind CSS och Radix UI. Datan ligger i normaliserade Supabase/PostgreSQL-tabeller och valideras med Zod. Därtill strukturerad data (JSON-LD), sitemaps, dynamiska Open Graph-bilder, analys endast efter samtycke samt tester med Vitest och Playwright.",
          ],
        },
      ],
      result: "Hela koden finns på GitHub. Liveversionen är inte tillgänglig just nu.",
    },
  },
  caseStudy: {
    back: "Alla projekt",
    role: "Roll",
    period: "Period",
    stack: "Teknik",
    links: "Länkar",
    result: "Resultat",
    next: "Nästa projekt",
    gallery: "En annan vy",
  },
  experience: {
    label: "Erfarenhet",
    title: "Steg i min utbildning",
    intro: "Applikationsutveckling i praktiken på Swisscom – från IT-support och Power Platform-lösningar till att samordna ett webbteam.",
    current: "Nu",
    items: [
      {
        period: "Sedan aug 2026",
        title: "Team Halo – Host",
        place: "Zürich / Bern",
        text: "Teamledarroll i webbutvecklingsteamet med ansvar för samordning, samarbete och moderna webblösningar.",
        tags: ["Webbutveckling", "Frontend", "Teamledning", "Samordning"],
      },
      {
        period: "aug 2025 – aug 2026",
        title: "Power Platform DevOps",
        place: "Zürich",
        text: "Utveckling och förvaltning av lösningar med PowerApps, Power BI och SharePoint enligt DevOps-metoder.",
        tags: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
      },
      {
        period: "feb 2025 – jul 2025",
        title: "Codemix programmeringsprojekt",
        place: "Zürich",
        text: "En strukturerad introduktion till mjukvaruutveckling med fokus på grunder och praktisk tillämpning.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        period: "aug 2024 – feb 2025",
        title: "Future Work Specialist",
        place: "Zürich / Bern",
        text: "Projekt om framtidens arbetsformer samt IT-support genom floorwalking.",
        tags: ["IT-support", "Kommunikation", "Lagarbete"],
      },
    ],
  },
  about: {
    label: "Om mig",
    title: "Fokuserat arbete, bättre tillsammans.",
    paragraphs: [
      "Jag är applikationsutvecklare under utbildning på Swisscom i Zürich. I vardagen bygger jag lösningar med Microsoft Power Platform; sedan augusti 2026 har jag som host för Team Halo en teamledarroll inom webbutveckling.",
      "På fritiden bygger jag egna projekt – helst där data, visualisering och genomtänkt teknik möts. Jag arbetar fokuserat och självständigt, och värdesätter tydlig kommunikation och bra samarbete lika mycket.",
    ],
    portraitAlt: "Svartvitt porträtt av Matti Koenis",
    languagesTitle: "Språk",
    languages: ["Tyska", "Nederländska", "Svenska", "Engelska"],
    interestsTitle: "Intressen",
    interests: "Ekonomi, datorer och nya applikationer – med tennis, träning, skidåkning och löpning som balans.",
  },
  skills: {
    title: "Kompetenser med belägg",
    intro: "I stället för procentstaplar: var jag faktiskt har använt varje teknik.",
    evidenceLabel: "Används i",
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
        title: "Webb & frontend",
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
        title: "Kvalitet & verktyg",
        items: [
          { name: "Git & GitHub Actions", evidence: ["tdown"] },
          { name: "Vitest & Playwright", evidence: ["ai-compare"] },
          { name: "pytest", evidence: ["neuroflap"] },
        ],
      },
    ],
    moreTitle: "Har även arbetat med",
    more: "Node.js, SQL, MongoDB, MariaDB, VS Code, IntelliJ",
    evidenceNames: { swisscom: "Swisscom", codemix: "Codemix", punchclock: "Punch Clock" },
  },
  contact: {
    label: "Kontakt",
    title: "Hör av dig.",
    intro: "Om möjligheter efter utbildningen, projekt eller bara ett första samtal. Snabbast når du mig via e-post.",
    emailLabel: "E-post",
    copy: "Kopiera adressen",
    copied: "Kopierad",
    linkedin: "LinkedIn",
    github: "GitHub",
    formTitle: "Eller skriv till mig här",
    name: "Namn",
    email: "E-post",
    message: "Meddelande",
    messagePlaceholder: "Vad gäller det?",
    submit: "Skicka meddelande",
    sending: "Skickar …",
    success: "Tack! Ditt meddelande har kommit fram. Jag hör av mig så snart jag kan.",
    error: "Det fungerade tyvärr inte. Skriv gärna direkt till mig:",
    required: "Fyll i det här fältet.",
    invalidEmail: "Ange en giltig e-postadress.",
    privacyNote: "Dina uppgifter används bara för att svara på ditt meddelande.",
    privacyLink: "Integritet",
  },
  footer: {
    role: "Applikationsutvecklare under utbildning på Swisscom",
    source: "Källkoden till den här webbplatsen",
    top: "Till toppen",
    privacy: "Integritet",
  },
  privacy: {
    title: "Integritet",
    updated: "Uppdaterad: november 2026",
    sections: [
      { heading: "Personuppgiftsansvarig", paragraphs: ["Matti Koenis, Zürichområdet, Schweiz. Kontakt: matti@koenis.ch"] },
      {
        heading: "Hosting",
        paragraphs: [
          "Den här webbplatsen levereras via GitHub Pages (GitHub Inc., USA). Vid ett besök behandlar GitHub tekniskt nödvändiga uppgifter som din IP-adress i serverloggar. Mer information: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "Inga cookies, ingen spårning",
        paragraphs: ["Webbplatsen sätter inga cookies och använder inga analys- eller spårningstjänster. Typsnitt och bilder laddas direkt från den här domänen."],
      },
      {
        heading: "Kontaktformulär",
        paragraphs: [
          "Om du använder kontaktformuläret skickas ditt namn, din e-postadress och ditt meddelande till mig via tjänsten EmailJS (emailjs.com). Jag använder uppgifterna enbart för att svara dig och raderar dem när de inte längre behövs för det. Du kan också mejla mig direkt.",
        ],
      },
      {
        heading: "Externa länkar",
        paragraphs: ["Länkar till GitHub, LinkedIn och mina projektsidor leder till tredjepartstjänster med egna integritetspolicyer."],
      },
      {
        heading: "Dina rättigheter",
        paragraphs: ["Du kan när som helst begära information om de uppgifter jag har om dig samt begära rättelse eller radering. Ett mejl till matti@koenis.ch räcker."],
      },
    ],
  },
  notFound: {
    title: "Den här sidan finns inte.",
    text: "Adressen kan ha ändrats. På startsidan hittar du alla projekt.",
    back: "Till startsidan",
  },
};

export default sv;
