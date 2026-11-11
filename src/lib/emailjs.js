const ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

// EmailJS-IDs sind öffentliche Client-Kennungen (kein Geheimnis). Sie lassen sich nicht verstecken; den eigentlichen
// Schutz vor Missbrauch (feste Empfängeradresse, Rate-Limit, erlaubte Domain) muss das EmailJS-Dashboard leisten.
const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_icdpyyy",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lhkxuip",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "wwOYxb6uc1pR2r4j1",
};

export const LIMITS = { name: 120, email: 160, message: 4000 };
const COOLDOWN_MS = 60_000;
const STORAGE_KEY = "contact:lastSent";

// Steuerzeichen entfernen (Zeilenumbrüche in der Nachricht bleiben erhalten) und Länge begrenzen
const isControl = (ch, multiline) => {
  const code = ch.charCodeAt(0);
  if (multiline && code === 10) return false;
  return code < 32 || code === 127;
};
const clean = (value, max, multiline = false) =>
  Array.from(String(value || ""))
    .filter((ch) => !isControl(ch, multiline))
    .join("")
    .trim()
    .slice(0, max);

export function cooldownRemaining() {
  try {
    const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
    return Math.max(0, last + COOLDOWN_MS - Date.now());
  } catch {
    return 0;
  }
}

export async function sendContactMessage({ name, email, message, language }) {
  if (cooldownRemaining() > 0) throw new Error("cooldown");
  const params = {
    name: clean(name, LIMITS.name),
    email: clean(email, LIMITS.email),
    message: clean(message, LIMITS.message, true),
    language: clean(language, 5),
  };
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    referrerPolicy: "strict-origin",
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        ...params,
        // Felder des bestehenden Templates weiterhin befüllen
        origin: "Kontaktformular mattikoenis.ch",
        intent: params.message,
      },
    }),
  });
  if (!response.ok) {
    throw new Error(`EmailJS ${response.status}`);
  }
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Speicher nicht verfügbar (z. B. privater Modus): Sperre gilt dann nur bis zum Neuladen nicht
  }
}
