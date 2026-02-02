import { Button } from "@/components/ui/button";

interface ActionsProps {
  primaryLabel: string;
  onPrimaryClick?: () => void;
}

export function Actions({
  primaryLabel,
  onPrimaryClick,
}: ActionsProps) {
  return (
    <div className="flex items-center gap-4 mt-12">
      <Button
        size="lg"
        className="rounded-lg px-20 py-8 text-xl font-medium shadow-[0_4px_0_0_hsl(var(--primary)/0.7)] hover:shadow-[0_2px_0_0_hsl(var(--primary)/0.7)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
        onClick={onPrimaryClick}
      >
        {primaryLabel}
      </Button>
    </div>
  );
}
