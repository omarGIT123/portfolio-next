"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, X, MessageSquare, User } from "lucide-react";
import { LlmAction, useAppContext } from "@/context/AppContext";
import { useScrollAndVerify } from "@/app/hooks/useScrollTo";
import { useTypingEffect } from "@/app/hooks/useTypingEffect";

// Interface for a message in the chat history
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// SIMPLIFIED BotMessage component. It's now a "dumb" component that just displays text.
const BotMessageDisplay = ({
  content,
  isTyping,
}: {
  content: string;
  isTyping: boolean;
}) => {
  return (
    <div className="flex items-start gap-3 justify-start">
      <Bot className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
      <div className="max-w-[85%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap bg-slate-800 text-slate-200 rounded-bl-none">
        {content}
        {isTyping && (
          <span className="inline-block w-1 h-4 animate-pulse ml-1 bg-white"></span>
        )}
      </div>
    </div>
  );
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [liveBotMessage, setLiveBotMessage] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { typedText, isFinished } = useTypingEffect(liveBotMessage || "");

  const { commandQueue, setCommandQueue, setProjectToOpen } = useAppContext();
  const { scrollTo } = useScrollAndVerify();

  const suggestions = [
    "Who is Omar?",
    "Tell me about a project.",
    "Show me the Gaze Tracker project",
    "What's his experience?",
  ];

  const handleApiResponse = (actions: LlmAction[]) => {
    if (!actions || actions.length === 0) {
      setLiveBotMessage("Sorry, I couldn't find an answer for that.");
      return;
    }
    const action = actions[0];

    if (action.section) {
      scrollTo(action.section).then(() => {
        if (action.section === "portfolio" && action.card) {
          setProjectToOpen(action.card);
        }
      });
    }

    setLiveBotMessage(action.information);
    setCommandQueue(actions.slice(1));
  };

  const handleSendMessage = async (messageText?: string) => {
    const message = messageText || userMessage;
    if (message.trim() === "" || isThinking || liveBotMessage) return;

    setUserMessage("");
    setChatHistory((prev) => [...prev, { role: "user", content: message }]);
    setIsThinking(true);

    try {
      const response = await fetch(
        `/api/chat?query=${encodeURIComponent(message.toLowerCase())}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ history: chatHistory }),
        }
      );
      if (!response.ok) throw new Error("API response was not ok.");
      const { data } = await response.json();
      setIsThinking(false);
      handleApiResponse(data);
    } catch (error) {
      setIsThinking(false);
      console.error("Failed to fetch from chat API:", error);
      setLiveBotMessage("Sorry, I'm having trouble connecting right now.");
    }
  };

  useEffect(() => {
    if (commandQueue.length > 0) {
      handleApiResponse(commandQueue);
    }
  }, [commandQueue]);

  useEffect(() => {
    if (isFinished && liveBotMessage) {
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: liveBotMessage },
      ]);
      setLiveBotMessage(null);
    }
  }, [isFinished, liveBotMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [typedText, chatHistory, isThinking]);

  useEffect(() => {
    if (isOpen && chatHistory.length === 0 && !liveBotMessage && !isThinking) {
      const timer = setTimeout(() => {
        setLiveBotMessage(
          "Hello! I'm SynAI, Omar's personal assistant 🤖. I'm ready to answer your questions about Omar's work! \n\n Please keep in mind that I treat every question as a new one and don't have a memory of our conversation. I'm running on a simple model for now. Sorry! 😅"
        );
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, chatHistory, liveBotMessage, isThinking]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleOpen}
        aria-label="Open Chat"
        className={`fixed bottom-6 right-6 z-[9998] rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
        style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
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
            {chatHistory.map((msg, index) =>
              msg.role === "user" ? (
                <div key={index} className="flex items-start gap-3 justify-end">
                  <div className="max-w-[85%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap bg-blue-600 text-white rounded-br-none">
                    {msg.content}
                  </div>
                  <User className="h-6 w-6 bg-slate-700 p-1 rounded-full flex-shrink-0 mt-1" />
                </div>
              ) : (
                <BotMessageDisplay
                  key={index}
                  content={msg.content}
                  isTyping={false}
                />
              )
            )}

            {/* Render the "live" message using the new display component */}
            {liveBotMessage && (
              <BotMessageDisplay content={typedText} isTyping={!isFinished} />
            )}

            {isThinking && (
              <div className="flex items-start gap-3 justify-start">
                <Bot className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div className="max-w-[85%] rounded-lg px-4 py-2 text-sm bg-slate-800 text-slate-200 rounded-bl-none">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
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
                disabled={isThinking || !!liveBotMessage}
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
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me anything..."
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
              disabled={isThinking || !!liveBotMessage}
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                isThinking || !!liveBotMessage || userMessage.trim() === ""
              }
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
