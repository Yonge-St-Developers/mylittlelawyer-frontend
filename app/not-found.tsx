import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-svh bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <div className="relative mb-8">
          <h1 className="font-header text-[10rem] md:text-[14rem] leading-none text-primary/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-header text-6xl md:text-7xl text-foreground">
              Oops!
            </span>
          </div>
        </div>

        <div className="mb-8 relative">
          <svg
            viewBox="0 0 64 64"
            className="w-20 h-20 text-primary/60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: "rotate(-15deg)" }}
          >
            <line x1="32" y1="56" x2="32" y2="20" />
            <line x1="20" y1="56" x2="44" y2="56" />
            <line x1="12" y1="20" x2="52" y2="20" />
            <line x1="12" y1="20" x2="12" y2="28" />
            <path d="M4 28 Q12 36 20 28" />
            <line x1="52" y1="20" x2="52" y2="24" />
            <path d="M44 24 Q52 32 60 24" />
            <circle cx="32" cy="16" r="4" />
          </svg>
          <span className="absolute -right-2 -top-2 text-2xl font-header text-secondary">
            ?
          </span>
        </div>

        <h2 className="font-header text-2xl md:text-3xl text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground/60 mb-10 max-w-sm leading-relaxed">
          The page you&apos;re looking for seems to have wandered off the legal
          path. Let&apos;s get you back on track.
        </p>

        <Link href="/">
          <Button
            size="lg"
            className="rounded-lg px-12 py-6 text-lg font-medium shadow-[0_4px_0_0_hsl(var(--primary)/0.7)] hover:shadow-[0_2px_0_0_hsl(var(--primary)/0.7)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
          >
            Back to Home
          </Button>
        </Link>

        <p className="mt-12 text-sm text-foreground/40">
          Need help?{" "}
          <Link
            href="/"
            className="text-primary/70 hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
