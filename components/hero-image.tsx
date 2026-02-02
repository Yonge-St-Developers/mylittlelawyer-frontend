import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="flex-1 flex justify-end">
      <div className="relative w-[500px] h-[520px] rounded-[50px] overflow-hidden bg-[#1A0E0A]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
