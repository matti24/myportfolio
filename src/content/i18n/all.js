import de from "./de.js";
import en from "./en.js";
import nl from "./nl.js";
import sv from "./sv.js";

// Nur serverseitig (Prerendering) – der Client lädt per loadDictionary() nur die benötigte Sprache.
export const dictionaries = { de, en, nl, sv };

export const getDictionary = (lang) => dictionaries[lang] || en;