import { LegalIcon } from "@/components/icons/legal-icon";

interface HeroHeadingProps {
  title: string[];
}

export function HeroHeading({ title }: HeroHeadingProps) {
  return (
    <h1 className="font-header text-7xl leading-tight text-foreground">
      <span className="flex items-center gap-4">
        {title[0]}
        <LegalIcon className="w-10 h-10 text-primary" />
      </span>
      {title.slice(1).map((line, index) => (
        <span key={index} className="block">
          {line}
        </span>
      ))}
    </h1>
  );
}
