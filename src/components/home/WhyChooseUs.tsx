import { Clock, Award, Users, Shield, Factory, Wrench } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  { icon: Clock, title: "Since 2009", desc: "15+ years of manufacturing and engineering excellence" },
  { icon: Factory, title: "In-House Fabrication", desc: "Own workshop and production facility for end-to-end control" },
  { icon: Wrench, title: "Custom Engineering", desc: "Bespoke solutions designed and built to your exact specifications" },
  { icon: Shield, title: "Compliance Support", desc: "ISO, GMP compliant processes and documentation" },
  { icon: Users, title: "Production Lab Expertise", desc: "Specialized mushroom, EM, and biochemical production capabilities" },
  { icon: Award, title: "Pan-India Service", desc: "Bhopal-based with delivery, installation and AMC across India" },
];

const WhyChooseUs = () => (
  <section className="py-24 lg:py-32 blueprint-grid">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Why I-Lab" title="Why Manufacturers Trust I-Lab" subtitle="In-house fabrication, custom engineering, and production lab expertise" />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} direction="scale">
            <div className="group bg-card rounded-xl p-8 shadow-card hover:shadow-industrial hover:-translate-y-2 transition-all duration-500 border border-border hover:border-secondary/20 h-full">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:shadow-glow-green group-hover:scale-110 transition-all duration-500">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
