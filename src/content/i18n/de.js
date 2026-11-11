const de = {
  lang: "de",
  locale: "de_CH",
  langName: "Deutsch",
  meta: {
    homeTitle: "Matti Koenis – Applikationsentwickler in Ausbildung bei Swisscom",
    homeDescription:
      "Persönliches Portfolio von Matti Koenis: Applikationsentwickler in Ausbildung bei Swisscom in Zürich. Über mich, Kompetenzen in Web & Power Platform, Praxiserfahrung und Kontakt.",
    projectTitle: (name) => `${name} – Projekt-Einblick | Matti Koenis`,
    privacyTitle: "Datenschutz | Matti Koenis",
    privacyDescription: "Datenschutzerklärung für mattikoenis.ch: welche Daten beim Besuch und bei einer Kontaktanfrage bearbeitet werden.",
    notFoundTitle: "Seite nicht gefunden | Matti Koenis",
    jobTitle: "Applikationsentwickler in Ausbildung",
  },
  nav: {
    about: "Über mich",
    skills: "Kompetenzen",
    experience: "Erfahrung",
    projects: "Projekte",
    contact: "Kontakt",
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schliessen",
    skip: "Zum Inhalt springen",
    language: "Sprache",
    home: "Startseite",
    primary: "Hauptnavigation",
  },
  home: {
    nav: { about: "Über mich", path: "Werdegang", skills: "Kompetenzen", projects: "Projekte", contact: "Kontakt" },
    hero: {
      intro:
        "Ich bin in der Ausbildung zum Applikationsentwickler bei Swisscom in Zürich. Ich arbeite konzentriert und selbständig – am liebsten in einem starken Team.",
      status: "Offen für den nächsten Schritt nach der Lehre",
      current: "Seit August 2026 Host im Team Halo",
      ctaPath: "Werdegang ansehen",
      titlesLabel: "Mein Beruf in meinen vier Sprachen",
    },
    about: {
      title: "Über mich",
      motto: "Präzision im Code. Perfektion im Ergebnis.",
      lead: "Bei Swisscom lerne ich in wechselnden Teams, wie gute Software entsteht – vom IT-Support über die Microsoft Power Platform bis zur Web-Entwicklung.",
      photoAlt: "Schwarz-Weiss-Porträt von Matti Koenis",
      facts: [
        { term: "Sprachen", text: "Deutsch, Niederländisch und Schwedisch – dazu Englisch aus neun Jahren Schule." },
        { term: "Interessen", text: "Wirtschaft, Finanzen und Strategie, Computer und neue Applikationen." },
        { term: "Ausgleich", text: "Tennis, Fitness, Skifahren und Joggen." },
        { term: "Arbeitsstil", text: "Konzentriert, selbständig und teamstark." },
      ],
      bringTitle: "Was ich mitbringe",
      bringText:
        "Eine saubere Arbeitsweise, Konzentration, Selbständigkeit und Teamgeist. Dazu technisches Interesse und der Wille, mich laufend weiterzuentwickeln.",
      standTitle: "Wofür ich stehe",
      standText: "Für klare Kommunikation, Verlässlichkeit und moderne Applikationen mit einem sauberen Auftritt.",
    },
    path: {
      title: "Werdegang",
      heading: "Mit jeder Station wächst mein Wortschatz.",
      lead: "Seit August 2024 lerne ich bei Swisscom in wechselnden Teams. Jede Station bringt neue Begriffe, Werkzeuge und Aufgaben dazu.",
      cloudLabel: "Mein beruflicher Wortschatz",
      count: (n, total) => `${n} von ${total} Begriffen`,
      newWords: "Neu dazugekommen",
      currentLabel: "aktuell",
      stations: {
        futurework: {
          period: "Aug 2024 – Feb 2025",
          title: "Future Work Specialist",
          place: "Swisscom, Zürich und Bern",
          text: "Projekt zur Gestaltung zukünftiger Arbeitsmodelle und IT-Support für Floorwalking.",
        },
        codemix: {
          period: "Feb 2025 – Jul 2025",
          title: "Codemix Programmierprojekt",
          place: "Swisscom, Zürich",
          text: "Strukturierte Einführung in die Softwareentwicklung mit Fokus auf Grundlagen und praktische Anwendung.",
        },
        powerplatform: {
          period: "Aug 2025 – Aug 2026",
          title: "Power Platform DevOps",
          place: "Swisscom, Zürich",
          text: "Entwicklung und Verwaltung von PowerApps-, Power-BI- und SharePoint-Lösungen mit DevOps-Methoden.",
        },
        halo: {
          period: "Seit Aug 2026",
          title: "Team Halo – Host",
          place: "Swisscom, Zürich und Bern",
          text: "Teamlead-Rolle im Web-Development-Team mit Verantwortung für Koordination, Zusammenarbeit und moderne Weblösungen.",
        },
        school: {
          period: "Seit 2024",
          title: "Berufsfachschule und eigene Projekte",
          place: "Parallel zur Praxis",
          text: "In der Schule und in eigenen Projekten auf GitHub lerne ich weitere Programmiersprachen, Datenbanken und Werkzeuge kennen.",
        },
      },
      next: {
        label: "Als Nächstes",
        title: "Bereit für den nächsten Schritt nach der Lehre.",
        text: "Diese Seite zeigt, wie ich mich positioniere: professionell, klar, modern und mit echtem Interesse an guter Zusammenarbeit. Ich suche Perspektiven, in denen ich mich weiterentwickeln und aktiv mitgestalten kann.",
        cta: "Kontakt aufnehmen",
      },
    },
    skills: {
      title: "Kompetenzen",
      heading: "Alles auf einen Blick.",
      lead: "Die Werkzeuge, mit denen ich arbeite – bewusst ohne Prozentbalken. Wo ich sie gelernt habe, steht im Werdegang.",
      groups: { frontend: "Frontend", backend: "Backend", database: "Datenbanken", cloud: "Cloud & DevOps", tools: "Tools" },
      socialTitle: "Soziale Kompetenzen",
      social: [
        { name: "Soziale Stärke", description: "Empathie und zwischenmenschliche Fähigkeiten" },
        { name: "Teamarbeit", description: "Zusammenarbeit und gemeinsame Ziele erreichen" },
        { name: "Kommunikation", description: "Klare und effektive Kommunikation" },
        { name: "Selbständiges Arbeiten", description: "Eigenständigkeit und Verantwortungsbewusstsein" },
        { name: "Lösungsorientierung", description: "Kreative Problemlösung und Innovation" },
      ],
    },
  },
  projects: {
    label: "Praxisbeispiele",
    title: "Einblicke in eigene Applikationen",
    intro:
      "Als Ergänzung zu meiner Ausbildung entwickle ich eigene Web- und Softwareprojekte, um neue Technologien praktisch zu vertiefen.",
    featured: "Ausgewähltes Projekt",
    viewCase: "Details ansehen",
    live: "Live-Demo",
    code: "GitHub",
    liveUnavailable: "Lokal / Repository",
  },
  projectTexts: {
    tdown: {
      tagline: "Ein interaktiver 3D-Globus, der Flugzeuge, Schiffe, Satelliten und die ISS in Echtzeit zeigt.",
      summary:
        "Mehrere offene Live-Datenquellen auf einem drehbaren Globus – direkt im Browser, ohne kostenpflichtige APIs.",
      coverAlt:
        "Screenshot von tdown: 3D-Erdkugel mit Tausenden Flugzeug-Symbolen über Amerika, Ebenen-Auswahl für Flüge, Schiffe, ISS und Satelliten sowie Live-Zählern.",
      role: "Eigenes Projekt: Konzept, Design, Entwicklung und Deployment",
      sections: [
        {
          heading: "Überblick",
          paragraphs: [
            "tdown führt Flugverkehr, Schifffahrt, Satellitenbahnen und die Position der ISS auf einem interaktiven Globus zusammen. Alle Ebenen lassen sich einzeln schalten; per Klick öffnen sich Detailpanels mit Bildern und Kurzinfos. Zusätzlich gibt es eine flache Kartenansicht mit Satellitenbildern.",
            "Die Daten stammen ausschliesslich aus frei zugänglichen Quellen: adsb.fi, AISStream, wheretheiss.at und Celestrak.",
          ],
        },
        {
          heading: "Herausforderungen und Lösungen",
          items: [
            {
              title: "Flugdaten ohne CORS",
              text: "ADS-B-Schnittstellen senden keine CORS-Header und bieten keinen freien globalen Endpunkt. Ein eigener Proxy auf Deno Deploy fragt adsb.fi deshalb in 250-NM-Kacheln ab – etwa eine Anfrage pro Sekunde, gemäss öffentlichem Limit –, führt alles zu einem globalen Snapshot zusammen und liefert ein kompaktes Format aus.",
            },
            {
              title: "Tausende Schiffe ohne Ruckeln",
              text: "AIS-Positionen kommen per WebSocket. Sie werden in einer Map gesammelt und nur alle drei Sekunden gebündelt an React übergeben. Maximal 20'000 Schiffe; Einträge ohne neue Meldung werden entfernt.",
            },
            {
              title: "Satelliten ohne eigenen Server",
              text: "Bahndaten (TLE) von Celestrak werden im Browser mit dem SGP4-Modell aus satellite.js propagiert – für Starlink, OneWeb und GPS. Auf derselben Basis berechnet tdown die nächsten sichtbaren ISS-Überflüge über dem eigenen Standort.",
            },
            {
              title: "Lieber kein Bild als ein falsches",
              text: "Fotos zu Schiffen erscheinen nur, wenn sie eindeutig zugeordnet werden können – über die IMO-Nummer in Wikidata oder einen passenden Treffer auf Wikimedia Commons. Sonst bleibt das Feld bewusst leer.",
            },
          ],
        },
        {
          heading: "Funktionen",
          list: [
            "Vier Live-Ebenen: Flüge (ADS-B), Schiffe (AIS), ISS und Satelliten",
            "3D-Globus mit three.js und React Three Fiber",
            "Kartenansicht mit Leaflet und Satellitenbildern",
            "Eigener Standort und Vorhersage der ISS-Überflüge",
            "Detailpanels mit Bildern und Infos aus Wikipedia",
            "Installierbar als Progressive Web App (Manifest und Service Worker)",
          ],
        },
      ],
      result:
        "tdown ist öffentlich unter tdowner.com erreichbar. Bei einer Momentaufnahme am 10. November 2026 zeigte der Globus rund 6'500 Flugzeuge und 8'000 Satelliten gleichzeitig.",
    },
    neuroflap: {
      tagline: "Eine KI, die sich vor deinen Augen selbst Flappy Bird beibringt – neuronale Netze und genetischer Algorithmus von Grund auf.",
      summary:
        "150 Vögel lernen per Neuroevolution fliegen. Ohne Trainingsdaten, ohne Backpropagation, ohne ML-Bibliothek.",
      coverAlt:
        "Screenshot von NeuroFlap im KI-Training: Vögel fliegen durch Röhren, rechts Statistiken zur Generation, eine Live-Visualisierung des neuronalen Netzes und ein Fitness-Graph.",
      galleryAlt: [
        "Screenshot von NeuroFlap im Modus „Selbst spielen“ mit eigenem Score und dem Bestwert der KI zum Vergleich.",
      ],
      role: "Eigenes Projekt: Konzept, Simulation, KI und Visualisierung",
      sections: [
        {
          heading: "Überblick",
          paragraphs: [
            "Jeder der 150 Vögel wird von einem eigenen kleinen neuronalen Netz gesteuert. Zu Beginn stürzen alle sofort ab. Mit jeder Generation werden die Netze besser – bis die besten Vögel praktisch endlos fliegen. Niemand hat ihnen gezeigt, wie.",
          ],
        },
        {
          heading: "Wie es funktioniert",
          items: [
            {
              title: "Neuronales Netz von Grund auf",
              text: "Ein Feedforward-Netz (5 → 8 → 1) mit tanh und Sigmoid, in reinem Python. Eingaben: Höhe, vertikale Geschwindigkeit, Distanz zur nächsten Röhre und Abstand zur oberen und unteren Lückenkante.",
            },
            {
              title: "Genetischer Algorithmus",
              text: "Die besten Netze bleiben erhalten (Elitismus). Eltern werden per Turnier-Selektion gewählt, per Uniform-Crossover kombiniert und mit gaussscher Mutation verändert. Fitness = Überlebenszeit plus Bonus pro passierter Röhre.",
            },
            {
              title: "Lernen sichtbar machen",
              text: "Das Netz des aktuellen Anführers wird live gezeichnet – positive und negative Gewichte farbig, aktive Neuronen leuchten. Ein Fitness-Graph zeigt die Lernkurve über die Generationen.",
            },
            {
              title: "Testbar gebaut",
              text: "Simulation und KI sind vollständig von der Darstellung getrennt und laufen headless. Eine pytest-Suite prüft das Netz, die genetischen Operatoren und die Simulation.",
            },
          ],
        },
        {
          heading: "Funktionen",
          list: [
            "Schwarm-Ansicht aller 150 Vögel, der Anführer ist hervorgehoben",
            "Mensch-Modus: selbst gegen den Bestwert der KI spielen",
            "Progressive Schwierigkeit – engere Lücken, höheres Tempo",
            "Zeitraffer bis 30× zum Beobachten des Lernprozesses",
            "Läuft dank pygbag (Python als WebAssembly) auch im Browser",
          ],
        },
      ],
      result:
        "Im dokumentierten Beispiellauf kommt der Durchbruch in Generation 8: bester Score 48 statt 2 in Generation 1. Der Code ist unter MIT-Lizenz veröffentlicht.",
    },
    "ai-compare": {
      tagline: "Eine unabhängige Datenbank und Vergleichsplattform für KI-Modelle – jede Angabe mit Quelle.",
      summary:
        "Preise, Kontextfenster, Fähigkeiten und Benchmarks von rund 300 Modellen aus 35 Anbietern, jede Zahl belegt.",
      coverAlt: "Screenshot der Startseite von AI Compare mit Suchfeld, den Schaltflächen „Compare Models“ und „Explore Models“ sowie der Angabe zu 300 Modellen von 35 Anbietern.",
      role: "Eigenes Projekt: Konzept, Datenmodell, Design und Entwicklung",
      sections: [
        {
          heading: "Überblick",
          paragraphs: [
            "AI Compare macht KI-Modelle vergleichbar: Preise, Kontextfenster, Modalitäten, Fähigkeiten, Benchmarks und API-Zugang. Die Live-Version verfolgt rund 300 Modelle von 35 Anbietern mit 317 zitierten Quellen (Stand 11. November 2026).",
          ],
        },
        {
          heading: "Prinzipien für vertrauenswürdige Daten",
          items: [
            {
              title: "Jede Angabe mit Quelle",
              text: "Jeder Fakt ist als Wert mit Quelle, Prüfdatum und Aktualisierungsdatum gespeichert. Bekannte Werte ohne Quelle bestehen die Validierung nicht.",
            },
            {
              title: "Unbekannt bleibt unbekannt",
              text: "Fehlende Werte werden als „nicht offengelegt“ angezeigt – nie als null, „nein“ oder „gratis“. Es gibt keinen erfundenen Gesamt-Score.",
            },
            {
              title: "Nur objektive Hervorhebungen",
              text: "Vergleiche markieren ausschliesslich messbare Extremwerte, zum Beispiel den tiefsten veröffentlichten Preis oder das grösste Kontextfenster.",
            },
          ],
        },
        {
          heading: "Funktionen",
          list: [
            "Explorer mit URL-synchronisierten Filtern, Raster- und Tabellenansicht",
            "Vergleich von 2 bis 4 Modellen inklusive „Nur Unterschiede“ und Kostenrechner",
            "AI Finder: Assistent in vier Schritten mit erklärten Treffern",
            "Befehlspalette (Ctrl+K), Release-Feed und Benchmark-Explorer",
            "Admin-Studio mit Schema-Validierung und Schutz vor veralteten Entwürfen",
          ],
        },
        {
          heading: "Technik",
          paragraphs: [
            "Next.js App Router mit serverseitigem Rendering, TypeScript, Tailwind CSS und Radix UI. Die Daten liegen in Supabase/PostgreSQL in normalisierten Tabellen und werden mit Zod validiert. Dazu kommen strukturierte Daten (JSON-LD), Sitemaps, dynamische Open-Graph-Bilder, Analytics nur nach Einwilligung und Tests mit Vitest und Playwright.",
          ],
        },
      ],
      result:
        "AI Compare ist öffentlich unter ai-compare-two.vercel.app erreichbar; der vollständige Code liegt auf GitHub.",
    },
  },
  caseStudy: {
    back: "Zurück zur Übersicht",
    role: "Rolle",
    period: "Zeitraum",
    stack: "Technologien",
    links: "Links",
    result: "Fazit",
    next: "Nächstes Projekt",
    gallery: "Weitere Ansicht",
  },
  contact: {
    label: "Kontakt",
    title: "Lass uns vernetzen.",
    intro:
      "Für Austausch, Perspektiven nach der Lehre oder einen ersten Kontakt bin ich direkt erreichbar. Schreib mir gerne per E-Mail oder direkt über das Formular.",
    emailLabel: "E-Mail",
    copy: "E-Mail kopieren",
    copied: "Kopiert!",
    linkedin: "LinkedIn",
    github: "GitHub",
    locationLabel: "Standort",
    locationValue: "Region Zürich, Schweiz",
    formTitle: "Direkte Nachricht senden",
    name: "Dein Name",
    email: "Deine E-Mail-Adresse",
    message: "Nachricht",
    messagePlaceholder: "Hallo Matti, ich melde mich wegen …",
    submit: "Nachricht senden",
    sending: "Wird gesendet …",
    success: "Vielen Dank! Deine Nachricht wurde gesendet – ich melde mich so bald wie möglich bei dir.",
    error: "Das Senden hat leider nicht geklappt. Bitte schreib mir direkt an:",
    cooldown: "Du hast gerade eine Nachricht gesendet. Bitte warte eine Minute oder schreib mir direkt an:",
    required: "Bitte dieses Feld ausfüllen.",
    invalidEmail: "Bitte eine gültige E-Mail-Adresse eingeben.",
    privacyNote: "Deine Angaben werden ausschliesslich zur Beantwortung deiner Anfrage verwendet.",
    privacyLink: "Datenschutz",
  },
  footer: {
    role: "Applikationsentwickler in Ausbildung bei Swisscom · Zürich",
    ctaTitle: "Bereit für ein Gespräch?",
    ctaText: "Ich freue mich über spannende Kontakte, Feedback oder Perspektiven nach der Ausbildung.",
    source: "GitHub Repository",
    top: "Nach oben",
    privacy: "Datenschutz",
  },
  privacy: {
    title: "Datenschutz",
    updated: "Stand: November 2026",
    sections: [
      {
        heading: "Verantwortlich",
        paragraphs: ["Matti Koenis, Region Zürich, Schweiz. Kontakt: matti@koenis.ch"],
      },
      {
        heading: "Hosting",
        paragraphs: [
          "Diese Website wird über GitHub Pages (GitHub Inc., USA) ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendige Verbindungsdaten wie die IP-Adresse in Server-Logfiles. Details: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "Keine Cookies, kein Tracking",
        paragraphs: [
          "Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Schriften und Bilder werden lokal von dieser Domain geladen.",
        ],
      },
      {
        heading: "Kontaktformular",
        paragraphs: [
          "Wenn du das Kontaktformular nutzt, werden Name, E-Mail-Adresse und Nachricht über den Dienst EmailJS (emailjs.com) per E-Mail an mich übermittelt. Ich verwende die Angaben ausschliesslich, um deine Anfrage zu beantworten, und lösche sie anschliessend.",
        ],
      },
      {
        heading: "Externe Links",
        paragraphs: [
          "Links zu GitHub, LinkedIn und externen Projektseiten führen zu Angeboten Dritter. Dort gelten deren eigene Datenschutzbestimmungen.",
        ],
      },
      {
        heading: "Deine Rechte",
        paragraphs: [
          "Du kannst jederzeit Auskunft über deine bei mir gespeicherten Daten sowie deren Berichtigung oder Löschung verlangen. Eine E-Mail an matti@koenis.ch genügt.",
        ],
      },
    ],
  },
  notFound: {
    title: "Diese Seite wurde nicht gefunden.",
    text: "Vielleicht hat sich die Adresse geändert. Auf der Startseite findest du alle Informationen über mich.",
    back: "Zur Startseite",
  },
};

export default de;
