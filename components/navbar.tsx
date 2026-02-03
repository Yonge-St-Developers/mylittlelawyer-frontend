import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Privacy", href: "#privacy" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-4 border-b border-border/50">
      <div className="flex items-center gap-12">
        <span className="font-header text-2xl italic text-primary">
          Lahwita
        </span>
        <div className="flex items-center gap-8 font-sans text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <Button asChild className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href="/login">
          Login
        </Link>
      </Button>
    </nav>
  );
}
