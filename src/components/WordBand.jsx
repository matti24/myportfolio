// Grosse Wortbänder zwischen den Abschnitten. Sie laufen beim Scrollen gegeneinander (reines CSS, scroll-gekoppelt)
// und sind reine Dekoration: dieselben Begriffe stehen lesbar im jeweiligen Abschnitt.
export function WordBand({ rows, highlight = [] }) {
  return (
    <div className="band pb-24 sm:pb-32" aria-hidden="true">
      {rows.map((words, r) => (
        <div key={r} className="band-row wrap" data-dir={r % 2 ? "right" : "left"} data-tone={r % 2 ? "faint" : "ink"}>
          <div className="band-track">
            {[...words, ...words].map((w, i) => (
              <span key={i} className={`band-w ${highlight.includes(w) ? "text-blue" : ""}`}>
                {w}
                <span className="band-sep">/</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
