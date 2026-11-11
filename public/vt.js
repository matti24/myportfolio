// Steuert die Seitenübergänge (View Transitions) zwischen Startseite und Projektseiten.
// Läuft als normales Skript im <head>, damit "pagereveal" vor dem ersten Bild registriert ist.
(function () {
  var PROJECT = /\/(?:projects|projekte|projecten|projekt)\/([^/]+)\/?$/;

  function slugOf(url) {
    try {
      var m = new URL(url).pathname.match(PROJECT);
      return m ? m[1] : null;
    } catch {
      return null;
    }
  }

  window.addEventListener("pagereveal", function (e) {
    if (!e.viewTransition || !window.navigation || !navigation.activation) return;
    var from = navigation.activation.from ? slugOf(navigation.activation.from.url) : null;
    var to = slugOf(location.href);

    // Richtung bestimmt die Animation der ganzen Seite
    e.viewTransition.types.add(to ? "forward" : from ? "back" : "page");

    // Sprungziel (z. B. #projects) sofort anfahren statt weich zu scrollen, damit der Übergang an der richtigen Stelle landet
    if (location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        var root = document.documentElement;
        root.style.scrollBehavior = "auto";
        target.scrollIntoView();
        e.viewTransition.finished.finally(function () {
          root.style.scrollBehavior = "";
        });
      }
    }
    if (!from || to) return;

    // Zurück auf der Startseite: die Vorschau des Projekts, aus dem man kommt, ist das Ziel für Titel und Bild
    document.documentElement.dataset.vtFrom = from;
    var previews = document.querySelectorAll("[data-preview]");
    for (var i = 0; i < previews.length; i++) {
      var on = previews[i].getAttribute("data-preview") === from;
      previews[i].setAttribute("data-on", on ? "true" : "false");
      previews[i].firstElementChild.style.viewTransitionName = on ? "cover-" + from : "";
    }
    // Die Projektzeile mittig ins Bild holen, damit Titel und Bild sichtbar an ihren Platz zurückgleiten
    var row = document.querySelector('[data-row="' + from + '"]');
    if (row) {
      var r = row.getBoundingClientRect();
      if (r.top < 80 || r.bottom > innerHeight) {
        document.documentElement.style.scrollBehavior = "auto";
        scrollBy(0, r.top - innerHeight * 0.35);
        e.viewTransition.finished.finally(function () {
          document.documentElement.style.scrollBehavior = "";
        });
      }
    }
    window.dispatchEvent(new CustomEvent("vt:from", { detail: from }));
  });
})();
