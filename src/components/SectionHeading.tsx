import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-14 lg:mb-20 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em] border border-primary/10">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-muted-foreground text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
