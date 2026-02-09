"use client";

import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import { PanelLeft, ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProtectedRoute } from "@/components/protected-route";
import { ChatSidebar } from "@/components/chat-sidebar";
import { useAuth } from "@/contexts/auth-context";
import { useChat } from "@/hooks/use-chat";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function ChatPage() {
  const { user, logout } = useAuth();
  const { messages, status, isWaitingForResponse, sendMessage, resetChat } =
    useChat();
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayName = user?.email?.split("@")[0] || "there";
  const hasMessages = messages.length > 0;
  const canSend =
    input.trim().length > 0 &&
    status === "connected" &&
    !isWaitingForResponse;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isWaitingForResponse]);

  function handleSend() {
    if (!canSend) return;
    sendMessage(input);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleNewChat() {
    resetChat();
    setInput("");
  }

  const sidebarToggleButton = (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 left-4 text-foreground/60 hover:text-foreground hover:bg-secondary/30 z-10"
      onClick={() => setSidebarOpen(true)}
    >
      <PanelLeft className="w-5 h-5" />
    </Button>
  );

  return (
    <ProtectedRoute>
      <div className="h-svh bg-background flex overflow-hidden">
        {sidebarOpen && (
          <ChatSidebar
            displayName={displayName}
            onToggleSidebar={() => setSidebarOpen(false)}
            onLogout={logout}
            onNewChat={handleNewChat}
          />
        )}

        {!hasMessages ? (
          <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
            {!sidebarOpen && sidebarToggleButton}

            <div className="w-full max-w-2xl flex flex-col items-center">
              <h1 className="font-header text-4xl md:text-5xl text-foreground mb-10 text-center">
                {getGreeting()}, {displayName}
              </h1>

              <div className="w-full">
                <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask Lahwita anything..."
                    className="w-full px-5 py-4 bg-transparent text-foreground placeholder:text-foreground/40 resize-none focus:outline-none min-h-25"
                    rows={3}
                  />
                  <div className="flex items-center justify-end px-4 pb-3">
                    <Button
                      size="icon"
                      disabled={!canSend}
                      onClick={handleSend}
                      className="bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-30"
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </Button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-foreground/40 text-center max-w-md leading-relaxed">
                Disclaimer: This platform provides AI-generated information for
                general purposes only and does not constitute legal advice or
                create an attorney–client relationship.
              </p>
            </div>
          </main>
        ) : (
          <main className="flex-1 flex flex-col min-w-0 relative">
            {!sidebarOpen && sidebarToggleButton}

            <div className="flex-1 relative min-h-0">
              <div
                ref={scrollRef}
                className="absolute inset-0 overflow-y-auto"
              >
                <div className="max-w-3xl mx-auto px-6 py-8 pb-16">
                  {messages.map((msg, i) => (
                    <div key={i} className="mb-8">
                      {msg.role === "user" ? (
                        <div className="flex justify-end">
                          <div className="bg-primary/10 text-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                            {msg.content}
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                            <Scale className="w-4 h-4 text-primary" />
                          </div>
                          <div className="text-foreground/90 leading-relaxed prose prose-sm prose-invert max-w-none prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 prose-strong:text-foreground prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2">
                            <Markdown>{msg.content}</Markdown>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {isWaitingForResponse && (
                    <div className="mb-8">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                          <Scale className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-foreground/50 italic">
                          Thinking...
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-16 bg-linear-to-t from-background to-transparent pointer-events-none" />
            </div>

            <div className="p-4 shrink-0">
              <div className="max-w-3xl mx-auto">
                <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a follow-up question..."
                    className="w-full px-5 py-4 bg-transparent text-foreground placeholder:text-foreground/40 resize-none focus:outline-none min-h-25"
                    rows={2}
                  />
                  <div className="flex items-center justify-end px-4 pb-3">
                    <Button
                      size="icon"
                      disabled={!canSend}
                      onClick={handleSend}
                      className="bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-30"
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </Button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-foreground/40 text-center">
                  This is AI-generated information for general purposes only and
                  does not constitute legal advice.
                </p>
              </div>
            </div>
          </main>
        )}
      </div>
    </ProtectedRoute>
  );
}
