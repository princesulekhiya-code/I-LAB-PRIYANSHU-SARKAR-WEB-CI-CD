import { MessageSquare, Ruler, Factory, Truck, Wrench, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: MessageSquare, num: "01", title: "Consultation",
    desc: "Understanding requirements, site assessment, and compliance needs",
    details: ["Site visit & requirement analysis", "Budget & timeline planning", "Compliance & regulation review"],
  },
  {
    icon: Ruler, num: "02", title: "Design & Engineering",
    desc: "Custom design, 3D modeling, and technical specifications",
    details: ["CAD design & 3D modeling", "Material selection & specs", "Client approval & revisions"],
  },
  {
    icon: Factory, num: "03", title: "Manufacturing",
    desc: "In-house fabrication with ISO-grade quality at every stage",
    details: ["Precision fabrication", "Quality checks at each stage", "ISO-standard compliance"],
  },
  {
    icon: Truck, num: "04", title: "Installation",
    desc: "On-site delivery, professional installation, and commissioning",
    details: ["Safe transportation", "Professional on-site installation", "Testing & commissioning"],
  },
  {
    icon: Wrench, num: "05", title: "AMC & Support",
    desc: "Annual maintenance contracts, spare parts, and 24/7 support",
    details: ["Annual maintenance contracts", "Spare parts availability", "24/7 technical support"],
  },
];

const ProcessSection = () => (
  <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    <div className="absolute inset-0 blueprint-grid opacity-30" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <Reveal>
        <SectionHeading badge="Our Process" title="Engineering & Installation Process" subtitle="From concept to commissioning — a structured, precision-driven workflow" />
      </Reveal>

      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative grid grid-cols-5 gap-6">
          <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 150} direction="up">
              <div className="relative group h-full flex flex-col">
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center mx-auto shadow-glow-green group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-7 -right-3 z-20 text-primary/40">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
                <div className="mt-6 bg-muted rounded-xl p-5 text-center border border-border hover:border-primary/20 hover:shadow-industrial transition-all duration-500 group-hover:-translate-y-2 flex-1 flex flex-col">
                  <div className="text-xs text-secondary font-bold tracking-widest mb-2">STEP {step.num}</div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-1.5 text-left mt-auto">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: vertical timeline */}
      <div className="lg:hidden space-y-0">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 100}>
            <div className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow-green shrink-0 z-10">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-primary/10 my-1" />
                )}
              </div>
              <div className="bg-muted rounded-xl p-5 mb-4 flex-1 border border-border hover:border-primary/20 transition-all">
                <div className="text-xs text-secondary font-bold tracking-widest mb-1">STEP {step.num}</div>
                <h4 className="font-heading font-bold text-foreground text-lg mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{step.desc}</p>
                <ul className="space-y-1.5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
