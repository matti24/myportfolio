export function SectionHeader({ index, label, title, intro, id }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <p className="label lg:col-span-3 lg:pt-3">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true"> — </span>
        {label}
      </p>
      <div className="lg:col-span-9">
        <h2 id={id} className="h2 reveal max-w-[18ch]">
          {title}
        </h2>
        {intro ? <p className="lead reveal mt-6 max-w-[60ch]">{intro}</p> : null}
      </div>
    </div>
  );
}
