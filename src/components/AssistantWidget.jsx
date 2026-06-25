import React, { useEffect, useMemo, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import {
  assistantUi,
  suggestedQuestions,
  buildKnowledgeBase,
  buildSystemPrompt,
  findBestAnswer,
} from "../lib/portfolioKnowledge";
import { askGemini, isGeminiConfigured } from "../lib/geminiClient";
import ColorOrb from "./ui/color-orb";

const AssistantWidget = ({ t, language = "en", skills = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const abortRef = useRef(null);
  const inputRef = useRef(null);

  const ui = assistantUi[language] || assistantUi.en;
  const suggestions = suggestedQuestions[language] || suggestedQuestions.en;
  const useGemini = isGeminiConfigured();

  const { docs, contactText } = useMemo(() => {
    const built = buildKnowledgeBase({ t, language, skills });
    const meta = built.find((d) => d.__contactText);
    return {
      docs: built.filter((d) => d.keywords),
      contactText: meta ? meta.__contactText : "",
    };
  }, [t, language, skills]);

  const systemPrompt = useMemo(
    () => (useGemini ? buildSystemPrompt({ t, language, skills }) : ""),
    [useGemini, t, language, skills]
  );

  const [messages, setMessages] = useState([
    { id: "intro", from: "bot", text: ui.intro },
  ]);

  // Bei Sprachwechsel Konversation zurücksetzen.
  useEffect(() => {
    setMessages([{ id: "intro", from: "bot", text: ui.intro }]);
  }, [ui.intro]);

  // Laufende Anfrage abbrechen, wenn die Komponente unmountet.
  useEffect(() => () => abortRef.current?.abort(), []);

  // Eingabefeld fokussiert halten: beim Öffnen und sobald die Antwort da ist.
  useEffect(() => {
    if (isOpen && !isTyping) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 0);
      return () => window.clearTimeout(id);
    }
  }, [isOpen, isTyping]);

  const showPanel = isOpen || isClosing;

  const addMessage = (from, text) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, from, text },
    ]);
  };

  // Lokaler Keyword-Fallback.
  const localAnswer = (question) => {
    const match = findBestAnswer(question, docs);
    return match ? match.answer : `${ui.noAnswer}\n${contactText}`;
  };

  const answerQuestion = async (question) => {
    const trimmed = question.trim();
    if (!trimmed || isTyping) return;

    const history = messages;
    addMessage("user", trimmed);

    if (!useGemini) {
      addMessage("bot", localAnswer(trimmed));
      inputRef.current?.focus();
      return;
    }

    setIsTyping(true);
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const reply = await askGemini({
        systemPrompt,
        history,
        question: trimmed,
        signal: controller.signal,
      });
      addMessage("bot", reply);
    } catch (error) {
      if (error?.name === "AbortError") return;
      console.error("Gemini failed, using local fallback:", error);
      addMessage("bot", localAnswer(trimmed));
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue;
    setInputValue("");
    void answerQuestion(value);
  };

  const openChat = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 280);
  };

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen, isTyping]);

  // Vorschläge nur zeigen, solange noch keine echte Frage gestellt wurde.
  const showSuggestions = messages.length <= 1 && !isTyping;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 ${
        showPanel ? "right-4 sm:right-auto" : ""
      }`}
    >
      <style>{`
        .assistant-panel-open {
          animation: assistantPanelEnter 280ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .assistant-panel-close {
          animation: assistantPanelExit 280ms cubic-bezier(0.7, 0, 0.84, 0) both;
        }
        @keyframes assistantPanelEnter {
          0% { opacity: 0; transform: translate3d(-18px, 18px, 0) scale(0.96); filter: blur(6px); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }
        @keyframes assistantPanelExit {
          0% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
          100% { opacity: 0; transform: translate3d(-18px, 18px, 0) scale(0.96); filter: blur(6px); }
        }
        @keyframes assistantDot {
          0%, 80%, 100% { opacity: 0.25; transform: translateY(0); }
          40% { opacity: 1; transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .assistant-panel-open, .assistant-panel-close { animation: none; }
        }
      `}</style>

      {!showPanel ? (
        <button
          onClick={openChat}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/40 bg-slate-950/85 px-5 py-3 text-white shadow-2xl shadow-blue-950/35 backdrop-blur-xl transition duration-300 hover:border-blue-200/70 hover:bg-blue-500/15"
        >
          <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/70 to-transparent" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-blue-200/25 transition group-hover:ring-blue-200/45">
            <ColorOrb dimension="30px" spinDuration={16} />
          </span>
          <span className="text-sm font-semibold tracking-wide text-[#f2f1ef]">{ui.openLabel}</span>
        </button>
      ) : (
        <div
          className={`${
            isClosing ? "assistant-panel-close" : "assistant-panel-open"
          } flex h-[calc(100dvh-2rem)] max-h-[34rem] w-full origin-bottom-left flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-blue-950/50 backdrop-blur-xl will-change-transform sm:h-[32rem] sm:w-[22rem]`}
        >
          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-blue-500/20 via-slate-900/95 to-blue-400/10 p-4">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e4e2]/60 to-transparent" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/25 shadow-lg shadow-blue-500/10">
                <ColorOrb dimension="34px" spinDuration={16} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#f2f1ef]">{ui.title}</h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.9)]" />
                  {ui.status}
                </p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/75 transition hover:border-blue-200/35 hover:bg-blue-400/10 hover:text-white"
              aria-label={ui.ariaClose}
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 touch-pan-y space-y-4 overflow-y-auto overscroll-contain scroll-smooth bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)] p-4 [-webkit-overflow-scrolling:touch]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.from === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={`max-w-[16rem] whitespace-pre-line rounded-2xl px-3.5 py-3 text-sm leading-5 shadow-lg ${
                    message.from === "user"
                      ? "rounded-br-md border border-blue-300/35 bg-blue-500/20 text-blue-50 shadow-blue-950/25"
                      : "rounded-bl-md border border-white/10 bg-white/[0.07] text-white/85 shadow-slate-950/30"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.07] px-4 py-3 shadow-lg shadow-slate-950/30">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-blue-200/80"
                      style={{ animation: `assistantDot 1.2s ${i * 0.15}s infinite ease-in-out` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {showSuggestions && (
              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200/60">
                  {ui.suggestionsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => void answerQuestion(reply)}
                      className="rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-100 transition hover:border-blue-200/70 hover:bg-blue-400/20 hover:text-white"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t border-white/10 bg-slate-950/95 p-3 sm:p-4">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={ui.placeholder}
                maxLength={200}
                disabled={isTyping}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-blue-200/50 focus:bg-white/8 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
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
};

export default AssistantWidget;
