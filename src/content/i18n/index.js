export const LANG_NAMES = { de: "Deutsch", en: "English", nl: "Nederlands", sv: "Svenska" };

const loaders = {
  de: () => import("./de.js"),
  en: () => import("./en.js"),
  nl: () => import("./nl.js"),
  sv: () => import("./sv.js"),
};

export async function loadDictionary(lang) {
  const mod = await (loaders[lang] || loaders.en)();
  return mod.default;
}