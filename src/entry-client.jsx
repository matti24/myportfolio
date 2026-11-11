import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { resolveRoute } from "./lib/routes.js";
import { projectSlugs } from "./content/projects.js";
import { loadDictionary } from "./content/i18n/index.js";
import "./index.css";

// Schutz vor Clickjacking: GitHub Pages kann kein frame-ancestors/X-Frame-Options senden.
// Fremde Seiten dürfen diese Seite nicht einbetten; dann wird der Inhalt ausgeblendet.
function isFramedCrossOrigin() {
  if (window.top === window.self) return false;
  try {
    return window.top.location.origin !== window.location.origin;
  } catch {
    return true;
  }
}
if (isFramedCrossOrigin()) {
  document.documentElement.style.display = "none";
  throw new Error("Embedding in a foreign site is not allowed.");
}

const route = resolveRoute(window.location.pathname, projectSlugs);
const t = await loadDictionary(route.lang);
const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App route={route} t={t} />
  </StrictMode>
);

// Nur hydratisieren, wenn das vorgerenderte HTML zur aktuellen Route gehört (z. B. nicht bei einem SPA-Fallback)
if (container.firstElementChild && container.dataset.page === route.page) {
  hydrateRoot(container, app);
} else {
  document.documentElement.lang = route.lang;
  if (!container.firstElementChild) document.title = t.meta.homeTitle;
  container.textContent = "";
  createRoot(container).render(app);
}