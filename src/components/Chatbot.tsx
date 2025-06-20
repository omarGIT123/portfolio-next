"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, X, MessageSquare, User } from "lucide-react";

interface Message {
  information: string;
  section: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "bot"; content: string }[]
  >([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Who is Omar?",
    "Tell me about a project.",
    "Where does Omar work?",
    "What's his experience?",
  ];

  // Mock API call to simulate fetching responses
  const getResponse = async (input: string): Promise<Message[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("who is omar")) {
      return [
        {
          information:
            "Omar Bradai is a passionate AI Engineer from Tunisia, specializing in Machine Learning and NLP. This portfolio showcases his skills and projects.",
          section: "about",
        },
      ];
    }
    if (lowerInput.includes("project")) {
      return [
        {
          information:
            "One of Omar's key projects is the SynAI Writing Assistant, a Google Docs extension that uses LLMs to help with writing tasks.",
          section: "portfolio",
        },
      ];
    }
    if (lowerInput.includes("work") || lowerInput.includes("experience")) {
      return [
        {
          information:
            "Omar is currently an AI Engineer at EmyeHR. He has experience fine-tuning models like GPT-3.5 and developing systems for ASR and behavioral trend prediction.",
          section: "resume",
        },
      ];
    }
    return [
      {
        information:
          "I'm not sure how to answer that. Try asking about Omar's experience, projects, or skills using the suggestions.",
        section: "",
      },
    ];
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSendMessage = async (messageText?: string) => {
    const message = messageText || userMessage;
    if (message.trim() === "") return;

    setUserMessage("");
    setChatHistory((prev) => [...prev, { role: "user", content: message }]);
    setIsTyping(true);

    const responses = await getResponse(message);
    setIsTyping(false);

    for (const res of responses) {
      if (res.section) {
        document
          .getElementById(res.section)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: res.information },
      ]);
    }
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen && chatHistory.length === 0) {
      setChatHistory([
        {
          role: "bot",
          content:
            "Hello! I'm SynAI, Omar's personal assistant. Ask me anything about his portfolio!",
        },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        className={`fixed bottom-6 right-6 z-[9998] rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
        style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
        aria-label="Open Chat"
      >
        <MessageSquare className="h-8 w-8 text-white" />
      </button>

      <div
        className={`fixed bottom-6 right-6 z-[9999] w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <Bot className="h-7 w-7 text-blue-400" />
            <h3 className="font-semibold text-lg">SynAI Assistant</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <Bot className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                )}
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-800 text-slate-200 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <User className="h-6 w-6 bg-slate-700 p-1 rounded-full flex-shrink-0 mt-1" />
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3 justify-start">
                <Bot className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div className="bg-slate-800 text-slate-200 rounded-lg px-4 py-3 rounded-bl-none flex items-center gap-1">
                  <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Suggestions & Input */}
        <div className="p-4 border-t border-slate-700 flex-shrink-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSendMessage(s)}
                className="text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !isTyping && handleSendMessage()
              }
              placeholder="Ask me anything..."
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isTyping || userMessage.trim() === ""}
              style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
