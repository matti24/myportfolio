import { Picture } from "./Picture.jsx";

const COVER_LABELS = {
  de: ["Modelle", "Anbieter", "Quelle pro Angabe", "Datenstand 1. Oktober 2026"],
  en: ["models", "providers", "source per fact", "Data as of 1 October 2026"],
  nl: ["modellen", "aanbieders", "bron per feit", "Stand 1 oktober 2026"],
  sv: ["modeller", "leverantörer", "källa per uppgift", "Data per 1 oktober 2026"],
};

// AI Compare hat keine öffentliche Live-Version; statt eines Screenshots eine typografische Fläche mit belegten Eckdaten
function TypographicCover({ lang, alt }) {
  const [models, providers, source, asOf] = COVER_LABELS[lang] || COVER_LABELS.en;
  return (
    <div role="img" aria-label={alt} className="@container flex h-full w-full flex-col justify-between bg-[#f4f4f2] p-5 sm:p-7">
      <p className="t-s text-grey">AI Compare · {asOf}</p>
      <div className="grid grid-cols-3 gap-4">
        {[
          ["280+", models],
          ["35", providers],
          ["1", source],
        ].map(([value, label], i) => (
          <div key={label} className="border-t border-ink pt-2">
            <p className={`text-[clamp(1.75rem,11cqi,4.5rem)] leading-none font-medium tracking-[-0.05em] ${i === 2 ? "text-blue" : ""}`}>
              {value}
            </p>
            <p className="t-s mt-1 text-grey">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectCover({ project, text, lang, sizes, eager = false, className = "aspect-[16/10]" }) {
  return (
    <div className={`overflow-hidden bg-[#f4f4f2] ${className}`} style={{ viewTransitionName: `cover-${project.slug}` }}>
      {project.cover ? (
        <Picture image={project.cover} alt={text.coverAlt} sizes={sizes} eager={eager} className="h-full w-full object-cover" />
      ) : (
        <TypographicCover lang={lang} alt={text.coverAlt} />
      )}
    </div>
  );
}
