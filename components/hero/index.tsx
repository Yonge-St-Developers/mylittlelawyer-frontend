import { Navbar } from "@/components/navbar";
import { Heading } from "./heading";
import { Actions } from "./actions";
import { FeaturedImage } from "./featured-image";

export { Heading } from "./heading";
export { Actions } from "./actions";
export { FeaturedImage } from "./featured-image";

export function Section() {
  return (
    <section className="min-h-screen bg-background">
      <Navbar />

      <div className="flex items-center justify-between px-12 py-24 max-w-360 mx-auto">
        <div className="flex-1 max-w-xl">
          <Heading title={["Legal", "intelligence,", "amplified"]} />

          <p className="mt-8 text-foreground/80 font-sans leading-relaxed max-w-md">
            Carefair is healthcare that feels like self-care. Carefair is
            healthcare that feels like self-care. Carefair is healthcare that
            feels like self-care
          </p>

          <Actions primaryLabel="Get Started" />
        </div>

        <FeaturedImage src="/gavel.jpg" alt="Legal gavel" />
      </div>
    </section>
  );
}
