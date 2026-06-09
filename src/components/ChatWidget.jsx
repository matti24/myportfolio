import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageCircle, Send, X } from "lucide-react";

const ChatWidget = ({ t, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [origin, setOrigin] = useState("");
  const [intent, setIntent] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const REPSEND_CHANNEL_ID = "YOUR_CHANNEL_ID"; // Ersetze mit deiner Repsend Channel ID
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_icdpyyy";
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lhkxuip";
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "wwOYxb6uc1pR2r4j1";

  const safeTranslations = useMemo(
    () =>
      t || {
        name: "Matti Koenis",
        status: "Online",
        buttonLabel: "Chat mit mir",
        intro: "Hey! 👋 Woher kennst du mich?",
        followUp: "Schön, dass du dich meldest! Worum geht es bei deiner Anfrage?",
        askName: "Damit ich dir persönlich antworten kann, wie heisst du?",
        askEmail: "Danke, {name}. An welche E-Mail-Adresse darf ich meine Antwort senden?",
        thanks: "Danke! Deine Angaben werden jetzt als E-Mail-Anfrage an mich gesendet.",
        sending: "Ich sende deine Anfrage…",
        sendSuccess: "Danke! Deine Anfrage wurde per E-Mail an mich gesendet.",
        sendError: "Ups, das hat nicht geklappt. Bitte versuche es erneut.",
        invalidEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
        placeholderName: "Max Muster",
        placeholderEmail: "max@test.muster",
        quickRepliesIntro: [
          "Teams / Swisscom intern",
          "Wir haben uns getroffen",
          "Via LinkedIn",
          "Diese Website gefunden",
          "Über eine Empfehlung",
        ],
        quickRepliesIntent: [
          "Ich habe eine Frage",
          "Projekt- / Zusammenarbeitsanfrage",
          "Feedback zu deiner Arbeit",
          "Einfach mal Netzwerken",
          "Anderes",
        ],
      },
    [t]
  );

  const [messages, setMessages] = useState([
    { id: "intro", from: "bot", text: safeTranslations.intro },
  ]);

  useEffect(() => {
    // Repsend Chat Widget Script laden
    const script = document.createElement("script");
    script.src = "https://chat.repsend.com/chat.js";
    script.async = true;
    
    script.onload = () => {
      // Repsend Widget initialisieren mit deiner Channel ID
      if (window.Repsend && REPSEND_CHANNEL_ID !== "YOUR_CHANNEL_ID") {
        window.Repsend.init({
          channelId: REPSEND_CHANNEL_ID,
          position: "bottom-right",
        });
      } else {
        // Fallback zeigen wenn keine Channel ID gesetzt ist
        setShowFallback(true);
      }
    };

    script.onerror = () => {
      // Fallback zeigen wenn Script nicht lädt
      setShowFallback(true);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const addMessage = (from, text) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, from, text },
    ]);
  };

  const handleQuickReply = (text) => {
    addMessage("user", text);

    if (step === 0) {
      setOrigin(text);
      addMessage("bot", safeTranslations.followUp);
      setStep(1);
      return;
    }

    if (step === 1) {
      setIntent(text);
      addMessage("bot", safeTranslations.askName);
      setStep(2);
    }
  };

  const sendContact = async (payload) => {
    setIsSending(true);
    addMessage("bot", safeTranslations.sending);

    try {
      if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
        throw new Error("EmailJS config missing");
      }

      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        payload,
        emailjsPublicKey
      );

      addMessage("bot", safeTranslations.sendSuccess);
      setStep(4);
    } catch (error) {
      console.error("EmailJS request failed:", error);
      addMessage("bot", safeTranslations.sendError);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (!value) {
      return;
    }

    addMessage("user", value);
    setInputValue("");

    if (step === 2) {
      setVisitorName(value);
      addMessage("bot", safeTranslations.askEmail.replace("{name}", value));
      setStep(3);
      return;
    }

    if (step === 3) {
      const emailValue = value;
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

      if (!isValidEmail) {
        addMessage("bot", safeTranslations.invalidEmail);
        return;
      }

      setVisitorEmail(emailValue);
      addMessage("bot", safeTranslations.thanks);

      void sendContact({
        name: visitorName || "",
        email: emailValue,
        origin,
        intent,
        language: language || "de",
      });
    }
  };

  const quickReplies =
    step === 0
      ? safeTranslations.quickRepliesIntro
      : step === 1
        ? safeTranslations.quickRepliesIntent
        : [];

  const inputPlaceholder =
    step === 2
      ? safeTranslations.placeholderName
      : step === 3
        ? safeTranslations.placeholderEmail
        : "";
  const inputDisabled = isSending || step < 2 || step > 3;

  useEffect(() => {
    setStep(0);
    setInputValue("");
    setOrigin("");
    setIntent("");
    setVisitorName("");
    setVisitorEmail("");
    setMessages([{ id: "intro", from: "bot", text: safeTranslations.intro }]);
  }, [safeTranslations]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, quickReplies, isOpen]);

  // Fallback Chat Widget
  if (showFallback) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/40 bg-slate-950/85 px-5 py-3 text-white shadow-2xl shadow-blue-950/45 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/70 hover:bg-blue-500/15 hover:shadow-blue-500/25"
          >
            <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/70 to-transparent" />
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-400/15 text-blue-100 ring-1 ring-blue-200/25 transition group-hover:bg-blue-400/25">
              <MessageCircle className="h-[18px] w-[18px]" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#f2f1ef]">{safeTranslations.buttonLabel}</span>
          </button>
        ) : (
          <div className="flex h-[32rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/92 text-white shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-blue-500/20 via-slate-900/95 to-blue-400/10 p-4">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/60 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/25 bg-blue-400/15 text-blue-100 shadow-lg shadow-blue-500/10">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#f2f1ef]">{safeTranslations.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.9)]" />
                    {safeTranslations.status}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/75 transition hover:border-blue-200/35 hover:bg-blue-400/10 hover:text-white"
                aria-label="Chat schliessen"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)] p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.from === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={`max-w-[16rem] rounded-2xl px-3.5 py-3 text-sm leading-5 shadow-lg ${
                      message.from === "user"
                        ? "rounded-br-md border border-blue-300/35 bg-blue-500/20 text-blue-50 shadow-blue-950/25"
                        : "rounded-bl-md border border-white/10 bg-white/[0.07] text-white/85 shadow-slate-950/30"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              {quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-100 transition hover:border-blue-200/70 hover:bg-blue-400/20 hover:text-white"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 bg-slate-950/95 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder={inputPlaceholder}
                  disabled={inputDisabled}
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-200/50 focus:bg-white/8 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={inputDisabled}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-300/35 bg-blue-500/20 text-blue-50 transition hover:border-blue-200/70 hover:bg-blue-500/30 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <Send className="h-[18px] w-[18px]" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ChatWidget;
