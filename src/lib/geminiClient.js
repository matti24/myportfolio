// Minimaler Client für die Google Gemini API (generativelanguage REST).
// Läuft direkt im Browser. Der API-Key kommt aus der Vite-Umgebungsvariable
// VITE_GEMINI_API_KEY. WICHTIG: Den Key in der Google Cloud Console auf die
// eigene Domain (HTTP-Referrer) beschränken, da er im Browser sichtbar ist.

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
const ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";

export const isGeminiConfigured = () => Boolean(API_KEY);

// history: Array aus { from: "user" | "bot", text }
// Gibt den Antworttext zurück oder wirft einen Fehler.
export async function askGemini({ systemPrompt, history, question, signal }) {
  if (!API_KEY) {
    throw new Error("Gemini API key missing");
  }

  // Verlauf in das Gemini-Format überführen (Rollen: user / model).
  const contents = history
    .filter((m) => m.id !== "intro" && typeof m.text === "string")
    .map((m) => ({
      role: m.from === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

  contents.push({ role: "user", parts: [{ text: question }] });

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents,
    generationConfig: {
      temperature: 0.4,
      topP: 0.9,
      maxOutputTokens: 600,
    },
    safetySettings: [],
  };

  const url = `${ENDPOINT}/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(
    API_KEY
  )}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });

  if (!response.ok) {
    let detail = "";
    try {
      const err = await response.json();
      detail = err?.error?.message || "";
    } catch {
      // ignorieren
    }
    throw new Error(`Gemini request failed (${response.status}) ${detail}`.trim());
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts
    ?.map((p) => p.text)
    .filter(Boolean)
    .join("")
    .trim();

  if (!text) {
    throw new Error("Gemini returned an empty response");
  }

  return text;
}
