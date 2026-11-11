// Gemeinsames Raster jedes Abschnitts: Titel in der linken Spalte (mitlaufend), Inhalt rechts.
export function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="wrap">
      <div className="grid gap-y-10 border-t border-rule pt-8 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-3">
          <h2 id={`${id}-title`} className="rail lg:sticky lg:top-24">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-9 lg:pt-16">{children}</div>
      </div>
    </section>
  );
}

export function Intro({ heading, lead }) {
  return (
    <>
      <p className="t-xl reveal max-w-[17ch]">{heading}</p>
      {lead ? <p className="t-l reveal mt-6 max-w-[34ch] text-grey">{lead}</p> : null}
    </>
  );
}
