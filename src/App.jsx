import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";
import { PrivacyPage } from "./pages/PrivacyPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { ConceptsShowcase } from "./pages/ConceptsShowcase.jsx";

export default function App({ route, t }) {
  if (route.page === "concept") {
    return <ConceptsShowcase initialDirection={route.slug || "1"} />;
  }

  let page;
  if (route.page === "project") page = <ProjectPage t={t} lang={route.lang} slug={route.slug} />;
  else if (route.page === "privacy") page = <PrivacyPage t={t} lang={route.lang} />;
  else if (route.page === "notFound") page = <NotFoundPage t={t} />;
  else page = <HomePage t={t} lang={route.lang} />;

  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-platinum px-5 py-3 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.nav.skip}
      </a>
      <Header t={t} route={route} />
      <main id="main" tabIndex={-1} className="outline-none">
        {page}
      </main>
      <Footer t={t} route={route} />
    </div>
  );
}
