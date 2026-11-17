// Text, dessen Zeichen beim Hover einzeln nach oben wegrollen und von unten neu erscheinen.
// Der echte Text steht für Screenreader und Kopieren im sr-only-Span.
export function RollText({ text }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="roll">
        {[...text].map((ch, i) => {
          // Leerzeichen bleiben in den Flex-Spalten sonst ohne Breite
          const c = ch === " " ? "\u00a0" : ch;
          return (
            <span key={i} className="roll-c" style={{ "--i": i }}>
              <span>{c}</span>
              <span>{c}</span>
            </span>
          );
        })}
      </span>
    </>
  );
}
