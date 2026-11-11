// Gemeinsames Raster jedes Abschnitts: Titel in der linken Spalte (mitlaufend), Inhalt rechts.
// Die obere Linie zeichnet sich beim Hineinscrollen von links nach rechts.
export function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="wrap">
      <div className="sec relative grid gap-y-10 pt-8 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-x-6">
        <span aria-hidden="true" className="sec-rule" />
        <div className="lg:col-span-3">
          <h2 id={`${id}-title`} className="rail sec-title lg:sticky lg:top-24">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-9 lg:pt-16">{children}</div>
      </div>
    </section>
  );
}

// Leitsatz, dessen Wörter sich beim Scrollen nacheinander von Grau zu Schwarz einfärben
export function Intro({ heading, lead }) {
  const words = heading.split(" ");
  return (
    <>
      <p className="t-xl scrub max-w-[17ch]">
        {words.map((w, i) => (
          <span key={i} className="sw" style={{ "--i": i, "--n": words.length }}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
      {lead ? <p className="t-l reveal mt-6 max-w-[34ch] text-grey">{lead}</p> : null}
    </>
  );
}
