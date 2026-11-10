const nl = {
  lang: "nl",
  locale: "nl_NL",
  langName: "Nederlands",
  meta: {
    homeTitle: "Matti Koenis – Applicatieontwikkelaar in opleiding bij Swisscom",
    homeDescription:
      "Portfolio van Matti Koenis, applicatieontwikkelaar in opleiding bij Swisscom in Zürich. Projecten met React, TypeScript, three.js, Python en het Microsoft Power Platform.",
    projectTitle: (name) => `${name} – Case study | Matti Koenis`,
    privacyTitle: "Privacy | Matti Koenis",
    privacyDescription: "Privacyverklaring van mattikoenis.ch: welke gegevens worden verwerkt bij een bezoek of een bericht.",
    notFoundTitle: "Pagina niet gevonden | Matti Koenis",
    jobTitle: "Applicatieontwikkelaar in opleiding",
  },
  nav: {
    projects: "Projecten",
    experience: "Ervaring",
    about: "Over mij",
    contact: "Contact",
    menu: "Menu",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    skip: "Naar de inhoud",
    language: "Taal",
    home: "Startpagina",
    primary: "Hoofdnavigatie",
  },
  hero: {
    eyebrow: "Applicatieontwikkelaar in opleiding · Swisscom · Zürich",
    title: "Ik ontwikkel applicaties die complexe data begrijpelijk maken.",
    lead:
      "Op het werk met het Microsoft Power Platform, in eigen projecten met React, TypeScript en three.js – bijvoorbeeld een 3D-wereldbol die vliegtuigen, schepen en satellieten live toont.",
    ctaProjects: "Projecten bekijken",
    ctaContact: "Contact opnemen",
    status: "Open voor kansen na mijn opleiding",
    globeLabel: "Zürich · 47,37° N, 8,54° O",
    globeHint: "Sleep om te draaien",
  },
  facts: [
    { value: "3", label: "eigen projecten, openbaar op GitHub" },
    { value: "4", label: "talen: Duits, Nederlands, Zweeds, Engels" },
    { value: "4", label: "praktijkstations tijdens mijn opleiding" },
  ],
  projects: {
    label: "Projecten",
    title: "Geselecteerd werk",
    intro: "Drie eigen projecten, openbaar op GitHub. Elke case study laat zien welk probleem ik heb opgelost en hoe.",
    featured: "Uitgelicht project",
    viewCase: "Case study lezen",
    live: "Live bekijken",
    code: "Code op GitHub",
    liveUnavailable: "Liveversie momenteel niet beschikbaar",
    otherTitle: "Meer werk",
    other: {
      punchclock: {
        title: "Punch Clock",
        text: "Oefenproject voor module 223: tijdregistratie met Quarkus, PostgreSQL en een Docker-devcontainer, inclusief een analyse van de huidige situatie met UML-diagrammen.",
      },
    },
  },
  projectTexts: {
    tdown: {
      tagline: "Een interactieve 3D-wereldbol die vliegtuigen, schepen, satellieten en het ISS in realtime toont.",
      summary: "Meerdere open livedatabronnen op één draaiende wereldbol – direct in de browser, zonder betaalde API’s.",
      coverAlt:
        "Screenshot van tdown: een 3D-aarde met duizenden vliegtuigsymbolen boven Amerika, laagkeuze voor vluchten, schepen, ISS en satellieten, en live tellers.",
      role: "Eigen project: concept, ontwerp, ontwikkeling en deployment",
      sections: [
        {
          heading: "Overzicht",
          paragraphs: [
            "tdown brengt luchtverkeer, scheepvaart, satellietbanen en de positie van het ISS samen op een interactieve wereldbol. Elke laag is apart aan en uit te zetten; een klik opent een detailpaneel met afbeeldingen en korte informatie. Daarnaast is er een platte kaartweergave met satellietbeelden.",
            "Alle data komt uit vrij toegankelijke bronnen: adsb.fi, AISStream, wheretheiss.at en Celestrak.",
          ],
        },
        {
          heading: "Uitdagingen en oplossingen",
          items: [
            {
              title: "Vluchtdata zonder CORS",
              text: "ADS-B-API’s sturen geen CORS-headers en bieden geen gratis wereldwijd endpoint. Een eigen proxy op Deno Deploy vraagt adsb.fi daarom op in tegels van 250 NM – ongeveer één verzoek per seconde, binnen de publieke limiet –, voegt alles samen tot een wereldwijde snapshot en levert een compact formaat.",
            },
            {
              title: "Duizenden schepen zonder haperen",
              text: "AIS-posities komen binnen via een WebSocket. Ze worden in een Map verzameld en slechts elke drie seconden gebundeld aan React doorgegeven. Maximaal 20.000 schepen; schepen zonder nieuwe melding worden verwijderd.",
            },
            {
              title: "Satellieten zonder eigen server",
              text: "Baangegevens (TLE) van Celestrak worden in de browser doorgerekend met het SGP4-model van satellite.js – voor Starlink, OneWeb en GPS. Op dezelfde basis voorspelt tdown de volgende zichtbare ISS-overvluchten boven je eigen locatie.",
            },
            {
              title: "Liever geen foto dan een verkeerde",
              text: "Foto’s van schepen verschijnen alleen als ze eenduidig te koppelen zijn – via het IMO-nummer in Wikidata of een passend resultaat op Wikimedia Commons. Anders blijft het veld bewust leeg.",
            },
          ],
        },
        {
          heading: "Functies",
          list: [
            "Vier livelagen: vluchten (ADS-B), schepen (AIS), ISS en satellieten",
            "3D-wereldbol met three.js en React Three Fiber",
            "Kaartweergave met Leaflet en satellietbeelden",
            "Eigen locatie en voorspelling van ISS-overvluchten",
            "Detailpanelen met afbeeldingen en informatie uit Wikipedia",
            "Installeerbaar als progressive web app (manifest en service worker)",
          ],
        },
      ],
      result:
        "tdown is openbaar bereikbaar op tdowner.com. Bij een momentopname op 10 november 2026 toonde de wereldbol tegelijk zo’n 6.500 vliegtuigen en 8.000 satellieten.",
    },
    neuroflap: {
      tagline: "Een AI die zichzelf voor je ogen Flappy Bird leert – neurale netwerken en genetisch algoritme vanaf nul gebouwd.",
      summary: "150 vogels leren vliegen via neuro-evolutie. Zonder trainingsdata, zonder backpropagation, zonder ML-bibliotheek.",
      coverAlt:
        "Screenshot van NeuroFlap tijdens AI-training: vogels vliegen door buizen; rechts statistieken per generatie, een livevisualisatie van het neurale netwerk en een fitnessgrafiek.",
      galleryAlt: ["Screenshot van NeuroFlap in de modus ‘zelf spelen’ met je eigen score naast de beste score van de AI."],
      role: "Eigen project: concept, simulatie, AI en visualisatie",
      sections: [
        {
          heading: "Overzicht",
          paragraphs: [
            "Elk van de 150 vogels wordt bestuurd door een eigen klein neuraal netwerk. In het begin stort elke vogel meteen neer. Met elke generatie worden de netwerken beter – tot de beste vogels praktisch eindeloos vliegen. Niemand heeft ze laten zien hoe.",
          ],
        },
        {
          heading: "Hoe het werkt",
          items: [
            {
              title: "Neuraal netwerk vanaf nul",
              text: "Een feedforward-netwerk (5 → 8 → 1) met tanh en sigmoid, in puur Python. Invoer: hoogte, verticale snelheid, afstand tot de volgende buis en afstand tot de boven- en onderrand van de opening.",
            },
            {
              title: "Genetisch algoritme",
              text: "De beste netwerken blijven behouden (elitisme). Ouders worden gekozen via toernooiselectie, gecombineerd met uniform crossover en aangepast met Gaussische mutatie. Fitness = overlevingstijd plus een bonus per gepasseerde buis.",
            },
            {
              title: "Leren zichtbaar maken",
              text: "Het netwerk van de huidige leider wordt live getekend – positieve en negatieve gewichten in kleur, actieve neuronen lichten op. Een fitnessgrafiek toont de leercurve over de generaties.",
            },
            {
              title: "Gebouwd om te testen",
              text: "Simulatie en AI zijn volledig gescheiden van de weergave en draaien headless. Een pytest-suite test het netwerk, de genetische operatoren en de simulatie.",
            },
          ],
        },
        {
          heading: "Functies",
          list: [
            "Zwermweergave van alle 150 vogels, de leider uitgelicht",
            "Mensmodus: speel zelf tegen de beste score van de AI",
            "Toenemende moeilijkheid – smallere openingen, hoger tempo",
            "Versneld afspelen tot 30× om het leerproces te volgen",
            "Draait dankzij pygbag (Python als WebAssembly) ook in de browser",
          ],
        },
      ],
      result:
        "In de gedocumenteerde voorbeeldrun komt de doorbraak in generatie 8: een beste score van 48 tegenover 2 in generatie 1. De code is gepubliceerd onder de MIT-licentie.",
    },
    "ai-compare": {
      tagline: "Een onafhankelijke database en vergelijkingsplatform voor AI-modellen – elk feit met bron.",
      summary: "Prijzen, contextvensters, mogelijkheden en benchmarks van meer dan 280 modellen van 35 aanbieders, elk getal met bron.",
      coverAlt: "Typografische projectafbeelding van AI Compare met de kerncijfers 280+ modellen, 35 aanbieders en een bron per feit.",
      role: "Eigen project: concept, datamodel, ontwerp en ontwikkeling",
      sections: [
        {
          heading: "Overzicht",
          paragraphs: [
            "AI Compare maakt AI-modellen vergelijkbaar: prijzen, contextvensters, modaliteiten, mogelijkheden, benchmarks en API-toegang. Volgens de projectdocumentatie bevat de catalogus meer dan 280 modellen van 35 aanbieders (stand van 1 oktober 2026).",
          ],
        },
        {
          heading: "Principes voor betrouwbare data",
          items: [
            {
              title: "Elk feit met bron",
              text: "Elk feit is opgeslagen als waarde met bron, controledatum en datum van bijwerken. Bekende waarden zonder bron komen niet door de validatie.",
            },
            {
              title: "Onbekend blijft onbekend",
              text: "Ontbrekende waarden worden getoond als ‘niet bekendgemaakt’ – nooit als nul, ‘nee’ of ‘gratis’. Er is geen verzonnen totaalscore.",
            },
            {
              title: "Alleen objectieve markeringen",
              text: "Vergelijkingen markeren uitsluitend meetbare uitersten, zoals de laagste gepubliceerde prijs of het grootste contextvenster.",
            },
          ],
        },
        {
          heading: "Functies",
          list: [
            "Verkenner met URL-gesynchroniseerde filters, raster- en tabelweergave",
            "Vergelijk 2 tot 4 modellen, inclusief ‘alleen verschillen’ en kostencalculator",
            "AI Finder: een wizard in vier stappen met uitgelegde resultaten",
            "Opdrachtpalet (Ctrl+K), releasefeed en benchmarkverkenner",
            "Adminstudio met schemavalidatie en bescherming tegen verouderde concepten",
          ],
        },
        {
          heading: "Techniek",
          paragraphs: [
            "Next.js App Router met server-side rendering, TypeScript, Tailwind CSS en Radix UI. De data staat in genormaliseerde Supabase/PostgreSQL-tabellen en wordt met Zod gevalideerd. Daarbij: gestructureerde data (JSON-LD), sitemaps, dynamische Open Graph-afbeeldingen, analytics alleen na toestemming en tests met Vitest en Playwright.",
          ],
        },
      ],
      result: "De volledige code staat op GitHub. De liveversie is momenteel niet beschikbaar.",
    },
  },
  caseStudy: {
    back: "Alle projecten",
    role: "Rol",
    period: "Periode",
    stack: "Technologieën",
    links: "Links",
    result: "Resultaat",
    next: "Volgend project",
    gallery: "Andere weergave",
  },
  experience: {
    label: "Ervaring",
    title: "Etappes van mijn opleiding",
    intro: "Applicatieontwikkeling in de praktijk bij Swisscom – van IT-support en Power Platform-oplossingen tot het coördineren van een webteam.",
    current: "Huidig",
    items: [
      {
        period: "Sinds aug 2026",
        title: "Team Halo – Host",
        place: "Zürich / Bern",
        text: "Teamleidersrol in het webdevelopmentteam, verantwoordelijk voor coördinatie, samenwerking en moderne weboplossingen.",
        tags: ["Webdevelopment", "Frontend", "Teamleiding", "Coördinatie"],
      },
      {
        period: "aug 2025 – aug 2026",
        title: "Power Platform DevOps",
        place: "Zürich",
        text: "Ontwikkelen en beheren van oplossingen met PowerApps, Power BI en SharePoint volgens DevOps-methoden.",
        tags: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
      },
      {
        period: "feb 2025 – jul 2025",
        title: "Codemix programmeerproject",
        place: "Zürich",
        text: "Gestructureerde introductie in softwareontwikkeling met de nadruk op basisprincipes en praktische toepassing.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        period: "aug 2024 – feb 2025",
        title: "Future Work Specialist",
        place: "Zürich / Bern",
        text: "Project over het vormgeven van toekomstige werkmodellen, plus IT-support via floorwalking.",
        tags: ["IT-support", "Communicatie", "Teamwerk"],
      },
    ],
  },
  about: {
    label: "Over mij",
    title: "Geconcentreerd werken, samen verder komen.",
    paragraphs: [
      "Ik ben applicatieontwikkelaar in opleiding bij Swisscom in Zürich. In het dagelijks werk bouw ik oplossingen met het Microsoft Power Platform; sinds augustus 2026 heb ik als host van Team Halo een teamleidersrol in webdevelopment.",
      "In mijn vrije tijd bouw ik eigen projecten – het liefst waar data, visualisatie en degelijke techniek samenkomen. Ik werk geconcentreerd en zelfstandig, en hecht net zoveel waarde aan duidelijke communicatie en goede samenwerking.",
    ],
    portraitAlt: "Zwart-witportret van Matti Koenis",
    languagesTitle: "Talen",
    languages: ["Duits", "Nederlands", "Zweeds", "Engels"],
    interestsTitle: "Interesses",
    interests: "Economie, computers en nieuwe applicaties – met tennis, fitness, skiën en hardlopen als tegenwicht.",
  },
  skills: {
    title: "Vaardigheden met bewijs",
    intro: "In plaats van procentbalken: waar ik elke technologie echt heb gebruikt.",
    evidenceLabel: "Gebruikt in",
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
        title: "Kwaliteit & tools",
        items: [
          { name: "Git & GitHub Actions", evidence: ["tdown"] },
          { name: "Vitest & Playwright", evidence: ["ai-compare"] },
          { name: "pytest", evidence: ["neuroflap"] },
        ],
      },
    ],
    moreTitle: "Ook bekend met",
    more: "Node.js, SQL, MongoDB, MariaDB, VS Code, IntelliJ",
    evidenceNames: { swisscom: "Swisscom", codemix: "Codemix", punchclock: "Punch Clock" },
  },
  contact: {
    label: "Contact",
    title: "Laten we praten.",
    intro: "Over kansen na mijn opleiding, projecten of gewoon een eerste kennismaking. Per e-mail ben ik het snelst bereikbaar.",
    emailLabel: "E-mail",
    copy: "Adres kopiëren",
    copied: "Gekopieerd",
    linkedin: "LinkedIn",
    github: "GitHub",
    formTitle: "Of schrijf me hier",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    messagePlaceholder: "Waar gaat het over?",
    submit: "Bericht versturen",
    sending: "Wordt verstuurd …",
    success: "Bedankt! Je bericht is aangekomen. Ik neem zo snel mogelijk contact met je op.",
    error: "Dat is helaas niet gelukt. Mail me gerust direct:",
    required: "Vul dit veld in.",
    invalidEmail: "Vul een geldig e-mailadres in.",
    privacyNote: "Je gegevens worden alleen gebruikt om je bericht te beantwoorden.",
    privacyLink: "Privacy",
  },
  footer: {
    role: "Applicatieontwikkelaar in opleiding bij Swisscom",
    source: "Broncode van deze website",
    top: "Naar boven",
    privacy: "Privacy",
  },
  privacy: {
    title: "Privacy",
    updated: "Bijgewerkt: november 2026",
    sections: [
      { heading: "Verantwoordelijke", paragraphs: ["Matti Koenis, regio Zürich, Zwitserland. Contact: matti@koenis.ch"] },
      {
        heading: "Hosting",
        paragraphs: [
          "Deze website wordt aangeboden via GitHub Pages (GitHub Inc., VS). Bij een bezoek verwerkt GitHub technisch noodzakelijke gegevens zoals je IP-adres in serverlogbestanden. Details: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "Geen cookies, geen tracking",
        paragraphs: ["Deze website plaatst geen cookies en gebruikt geen analyse- of trackingdiensten. Lettertypen en afbeeldingen worden rechtstreeks van dit domein geladen."],
      },
      {
        heading: "Contactformulier",
        paragraphs: [
          "Als je het contactformulier gebruikt, worden je naam, e-mailadres en bericht via de dienst EmailJS (emailjs.com) per e-mail naar mij verstuurd. Ik gebruik deze gegevens alleen om je verzoek te beantwoorden en verwijder ze zodra ze daarvoor niet meer nodig zijn. Je kunt me ook direct mailen.",
        ],
      },
      {
        heading: "Externe links",
        paragraphs: ["Links naar GitHub, LinkedIn en mijn projectsites leiden naar diensten van derden met hun eigen privacybeleid."],
      },
      {
        heading: "Jouw rechten",
        paragraphs: ["Je kunt altijd inzage vragen in de gegevens die ik van je heb, en vragen om correctie of verwijdering. Een e-mail naar matti@koenis.ch is voldoende."],
      },
    ],
  },
  notFound: {
    title: "Deze pagina bestaat niet.",
    text: "Misschien is het adres veranderd. Op de startpagina vind je alle projecten.",
    back: "Naar de startpagina",
  },
};

export default nl;
