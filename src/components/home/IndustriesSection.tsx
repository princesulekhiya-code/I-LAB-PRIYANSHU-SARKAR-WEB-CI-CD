import { Microscope, FlaskConical, Stethoscope, Leaf, GraduationCap, Factory, Wheat, Building2, Landmark } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";
import pharmaImg from "@/assets/industry-pharma.jpg";
import hospitalImg from "@/assets/industry-hospital.jpg";
import researchImg from "@/assets/industry-research.jpg";
import universityImg from "@/assets/industry-university.jpg";
import agricultureImg from "@/assets/industry-agriculture.jpg";
import waterImg from "@/assets/industry-water.jpg";
import biotechImg from "@/assets/industry-biotech.jpg";
import mushroomImg from "@/assets/industry-mushroom.jpg";
import govtImg from "@/assets/industry-govt.jpg";

const industries = [
  { icon: FlaskConical, title: "Pharmaceutical", desc: "GMP-compliant lab equipment & clean rooms", img: pharmaImg },
  { icon: Stethoscope, title: "Hospitals & Healthcare", desc: "Diagnostic and pathology lab infrastructure", img: hospitalImg },
  { icon: Microscope, title: "Research Laboratories", desc: "Custom scientific instruments & setup", img: researchImg },
  { icon: GraduationCap, title: "Universities", desc: "Modern lab infrastructure for education", img: universityImg },
  { icon: Wheat, title: "Food & Agriculture", desc: "Mushroom production & bio-culture systems", img: agricultureImg },
  { icon: Factory, title: "Water Treatment Plants", desc: "RO, DM, ETP/STP systems & chemicals", img: waterImg },
  { icon: Building2, title: "Biotech & R&D", desc: "Controlled environments & bio-culture labs", img: biotechImg },
  { icon: Leaf, title: "Mushroom Farms", desc: "Spawn production & controlled farming setups", img: mushroomImg },
  { icon: Landmark, title: "Government Institutions", desc: "Lab setup, testing & compliance solutions", img: govtImg },
];

const IndustriesSection = () => (
  <section className="py-24 lg:py-32 bg-muted tech-dots">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Industries" title="Industries We Manufacture For" subtitle="Precision-engineered solutions delivered across diverse sectors" />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 80} direction="scale">
            <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-industrial hover:-translate-y-2 transition-all duration-500 border border-border hover:border-primary/20 h-full">
              <div className="relative h-40 overflow-hidden">
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={640} height={512} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ind.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
