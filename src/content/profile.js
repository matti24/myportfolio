// Sprachunabhängige Profildaten. Quelle: ursprüngliche Website (Stationen, Skills) und GitHub-Repositories.

export const JOB_TITLES = [
  { lang: "en", code: "EN", title: "Application developer" },
  { lang: "de", code: "DE", title: "Applikationsentwickler" },
  { lang: "nl", code: "NL", title: "Applicatieontwikkelaar" },
  { lang: "sv", code: "SV", title: "Applikationsutvecklare" },
];

export const STATION_ORDER = ["futurework", "codemix", "powerplatform", "halo", "school"];
export const CURRENT_STATION = "halo";

const L = (de, en, nl, sv) => ({ de, en, nl, sv });

// Jeder Begriff gehört zu der Station, in der er auf der ursprünglichen Website genannt wurde.
// Skills ohne Stationsbezug stammen aus Berufsfachschule und eigenen GitHub-Projekten.
export const VOCABULARY = [
  { station: "futurework", label: "IT-Support" },
  { station: "futurework", label: L("Kommunikation", "Communication", "Communicatie", "Kommunikation") },
  { station: "futurework", label: L("Teamarbeit", "Teamwork", "Teamwerk", "Teamarbete") },
  { station: "codemix", label: "HTML" },
  { station: "codemix", label: "CSS" },
  { station: "codemix", label: "JavaScript" },
  { station: "powerplatform", label: "Microsoft Power Platform" },
  { station: "powerplatform", label: "Power Apps" },
  { station: "powerplatform", label: "Power Automate" },
  { station: "powerplatform", label: "Power BI" },
  { station: "powerplatform", label: "SharePoint" },
  { station: "powerplatform", label: "DevOps" },
  { station: "halo", label: "Web Development" },
  { station: "halo", label: "Frontend" },
  { station: "halo", label: L("Teamführung", "Team leadership", "Teamleiding", "Teamledning") },
  { station: "halo", label: L("Koordination", "Coordination", "Coördinatie", "Koordinering") },
  { station: "school", label: "React" },
  { station: "school", label: "TypeScript" },
  { station: "school", label: "Node.js" },
  { station: "school", label: "Java" },
  { station: "school", label: "Python" },
  { station: "school", label: "SQL" },
  { station: "school", label: "MariaDB" },
  { station: "school", label: "MongoDB" },
  { station: "school", label: "Docker" },
  { station: "school", label: "Git" },
  { station: "school", label: "VS Code" },
  { station: "school", label: "IntelliJ IDEA" },
];

export const wordLabel = (word, lang) => (typeof word.label === "string" ? word.label : word.label[lang] || word.label.de);

// Station, in der eine Fähigkeit zuerst dazukam (entspricht dem Wortschatz im Werdegang)
export const SKILL_STATION = {
  HTML: "codemix",
  CSS: "codemix",
  JavaScript: "codemix",
  "Power Apps Canvas": "powerplatform",
  "Power Automate": "powerplatform",
  SharePoint: "powerplatform",
  "Microsoft Power Platform": "powerplatform",
  DevOps: "powerplatform",
  "Power BI": "powerplatform",
  React: "school",
  TypeScript: "school",
  "Node.js": "school",
  Java: "school",
  Python: "school",
  SQL: "school",
  MariaDB: "school",
  MongoDB: "school",
  Docker: "school",
  Git: "school",
  "VS Code": "school",
  "IntelliJ IDEA": "school",
};

export const SKILL_GROUPS = [
  { key: "frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Power Apps Canvas"] },
  { key: "backend", items: ["Node.js", "Java", "Python", "Power Automate"] },
  { key: "database", items: ["SQL", "MariaDB", "MongoDB", "SharePoint"] },
  { key: "cloud", items: ["Microsoft Power Platform", "Docker", "DevOps"] },
  { key: "tools", items: ["Git", "VS Code", "IntelliJ IDEA", "Power BI"] },
];
