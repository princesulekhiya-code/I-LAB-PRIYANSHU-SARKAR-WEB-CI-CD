import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/hooks/use-scroll-reveal";
import teamImg from "@/assets/team.jpg";

const CTASection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={teamImg} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-accent opacity-90" />
      <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
    </div>
    <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
      <Reveal>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Let's Build Your Laboratory, Water Plant or Production Facility
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">Custom manufacturing, turnkey installation, and ongoing support — all from one trusted partner</p>
      </Reveal>
      <Reveal delay={200}>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-card text-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-elevated hover:shadow-lg hover:-translate-y-0.5 duration-300">
            Get Manufacturing Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://wa.me/918109241030?text=Hi%20I-Lab%2C%20I%20need%20a%20custom%20manufacturing%20quote" target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5 duration-300">
            WhatsApp Inquiry <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <a href="tel:+918109241030" className="inline-flex items-center gap-2 mt-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <Phone className="w-4 h-4" /> Or call us: +91 8109241030
        </a>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
