export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 px-12 py-6 flex items-center justify-between text-sm text-foreground/60 border-t border-border/50">
      <span className="font-sans">
        © {new Date().getFullYear()} Lahwita. All rights reserved.
      </span>
      <div className="flex items-center gap-6 font-sans">
        <a href="#" className="hover:text-foreground/80 transition-colors">
          Terms
        </a>
        <a href="#" className="hover:text-foreground/80 transition-colors">
          Privacy
        </a>
        <span className="text-foreground/30">·</span>
        <span className="text-foreground/40 italic">Your legal partner</span>
      </div>
    </footer>
  );
}
