// Minimal translations dictionary.
// Note: This re-enables the language switch (DE/EN/NL/SV). You can expand keys anytime.

export const SUPPORTED_LOCALES = ["de", "en", "nl", "sv"];
export const DEFAULT_LOCALE = "de";

/**
 * Translation shape:
 * {
 *   de: { common: { language: "Sprache" } },
 *   en: { common: { language: "Language" } },
 * }
 */
export const translations = {
	de: {
		about: {
			kicker: "Über mich",
			title: "Professionell, fokussiert und offen für Neues.",
			languagesTitle: "Sprachen",
			hobbiesTitle: "Interessen & Hobbys",
			profileTitle: "Kurzprofil",
			profileText:
				"Ich bin derzeit in der Ausbildung zum Applikationsentwickler bei Swisscom. Meine Stärken liegen in konzentrierter, selbständiger und teamstarker Arbeit.",
		},
		hero: {
			badge: "Applikationsentwickler in Ausbildung bei Swisscom",
			ctaPortfolio: "Portfolio ansehen",
			ctaContact: "Kontakt aufnehmen",
			lead:
				"Ich baue moderne, performante Applikationen (Power Platform / Web) und arbeite gerne in Teams, die Verantwortung, klare Kommunikation und sauberen Code leben.",
			lines: {
				team: "Starke Teamarbeit.",
				solutions: "Klare Lösungen.",
			},
			tiles: {
				focus: "Fokus",
				focusValue: "Applikationen",
				style: "Arbeitsstil",
				styleValue: "Selbständig & teamstark",
				interests: "Interessen",
				interestsValue: "Finance & Strategy",
			},
		},
		skills: {
			kicker: "Skills",
			title: "Meine Stärken in Prozent.",
			lead:
				"Eine Mischung aus sozialer Stärke, Teamfähigkeit und technischem Verständnis bildet meine Basis für gute Zusammenarbeit und saubere Entwicklung.",
		},
		experience: {
			kicker: "Erfahrung",
			title: "Mein Weg als Applikationsentwickler in Ausbildung.",
		},
		portfolio: {
			kicker: "Portfolio",
			title: "Bereit für den nächsten Schritt",
			titleMuted: "nach der Lehre.",
			lead: "Professionell im Auftreten, fokussiert in der Umsetzung und offen für Neues.",
			leadMuted:
				"Ich suche ein Umfeld, in dem ich mich weiterentwickeln und aktiv mitgestalten kann.",
			ctaGithub: "GitHub ansehen",
			cards: {
				bring: {
					title: "Was ich mitbringe",
					text:
						"Saubere Arbeitsweise, Konzentration, Selbständigkeit und Teamgeist — plus echtes Interesse daran, laufend besser zu werden.",
				},
				standFor: {
					title: "Wofür ich stehe",
					text:
						"Klare Kommunikation, Verlässlichkeit und moderne Applikationen mit einem sauberen Auftritt.",
				},
				social: {
					title: "Aussergewöhnliche soziale Stärke",
					text:
						"Ich kann sehr gut mit Menschen: zuhören, Vertrauen aufbauen und Situationen ruhig lösen — im Team, mit Stakeholdern oder im Support.",
				},
			},
		},
		footer: {
			kicker: "Kontakt",
			title: "Lass uns zusammenarbeiten",
			lead:
				"Hast du ein spannendes Projekt oder möchtest dich austauschen? Kontaktiere mich gerne – ich freue mich auf den Austausch!",
			ctaEmail: "E-Mail schreiben",
			ctaLinkedIn: "LinkedIn",
			credit: "Matti Koenis · Applikationsentwickler in Ausbildung",
		},
		contact: {
			kicker: "Kontakt",
			title: "Lass uns vernetzen.",
			lead:
				"Für Austausch, Chancen nach der Lehre oder einen ersten Kontakt bin ich direkt erreichbar.",
			email: "E-Mail",
		},
		data: {
			skills: {
				social: "Soziale Stärke",
				team: "Teamarbeit",
				powerPlatform: "Power Platform",
				independent: "Selbständiges Arbeiten",
				scrum: "Scrum",
				javascript: "JavaScript",
				css: "CSS",
				typescript: "TypeScript",
				sql: "SQL",
				java: "Java",
			},
			highlights: {
				devTitle: "Applikationsentwickler in Ausbildung",
				devText:
					"Ich entwickle mich bei Swisscom laufend weiter und arbeite an sauberen, modernen und praxisnahen Lösungen.",
				langTitle: "Sprachen",
				langText:
					"Deutsch, Holländisch und Schwedisch sowie Schulkenntnisse in Englisch über 9 Jahre.",
				mindsetTitle: "Mindset",
				mindsetText:
					"Konzentriert, selbständig, teamstark und mit echtem Interesse an Wirtschaft, Computern und neuen Applikationen.",
			},
			hobbies: {
				tennis: "Tennis",
				fitness: "Fitness",
				ski: "Skifahren",
			},
			experiences: {
				powerPlatform: {
					title: "Power Platform Dev Ops",
					period: "Aug 2025 - Aktuell",
					description:
						"Entwicklung und Verwaltung von PowerApps, Power BI und SharePoint Lösungen mit DevOps-Methodiken.",
				},
				codemix: {
					title: "Codemix Programmierprojekt",
					period: "Feb 2025 - Juli 2025",
					description:
						"Strukturierte Einführung in Softwareentwicklung mit Fokus auf Grundlagen und praktische Anwendung.",
				},
				futureWork: {
					title: "Future Work Specialist",
					period: "Aug 2024 - Feb 2025",
					description:
						"Projekt zur Gestaltung zukünftiger Arbeitsmodelle und IT-Support für Floorwalking.",
				},
			},
		},
		nav: {
			about: "Über mich",
			skills: "Skills",
			portfolio: "Portfolio",
			contact: "Kontakt",
		},
		common: {
			language: "Sprache",
			discoverMore: "Mehr entdecken",
			github: "GitHub",
			linkedin: "LinkedIn",
			german: "Deutsch",
			english: "Englisch",
			dutch: "Holländisch",
			swedish: "Schwedisch",
		},
	},
	en: {
		about: {
			kicker: "About me",
			title: "Professional, focused, and open to new things.",
			languagesTitle: "Languages",
			hobbiesTitle: "Interests & hobbies",
			profileTitle: "Quick profile",
			profileText:
				"I’m currently training as an application developer at Swisscom. My strengths are focused, independent work and strong teamwork.",
		},
		hero: {
			badge: "Apprentice application developer at Swisscom",
			ctaPortfolio: "View portfolio",
			ctaContact: "Get in touch",
			lead:
				"I build modern, high-performance applications (Power Platform / web) and enjoy working in teams that value ownership, clear communication, and clean code.",
			lines: {
				team: "Strong teamwork.",
				solutions: "Clear solutions.",
			},
			tiles: {
				focus: "Focus",
				focusValue: "Applications",
				style: "Work style",
				styleValue: "Independent & team-oriented",
				interests: "Interests",
				interestsValue: "Finance & strategy",
			},
		},
		skills: {
			kicker: "Skills",
			title: "My strengths in percentages.",
			lead:
				"A mix of social strengths, teamwork, and technical understanding forms my foundation for great collaboration and clean development.",
		},
		experience: {
			kicker: "Experience",
			title: "My journey as an apprentice application developer.",
		},
		portfolio: {
			kicker: "Portfolio",
			title: "Ready for the next step",
			titleMuted: "after my apprenticeship.",
			lead: "Professional in presence, focused in execution, and open to new things.",
			leadMuted:
				"I’m looking for an environment where I can keep growing and actively contribute.",
			ctaGithub: "View GitHub",
			cards: {
				bring: {
					title: "What I bring",
					text:
						"Clean working habits, focus, independence and team spirit — plus a genuine drive to keep improving.",
				},
				standFor: {
					title: "What I stand for",
					text:
						"Clear communication, reliability, and modern applications with a clean, professional presence.",
				},
				social: {
					title: "Exceptional social strengths",
					text:
						"I work very well with people: listening, building trust, and resolving situations calmly — in teams, with stakeholders, or in support.",
				},
			},
		},
		footer: {
			kicker: "Contact",
			title: "Let’s work together",
			lead:
				"Do you have an exciting project or want to exchange ideas? Feel free to reach out — I’m looking forward to it!",
			ctaEmail: "Send email",
			ctaLinkedIn: "LinkedIn",
			credit: "Matti Koenis · Apprentice application developer",
		},
		contact: {
			kicker: "Contact",
			title: "Let’s connect.",
			lead:
				"For an exchange, opportunities after my apprenticeship, or a first conversation, you can reach me directly.",
			email: "Email",
		},
		data: {
			skills: {
				social: "Social strengths",
				team: "Teamwork",
				powerPlatform: "Power Platform",
				independent: "Independent work",
				scrum: "Scrum",
				javascript: "JavaScript",
				css: "CSS",
				typescript: "TypeScript",
				sql: "SQL",
				java: "Java",
			},
			highlights: {
				devTitle: "Apprentice application developer",
				devText:
					"I keep growing at Swisscom and work on clean, modern, and practical solutions.",
				langTitle: "Languages",
				langText:
					"German, Dutch, and Swedish, plus 9 years of school-level English.",
				mindsetTitle: "Mindset",
				mindsetText:
					"Focused, independent, strong in teams, and genuinely curious about business, computers, and new applications.",
			},
			hobbies: {
				tennis: "Tennis",
				fitness: "Fitness",
				ski: "Skiing",
			},
			experiences: {
				powerPlatform: {
					title: "Power Platform DevOps",
					period: "Aug 2025 - Present",
					description:
						"Building and maintaining PowerApps, Power BI, and SharePoint solutions with DevOps practices.",
				},
				codemix: {
					title: "Codemix programming project",
					period: "Feb 2025 - Jul 2025",
					description:
						"A structured introduction to software development with a focus on fundamentals and hands-on practice.",
				},
				futureWork: {
					title: "Future Work Specialist",
					period: "Aug 2024 - Feb 2025",
					description:
						"Project work on future work models and IT support for floorwalking.",
				},
			},
		},
		nav: {
			about: "About",
			skills: "Skills",
			portfolio: "Portfolio",
			contact: "Contact",
		},
		common: {
			language: "Language",
			discoverMore: "Discover more",
			github: "GitHub",
			linkedin: "LinkedIn",
			german: "German",
			english: "English",
			dutch: "Dutch",
			swedish: "Swedish",
		},
	},
	nl: {
		about: {
			kicker: "Over mij",
			title: "Professioneel, gefocust en open voor nieuwe dingen.",
			languagesTitle: "Talen",
			hobbiesTitle: "Interesses & hobby’s",
			profileTitle: "Kort profiel",
			profileText:
				"Ik volg momenteel de opleiding tot applicatieontwikkelaar bij Swisscom. Mijn sterke punten zijn geconcentreerd, zelfstandig werken en sterke samenwerking.",
		},
		hero: {
			badge: "Leerling applicatieontwikkelaar bij Swisscom",
			ctaPortfolio: "Portfolio bekijken",
			ctaContact: "Neem contact op",
			lead:
				"Ik bouw moderne, performante applicaties (Power Platform / web) en werk graag in teams die ownership, duidelijke communicatie en clean code belangrijk vinden.",
			lines: {
				team: "Sterk teamwork.",
				solutions: "Heldere oplossingen.",
			},
			tiles: {
				focus: "Focus",
				focusValue: "Applicaties",
				style: "Werkstijl",
				styleValue: "Zelfstandig & teamgericht",
				interests: "Interesses",
				interestsValue: "Finance & strategie",
			},
		},
		skills: {
			kicker: "Skills",
			title: "Mijn sterke punten in procenten.",
			lead:
				"Een mix van sociale sterkte, teamwerk en technisch inzicht vormt mijn basis voor goede samenwerking en nette ontwikkeling.",
		},
		experience: {
			kicker: "Ervaring",
			title: "Mijn pad als leerling applicatieontwikkelaar.",
		},
		portfolio: {
			kicker: "Portfolio",
			title: "Klaar voor de volgende stap",
			titleMuted: "na de opleiding.",
			lead: "Professioneel in uitstraling, gefocust in uitvoering en open voor nieuwe dingen.",
			leadMuted:
				"Ik zoek een omgeving waarin ik me kan blijven ontwikkelen en actief kan meebouwen.",
			ctaGithub: "GitHub bekijken",
			cards: {
				bring: {
					title: "Wat ik meebreng",
					text:
						"Netjes werken, concentratie, zelfstandigheid en teamgeest — plus echte motivatie om steeds beter te worden.",
				},
				standFor: {
					title: "Waar ik voor sta",
					text:
						"Duidelijke communicatie, betrouwbaarheid en moderne applicaties met een verzorgde uitstraling.",
				},
				social: {
					title: "Buitengewoon sterke sociale vaardigheden",
					text:
						"Ik kan heel goed met mensen omgaan: luisteren, vertrouwen opbouwen en situaties rustig oplossen — in het team, met stakeholders of in support.",
				},
			},
		},
		footer: {
			kicker: "Contact",
			title: "Laten we samenwerken",
			lead:
				"Heb je een spannend project of wil je graag sparren? Neem gerust contact op — ik kijk uit naar het gesprek!",
			ctaEmail: "E-mail sturen",
			ctaLinkedIn: "LinkedIn",
			credit: "Matti Koenis · Leerling applicatieontwikkelaar",
		},
		contact: {
			kicker: "Contact",
			title: "Laten we verbinden.",
			lead:
				"Voor een gesprek, kansen na de opleiding of een eerste contact kun je me direct bereiken.",
			email: "E-mail",
		},
		data: {
			skills: {
				social: "Sociale sterkte",
				team: "Teamwerk",
				powerPlatform: "Power Platform",
				independent: "Zelfstandig werken",
				scrum: "Scrum",
				javascript: "JavaScript",
				css: "CSS",
				typescript: "TypeScript",
				sql: "SQL",
				java: "Java",
			},
			highlights: {
				devTitle: "Leerling applicatieontwikkelaar",
				devText:
					"Bij Swisscom blijf ik mij ontwikkelen en werk ik aan nette, moderne en praktische oplossingen.",
				langTitle: "Talen",
				langText:
					"Duits, Nederlands en Zweeds, plus 9 jaar school-Engels.",
				mindsetTitle: "Mindset",
				mindsetText:
					"Gefocust, zelfstandig, sterk in teams en oprecht geïnteresseerd in business, computers en nieuwe applicaties.",
			},
			hobbies: {
				tennis: "Tennis",
				fitness: "Fitness",
				ski: "Skiën",
			},
			experiences: {
				powerPlatform: {
					title: "Power Platform DevOps",
					period: "aug 2025 - heden",
					description:
						"Ontwikkeling en beheer van PowerApps-, Power BI- en SharePoint-oplossingen met DevOps-methoden.",
				},
				codemix: {
					title: "Codemix programmeerproject",
					period: "feb 2025 - jul 2025",
					description:
						"Gestructureerde introductie in softwareontwikkeling met focus op basisprincipes en praktische toepassing.",
				},
				futureWork: {
					title: "Future Work Specialist",
					period: "aug 2024 - feb 2025",
					description:
						"Project rond toekomstige werkmodellen en IT-support voor floorwalking.",
				},
			},
		},
		nav: {
			about: "Over mij",
			skills: "Skills",
			portfolio: "Portfolio",
			contact: "Contact",
		},
		common: {
			language: "Taal",
			discoverMore: "Ontdek meer",
			github: "GitHub",
			linkedin: "LinkedIn",
			german: "Duits",
			english: "Engels",
			dutch: "Nederlands",
			swedish: "Zweeds",
		},
	},
	sv: {
		about: {
			kicker: "Om mig",
			title: "Professionell, fokuserad och öppen för nya saker.",
			languagesTitle: "Språk",
			hobbiesTitle: "Intressen & hobbyer",
			profileTitle: "Kort profil",
			profileText:
				"Jag utbildar mig för närvarande till applikationsutvecklare på Swisscom. Mina styrkor är fokuserat, självständigt arbete och starkt teamarbete.",
		},
		hero: {
			badge: "Applikationsutvecklare under utbildning på Swisscom",
			ctaPortfolio: "Se portfolio",
			ctaContact: "Kontakta mig",
			lead:
				"Jag bygger moderna, högpresterande applikationer (Power Platform / webb) och trivs i team som värdesätter ansvar, tydlig kommunikation och clean code.",
			lines: {
				team: "Starkt teamarbete.",
				solutions: "Tydliga lösningar.",
			},
			tiles: {
				focus: "Fokus",
				focusValue: "Applikationer",
				style: "Arbetsstil",
				styleValue: "Självständig & teamstark",
				interests: "Intressen",
				interestsValue: "Finance & strategi",
			},
		},
		skills: {
			kicker: "Kompetenser",
			title: "Mina styrkor i procent.",
			lead:
				"En mix av social styrka, teamarbete och teknisk förståelse är min grund för bra samarbete och ren utveckling.",
		},
		experience: {
			kicker: "Erfarenhet",
			title: "Min resa som applikationsutvecklare under utbildning.",
		},
		portfolio: {
			kicker: "Portfolio",
			title: "Redo för nästa steg",
			titleMuted: "efter utbildningen.",
			lead: "Professionell i bemötande, fokuserad i genomförandet och öppen för nya saker.",
			leadMuted:
				"Jag söker en miljö där jag kan fortsätta utvecklas och vara med och bidra aktivt.",
			ctaGithub: "Se GitHub",
			cards: {
				bring: {
					title: "Det jag tar med mig",
					text:
						"Strukturerat arbetssätt, fokus, självständighet och laganda — plus ett genuint intresse av att ständigt bli bättre.",
				},
				standFor: {
					title: "Det jag står för",
					text:
						"Tydlig kommunikation, pålitlighet och moderna applikationer med ett professionellt uttryck.",
				},
				social: {
					title: "Exceptionellt stark social förmåga",
					text:
						"Jag är väldigt bra med människor: lyssna, bygga förtroende och lösa situationer lugnt — i teamet, med intressenter eller i support.",
				},
			},
		},
		footer: {
			kicker: "Kontakt",
			title: "Låt oss samarbeta",
			lead:
				"Har du ett spännande projekt eller vill du bolla idéer? Hör gärna av dig — jag ser fram emot att prata!",
			ctaEmail: "Skicka e-post",
			ctaLinkedIn: "LinkedIn",
			credit: "Matti Koenis · Applikationsutvecklare under utbildning",
		},
		contact: {
			kicker: "Kontakt",
			title: "Låt oss connecta.",
			lead:
				"För samtal, möjligheter efter utbildningen eller en första kontakt kan du nå mig direkt.",
			email: "E-post",
		},
		data: {
			skills: {
				social: "Social styrka",
				team: "Teamarbete",
				powerPlatform: "Power Platform",
				independent: "Självständigt arbete",
				scrum: "Scrum",
				javascript: "JavaScript",
				css: "CSS",
				typescript: "TypeScript",
				sql: "SQL",
				java: "Java",
			},
			highlights: {
				devTitle: "Applikationsutvecklare under utbildning",
				devText:
					"Jag utvecklas kontinuerligt på Swisscom och arbetar med rena, moderna och praktiska lösningar.",
				langTitle: "Språk",
				langText:
					"Tyska, nederländska och svenska, samt skolengelska i 9 år.",
				mindsetTitle: "Mindset",
				mindsetText:
					"Fokuserad, självständig, stark i team och genuint intresserad av business, datorer och nya applikationer.",
			},
			hobbies: {
				tennis: "Tennis",
				fitness: "Träning",
				ski: "Skidåkning",
			},
			experiences: {
				powerPlatform: {
					title: "Power Platform DevOps",
					period: "aug 2025 - nu",
					description:
						"Utveckling och förvaltning av PowerApps-, Power BI- och SharePoint-lösningar med DevOps-arbetssätt.",
				},
				codemix: {
					title: "Codemix programmeringsprojekt",
					period: "feb 2025 - jul 2025",
					description:
						"Strukturerad introduktion till mjukvaruutveckling med fokus på grunder och praktisk tillämpning.",
				},
				futureWork: {
					title: "Future Work Specialist",
					period: "aug 2024 - feb 2025",
					description:
						"Projekt kring framtida arbetssätt och IT-support för floorwalking.",
				},
			},
		},
		nav: {
			about: "Om mig",
			skills: "Kompetenser",
			portfolio: "Portfolio",
			contact: "Kontakt",
		},
		common: {
			language: "Språk",
			discoverMore: "Upptäck mer",
			github: "GitHub",
			linkedin: "LinkedIn",
			german: "Tyska",
			english: "Engelska",
			dutch: "Nederländska",
			swedish: "Svenska",
		},
	},
};

