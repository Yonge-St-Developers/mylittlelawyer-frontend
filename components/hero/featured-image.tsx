import Image from "next/image";

interface FeaturedImageProps {
  src: string;
  alt: string;
}

export function FeaturedImage({ src, alt }: FeaturedImageProps) {
  return (
    <div className="flex-1 flex justify-end">
      <div className="relative w-125 h-130 rounded-[50px] overflow-hidden bg-[#1A0E0A]">
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
