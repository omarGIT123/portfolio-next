"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, X, MessageSquare, User } from "lucide-react";
import { LlmAction, useAppContext } from "@/context/AppContext"; // Ensure this path is correct
import { useScrollAndVerify } from "@/app/hooks/useScrollTo"; // IMPORT THE NEW HOOK

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [scrollContainerId, setScrollContainerId] = useState<LlmAction | null>(
    null
  );
  const {
    commandQueue,
    setCommandQueue,
    isProcessingQueue,
    setIsProcessingQueue,
    setProjectToOpen,
  } = useAppContext();

  const { scrollTo } = useScrollAndVerify(); // USE THE NEW HOOK

  const suggestions = [
    "Who is Omar?",
    "Tell me about a project.",
    "Show me the Gaze Tracker project",
    "What's his experience?",
  ];

  useEffect(() => {
    if (scrollContainerId) {
      scrollTo(scrollContainerId.section).then(() => {
        console.log("HEREEE ");
        console.log("scrollContainerId", scrollContainerId);
        if (
          scrollContainerId.section === "portfolio" &&
          scrollContainerId.card
        ) {
          setProjectToOpen(scrollContainerId.card);
        }
        typeMessage(scrollContainerId.information).then(() => {
          console.log("Message typed:", scrollContainerId.information);
          if (scrollContainerId.card) {
          }
          if (
            scrollContainerId.section === "portfolio" &&
            scrollContainerId.card
          ) {
            setProjectToOpen(null);
          }
          setCommandQueue((prev) => prev.slice(1));
          setIsProcessingQueue(false);
        });
      });
    }
  }, [scrollContainerId]);

  const typeMessage = (text: string) => {
    return new Promise<void>((resolve) => {
      if (!text) {
        resolve();
        return;
      }
      setTypingMessage("");
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setTypingMessage((prev) => (prev ?? "") + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setChatHistory((prev) => [...prev, { role: "bot", content: text }]);
          setTypingMessage(null);
          resolve();
        }
      }, 30);
    });
  };
  useEffect(() => {
    const processQueue = () => {
      if (commandQueue.length > 0 && !isProcessingQueue) {
        setIsProcessingQueue(true);
        const action = commandQueue[0];

        if (action.section) {
          try {
            console.log("Scrolling to section:", action.section);
            setScrollContainerId(action);
          } catch (error) {
            console.error("Scroll failed:", error);
          }
        }
      }
    };

    processQueue();
  }, [commandQueue]);
  // The rest of the component remains the same...

  const handleSendMessage = async (messageText?: string) => {
    const message = messageText || userMessage;
    if (message.trim() === "" || isProcessingQueue) return;

    setUserMessage("");
    setChatHistory((prev) => [...prev, { role: "user", content: message }]);

    try {
      const response = await fetch(
        `/api/chat?query=${encodeURIComponent(message.toLowerCase())}`
      );
      if (!response.ok) throw new Error("API response was not ok.");

      const { data } = await response.json();

      if (data && Array.isArray(data) && data.length > 0) {
        setCommandQueue(data);
      } else {
        await typeMessage("Sorry, I couldn't find an answer for that.");
      }
    } catch (error) {
      console.error("Failed to fetch from chat API:", error);
      await typeMessage("Sorry, I'm having trouble connecting right now.");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, typingMessage]);

  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      setChatHistory([
        {
          role: "bot",
          content:
            "Hello! I'm SynAI, Omar's personal assistant. Ask me anything about his portfolio!",
        },
      ]);
    }
  }, [isOpen, chatHistory.length]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

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

        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
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
                  className={`max-w-[85%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${
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

            {typingMessage !== null && (
              <div className="flex items-start gap-3 justify-start">
                <Bot className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div className="max-w-[85%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap bg-slate-800 text-slate-200 rounded-bl-none">
                  {typingMessage}
                  <span className="inline-block w-2 h-4 bg-white animate-pulse ml-1"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="p-4 border-t border-slate-700 flex-shrink-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSendMessage(s)}
                disabled={isProcessingQueue}
                className="text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                e.key === "Enter" && !isProcessingQueue && handleSendMessage()
              }
              placeholder="Ask me anything..."
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
              disabled={isProcessingQueue}
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isProcessingQueue || userMessage.trim() === ""}
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
