import React, { useEffect, useMemo, useState } from "react";
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
  const REPSEND_CHANNEL_ID = "YOUR_CHANNEL_ID"; // Ersetze mit deiner Repsend Channel ID
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const safeTranslations = useMemo(
    () =>
      t || {
        name: "Matti Koenis",
        status: "Online",
        buttonLabel: "Chat mit mir",
        intro: "Hey! 👋 Woher kennst du mich?",
        followUp: "Schön, dass du dich meldest! Was kann ich für dich tun?",
        askName: "Alles klar! Wie heißt du?",
        askEmail: "Schön, {name}! Und deine E-Mail-Adresse?",
        thanks: "Danke! Ich melde mich so schnell wie möglich.",
        sending: "Ich sende deine Anfrage…",
        sendSuccess: "Danke! Deine Nachricht wurde gesendet.",
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

  // Fallback Chat Widget
  if (showFallback) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-semibold">{safeTranslations.buttonLabel}</span>
          </button>
        ) : (
          <div className="w-80 h-96 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{safeTranslations.name}</h3>
                  <p className="text-xs text-blue-100">{safeTranslations.status}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.from === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      message.from === "user" ? "bg-blue-600" : "bg-slate-800"
                    }`}
                  >
                    <p className="text-sm text-white">{message.text}</p>
                  </div>
                </div>
              ))}

              {quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-100 transition hover:border-blue-300/80 hover:bg-blue-500/20"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 bg-slate-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder={inputPlaceholder}
                  disabled={inputDisabled}
                  className="flex-1 rounded-lg bg-slate-800 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={inputDisabled}
                  className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-5 w-5" />
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
