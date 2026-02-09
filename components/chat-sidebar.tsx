"use client";

import { PanelLeft, Plus, Clock, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatSidebarProps {
  displayName: string;
  onToggleSidebar: () => void;
  onLogout: () => void;
  onNewChat: () => void;
}

export function ChatSidebar({
  displayName,
  onToggleSidebar,
  onLogout,
  onNewChat,
}: ChatSidebarProps) {
  return (
    <aside className="w-16 max-w-16 h-full shrink-0 border-r border-border/30 flex flex-col items-center py-4 gap-2 overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground/60 hover:text-foreground hover:bg-secondary/30"
        onClick={onToggleSidebar}
      >
        <PanelLeft className="w-5 h-5" />
      </Button>

      <Button
        size="icon"
        className="mt-2 bg-primary text-primary-foreground hover:bg-primary/80"
        onClick={onNewChat}
      >
        <Plus className="w-5 h-5" strokeWidth={2.5} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="text-foreground/60 hover:text-foreground hover:bg-secondary/30"
      >
        <Clock className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="text-foreground/60 hover:text-foreground hover:bg-secondary/30"
      >
        <LayoutGrid className="w-5 h-5" />
      </Button>

      <div className="mt-auto">
        <button
          onClick={onLogout}
          className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-sm font-medium text-foreground/70 hover:bg-secondary/50 transition-colors"
          title="Sign out"
        >
          {displayName.charAt(0).toUpperCase()}
        </button>
      </div>
    </aside>
  );
}
