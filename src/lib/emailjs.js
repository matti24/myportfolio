const ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

// EmailJS-IDs sind öffentliche Client-Kennungen (kein Geheimnis); Missbrauchsschutz erfolgt über die Domain-Freigabe im EmailJS-Dashboard.
const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_icdpyyy",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lhkxuip",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "wwOYxb6uc1pR2r4j1",
};

export async function sendContactMessage({ name, email, message, language }) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        name,
        email,
        message,
        language,
        // Felder des bestehenden Templates weiterhin befüllen
        origin: "Kontaktformular mattikoenis.ch",
        intent: message,
      },
    }),
  });
  if (!response.ok) {
    throw new Error(`EmailJS ${response.status}`);
  }
}
