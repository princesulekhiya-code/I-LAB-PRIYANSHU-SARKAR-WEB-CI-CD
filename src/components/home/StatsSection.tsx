import { Clock, Award, Users, Shield } from "lucide-react";
import labRenovationImg from "@/assets/lab-renovation.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: 15, suffix: "+", label: "Years Manufacturing", icon: Clock },
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Award },
  { value: 4, suffix: "", label: "Production Divisions", icon: Users },
  { value: 24, suffix: "/7", label: "Support & AMC", icon: Shield },
];

const StatsSection = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={labRenovationImg} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-hero opacity-[0.93]" />
      <div className="absolute inset-0 blueprint-grid-dark" />
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120} direction="up">
            <div className="text-center group">
              <div className="w-18 h-18 rounded-2xl glass-card-dark flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-glow-green transition-all duration-500 w-[72px] h-[72px]">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-primary-foreground/50 mt-2 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
