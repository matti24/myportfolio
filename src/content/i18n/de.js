const de = {
  lang: "de",
  locale: "de_CH",
  langName: "Deutsch",
  meta: {
    homeTitle: "Matti Koenis – Applikationsentwickler in Ausbildung bei Swisscom",
    homeDescription:
      "Portfolio von Matti Koenis: Applikationsentwickler in Ausbildung bei Swisscom in Zürich. Projekte mit React, TypeScript, three.js, Python und der Microsoft Power Platform.",
    projectTitle: (name) => `${name} – Case Study | Matti Koenis`,
    privacyTitle: "Datenschutz | Matti Koenis",
    privacyDescription: "Datenschutzerklärung für mattikoenis.ch: welche Daten beim Besuch und bei einer Kontaktanfrage bearbeitet werden.",
    notFoundTitle: "Seite nicht gefunden | Matti Koenis",
    jobTitle: "Applikationsentwickler in Ausbildung",
  },
  nav: {
    projects: "Projekte",
    experience: "Erfahrung",
    about: "Über mich",
    contact: "Kontakt",
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schliessen",
    skip: "Zum Inhalt springen",
    language: "Sprache",
    home: "Startseite",
    primary: "Hauptnavigation",
  },
  hero: {
    eyebrow: "Applikationsentwickler in Ausbildung · Swisscom · Zürich",
    title: "Ich entwickle Applikationen, die komplexe Daten verständlich machen.",
    lead:
      "Im Beruf mit der Microsoft Power Platform, in eigenen Projekten mit React, TypeScript und three.js – zum Beispiel einem 3D-Globus, der Flugzeuge, Schiffe und Satelliten live zeigt.",
    ctaProjects: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    status: "Offen für Perspektiven nach der Lehre",
    globeLabel: "Zürich · 47.37° N, 8.54° E",
    globeHint: "Ziehen zum Drehen",
  },
  facts: [
    { value: "3", label: "eigene Projekte, öffentlich auf GitHub" },
    { value: "4", label: "Sprachen: Deutsch, Niederländisch, Schwedisch, Englisch" },
    { value: "4", label: "Praxisstationen in der Ausbildung" },
  ],
  projects: {
    label: "Projekte",
    title: "Ausgewählte Arbeiten",
    intro:
      "Drei eigene Projekte, öffentlich auf GitHub. Jede Case Study zeigt, welches Problem ich gelöst habe und wie.",
    featured: "Hauptprojekt",
    viewCase: "Case Study lesen",
    live: "Live ansehen",
    code: "Code auf GitHub",
    liveUnavailable: "Live-Version momentan nicht verfügbar",
    otherTitle: "Weitere Arbeiten",
    other: {
      punchclock: {
        title: "Punch Clock",
        text: "Übungsprojekt im Modul 223: Zeiterfassung mit Quarkus, PostgreSQL und Docker-Devcontainer, inklusive IST-Analyse mit UML-Diagrammen.",
      },
    },
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
        "Preise, Kontextfenster, Fähigkeiten und Benchmarks von über 280 Modellen aus 35 Anbietern, jede Zahl belegt.",
      coverAlt: "Typografische Projektgrafik von AI Compare mit den Eckdaten 280+ Modelle, 35 Anbieter und Quelle pro Fakt.",
      role: "Eigenes Projekt: Konzept, Datenmodell, Design und Entwicklung",
      sections: [
        {
          heading: "Überblick",
          paragraphs: [
            "AI Compare macht KI-Modelle vergleichbar: Preise, Kontextfenster, Modalitäten, Fähigkeiten, Benchmarks und API-Zugang. Laut Projektdokumentation umfasst der Katalog über 280 Modelle aus 35 Anbietern (Datenstand 1. Oktober 2026).",
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
        "Der vollständige Code ist auf GitHub einsehbar. Die Live-Version ist momentan nicht verfügbar.",
    },
  },
  caseStudy: {
    back: "Alle Projekte",
    role: "Rolle",
    period: "Zeitraum",
    stack: "Technologien",
    links: "Links",
    result: "Ergebnis",
    next: "Nächstes Projekt",
    gallery: "Weitere Ansicht",
  },
  experience: {
    label: "Erfahrung",
    title: "Stationen meiner Ausbildung",
    intro: "Applikationsentwicklung in der Praxis bei Swisscom – von IT-Support über Power-Platform-Lösungen bis zur Koordination eines Web-Teams.",
    current: "Aktuell",
    items: [
      {
        period: "Seit Aug 2026",
        title: "Team Halo – Host",
        place: "Zürich / Bern",
        text: "Teamlead-Rolle im Web-Development-Team mit Verantwortung für Koordination, Zusammenarbeit und moderne Weblösungen.",
        tags: ["Web Development", "Frontend", "Teamführung", "Koordination"],
      },
      {
        period: "Aug 2025 – Aug 2026",
        title: "Power Platform DevOps",
        place: "Zürich",
        text: "Entwicklung und Betreuung von Lösungen mit PowerApps, Power BI und SharePoint nach DevOps-Methoden.",
        tags: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
      },
      {
        period: "Feb 2025 – Jul 2025",
        title: "Codemix Programmierprojekt",
        place: "Zürich",
        text: "Strukturierte Einführung in die Softwareentwicklung mit Fokus auf Grundlagen und praktische Anwendung.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        period: "Aug 2024 – Feb 2025",
        title: "Future Work Specialist",
        place: "Zürich / Bern",
        text: "Projekt zur Gestaltung zukünftiger Arbeitsmodelle und IT-Support im Floorwalking.",
        tags: ["IT-Support", "Kommunikation", "Teamarbeit"],
      },
    ],
  },
  about: {
    label: "Über mich",
    title: "Konzentriert arbeiten, gemeinsam weiterkommen.",
    paragraphs: [
      "Ich bin Applikationsentwickler in Ausbildung bei Swisscom in Zürich. Im Arbeitsalltag entwickle ich Lösungen mit der Microsoft Power Platform; seit August 2026 übernehme ich als Host im Team Halo eine Teamlead-Rolle im Web Development.",
      "In meiner Freizeit baue ich eigene Projekte – am liebsten dort, wo Daten, Visualisierung und saubere Technik zusammenkommen. Ich arbeite konzentriert und selbständig, schätze aber genauso klare Kommunikation und gute Zusammenarbeit im Team.",
    ],
    portraitAlt: "Porträt von Matti Koenis in Schwarzweiss",
    languagesTitle: "Sprachen",
    languages: ["Deutsch", "Niederländisch", "Schwedisch", "Englisch"],
    interestsTitle: "Interessen",
    interests: "Wirtschaft, Computer und neue Applikationen – und als Ausgleich Tennis, Fitness, Skifahren und Joggen.",
  },
  skills: {
    title: "Kompetenzen mit Nachweis",
    intro: "Statt Prozentbalken: wo ich die Technologie tatsächlich eingesetzt habe.",
    evidenceLabel: "Eingesetzt in",
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
        title: "Web & Frontend",
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
        title: "Daten & Backend",
        items: [
          { name: "PostgreSQL / Supabase", evidence: ["ai-compare", "punchclock"] },
          { name: "Python", evidence: ["neuroflap"] },
          { name: "Java / Quarkus", evidence: ["punchclock"] },
          { name: "Docker", evidence: ["punchclock"] },
          { name: "Deno Deploy", evidence: ["tdown"] },
        ],
      },
      {
        title: "Qualität & Werkzeuge",
        items: [
          { name: "Git & GitHub Actions", evidence: ["tdown"] },
          { name: "Vitest & Playwright", evidence: ["ai-compare"] },
          { name: "pytest", evidence: ["neuroflap"] },
        ],
      },
    ],
    moreTitle: "Weitere Kenntnisse",
    more: "Node.js, SQL, MongoDB, MariaDB, VS Code, IntelliJ",
    evidenceNames: { swisscom: "Swisscom", codemix: "Codemix", punchclock: "Punch Clock" },
  },
  contact: {
    label: "Kontakt",
    title: "Lass uns sprechen.",
    intro:
      "Für Perspektiven nach der Lehre, Projekte oder einen ersten Austausch. Am schnellsten erreichst du mich per E-Mail.",
    emailLabel: "E-Mail",
    copy: "Adresse kopieren",
    copied: "Kopiert",
    linkedin: "LinkedIn",
    github: "GitHub",
    formTitle: "Oder direkt hier schreiben",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    messagePlaceholder: "Worum geht es?",
    submit: "Nachricht senden",
    sending: "Wird gesendet …",
    success: "Danke! Deine Nachricht ist angekommen. Ich melde mich so bald wie möglich.",
    error: "Das hat leider nicht geklappt. Bitte schreib mir direkt per E-Mail:",
    required: "Bitte ausfüllen.",
    invalidEmail: "Bitte eine gültige E-Mail-Adresse eingeben.",
    privacyNote: "Die Angaben werden nur zur Beantwortung deiner Anfrage verwendet.",
    privacyLink: "Datenschutz",
  },
  footer: {
    role: "Applikationsentwickler in Ausbildung bei Swisscom",
    source: "Quellcode dieser Website",
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
          "Diese Website wird über GitHub Pages (GitHub Inc., USA) ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie die IP-Adresse in Server-Logfiles. Details: GitHub Privacy Statement.",
        ],
      },
      {
        heading: "Keine Cookies, kein Tracking",
        paragraphs: [
          "Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Schriften und Bilder werden direkt von dieser Domain geladen.",
        ],
      },
      {
        heading: "Kontaktformular",
        paragraphs: [
          "Wenn du das Kontaktformular nutzt, werden Name, E-Mail-Adresse und Nachricht über den Dienst EmailJS (emailjs.com) per E-Mail an mich übermittelt. Ich verwende die Angaben ausschliesslich, um deine Anfrage zu beantworten, und lösche sie, wenn sie dafür nicht mehr nötig sind. Alternativ kannst du mir direkt eine E-Mail schreiben.",
        ],
      },
      {
        heading: "Externe Links",
        paragraphs: [
          "Links zu GitHub, LinkedIn und meinen Projektseiten führen zu Angeboten Dritter. Dort gelten deren eigene Datenschutzbestimmungen.",
        ],
      },
      {
        heading: "Deine Rechte",
        paragraphs: [
          "Du kannst jederzeit Auskunft über deine bei mir gespeicherten Daten verlangen sowie deren Berichtigung oder Löschung. Eine E-Mail an matti@koenis.ch genügt.",
        ],
      },
    ],
  },
  notFound: {
    title: "Diese Seite gibt es nicht.",
    text: "Vielleicht hat sich die Adresse geändert. Auf der Startseite findest du alle Projekte.",
    back: "Zur Startseite",
  },
};

export default de;
