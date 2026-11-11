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
  home: {
    nav: { about: "Om mig", path: "Väg", skills: "Kompetenser", projects: "Projekt", contact: "Kontakt" },
    hero: {
      intro:
        "Jag utbildar mig till applikationsutvecklare på Swisscom i Zürich. Jag arbetar fokuserat och självständigt – och allra helst i ett starkt team.",
      status: "Öppen för nästa steg efter lärlingsperioden",
      current: "Host i Team Halo sedan augusti 2026",
      ctaPath: "Se min väg",
      titlesLabel: "Mitt yrke på mina fyra språk",
    },
    about: {
      title: "Om mig",
      motto: "Från idé till digital verklighet.",
      lead: "På Swisscom roterar jag mellan olika team och lär mig hur bra mjukvara blir till – från IT-support och Microsoft Power Platform till webbutveckling.",
      photoAlt: "Svartvitt porträtt av Matti Koenis",
      facts: [
        { term: "Språk", text: "Tyska, nederländska och svenska – plus engelska från nio år i skolan." },
        { term: "Intressen", text: "Ekonomi, finans och strategi, datorer och nya applikationer." },
        { term: "Balans", text: "Tennis, fitness, skidåkning och löpning." },
        { term: "Arbetsstil", text: "Fokuserad, självständig och teamstark." },
      ],
      bringTitle: "Det jag bidrar med",
      bringText: "Ett rent arbetssätt, fokus, självständighet och laganda. Dessutom teknisk nyfikenhet och viljan att utvecklas kontinuerligt.",
      standTitle: "Det jag står för",
      standText: "Tydlig kommunikation, pålitlighet och moderna applikationer med ett rent uttryck.",
    },
    path: {
      title: "Väg",
      heading: "Med varje station växer mitt ordförråd.",
      lead: "Sedan augusti 2024 lär jag mig i olika team på Swisscom. Varje station tillför nya begrepp, verktyg och uppgifter.",
      cloudLabel: "Mitt yrkesordförråd",
      count: (n, total) => `${n} av ${total} begrepp`,
      newWords: "Nytt",
      currentLabel: "nu",
      stations: {
        futurework: {
          period: "aug 2024 – feb 2025",
          title: "Future Work Specialist",
          place: "Swisscom, Zürich och Bern",
          text: "Projekt om framtidens arbetsmodeller och IT-support för floorwalking.",
        },
        codemix: {
          period: "feb 2025 – jul 2025",
          title: "Codemix programmeringsprojekt",
          place: "Swisscom, Zürich",
          text: "Strukturerad introduktion till mjukvaruutveckling med fokus på grunder och praktisk tillämpning.",
        },
        powerplatform: {
          period: "aug 2025 – aug 2026",
          title: "Power Platform DevOps",
          place: "Swisscom, Zürich",
          text: "Utveckling och förvaltning av PowerApps-, Power BI- och SharePoint-lösningar med DevOps-metodik.",
        },
        halo: {
          period: "Sedan aug 2026",
          title: "Team Halo – Host",
          place: "Swisscom, Zürich och Bern",
          text: "Teamlead-roll i webbutvecklingsteamet med ansvar för koordinering, samarbete och moderna webblösningar.",
        },
        school: {
          period: "Sedan 2024",
          title: "Yrkesskola och egna projekt",
          place: "Vid sidan av praktiken",
          text: "I skolan och i egna projekt på GitHub lär jag mig fler programmeringsspråk, databaser och verktyg.",
        },
      },
      next: {
        label: "Nästa steg",
        title: "Redo för nästa steg efter lärlingsperioden.",
        text: "Den här sidan visar hur jag positionerar mig: professionellt, tydligt, modernt och med genuint intresse för bra samarbete. Jag söker möjligheter där jag kan fortsätta utvecklas och bidra aktivt.",
        cta: "Kontakta mig",
      },
    },
    skills: {
      title: "Kompetenser",
      heading: "Allt i korthet.",
      lead: "Verktygen jag arbetar med – medvetet utan procentstaplar. Var jag lärde mig dem står under min väg.",
      groups: { frontend: "Frontend", backend: "Backend", database: "Databaser", cloud: "Cloud & DevOps", tools: "Tools" },
      socialTitle: "Sociala kompetenser",
      social: [
        { name: "Social styrka", description: "Empati och starka mellanmänskliga färdigheter" },
        { name: "Teamarbete", description: "Samarbete och att nå gemensamma mål" },
        { name: "Kommunikation", description: "Tydlig och effektiv kommunikation" },
        { name: "Självständigt arbete", description: "Ansvarstagande och självledarskap" },
        { name: "Lösningsfokus", description: "Kreativ problemlösning och innovation" },
      ],
    },
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
