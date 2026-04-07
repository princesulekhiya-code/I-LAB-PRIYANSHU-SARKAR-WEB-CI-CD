import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  breadcrumb: { label: string; to?: string }[];
}

const PageHero = ({ title, subtitle, bgImage, breadcrumb }: PageHeroProps) => (
  <section className="relative min-h-[340px] lg:min-h-[420px] flex items-end bg-hero overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={bgImage} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/80 to-hero/40" />
      <div className="absolute inset-0 blueprint-grid-dark" />
    </div>
    {/* Accent line */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-12 lg:pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/50 mb-6 animate-fade-up">
        <Link to="/" className="hover:text-secondary transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" /> Home
        </Link>
        {breadcrumb.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5" />
            {item.to ? (
              <Link to={item.to} className="hover:text-secondary transition-colors">{item.label}</Link>
            ) : (
              <span className="text-primary-foreground/80 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-100">
        {title}
      </h1>
      <p className="mt-4 text-primary-foreground/70 text-lg lg:text-xl max-w-3xl leading-relaxed animate-fade-up animation-delay-200">
        {subtitle}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </div>
  </section>
);

export default PageHero;
