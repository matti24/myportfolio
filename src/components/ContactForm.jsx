import { useId, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sendContactMessage } from "../lib/emailjs.js";
import { CONTACT } from "../content/projects.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm({ t, lang, privacyHref }) {
  const formId = useId();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

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
    if (form.get("website")) {
      setStatus("success");
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
      <p id={`${formId}-${name}-error`} className="mt-1.5 text-xs font-medium text-[#d92d20]">
        {errors[name]}
      </p>
    ) : null;

  const liveRegion = (
    <div role="status" aria-live="polite" className="empty:hidden">
      {status === "success" ? (
        <div className="flex items-start gap-3 rounded-xl border border-emerald/30 bg-emerald/8 p-5 text-fg">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
          <p className="text-base font-medium">{t.success}</p>
        </div>
      ) : null}
      {status === "error" ? (
        <p className="rounded-xl border border-[#d92d20]/30 bg-[#d92d20]/5 p-4 text-sm text-fg">
          {t.error}{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-accent underline underline-offset-4">
            {CONTACT.email}
          </a>
        </p>
      ) : null}
    </div>
  );

  return (
    <div>
      {status === "success" ? null : (
        <form ref={formRef} onSubmit={onSubmit} noValidate className="relative grid gap-5" aria-labelledby={`${formId}-title`}>
          <h3 id={`${formId}-title`} className="label text-accent">
            {t.formTitle}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-medium text-fg">
                {t.name}
              </label>
              <input {...field("name")} type="text" autoComplete="name" className="field" maxLength={120} />
              {error("name")}
            </div>
            <div>
              <label htmlFor={`${formId}-email`} className="mb-1.5 block text-sm font-medium text-fg">
                {t.email}
              </label>
              <input {...field("email")} type="email" autoComplete="email" inputMode="email" className="field" maxLength={160} />
              {error("email")}
            </div>
          </div>
          <div>
            <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-medium text-fg">
              {t.message}
            </label>
            <textarea {...field("message")} rows={4} placeholder={t.messagePlaceholder} className="field resize-y" maxLength={4000} />
            {error("message")}
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor={`${formId}-website`}>Website</label>
            <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[38ch] text-xs text-subtle">
              {t.privacyNote}{" "}
              <a href={privacyHref} className="font-medium text-fg underline decoration-line-strong underline-offset-4 hover:text-accent">
                {t.privacyLink}
              </a>
            </p>
            <button type="submit" className="btn btn-accent shrink-0" disabled={status === "sending"} aria-disabled={status === "sending"}>
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
