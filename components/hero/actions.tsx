import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionsProps {
  primaryLabel: string;
  onPrimaryClick?: () => void;
  onScrollClick?: () => void;
}

export function Actions({
  primaryLabel,
  onPrimaryClick,
  onScrollClick,
}: ActionsProps) {
  return (
    <div className="flex items-center gap-4 mt-12">
      <Button
        size="lg"
        className="rounded-full px-10 py-7 text-lg font-medium"
        onClick={onPrimaryClick}
      >
        {primaryLabel}
      </Button>
      <button
        className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center hover:bg-accent/10 transition-colors"
        onClick={onScrollClick}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 text-accent" />
      </button>
    </div>
  );
}
