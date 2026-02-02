import { Navbar } from "@/components/navbar";
import { HeroHeading } from "@/components/hero-heading";
import { HeroActions } from "@/components/hero-actions";
import { HeroImage } from "@/components/hero-image";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background">
      <Navbar />

      <div className="flex items-center justify-between px-12 py-24 max-w-360 mx-auto">
        <div className="flex-1 max-w-xl">
          <HeroHeading title={["Legal", "intelligence,", "amplified"]} />

          <p className="mt-8 text-foreground/80 font-sans leading-relaxed max-w-md">
            Carefair is healthcare that feels like self-care. Carefair is
            healthcare that feels like self-care. Carefair is healthcare that
            feels like self-care
          </p>

          <HeroActions primaryLabel="Get Started" />
        </div>

        <HeroImage src="/gavel.jpg" alt="Legal gavel" />
      </div>
    </section>
  );
}
