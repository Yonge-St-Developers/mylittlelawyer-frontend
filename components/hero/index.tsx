"use client"

import { Navbar } from "@/components/navbar";
import { Heading } from "./heading";
import { Actions } from "./actions";
import { FeaturedImage } from "./featured-image";
import { Footer } from "./footer";

export { Heading } from "./heading";
export { Actions } from "./actions";
export { FeaturedImage } from "./featured-image";
export { Footer } from "./footer";

import { useRouter } from "next/navigation";

export function Section() {
  const router = useRouter();

  return (
    <section className="h-screen bg-background relative overflow-hidden">
      <Navbar />

      <div className="flex items-center justify-between px-12 py-24 max-w-360 mx-auto">
        <div className="flex-1 max-w-xl">
          <Heading title={["Legal", "intelligence,", "amplified"]} />

          <p className="mt-8 text-foreground/80 font-sans leading-relaxed max-w-md">
            Carefair is healthcare that feels like self-care. Carefair is
            healthcare that feels like self-care. Carefair is healthcare that
            feels like self-care
          </p>

          <Actions primaryLabel="Get Started" onPrimaryClick={() => router.push("/login")} />
        </div>

        <FeaturedImage src="/gavel.jpg" alt="Legal gavel" />
      </div>

      <Footer />
    </section>
  );
}
