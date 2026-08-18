import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Languages,
  Check,
  ChevronDown,
  Dumbbell,
  Trophy,
  Snowflake,
  Footprints,
  Users,
  MessageCircle,
  Handshake,
  Lightbulb,
  Target,
  User,
  BookOpen,
  Send,
  MapPin,
  X,
  Maximize2,
  Minus,
  Menu,
} from "lucide-react";
import ChatWidget from "./components/ChatWidget";
import AssistantWidget from "./components/AssistantWidget";
import { LiquidMetalButton } from "./components/ui/liquid-metal-button";

// Schwerer WebGL-Hintergrund erst nach dem ersten Paint laden (eigener Chunk) → schnellerer Seitenaufbau
const BlackHoleHeroSection = React.lazy(() =>
  import("./components/ui/blackhole-hero-section")
);

// Eigenes, voll gestaltbares Sprach-Dropdown (statt nativem <select>)
function LanguageDropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = options.find((o) => o.code === value) || options[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-white/80 outline-none transition hover:text-white"
      >
        {current?.label}
        <ChevronDown
          className={`h-3.5 w-3.5 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-full z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 p-1 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-200 ${
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        {options.map((option) => {
          const isActive = option.code === value;
          return (
            <button
              key={option.code}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => {
                onChange(option.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{option.label}</span>
              {isActive && <Check className="h-3.5 w-3.5 text-blue-300" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}


const profileImage = "DSC09470-removebg-preview.png";

const informatikSkills = [
  { category: "frontend", name: "JavaScript", value: 65, logo: "https://cdn.simpleicons.org/javascript/FFFFFF" },
  { category: "frontend", name: "CSS", value: 65, logo: "https://cdn.simpleicons.org/css/FFFFFF" },
  { category: "frontend", name: "TypeScript", value: 60, logo: "https://cdn.simpleicons.org/typescript/FFFFFF" },
  { category: "frontend", name: "React", value: 70, logo: "https://cdn.simpleicons.org/react/FFFFFF" },
  { category: "frontend", name: "PowerApps Canvas", value: 70, logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerapps-logo.svg" },
  { category: "backend", name: "Node.js", value: 65, logo: "https://cdn.simpleicons.org/nodedotjs/FFFFFF" },
  { category: "backend", name: "Java", value: 40, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { category: "backend", name: "Power Automate", value: 65, logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft%20Power%20Automate.svg" },
  { category: "database", name: "SQL", value: 50, logo: "https://cdn.simpleicons.org/mysql/FFFFFF" },
  { category: "database", name: "MongoDB", value: 50, logo: "https://cdn.simpleicons.org/mongodb/FFFFFF" },
  { category: "database", name: "MariaDB", value: 50, logo: "https://cdn.simpleicons.org/mariadb/FFFFFF" },
  { category: "database", name: "SharePoint", value: 75, logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft%20Office%20SharePoint%20(2025%E2%80%93present).svg" },
  { category: "cloud", name: "Docker", value: 50, logo: "https://cdn.simpleicons.org/docker/FFFFFF" },
  { category: "cloud", name: "Microsoft Power Platform", value: 75, logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Power_Platform_logo.svg" },
  { category: "tools", name: "Git", value: 60, logo: "https://cdn.simpleicons.org/git/FFFFFF" },
  { category: "tools", name: "VSCode", value: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { category: "tools", name: "IntelliJ", value: 60, logo: "https://cdn.simpleicons.org/intellijidea/FFFFFF" },
  { category: "tools", name: "Power BI", value: 40, logo: "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Power%20BI%20Logo.svg" },
];

const techCategoryOrder = ["frontend", "backend", "database", "cloud", "tools"];

const techCategoryLabels = {
  de: {
    frontend: "Frontend",
    backend: "Backend",
    database: "Datenbanken",
    cloud: "Cloud & DevOps",
    tools: "Tools",
  },
  en: {
    frontend: "Frontend",
    backend: "Backend",
    database: "Databases",
    cloud: "Cloud & DevOps",
    tools: "Tools",
  },
  nl: {
    frontend: "Frontend",
    backend: "Backend",
    database: "Databases",
    cloud: "Cloud & DevOps",
    tools: "Tools",
  },
  sv: {
    frontend: "Frontend",
    backend: "Backend",
    database: "Databaser",
    cloud: "Cloud & DevOps",
    tools: "Tools",
  },
};

const languageOptions = [
  { code: "en", label: "EN — English" },
  { code: "de", label: "DE — Deutsch" },
  { code: "nl", label: "NL — Nederlands" },
  { code: "sv", label: "SV — Svenska" },
];

const getTeamHaloPeriod = (language) => {
  const teamHaloStart = new Date(2026, 7, 1);
  const hasStarted = new Date() >= teamHaloStart;

  if (!hasStarted) {
    return {
      de: "Ab Aug 2026",
      en: "From Aug 2026",
      nl: "vanaf aug 2026",
      sv: "från aug 2026",
    }[language];
  }

  return {
    de: "Aug 2026 - Heute",
    en: "Aug 2026 - Present",
    nl: "aug 2026 - nu",
    sv: "aug 2026 - nu",
  }[language];
};

const hobbyIcons = [Trophy, Dumbbell, Snowflake, Footprints];
const highlightIcons = [Briefcase, Languages, Code2];
const socialSkillIcons = [Users, Handshake, MessageCircle, Target, Lightbulb];

const translations = {
  de: {
    nav: { about: "Über mich", skills: "Kompetenzen", portfolio: "Portfolio", contact: "Kontakt" },
    hero: {
      badge: "Applikationsentwickler",
      lines: ["Matti"],
      description:
        "Präzision im Code. Perfektion im Ergebnis.",
      ctaPortfolio: "Portfolio ansehen",
      ctaContact: "Kontakt aufnehmen",
      cards: {
        focusLabel: "Fokus",
        focusValue: "Applikationen",
        styleLabel: "Arbeitsstil",
        styleValue: "Selbständig & teamstark",
        interestsLabel: "Interessen",
        interestsValue: "Finance & Strategie",
      },
      discover: "Mehr entdecken",
    },
    about: {
      tag: "Über mich",
      title: "Professionell, fokussiert und offen für Neues.",
      languagesTitle: "Sprachen",
      hobbiesTitle: "Interessen & Hobbys",
      shortProfileTitle: "Kurzprofil",
      shortProfileBefore: "Ich bin derzeit in der Ausbildung zum",
      shortProfileHighlight: "Applikationsentwickler",
      shortProfileAfter:
        "bei Swisscom. Meine Stärken liegen in konzentrierter, selbständiger und teamstarker Arbeit.",
      languageLevels: [
        { name: "Deutsch", level: 100, flag: "🇩🇪" },
        { name: "Niederländisch", level: 90, flag: "🇳🇱" },
        { name: "Englisch", level: 80, flag: "🇬🇧" },
        { name: "Schwedisch", level: 70, flag: "🇸🇪" },
      ],
      hobbies: ["Tennis", "Fitness", "Skifahren", "Joggen"],
      highlights: [
        {
          title: "Applikationsentwickler in Ausbildung",
          text: "Ich entwickle mich bei Swisscom laufend weiter und arbeite an sauberen, modernen und praxisnahen Lösungen.",
        },
        {
          title: "Sprachen",
          text: "Deutsch, Niederländisch und Schwedisch sowie Schulkenntnisse in Englisch über 9 Jahre.",
        },
        {
          title: "Mindset",
          text: "Konzentriert, selbständig, teamstark und mit echtem Interesse an Wirtschaft, Computern und neuen Applikationen.",
        },
      ],
    },
    skills: {
      tag: "Skills",
      title: "",
      techTitle: "Informatik Skills",
      socialTitle: "Soziale Kompetenzen",
      stackLabel: "Tools & Stack",
      styleLabel: "Arbeitsstil",
      socialItems: [
        { name: "Soziale Stärke", description: "Empathie und zwischenmenschliche Fähigkeiten" },
        { name: "Teamarbeit", description: "Zusammenarbeit und gemeinsame Ziele erreichen" },
        { name: "Kommunikation", description: "Klare und effektive Kommunikation" },
        { name: "Selbständiges Arbeiten", description: "Eigenständigkeit und Verantwortungsbewusstsein" },
        { name: "Lösungsorientierung", description: "Kreative Problemlösung und Innovation" },
      ],
    },
    experience: {
      tag: "Erfahrung",
      title: "Mein Weg als Applikationsentwickler in Ausbildung.",
      overview: "Absolvierte & aktuelle Projekte",
      items: [
        {
          title: "Team Halo - Host",
          period: "Ab Aug 2026",
          location: "Zürich / Bern",
          description: "Teamlead-Rolle im Web Development Team mit Verantwortung für Koordination, Zusammenarbeit und moderne Weblösungen.",
          skills: ["Web Development", "Frontend", "Teamführung", "Koordination"],
        },
        {
          title: "Power Platform Dev Ops",
          period: "Aug 2025 - Aug 2026",
          location: "Zürich",
          description: "Entwicklung und Verwaltung von PowerApps, Power BI und SharePoint Lösungen mit DevOps-Methodiken.",
          skills: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
        },
        {
          title: "Codemix Programmierprojekt",
          period: "Feb 2025 - Juli 2025",
          location: "Zürich",
          description: "Strukturierte Einführung in Softwareentwicklung mit Fokus auf Grundlagen und praktische Anwendung.",
          skills: ["HTML", "CSS", "JavaScript", "Basiskonzepte"],
        },
        {
          title: "Future Work Specialist",
          period: "Aug 2024 - Feb 2025",
          location: "Zürich / Bern",
          description: "Projekt zur Gestaltung zukünftiger Arbeitsmodelle und IT-Support für Floorwalking.",
          skills: ["IT-Support", "Kommunikation", "Teamarbeit"],
        },
      ],
    },
    portfolio: {
      tag: "Portfolio",
      title: "Bereit für den nächsten Schritt nach der Lehre.",
      description:
        "Diese Seite zeigt, wie ich mich positioniere: professionell, klar, modern und mit echtem Interesse an guter Zusammenarbeit. Ich suche Perspektiven, in denen ich mich weiterentwickeln und aktiv mitgestalten kann.",
      bringTitle: "Was ich mitbringe",
      bringText:
        "Eine saubere Arbeitsweise, Konzentration, Selbständigkeit und Teamgeist. Dazu technisches Interesse und der Wille, mich laufend weiterzuentwickeln.",
      standTitle: "Wofür ich stehe",
      standText: "Für klare Kommunikation, Verlässlichkeit und moderne Applikationen mit einem sauberen Auftritt.",
    },
    contact: {
      tag: "Kontakt",
      title: "Lass uns vernetzen.",
      description: "Für Austausch, Chancen nach der Lehre oder einen ersten Kontakt bin ich direkt erreichbar.",
      emailLabel: "E-Mail",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Matti Koenis",
    },
    footer: {
      tag: "Kontakt",
      title: "Lass uns zusammenarbeiten",
      description:
        "Hast du ein spannendes Projekt oder möchtest dich austauschen? Kontaktiere mich gerne – ich freue mich auf den Austausch!",
      emailButton: "E-Mail schreiben",
      linkedinButton: "LinkedIn",
      bottom: "Matti Koenis · Applikationsentwickler in Ausbildung",
    },
    chat: {
      name: "Matti Koenis",
      status: "Online",
      buttonLabel: "Anfrage senden",
      intro: "Hey! 👋 Über diesen Chat kannst du mir direkt eine Anfrage schicken – sie wird automatisch per E-Mail an mich gesendet und ich melde mich bei dir. Woher kennst du mich?",
      followUp: "Schön, dass du dich meldest! Worum geht es bei deiner Anfrage?",
      askName: "Damit ich dir persönlich antworten kann, wie heisst du?",
      askEmail: "Danke, {name}. An welche E-Mail-Adresse darf ich meine Antwort senden?",
      thanks: "Danke! Deine Angaben werden jetzt als E-Mail-Anfrage an mich gesendet.",
      sending: "Ich sende deine Anfrage…",
      sendSuccess: "Danke! Deine Anfrage wurde per E-Mail an mich gesendet.",
      sendError: "Ups, das hat nicht geklappt. Bitte versuche es erneut.",
      invalidEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
      placeholderName: "Max Muster",
      placeholderEmail: "max@test.muster",
      placeholderOrigin: "Schreib, woher du mich kennst…",
      placeholderIntent: "Beschreibe kurz dein Anliegen…",
      quickRepliesIntro: [
        "Teams / Swisscom intern",
        "Wir haben uns getroffen",
        "Via LinkedIn",
        "Diese Website gefunden",
        "Über eine Empfehlung",
      ],
      quickRepliesIntent: [
        "Ich habe eine Frage",
        "Projekt- / Zusammenarbeitsanfrage",
        "Feedback zu deiner Arbeit",
        "Einfach mal Netzwerken",
        "Anderes",
      ],
    },
  },
  en: {
    nav: { about: "About", skills: "Skills", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      badge: "Software developer ",
      lines: ["Matti"],
      description:
        "Transforming your ideas into reliable software.",
      ctaPortfolio: "View portfolio",
      ctaContact: "Get in touch",
      cards: {
        focusLabel: "Focus",
        focusValue: "Applications",
        styleLabel: "Work style",
        styleValue: "Independent & team-strong",
        interestsLabel: "Interests",
        interestsValue: "Finance & strategy",
      },
      discover: "Discover more",
    },
    about: {
      tag: "About",
      title: "Professional, focused and open to new ideas.",
      languagesTitle: "Languages",
      hobbiesTitle: "Interests & hobbies",
      shortProfileTitle: "Short profile",
      shortProfileBefore: "I am currently training as an",
      shortProfileHighlight: "application developer",
      shortProfileAfter: "at Swisscom. My strengths are focused, independent and team-oriented work.",
      languageLevels: [
        { name: "German", level: 100, flag: "🇩🇪" },
        { name: "Dutch", level: 90, flag: "🇳🇱" },
        { name: "English", level: 80, flag: "🇬🇧" },
        { name: "Swedish", level: 70, flag: "🇸🇪" },
      ],
      hobbies: ["Tennis", "Gym", "Skiing", "Running"],
      highlights: [
        {
          title: "Application developer apprentice",
          text: "At Swisscom I continuously grow and work on clean, modern and practical solutions.",
        },
        {
          title: "Languages",
          text: "German, Dutch and Swedish, plus school-level English over 9 years.",
        },
        {
          title: "Mindset",
          text: "Focused, independent, team-driven and genuinely interested in business, computers and modern applications.",
        },
      ],
    },
    skills: {
      tag: "Skills",
      title: "",
      techTitle: "Technical skills",
      socialTitle: "Social competencies",
      stackLabel: "Tools & Stack",
      styleLabel: "Working style",
      socialItems: [
        { name: "Social awareness", description: "Empathy and strong interpersonal skills" },
        { name: "Teamwork", description: "Collaborating and reaching shared goals" },
        { name: "Communication", description: "Clear and effective communication" },
        { name: "Independent work", description: "Ownership and self-management" },
        { name: "Solution mindset", description: "Creative problem solving and innovation" },
      ],
    },
    experience: {
      tag: "Experience",
      title: "My journey as an application developer apprentice.",
      overview: "Completed & current projects",
      items: [
        {
          title: "Team Halo - Host",
          period: "From Aug 2026",
          location: "Zurich / Bern",
          description: "Team lead role in the web development team with responsibility for coordination, collaboration and modern web solutions.",
          skills: ["Web Development", "Frontend", "Team lead", "Coordination"],
        },
        {
          title: "Power Platform Dev Ops",
          period: "Aug 2025 - Aug 2026",
          location: "Zurich",
          description: "Development and management of PowerApps, Power BI and SharePoint solutions with DevOps methods.",
          skills: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
        },
        {
          title: "Codemix programming project",
          period: "Feb 2025 - Jul 2025",
          location: "Zurich",
          description: "Structured introduction to software development with focus on fundamentals and practical use.",
          skills: ["HTML", "CSS", "JavaScript", "Fundamentals"],
        },
        {
          title: "Future Work Specialist",
          period: "Aug 2024 - Feb 2025",
          location: "Zurich / Bern",
          description: "Project about future work models and IT support for floorwalking.",
          skills: ["IT Support", "Communication", "Teamwork"],
        },
      ],
    },
    portfolio: {
      tag: "Portfolio",
      title: "Ready for the next step after my apprenticeship.",
      description:
        "This page shows how I position myself: professional, clear, modern and with genuine interest in strong collaboration. I am looking for opportunities where I can keep growing and actively contribute.",
      bringTitle: "What I bring",
      bringText:
        "A clean way of working, focus, independence and team spirit. Plus technical curiosity and the drive to keep improving.",
      standTitle: "What I stand for",
      standText: "Clear communication, reliability and modern applications with a clean presentation.",
    },
    contact: {
      tag: "Contact",
      title: "Let’s connect.",
      description: "For networking, opportunities after my apprenticeship, or a first conversation, feel free to reach out.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Matti Koenis",
    },
    footer: {
      tag: "Contact",
      title: "Let’s work together",
      description: "Have an exciting project or want to connect? Feel free to contact me – I’d love to hear from you!",
      emailButton: "Send email",
      linkedinButton: "LinkedIn",
      bottom: "Matti Koenis · Application developer apprentice",
    },
    chat: {
      name: "Matti Koenis",
      status: "Online",
      buttonLabel: "Send request",
      intro: "Hey! 👋 This chat lets you send me a request directly – it's automatically emailed to me and I'll get back to you. How do you know me?",
      followUp: "Nice to hear from you! What is your request about?",
      askName: "So I can reply to you personally, what's your name?",
      askEmail: "Thanks, {name}. Which email address should I use to reply?",
      thanks: "Thanks! Your details are now being sent to me as an email request.",
      sending: "Sending your request…",
      sendSuccess: "Thanks! Your request has been sent to me by email.",
      sendError: "Oops, something went wrong. Please try again.",
      invalidEmail: "Please enter a valid email address.",
      placeholderName: "John Doe",
      placeholderEmail: "john@example.com",
      placeholderOrigin: "Tell me how you know me…",
      placeholderIntent: "Briefly describe your request…",
      quickRepliesIntro: [
        "Teams / Swisscom internal",
        "We met",
        "Via LinkedIn",
        "Found this website",
        "By recommendation",
      ],
      quickRepliesIntent: [
        "I have a question",
        "Project / collaboration request",
        "Feedback on your work",
        "Just networking",
        "Other",
      ],
    },
  },
  nl: {
    nav: { about: "Over mij", skills: "Vaardigheden", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      badge: "Applicatieontwikkelaar",
      lines: ["Matti"],
      description:
        "De mens achter de code.",
      ctaPortfolio: "Bekijk portfolio",
      ctaContact: "Neem contact op",
      cards: {
        focusLabel: "Focus",
        focusValue: "Applicaties",
        styleLabel: "Werkstijl",
        styleValue: "Zelfstandig & teamsterk",
        interestsLabel: "Interesses",
        interestsValue: "Finance & strategie",
      },
      discover: "Meer ontdekken",
    },
    about: {
      tag: "Over mij",
      title: "Professioneel, gefocust en open voor nieuwe ideeën.",
      languagesTitle: "Talen",
      hobbiesTitle: "Interesses & hobby’s",
      shortProfileTitle: "Kort profiel",
      shortProfileBefore: "Ik ben momenteel in opleiding tot",
      shortProfileHighlight: "applicatieontwikkelaar",
      shortProfileAfter: "bij Swisscom. Mijn sterktes zijn geconcentreerd, zelfstandig en teamgericht werken.",
      languageLevels: [
        { name: "Duits", level: 100, flag: "🇩🇪" },
        { name: "Nederlands", level: 90, flag: "🇳🇱" },
        { name: "Engels", level: 80, flag: "🇬🇧" },
        { name: "Zweeds", level: 70, flag: "🇸🇪" },
      ],
      hobbies: ["Tennis", "Fitness", "Skiën", "Hardlopen"],
      highlights: [
        {
          title: "Applicatieontwikkelaar in opleiding",
          text: "Bij Swisscom ontwikkel ik me voortdurend en werk ik aan nette, moderne en praktijkgerichte oplossingen.",
        },
        {
          title: "Talen",
          text: "Duits, Nederlands en Zweeds, plus schoolkennis Engels over 9 jaar.",
        },
        {
          title: "Mindset",
          text: "Gefocust, zelfstandig, teamgericht en met echte interesse in economie, computers en moderne applicaties.",
        },
      ],
    },
    skills: {
      tag: "Skills",
      title: "",
      techTitle: "Technische skills",
      socialTitle: "Sociale competenties",
      stackLabel: "Tools & Stack",
      styleLabel: "Werkstijl",
      socialItems: [
        { name: "Sociale kracht", description: "Empathie en sterke interpersoonlijke vaardigheden" },
        { name: "Teamwerk", description: "Samenwerken en gezamenlijke doelen bereiken" },
        { name: "Communicatie", description: "Heldere en effectieve communicatie" },
        { name: "Zelfstandig werken", description: "Eigenaarschap en zelfsturing" },
        { name: "Oplossingsgericht", description: "Creatief problemen oplossen en innoveren" },
      ],
    },
    experience: {
      tag: "Ervaring",
      title: "Mijn traject als applicatieontwikkelaar in opleiding.",
      overview: "Afgeronde & lopende projecten",
      items: [
        {
          title: "Team Halo - Host",
          period: "vanaf aug 2026",
          location: "Zürich / Bern",
          description: "Teamleadrol in het webdevelopmentteam met verantwoordelijkheid voor coordinatie, samenwerking en moderne weboplossingen.",
          skills: ["Web Development", "Frontend", "Teamleiding", "Coordinatie"],
        },
        {
          title: "Power Platform Dev Ops",
          period: "aug 2025 - aug 2026",
          location: "Zürich",
          description: "Ontwikkeling en beheer van PowerApps-, Power BI- en SharePoint-oplossingen met DevOps-methodes.",
          skills: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
        },
        {
          title: "Codemix programmeerproject",
          period: "feb 2025 - jul 2025",
          location: "Zürich",
          description: "Gestructureerde introductie in softwareontwikkeling met focus op basisprincipes en praktijk.",
          skills: ["HTML", "CSS", "JavaScript", "Basisconcepten"],
        },
        {
          title: "Future Work Specialist",
          period: "aug 2024 - feb 2025",
          location: "Zürich / Bern",
          description: "Project over toekomstige werkmodellen en IT-support voor floorwalking.",
          skills: ["IT-support", "Communicatie", "Teamwerk"],
        },
      ],
    },
    portfolio: {
      tag: "Portfolio",
      title: "Klaar voor de volgende stap na mijn opleiding.",
      description:
        "Deze pagina laat zien hoe ik mij positioneer: professioneel, helder, modern en met echte interesse in sterke samenwerking. Ik zoek kansen waarin ik kan groeien en actief kan bijdragen.",
      bringTitle: "Wat ik meebreng",
      bringText: "Een nette werkwijze, focus, zelfstandigheid en teamspirit. Plus technische nieuwsgierigheid en leergierigheid.",
      standTitle: "Waar ik voor sta",
      standText: "Heldere communicatie, betrouwbaarheid en moderne applicaties met een strakke uitstraling.",
    },
    contact: {
      tag: "Contact",
      title: "Laten we verbinden.",
      description: "Voor uitwisseling, kansen na mijn opleiding of een eerste gesprek ben ik direct bereikbaar.",
      emailLabel: "E-mail",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Matti Koenis",
    },
    footer: {
      tag: "Contact",
      title: "Laten we samenwerken",
      description: "Heb je een spannend project of wil je sparren? Neem gerust contact op – ik kijk uit naar je bericht!",
      emailButton: "E-mail sturen",
      linkedinButton: "LinkedIn",
      bottom: "Matti Koenis · Applicatieontwikkelaar in opleiding",
    },
    chat: {
      name: "Matti Koenis",
      status: "Online",
      buttonLabel: "Aanvraag sturen",
      intro: "Hey! 👋 Via deze chat kun je me direct een aanvraag sturen – die wordt automatisch per e-mail naar mij verstuurd en ik kom bij je terug. Waar ken je me van?",
      followUp: "Leuk dat je contact opneemt! Waar gaat je aanvraag over?",
      askName: "Zodat ik je persoonlijk kan antwoorden: hoe heet je?",
      askEmail: "Dank je, {name}. Naar welk e-mailadres mag ik mijn antwoord sturen?",
      thanks: "Dank je! Je gegevens worden nu als e-mailaanvraag naar mij verzonden.",
      sending: "Ik stuur je aanvraag…",
      sendSuccess: "Dank je! Je aanvraag is per e-mail naar mij verzonden.",
      sendError: "Oeps, er ging iets mis. Probeer het opnieuw.",
      invalidEmail: "Vul een geldig e-mailadres in.",
      placeholderName: "Max Musters",
      placeholderEmail: "max@example.com",
      placeholderOrigin: "Vertel hoe je me kent…",
      placeholderIntent: "Beschrijf kort je aanvraag…",
      quickRepliesIntro: [
        "Teams / Swisscom intern",
        "We hebben elkaar ontmoet",
        "Via LinkedIn",
        "Deze website gevonden",
        "Via een aanbeveling",
      ],
      quickRepliesIntent: [
        "Ik heb een vraag",
        "Project- / samenwerkingsaanvraag",
        "Feedback op je werk",
        "Even netwerken",
        "Anders",
      ],
    },
  },
  sv: {
    nav: { about: "Om mig", skills: "Kompetenser", portfolio: "Portfolio", contact: "Kontakt" },
    hero: {
      badge: "Applikationsutvecklare",
      lines: ["Matti"],
      description:
        "Från idé till digital verklighet.",
      ctaPortfolio: "Se portfolio",
      ctaContact: "Kontakta mig",
      cards: {
        focusLabel: "Fokus",
        focusValue: "Applikationer",
        styleLabel: "Arbetsstil",
        styleValue: "Självständig & teamstark",
        interestsLabel: "Intressen",
        interestsValue: "Finance & strategi",
      },
      discover: "Upptäck mer",
    },
    about: {
      tag: "Om mig",
      title: "Professionell, fokuserad och öppen för nytt.",
      languagesTitle: "Språk",
      hobbiesTitle: "Intressen & hobbyer",
      shortProfileTitle: "Kort profil",
      shortProfileBefore: "Jag utbildar mig för närvarande till",
      shortProfileHighlight: "applikationsutvecklare",
      shortProfileAfter: "på Swisscom. Mina styrkor är fokuserat, självständigt och teamorienterat arbete.",
      languageLevels: [
        { name: "Tyska", level: 100, flag: "🇩🇪" },
        { name: "Nederländska", level: 90, flag: "🇳🇱" },
        { name: "Engelska", level: 80, flag: "🇬🇧" },
        { name: "Svenska", level: 70, flag: "🇸🇪" },
      ],
      hobbies: ["Tennis", "Fitness", "Skidåkning", "Löpning"],
      highlights: [
        {
          title: "Applikationsutvecklare under utbildning",
          text: "På Swisscom utvecklas jag kontinuerligt och arbetar med rena, moderna och praktiska lösningar.",
        },
        {
          title: "Språk",
          text: "Tyska, nederländska och svenska samt skolkunskaper i engelska under 9 år.",
        },
        {
          title: "Mindset",
          text: "Fokuserad, självständig, teamstark och med genuint intresse för ekonomi, datorer och moderna applikationer.",
        },
      ],
    },
    skills: {
      tag: "Skills",
      title: "",
      techTitle: "Tekniska skills",
      socialTitle: "Sociala kompetenser",
      stackLabel: "Tools & Stack",
      styleLabel: "Arbetsstil",
      socialItems: [
        { name: "Social styrka", description: "Empati och starka mellanmänskliga färdigheter" },
        { name: "Teamarbete", description: "Samarbete och att nå gemensamma mål" },
        { name: "Kommunikation", description: "Tydlig och effektiv kommunikation" },
        { name: "Självständigt arbete", description: "Ansvarstagande och självledarskap" },
        { name: "Lösningsfokus", description: "Kreativ problemlösning och innovation" },
      ],
    },
    experience: {
      tag: "Erfarenhet",
      title: "Min resa som applikationsutvecklare under utbildning.",
      overview: "Avslutade & pågående projekt",
      items: [
        {
          title: "Team Halo - Host",
          period: "från aug 2026",
          location: "Zürich / Bern",
          description: "Teamlead-roll i webbutvecklingsteamet med ansvar for koordinering, samarbete och moderna webblösningar.",
          skills: ["Web Development", "Frontend", "Teamledning", "Koordinering"],
        },
        {
          title: "Power Platform Dev Ops",
          period: "aug 2025 - aug 2026",
          location: "Zürich",
          description: "Utveckling och förvaltning av PowerApps-, Power BI- och SharePoint-lösningar med DevOps-metodik.",
          skills: ["PowerApps", "Power BI", "Power Automate", "SharePoint", "DevOps"],
        },
        {
          title: "Codemix programmeringsprojekt",
          period: "feb 2025 - jul 2025",
          location: "Zürich",
          description: "Strukturerad introduktion till mjukvaruutveckling med fokus på grunder och praktisk tillämpning.",
          skills: ["HTML", "CSS", "JavaScript", "Grundkoncept"],
        },
        {
          title: "Future Work Specialist",
          period: "aug 2024 - feb 2025",
          location: "Zürich / Bern",
          description: "Projekt om framtidens arbetsmodeller och IT-support för floorwalking.",
          skills: ["IT-support", "Kommunikation", "Teamarbete"],
        },
      ],
    },
    portfolio: {
      tag: "Portfolio",
      title: "Redo för nästa steg efter lärlingsperioden.",
      description:
        "Den här sidan visar hur jag positionerar mig: professionellt, tydligt, modernt och med genuint intresse för bra samarbete. Jag söker möjligheter där jag kan fortsätta utvecklas och bidra aktivt.",
      bringTitle: "Det jag bidrar med",
      bringText:
        "Ett rent arbetssätt, fokus, självständighet och laganda. Dessutom teknisk nyfikenhet och viljan att utvecklas kontinuerligt.",
      standTitle: "Det jag står för",
      standText: "Tydlig kommunikation, pålitlighet och moderna applikationer med ett rent uttryck.",
    },
    contact: {
      tag: "Kontakt",
      title: "Låt oss connecta.",
      description: "För nätverk, möjligheter efter lärlingsperioden eller ett första samtal är jag lätt att nå.",
      emailLabel: "E-post",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Matti Koenis",
    },
    footer: {
      tag: "Kontakt",
      title: "Låt oss samarbeta",
      description: "Har du ett spännande projekt eller vill du utbyta idéer? Hör gärna av dig – jag ser fram emot kontakten!",
      emailButton: "Skicka e-post",
      linkedinButton: "LinkedIn",
      bottom: "Matti Koenis · Applikationsutvecklare under utbildning",
    },
    chat: {
      name: "Matti Koenis",
      status: "Online",
      buttonLabel: "Skicka förfrågan",
      intro: "Hej! 👋 Via den här chatten kan du skicka mig en förfrågan direkt – den skickas automatiskt via e-post till mig och jag återkommer. Varifrån känner du mig?",
      followUp: "Kul att du hör av dig! Vad handlar din förfrågan om?",
      askName: "Så att jag kan svara dig personligen, vad heter du?",
      askEmail: "Tack, {name}. Vilken e-postadress ska jag svara till?",
      thanks: "Tack! Dina uppgifter skickas nu till mig som en e-postförfrågan.",
      sending: "Jag skickar din förfrågan…",
      sendSuccess: "Tack! Din förfrågan har skickats till mig via e-post.",
      sendError: "Hoppsan, något gick fel. Försök igen.",
      invalidEmail: "Ange en giltig e-postadress.",
      placeholderName: "Max Muster",
      placeholderEmail: "max@example.com",
      placeholderOrigin: "Berätta hur du känner mig…",
      placeholderIntent: "Beskriv kort din förfrågan…",
      quickRepliesIntro: [
        "Teams / Swisscom internt",
        "Vi har träffats",
        "Via LinkedIn",
        "Hittade den här webbplatsen",
        "Genom en rekommendation",
      ],
      quickRepliesIntent: [
        "Jag har en fråga",
        "Projekt- / samarbetsförfrågan",
        "Feedback på ditt arbete",
        "Bara nätverka",
        "Annat",
      ],
    },
  },
};

function ProjectCard({ exp, index, total, articleStyle, contentStyle }) {
  return (
    <motion.article
      style={articleStyle}
      className="relative z-10 w-full max-w-2xl overflow-hidden border border-white/12 bg-slate-900/55"
    >
      {/* linke Akzentkante */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#e5e4e2]/70 to-transparent" />

      <motion.div style={contentStyle} className="relative z-10 p-5 sm:p-9">
        {/* Kopfzeile: Index + Ort */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 sm:pb-5">
          <span className="font-mono text-xs tracking-[0.3em] text-white/40">
            {String(index + 1).padStart(2, "0")}
            <span className="text-white/20"> / {String(total).padStart(2, "0")}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {exp.location}
          </span>
        </div>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-200/55 sm:mt-8">
          {exp.period}
        </p>
        <h3 className="mt-3 text-[1.55rem] font-semibold leading-[1.1] tracking-tight text-white sm:mt-4 sm:text-[2.85rem] sm:leading-[1.05]">
          {exp.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/55 sm:mt-5 sm:text-base sm:leading-7">
          {exp.description}
        </p>

        {/* Skills als schlichte, eckige Chips */}
        <div className="mt-6 flex flex-wrap gap-2 sm:mt-9">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="border border-white/12 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/50 sm:px-3 sm:py-1.5 sm:text-[11px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function MattiKoenisOnepage() {
  const [activeLanguage, setActiveLanguage] = useState("en");
  const t = translations[activeLanguage];
  const showChatWidget = true;
  const [chatOpenSignal, setChatOpenSignal] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeLanguageOption = languageOptions.find((option) => option.code === activeLanguage) || languageOptions[0];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // KI-Assistent kann per Link "Anfrage senden" das Kontaktformular öffnen.
  useEffect(() => {
    const openSendRequest = () => setChatOpenSignal((s) => s + 1);
    window.addEventListener("open-send-request", openSendRequest);
    return () => window.removeEventListener("open-send-request", openSendRequest);
  }, []);

  const localizedLanguageLevels = t.about.languageLevels;
  const localizedHobbies = t.about.hobbies.map((name, idx) => ({
    name,
    icon: hobbyIcons[idx],
  }));
  const localizedHighlights = t.about.highlights.map((item, idx) => ({
    ...item,
    icon: highlightIcons[idx],
  }));
  const localizedSocialSkills = t.skills.socialItems.map((item, idx) => ({
    ...item,
    icon: socialSkillIcons[idx],
  }));
  const localizedExperiences = t.experience.items.map((item) =>
    item.title === "Team Halo - Host"
      ? { ...item, period: getTeamHaloPeriod(activeLanguage) }
      : item
  );
  const totalSlides = localizedExperiences.length;

  const sliderRef = useRef(null);
  const [viewport, setViewport] = useState({ w: 1200, h: 800 });
  const [tuckChat, setTuckChat] = useState(false);
  const isMobile = viewport.w > 0 && viewport.w < 768;

  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Handy: Send-request-Button einziehen, solange die Projekt-Sektion sichtbar ist
  useEffect(() => {
    const section = sliderRef.current;
    if (!section) return;
    if (!isMobile) {
      setTuckChat(false);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => setTuckChat(entries[0]?.isIntersecting ?? false),
      { threshold: 0.15 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, [isMobile]);

  // Timeline: Fortschritt folgt exakt dem Scroll (ohne Feder = keine Verzögerung)
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const markerTop = useTransform(timelineProgress, (v) => `${v * 100}%`);

  const groupedTechSkills = techCategoryOrder
    .map((category) => ({
      category,
      label: techCategoryLabels[activeLanguage][category],
      items: informatikSkills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);
  const techSkillColumns = [
    ["frontend", "database"],
    ["backend", "cloud", "tools"],
  ].map((column) =>
    column
      .map((category) => groupedTechSkills.find((group) => group.category === category))
      .filter(Boolean)
  );

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Sofort ausführen und nach dem ersten Paint erneut, um Browser-Scroll-Restore zu übersteuern.
    scrollToTop();
    const rafId = window.requestAnimationFrame(scrollToTop);

    const handlePageShow = () => scrollToTop();
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className={`min-h-screen overflow-x-clip bg-transparent text-white [scroll-behavior:smooth]`}>
      <style>{`
        .hero-code-line {
          display: block;
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          animation: heroCodeType 0.34s steps(36, end) forwards;
        }

        .hero-code-line:nth-child(1) { animation-delay: 0.08s; }
        .hero-code-line:nth-child(2) { animation-delay: 0.34s; }
        .hero-code-line:nth-child(3) { animation-delay: 0.6s; }
        .hero-code-line:nth-child(4) { animation-delay: 0.86s; }
        .hero-code-line:nth-child(5) { animation-delay: 1.12s; }
        .hero-code-line:nth-child(6) { animation-delay: 1.38s; }
        .hero-code-line:nth-child(7) { animation-delay: 1.64s; }
        .hero-code-line:nth-child(8) { animation-delay: 1.9s; }
        .hero-code-line:nth-child(9) { animation-delay: 2.16s; }

        .hero-code-caret {
          animation: heroCaretBlink 1s step-end infinite;
        }

        .hero-code-scan {
          animation: heroCodeScan 4.8s ease-in-out infinite;
        }

        @keyframes heroCodeType {
          to {
            max-width: 100%;
            opacity: 1;
          }
        }

        @keyframes heroCaretBlink {
          0%, 45% {
            opacity: 1;
          }
          46%, 100% {
            opacity: 0;
          }
        }

        @keyframes heroCodeScan {
          0%, 100% {
            transform: translateY(-35%);
            opacity: 0;
          }
          18%, 62% {
            opacity: 1;
          }
          80% {
            transform: translateY(135%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-code-line,
          .hero-code-caret,
          .hero-code-scan {
            animation: none;
            opacity: 1;
            max-width: none;
          }
        }
      `}</style>
      {/* Schwarzes-Loch als fixed Hintergrund (rohes WebGL2/WebGL, läuft in Chrome). */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black [transform:translateZ(0)]">
        <Suspense fallback={null}>
          <BlackHoleHeroSection
            className="pointer-events-none h-full w-full"
            steps={240}
            maxDpr={1.5}
          />
        </Suspense>
      </div>

      <header className="sticky top-0 z-40 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/55 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em] bg-gradient-to-r from-white to-[#d8d8d6] bg-clip-text text-transparent hover:from-[#f2f1ef] hover:to-[#d8d8d6] transition">
              Matti Koenis
            </a>

            <nav className="hidden items-center gap-4 text-sm md:flex">
              <LanguageDropdown
                options={languageOptions}
                value={activeLanguage}
                onChange={setActiveLanguage}
              />
              <a href="#about" className="relative text-white/80 transition group">
                {t.nav.about}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#e5e4e2]/45 via-[#e5e4e2]/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#f2f1ef] to-[#d8d8d6] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#skills" className="relative text-white/80 transition group">
                {t.nav.skills}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#e5e4e2]/45 via-[#e5e4e2]/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#f2f1ef] to-[#d8d8d6] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#portfolio" className="relative text-white/80 transition group">
                {t.nav.portfolio}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#e5e4e2]/45 via-[#e5e4e2]/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#f2f1ef] to-[#d8d8d6] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#contact" className="relative text-white/80 transition group">
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#e5e4e2]/45 via-[#e5e4e2]/0 to-transparent" />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#f2f1ef] to-[#d8d8d6] group-hover:w-full transition-all duration-300" />
              </a>
            </nav>

            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/85 backdrop-blur-sm transition hover:border-[#e5e4e2]/50 hover:bg-white/10 hover:text-[#f2f1ef] md:hidden"
            >
              <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/45 to-transparent" />
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Burger-Menü */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col border-l border-white/10 bg-slate-950/95 shadow-2xl shadow-black/50 backdrop-blur-xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#e5e4e2]/40 to-transparent" />

          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] bg-gradient-to-r from-white to-[#d8d8d6] bg-clip-text text-transparent">
              Menü
            </span>
            <button
              type="button"
              aria-label="Menü schließen"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:border-[#e5e4e2]/50 hover:bg-white/10 hover:text-[#f2f1ef]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 px-4 py-6">
            {[
              { href: "#about", label: t.nav.about, icon: User },
              { href: "#skills", label: t.nav.skills, icon: Code2 },
              { href: "#portfolio", label: t.nav.portfolio, icon: Briefcase },
              { href: "#contact", label: t.nav.contact, icon: Send },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white/85 transition duration-300 hover:border-[#e5e4e2]/40 hover:bg-white/[0.07] hover:text-[#f2f1ef]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition group-hover:border-[#e5e4e2]/40 group-hover:text-[#f2f1ef]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold tracking-wide">{label}</span>
                <ArrowRight className="ml-auto h-4 w-4 -translate-x-1 text-white/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#e5e4e2]/70 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 px-4 py-6">
            <div className="relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.04] shadow-lg shadow-slate-950/20 transition focus-within:border-[#e5e4e2]/45">
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/45 to-transparent" />
              <div className="pointer-events-none flex items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/75">
                    <Languages className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">Sprache</p>
                    <p className="truncate text-sm font-semibold text-[#f2f1ef]">{activeLanguageOption.label}</p>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 shrink-0 text-white/55" />
              </div>
              <select
                aria-label="Sprache auswählen"
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code} className="bg-slate-950 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.82fr)]">
            <div
              className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-4xl flex-col justify-center text-center lg:mx-0 lg:text-left"
            >
              <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
                <span className="hidden h-px w-10 bg-white/35 sm:block" />
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-100/75">
                  {t.hero.badge}
                </p>
              </div>
              <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                <span className="bg-gradient-to-r from-white via-[#e5e4e2] to-[#aeb6c5] bg-clip-text text-transparent">
                  {t.hero.lines[0]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#f2f1ef] via-[#cfd4db] to-[#8f949e] bg-clip-text text-transparent">
                  {t.hero.lines[1]}
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg md:text-xl md:leading-8 lg:mx-0">
                {t.hero.description}
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15"
                >
                  {t.hero.ctaPortfolio}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15"
                >
                  {t.hero.ctaContact}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
              <a
                href="#about"
                className="mt-10 inline-flex items-center justify-center gap-2 text-sm text-white/50 transition hover:text-white/80 lg:justify-start"
              >
                {t.hero.discover}
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
            <div className="hidden lg:flex min-h-[calc(100vh-73px)] items-center justify-end">
              <div className="relative w-full max-w-[28rem] overflow-hidden rounded-2xl border border-white/12 bg-slate-950/45 shadow-xl shadow-black/25 backdrop-blur-md">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />
                <div className="hero-code-scan pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-blue-300/10 to-transparent" />
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Close preview"
                      className="group/control relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-300/75 ring-1 ring-red-200/20 transition duration-200 hover:bg-red-300 hover:shadow-[0_0_16px_rgba(252,165,165,0.22)]"
                    >
                      <X className="h-2.5 w-2.5 scale-75 text-slate-950 opacity-0 transition duration-200 group-hover/control:scale-100 group-hover/control:opacity-90" />
                    </button>
                    <button
                      type="button"
                      aria-label="Focus preview"
                      className="group/control relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-yellow-200/75 ring-1 ring-yellow-100/20 transition duration-200 hover:bg-yellow-200 hover:shadow-[0_0_16px_rgba(254,240,138,0.18)]"
                    >
                      <Minus className="h-2.5 w-2.5 scale-75 text-slate-950 opacity-0 transition duration-200 group-hover/control:scale-100 group-hover/control:opacity-90" />
                    </button>
                    <button
                      type="button"
                      aria-label="Fullscreen preview"
                      className="group/control relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-300/75 ring-1 ring-emerald-100/20 transition duration-200 hover:bg-emerald-300 hover:shadow-[0_0_16px_rgba(110,231,183,0.22)]"
                    >
                      <Maximize2 className="h-2.5 w-2.5 scale-75 text-slate-950 opacity-0 transition duration-200 group-hover/control:scale-100 group-hover/control:opacity-90" />
                    </button>
                  </div>
                  <span className="text-xs font-medium text-blue-100/55">matti.profile.js</span>
                </div>
                <pre className="overflow-hidden px-5 py-5 text-left font-mono text-[0.82rem] leading-6 text-white/80">
                  <code>
                    <div className="hero-code-line"><span className="text-blue-200">const</span> matti = {"{"}</div>
                    <div className="hero-code-line pl-5"><span className="text-white/45">role:</span> <span className="text-[#f2f1ef]">"Application Developer"</span>,</div>
                    <div className="hero-code-line pl-5"><span className="text-white/45">focus:</span> <span className="text-[#f2f1ef]">"Web Solutions"</span>,</div>
                    <div className="hero-code-line pl-5"><span className="text-white/45">quality:</span> <span className="text-[#f2f1ef]">"Clean & reliable"</span>,</div>
                    <div className="hero-code-line pl-5"><span className="text-white/45">mindset:</span> [</div>
                    <div className="hero-code-line pl-10"><span className="text-blue-100">"focused"</span>, <span className="text-blue-100">"curious"</span>,</div>
                    <div className="hero-code-line pl-10"><span className="text-blue-100">"team strong"</span></div>
                    <div className="hero-code-line pl-5">]</div>
                    <div className="hero-code-line">{"};"}<span className="hero-code-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-blue-200/80" /></div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8"
        >
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t.about.tag}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t.about.title}
            </h2>
          </div>

          <div className="grid gap-10 items-start grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr]">
            {/* Linke Spalte: Hobbys und Sprachen */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-6 text-4xl md:text-sm font-bold md:font-semibold uppercase tracking-[0.12em] text-[#e5e4e2] md:text-blue-200/70 font-serif md:font-sans">{t.about.languagesTitle}</h3>
                <div className="space-y-3">
                  {localizedLanguageLevels.map((lang) => (
                    <div key={lang.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm font-medium text-white/90">{lang.name}</span>
                        </div>
                        <span className="text-xs text-white/50">{lang.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                        <div
                          style={{ width: `${lang.level}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-[#e5e4e2] via-[#d8d8d6] to-[#f2f1ef]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-4xl md:text-sm font-bold md:font-semibold uppercase tracking-[0.12em] text-[#e5e4e2] md:text-blue-200/70 font-serif md:font-sans">{t.about.hobbiesTitle}</h3>
                <div className="grid grid-cols-2 gap-4 md:gap-3 pt-2">
                  {localizedHobbies.map((hobby, idx) => {
                    const Icon = hobby.icon;
                    const borderClasses = [
                      "bg-green-400/[0.08] hover:bg-green-400/[0.14]",
                      "bg-blue-400/[0.07] hover:bg-blue-400/[0.12]",
                      "bg-white/8 hover:bg-white/12",
                      "bg-cyan-400/[0.07] hover:bg-cyan-400/[0.12]"
                    ];
                    const iconClasses = [
                      "text-green-300 group-hover:text-green-100",
                      "text-cyan-300 group-hover:text-cyan-100",
                      "text-white/70 group-hover:text-white",
                      "text-sky-300 group-hover:text-sky-100"
                    ];
                    
                    return (
                      <div
                        key={hobby.name}
                        className={`group flex flex-col items-center justify-center text-center rounded-xl p-4 transition duration-300 ${borderClasses[idx]}`}
                      >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition">
                          <Icon className={`h-6 w-6 transition ${iconClasses[idx]}`} />
                        </div>
                        <p className="text-xs font-semibold text-white/90">{hobby.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-4xl md:text-base font-bold md:font-semibold text-[#e5e4e2] md:text-white font-serif md:font-sans hidden">{t.about.shortProfileTitle}</h3>
                <p className="text-sm leading-6 text-white/72 hidden">
                  {t.about.shortProfileBefore} <span className="font-semibold text-white">{t.about.shortProfileHighlight}</span> {t.about.shortProfileAfter}
                </p>
              </div>
            </div>

            {/* Mitte: Grosses Bild */}
            <div
              className="relative order-first group flex justify-center lg:order-none"
            >
              <div className="relative w-full max-w-[17rem] sm:max-w-xs lg:max-w-sm">
                <img
                  src={profileImage}
                  alt="Matti Koenis portrait"
                  className="w-full drop-shadow-2xl select-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Rechte Spalte: Highlights */}
            <div className="space-y-4">
              {localizedHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group border-t border-white/[0.12] py-5 transition hover:border-blue-200/35"
                  >
                    <div className="mb-3 inline-flex text-blue-100/80 transition group-hover:text-blue-100">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-3xl md:text-base font-bold md:font-semibold leading-tight break-words text-[#e5e4e2] md:text-white font-serif md:font-sans">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/72">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8 border-t border-[#e5e4e2]/30"
        >
          <div className="mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t.skills.tag}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                {t.skills.title}
              </h2>
            </div>
              
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="border-t border-[#e5e4e2]/25 pt-8">
              <div className="mb-8 flex items-end justify-between gap-6">
                <h3 className="text-4xl md:text-xl font-bold md:font-semibold text-[#e5e4e2] md:text-white font-serif md:font-sans">{t.skills.techTitle}</h3>
                <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-white/35 md:inline">
                  {t.skills.stackLabel}
                </span>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {techSkillColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-8">
                    {column.map((group) => (
                      <div key={group.category}>
                        <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/70">{group.label}</p>
                        </div>
                        <div className="space-y-4">
                          {group.items.map((skill) => (
                            <div key={skill.name}>
                              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                                <div className="flex min-w-0 items-center gap-3">
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.035] p-1">
                                    <img
                                      src={skill.logo}
                                      alt={`${skill.name} Logo`}
                                      className="h-4 w-4 object-contain"
                                      style={{ filter: "grayscale(1) brightness(0) invert(1)" }}
                                      loading="lazy"
                                    />
                                  </span>
                                  <span className="truncate font-medium text-white/90">{skill.name}</span>
                                </div>
                              </div>
                              <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                                <div
                              style={{ width: `${skill.value}%` }}
                              className="h-full rounded-full bg-gradient-to-r from-[#e5e4e2] via-[#d8d8d6] to-[#f2f1ef]"
                            />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#e5e4e2]/25 pt-8">
              <div className="mb-8 flex items-end justify-between gap-6">
                <h3 className="text-4xl md:text-xl font-bold md:font-semibold text-[#e5e4e2] md:text-white font-serif md:font-sans">{t.skills.socialTitle}</h3>
                <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-white/35 md:inline">
                  {t.skills.styleLabel}
                </span>
              </div>
              <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
                {localizedSocialSkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex gap-4 border-b border-white/10 py-5 transition hover:border-blue-200/35"
                    >
                      <div className="mt-0.5 text-blue-100/75 transition group-hover:text-blue-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1.5">{skill.name}</h4>
                        <p className="text-sm leading-6 text-white/70">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={sliderRef}
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 border-t border-[#e5e4e2]/30"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">
              {t.experience.tag}
            </p>
            <h2 className="mt-4 text-4xl md:text-3xl font-bold md:font-semibold tracking-tight md:text-5xl text-[#e5e4e2] md:text-white font-serif md:font-sans">
              {t.experience.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              {t.experience.overview}
            </p>
          </div>

          {/* Vertikale Timeline: Pfeil folgt dem Scroll, Projekte wechseln links/rechts */}
          <div ref={timelineRef} className="relative mt-16 sm:mt-20">
            {/* Mittellinie (mobil links, ab md zentriert) */}
            <div className="absolute inset-y-0 left-6 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              style={{ scaleY: timelineProgress }}
              className="absolute inset-y-0 left-6 w-[2px] origin-top bg-white shadow-[0_0_10px_1px_rgba(255,255,255,0.55)] md:left-1/2 md:-translate-x-1/2"
            />

            {/* Klarer leuchtender Punkt als Ende des weissen Strichs */}
            <motion.div
              style={{ top: markerTop }}
              aria-hidden="true"
              className="pointer-events-none absolute left-6 z-30 -translate-x-1/2 -translate-y-1/2 md:left-1/2"
            >
              <span className="relative flex items-center justify-center">
                <span className="absolute h-5 w-5 rounded-full bg-white/40 blur-md" />
                <span className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.85)]" />
              </span>
            </motion.div>

            {/* Projekt-Reihen – abwechselnd links / rechts */}
            <div className="flex flex-col gap-14 sm:gap-16 md:gap-24">
              {localizedExperiences.map((exp, index) => {
                const onLeft = index % 2 === 0;
                return (
                  <div
                    key={exp.title}
                    className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-16"
                  >
                    {/* Knoten auf der Linie */}
                    <span className="absolute left-6 top-9 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#e5e4e2]/50 bg-slate-950 md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className={`pl-14 md:pl-0 ${
                        onLeft ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div className={onLeft ? "md:ml-auto md:max-w-xl" : "md:mr-auto md:max-w-xl"}>
                        <ProjectCard exp={exp} index={index} total={totalSlides} />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8 border-t border-[#e5e4e2]/30"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="border-t border-[#e5e4e2]/25 pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">{t.portfolio.tag}</p>
              <h2 className="mt-4 text-4xl md:text-3xl font-bold md:font-semibold tracking-tight md:text-5xl text-[#e5e4e2] md:text-white font-serif md:font-sans">
                {t.portfolio.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/75">
                {t.portfolio.description}
              </p>
            </div>

            <div className="grid gap-0 border-t border-[#e5e4e2]/25">
              <div className="border-b border-white/10 py-8">
                <h3 className="text-4xl md:text-xl font-bold md:font-semibold text-[#e5e4e2] md:text-white font-serif md:font-sans">{t.portfolio.bringTitle}</h3>
                <p className="mt-3 leading-7 text-white/75">
                  {t.portfolio.bringText}
                </p>
              </div>

              <div className="border-b border-white/10 py-8">
                <h3 className="text-4xl md:text-xl font-bold md:font-semibold text-[#e5e4e2] md:text-white font-serif md:font-sans">{t.portfolio.standTitle}</h3>
                <p className="mt-3 leading-7 text-white/75">
                  {t.portfolio.standText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 md:pb-32 md:pt-32 lg:px-8 border-t border-[#e5e4e2]/30"
        >
          <div>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70">{t.contact.tag}</p>
                <h2 className="mt-4 text-4xl md:text-3xl font-bold md:font-semibold tracking-tight md:text-5xl text-[#e5e4e2] md:text-white font-serif md:font-sans">
                  {t.contact.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  {t.contact.description}
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href="mailto:matti@koenis.ch"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-blue-200/35 hover:bg-blue-400/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-blue-100/75 transition group-hover:text-blue-100">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{t.contact.emailLabel}</p>
                      <p className="font-medium text-white/90">matti@koenis.ch</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://github.com/matti24"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-blue-200/35 hover:bg-blue-400/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-blue-100/75 transition group-hover:text-blue-100">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{t.contact.githubLabel}</p>
                      <p className="font-medium text-white/90">github.com/matti24</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="https://www.linkedin.com/in/matti-koenis-4b6462334/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-blue-200/35 hover:bg-blue-400/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-blue-100/75 transition group-hover:text-blue-100">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{t.contact.linkedinLabel}</p>
                      <p className="font-medium text-white/90">{t.contact.linkedinValue}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-transparent px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div
          >
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200/70 mb-6">{t.footer.tag}</p>
            <h2 className="text-4xl md:text-6xl font-bold md:font-semibold leading-tight mb-8 text-[#e5e4e2] md:text-white font-serif md:font-sans">
              {t.footer.title}
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              {t.footer.description}
            </p>
            <div className="flex flex-row flex-wrap items-center gap-4 justify-center">
              <LiquidMetalButton
                label={t.chat.buttonLabel}
                icon={<MessageCircle className="h-5 w-5" />}
                onClick={() => setChatOpenSignal((s) => s + 1)}
                ariaLabel={t.chat.buttonLabel}
                speed={0.5}
                angle={20}
                offsetX={0.15}
                offsetY={-0.05}
                frame={0}
              />
              <LiquidMetalButton
                href="https://www.linkedin.com/in/matti-koenis-4b6462334/"
                target="_blank"
                rel="noreferrer"
                label={t.footer.linkedinButton}
                icon={<Linkedin className="h-5 w-5" />}
                speed={0.85}
                angle={200}
                offsetX={-0.3}
                offsetY={0.25}
                frame={9000}
              />
            </div>
          </div>
        </div>
      </footer>

      {showChatWidget && !menuOpen ? <ChatWidget t={t.chat} language={activeLanguage} openSignal={chatOpenSignal} tucked={tuckChat} /> : null}
      {!menuOpen ? <AssistantWidget t={t} language={activeLanguage} skills={informatikSkills} tucked={tuckChat} /> : null}
    </div>
  );
}
