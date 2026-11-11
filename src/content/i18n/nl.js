const nl = {
  lang: "nl",
  locale: "nl_NL",
  langName: "Nederlands",
  meta: {
    homeTitle: "Matti Koenis – Applicatieontwikkelaar in opleiding bij Swisscom",
    homeDescription:
      "Persoonlijk portfolio van Matti Koenis, applicatieontwikkelaar in opleiding bij Swisscom in Zürich. Over mij, technische en sociale vaardigheden, Swisscom-ervaring en contact.",
    projectTitle: (name) => `${name} – Projectinzicht | Matti Koenis`,
    privacyTitle: "Privacy | Matti Koenis",
    privacyDescription: "Privacyverklaring van mattikoenis.ch: welke gegevens worden verwerkt bij een bezoek of een bericht.",
    notFoundTitle: "Pagina niet gevonden | Matti Koenis",
    jobTitle: "Applicatieontwikkelaar in opleiding",
  },
  nav: {
    about: "Over mij",
    skills: "Vaardigheden",
    experience: "Ervaring",
    projects: "Projecten",
    contact: "Contact",
    menu: "Menu",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    skip: "Naar de inhoud",
    language: "Taal",
    home: "Startpagina",
    primary: "Hoofdnavigatie",
  },
  home: {
    nav: { about: "Over mij", path: "Traject", skills: "Vaardigheden", projects: "Projecten", contact: "Contact" },
    hero: {
      intro:
        "Ik volg bij Swisscom in Zürich de opleiding tot applicatieontwikkelaar. Ik werk geconcentreerd en zelfstandig – en het liefst in een sterk team.",
      status: "Open voor de volgende stap na mijn opleiding",
      current: "Sinds augustus 2026 host in Team Halo",
      ctaPath: "Bekijk mijn traject",
      titlesLabel: "Mijn beroep in mijn vier talen",
      portraitAlt: "Portret van Matti Koenis in een blauwe trui",
      portraitCaption: "Matti Koenis, Zürich",
    },
    about: {
      title: "Over mij",
      motto: "De mens achter de code.",
      lead: "Bij Swisscom wissel ik tussen verschillende teams en leer ik hoe goede software ontstaat – van IT-support en het Microsoft Power Platform tot webontwikkeling.",
      photoAlt: "Zwart-witportret van Matti Koenis",
      facts: [
        { term: "Talen", text: "Duits, Nederlands en Zweeds – plus Engels uit negen jaar school." },
        { term: "Interesses", text: "Economie, financiën en strategie, computers en nieuwe applicaties." },
        { term: "Ontspanning", text: "Tennis, fitness, skiën en hardlopen." },
        { term: "Werkstijl", text: "Geconcentreerd, zelfstandig en teamsterk." },
      ],
      bringTitle: "Wat ik meebreng",
      bringText: "Een nette werkwijze, focus, zelfstandigheid en teamspirit. Plus technische nieuwsgierigheid en leergierigheid.",
      standTitle: "Waar ik voor sta",
      standText: "Heldere communicatie, betrouwbaarheid en moderne applicaties met een strakke uitstraling.",
    },
    path: {
      title: "Traject",
      heading: "Met elke stap groeit mijn woordenschat.",
      lead: "Sinds augustus 2024 leer ik bij Swisscom in wisselende teams. Elke stap voegt nieuwe begrippen, tools en taken toe.",
      cloudLabel: "Mijn professionele woordenschat",
      count: (n, total) => `${n} van ${total} begrippen`,
      newWords: "Nieuw erbij",
      currentLabel: "nu",
      stations: {
        futurework: {
          period: "aug 2024 – feb 2025",
          title: "Future Work Specialist",
          place: "Swisscom, Zürich en Bern",
          text: "Project over toekomstige werkmodellen en IT-support voor floorwalking.",
        },
        codemix: {
          period: "feb 2025 – jul 2025",
          title: "Codemix programmeerproject",
          place: "Swisscom, Zürich",
          text: "Gestructureerde introductie in softwareontwikkeling met focus op basisprincipes en praktijk.",
        },
        powerplatform: {
          period: "aug 2025 – aug 2026",
          title: "Power Platform DevOps",
          place: "Swisscom, Zürich",
          text: "Ontwikkeling en beheer van PowerApps-, Power BI- en SharePoint-oplossingen met DevOps-methodes.",
        },
        halo: {
          period: "Sinds aug 2026",
          title: "Team Halo – Host",
          place: "Swisscom, Zürich en Bern",
          text: "Teamleadrol in het webdevelopmentteam met verantwoordelijkheid voor coördinatie, samenwerking en moderne weboplossingen.",
        },
        school: {
          period: "Sinds 2024",
          title: "Beroepsschool en eigen projecten",
          place: "Naast de praktijk",
          text: "Op school en in eigen projecten op GitHub leer ik meer programmeertalen, databases en tools kennen.",
        },
      },
      next: {
        label: "Volgende stap",
        title: "Klaar voor de volgende stap na mijn opleiding.",
        text: "Deze pagina laat zien hoe ik mij positioneer: professioneel, helder, modern en met echte interesse in sterke samenwerking. Ik zoek kansen waarin ik kan groeien en actief kan bijdragen.",
        cta: "Neem contact op",
      },
    },
    skills: {
      title: "Vaardigheden",
      heading: "Alles in één oogopslag.",
      lead: "De tools waarmee ik werk – bewust zonder percentagebalken. Waar ik ze heb geleerd, staat bij mijn traject.",
      groups: { frontend: "Frontend", backend: "Backend", database: "Databases", cloud: "Cloud & DevOps", tools: "Tools" },
      socialTitle: "Sociale competenties",
      social: [
        { name: "Sociale kracht", description: "Empathie en sterke interpersoonlijke vaardigheden" },
        { name: "Teamwerk", description: "Samenwerken en gezamenlijke doelen bereiken" },
        { name: "Communicatie", description: "Heldere en effectieve communicatie" },
        { name: "Zelfstandig werken", description: "Eigenaarschap en zelfsturing" },
        { name: "Oplossingsgericht", description: "Creatief problemen oplossen en innoveren" },
      ],
    },
  },
  projects: {
    label: "Praktijkvoorbeelden",
    title: "Inzicht in eigen applicaties",
    intro:
      "Als aanvulling op mijn opleiding bouw ik eigen web- en softwareprojecten om nieuwe technologieën in de praktijk te verdiepen.",
    featured: "Geselecteerd project",
    viewCase: "Details bekijken",
    live: "Live demo",
    code: "GitHub",
    liveUnavailable: "Lokaal / Repository",
    otherTitle: "Extra opleidingsproject",
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
    back: "Terug naar overzicht",
    role: "Rol",
    period: "Periode",
    stack: "Technologieën",
    links: "Links",
    result: "Resultaat",
    next: "Volgend project",
    gallery: "Extra weergave",
  },
  contact: {
    label: "Contact",
    title: "Laten we verbinden.",
    intro:
      "Voor uitwisseling, kansen na mijn opleiding of een eerste gesprek ben ik direct bereikbaar. Stuur mij gerust een e-mail of gebruik het formulier hieronder.",
    emailLabel: "E-mail",
    copy: "E-mail kopiëren",
    copied: "Gekopieerd!",
    linkedin: "LinkedIn",
    github: "GitHub",
    locationLabel: "Locatie",
    locationValue: "Regio Zürich, Zwitserland",
    formTitle: "Stuur een direct bericht",
    name: "Je naam",
    email: "Je e-mailadres",
    message: "Bericht",
    messagePlaceholder: "Hoi Matti, ik neem contact op over …",
    submit: "Bericht versturen",
    sending: "Wordt verzonden …",
    success: "Bedankt! Je bericht is verzonden – ik neem zo snel mogelijk contact met je op.",
    error: "Het verzenden is helaas niet gelukt. Stuur mij direct een e-mail op:",
    required: "Vul dit veld in.",
    invalidEmail: "Vul een geldig e-mailadres in.",
    privacyNote: "Je gegevens worden uitsluitend gebruikt om je bericht te beantwoorden.",
    privacyLink: "Privacy",
  },
  footer: {
    role: "Applicatieontwikkelaar in opleiding bij Swisscom · Zürich",
    ctaTitle: "Klaar voor een gesprek?",
    ctaText: "Ik kijk uit naar interessante contacten, feedback of kansen na mijn opleiding.",
    source: "GitHub Repository",
    top: "Naar boven",
    privacy: "Privacy",
  },
  privacy: {
    title: "Privacy",
    updated: "Stand: november 2026",
    sections: [
      {
        heading: "Verantwoordelijke",
        paragraphs: ["Matti Koenis, regio Zürich, Zwitserland. Contact: matti@koenis.ch"],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Deze website wordt geleverd via GitHub Pages (GitHub Inc., VS). Bij het openen verwerkt GitHub technisch noodzakelijke verbindingsgegevens zoals het IP-adres in serverlogbestanden. Details: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "Geen cookies, geen tracking",
        paragraphs: [
          "Deze website plaatst geen cookies en gebruikt geen analyse- of trackingdiensten. Lettertypen en afbeeldingen worden rechtstreeks vanaf dit domein geladen.",
        ],
      },
      {
        heading: "Contactformulier",
        paragraphs: [
          "Wanneer je het contactformulier gebruikt, worden je naam, e-mailadres en bericht via EmailJS (emailjs.com) per e-mail naar mij verzonden. Ik gebruik deze gegevens uitsluitend om je vraag te beantwoorden en verwijder ze daarna.",
        ],
      },
      {
        heading: "Externe links",
        paragraphs: [
          "Links naar GitHub, LinkedIn en externe projectpagina’s leiden naar diensten van derden met hun eigen privacybeleid.",
        ],
      },
      {
        heading: "Je rechten",
        paragraphs: [
          "Je kunt op elk moment inzage, correctie of verwijdering van je gegevens vragen via een e-mail naar matti@koenis.ch.",
        ],
      },
    ],
  },
  notFound: {
    title: "Deze pagina bestaat niet.",
    text: "Misschien is het adres gewijzigd. Op de startpagina vind je alle informatie over mij.",
    back: "Naar de startpagina",
  },
};

export default nl;
