import { Picture } from "./Picture.jsx";

const COVER_LABELS = {
  de: ["Modelle", "Anbieter", "Quelle pro Fakt", "Datenstand 01.10.2026"],
  en: ["models", "providers", "source per fact", "Data as of 2026-10-01"],
  nl: ["modellen", "aanbieders", "bron per feit", "Stand 01-10-2026"],
  sv: ["modeller", "leverantörer", "källa per uppgift", "Data per 2026-10-01"],
};

function TypographicCover({ lang, alt }) {
  const [models, providers, source, asOf] = COVER_LABELS[lang] || COVER_LABELS.en;
  const stats = [
    ["280+", models],
    ["35", providers],
    ["100%", source],
  ];
  return (
    <div
      role="img"
      aria-label={alt}
      className="@container relative flex h-full w-full flex-col justify-between overflow-hidden bg-ink-2 p-5 sm:p-7"
      style={{
        backgroundImage:
          "linear-gradient(rgb(11 13 18 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(11 13 18 / 0.05) 1px, transparent 1px)",
        backgroundSize: "2rem 2rem",
      }}
    >
      <div className="flex items-center justify-between font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-subtle">
        <span className="inline-flex items-center gap-1.5 text-fg">
          <span className="h-2 w-2 rounded-xs bg-accent" />
          AI Compare
        </span>
        <span>{asOf}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {stats.map(([value, label], i) => (
          <div key={label} className="rounded-xl border border-line bg-white/90 p-3 shadow-2xs">
            <p className={`text-[clamp(1.35rem,7cqi,3rem)] font-semibold leading-none tracking-[-0.04em] ${i === 2 ? "text-accent" : "text-fg"}`}>
              {value}
            </p>
            <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.06em] text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectCover({ project, text, lang, sizes, eager = false, className = "aspect-[16/10]" }) {
  return (
    <div className={`media-frame ${className}`} style={{ viewTransitionName: `cover-${project.slug}` }}>
      {project.cover ? (
        <Picture image={project.cover} alt={text.coverAlt} sizes={sizes} eager={eager} />
      ) : (
        <TypographicCover lang={lang} alt={text.coverAlt} />
      )}
    </div>
  );
}
