import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LIMITS, cooldownRemaining, sendContactMessage } from "../lib/emailjs.js";
import { CONTACT } from "../content/projects.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Menschen brauchen länger als drei Sekunden, um das Formular auszufüllen; schnellere Absendungen sind fast immer Bots
const MIN_FILL_MS = 3000;

export function ContactForm({ t, lang, privacyHref }) {
  const formId = useId();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const shownAt = useRef(0);

  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const validate = (data) => {
    const next = {};
    if (!data.name) next.name = t.required;
    if (!data.email) next.email = t.required;
    else if (!EMAIL_RE.test(data.email)) next.email = t.invalidEmail;
    if (!data.message) next.message = t.required;
    return next;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };
    const nextErrors = validate(data);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }
    // Honeypot oder zu schnelle Absendung: still als erfolgreich anzeigen, aber nichts senden
    if (form.get("website") || Date.now() - shownAt.current < MIN_FILL_MS) {
      setStatus("success");
      return;
    }
    if (cooldownRemaining() > 0) {
      setStatus("cooldown");
      return;
    }
    setStatus("sending");
    try {
      await sendContactMessage({ ...data, language: lang });
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const field = (name) => ({
    id: `${formId}-${name}`,
    name,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${formId}-${name}-error` : undefined,
    onChange: () => errors[name] && setErrors((e) => ({ ...e, [name]: undefined })),
  });

  const error = (name) =>
    errors[name] ? (
      <p id={`${formId}-${name}-error`} className="t-s mt-2 text-[#b42318]">
        {errors[name]}
      </p>
    ) : null;

  const liveRegion = (
    <div role="status" aria-live="polite" className="empty:hidden">
      {status === "success" ? (
        <p className="t-l max-w-[26ch] border-t border-ink pt-6">{t.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="border-t border-[#b42318] pt-4">
          {t.error}{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-medium text-blue underline underline-offset-4">
            {CONTACT.email}
          </a>
        </p>
      ) : null}
      {status === "cooldown" ? (
        <p className="border-t border-ink pt-4">
          {t.cooldown}{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-medium text-blue underline underline-offset-4">
            {CONTACT.email}
          </a>
        </p>
      ) : null}
    </div>
  );

  return (
    <div>
      {status === "success" ? null : (
        <form ref={formRef} onSubmit={onSubmit} noValidate className="relative grid gap-8" aria-labelledby={`${formId}-title`}>
          <h3 id={`${formId}-title`} className="font-medium">
            {t.formTitle}
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor={`${formId}-name`} className="t-s block text-grey">
                {t.name}
              </label>
              <input {...field("name")} type="text" autoComplete="name" className="field" maxLength={LIMITS.name} />
              {error("name")}
            </div>
            <div>
              <label htmlFor={`${formId}-email`} className="t-s block text-grey">
                {t.email}
              </label>
              <input {...field("email")} type="email" autoComplete="email" inputMode="email" className="field" maxLength={LIMITS.email} />
              {error("email")}
            </div>
          </div>
          <div>
            <label htmlFor={`${formId}-message`} className="t-s block text-grey">
              {t.message}
            </label>
            <textarea {...field("message")} rows={4} placeholder={t.messagePlaceholder} className="field resize-y" maxLength={LIMITS.message} />
            {error("message")}
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor={`${formId}-website`}>Website</label>
            <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="t-s max-w-[40ch] text-grey">
              {t.privacyNote}{" "}
              <a href={privacyHref} className="text-ink underline underline-offset-4 hover:text-blue">
                {t.privacyLink}
              </a>
            </p>
            <button type="submit" className="group btn shrink-0" disabled={status === "sending"} aria-disabled={status === "sending"}>
              {status === "sending" ? t.sending : t.submit}
              <ArrowRight aria-hidden="true" className="arrow h-4 w-4" />
            </button>
          </div>
        </form>
      )}
      <div className={status === "success" ? "" : "mt-5"}>{liveRegion}</div>
    </div>
  );
}

