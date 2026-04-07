import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Droplets, Wind, Sprout } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";
import hotAirOvenImg from "@/assets/hot-air-oven.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import mushroomFarmingImg from "@/assets/mushroom-farming.jpg";

const divisions = [
  {
    icon: Wrench, title: "Laboratory Equipment Manufacturing",
    desc: "Precision-engineered scientific instruments — hot air ovens, incubators, autoclaves, laminar flow cabinets, fume hoods, spectrophotometers, centrifuges, and custom equipment.",
    items: ["Hot Air Ovens", "Incubators (BOD/Bacteriological)", "Autoclaves", "Laminar Air Flow", "Fume Hoods", "Spectrophotometers", "Centrifuges", "Custom Scientific Instruments"],
    img: hotAirOvenImg, link: "/products", color: "primary",
  },
  {
    icon: Droplets, title: "Water Treatment Plants & Chemical Manufacturing",
    desc: "Complete water treatment infrastructure — RO plants, DM plants, STP/ETP systems, chemical dosing systems, water treatment chemicals, and industrial process chemicals.",
    items: ["RO Plants", "DM Plants", "STP / ETP Systems", "Chemical Dosing Systems", "Water Treatment Chemicals", "Industrial Process Chemicals", "Testing Reagents"],
    img: etpStpImg, link: "/products", color: "primary",
  },
  {
    icon: Wind, title: "Clean Air & Clean Room Equipment",
    desc: "ISO-standard clean environment systems — laminar airflow units, fume hoods, air showers, pass boxes, AHU integration, modular clean rooms, and sterile production zones.",
    items: ["Laminar Airflow Units", "Fume Hoods", "Air Showers", "Pass Boxes", "AHU Integration", "Modular Clean Rooms", "HVAC Filtration", "Sterile Production Zones"],
    img: laminarCabinetImg, link: "/products", color: "primary",
  },
  {
    icon: Sprout, title: "Advanced Biological Production & Controlled Lab Environment Division",
    desc: "State-of-the-art production laboratory for mushroom spawn, fresh mushrooms, bio-culture production, agricultural microbial products, and biochemical formulations.",
    items: ["Mushroom Spawn Production", "Fresh Mushroom Processing", "Controlled Environment Labs", "Bio-Culture Production", "Agricultural Microbial Products", "Soil & Wastewater Biology", "Biochemical Formulations"],
    img: mushroomFarmingImg, link: "/products", color: "secondary",
  },
];

const CoreServicesOverview = () => (
  <section className="py-24 lg:py-32 blueprint-grid">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Manufacturing Divisions" title="Core Manufacturing & Production Divisions" subtitle="Four integrated manufacturing divisions delivering precision-engineered solutions for science, industry, and agriculture" />
      </Reveal>
      <div className="grid lg:grid-cols-2 gap-8">
        {divisions.map((div, i) => (
          <Reveal key={div.title} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
            <Link to={div.link} className={`group rounded-2xl overflow-hidden shadow-industrial hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 block h-full ${i === 3 ? "lg:col-span-2" : ""}`}>
              <div className={`grid ${i === 3 ? "lg:grid-cols-2" : "sm:grid-cols-5"} h-full`}>
                <div className={`${i === 3 ? "" : "sm:col-span-2"} overflow-hidden`}>
                  <img src={div.img} alt={div.title} className={`w-full ${i === 3 ? "h-64 lg:h-full" : "h-48 sm:h-full"} object-cover group-hover:scale-110 transition-transform duration-700`} loading="lazy" width={800} height={600} />
                </div>
                <div className={`${i === 3 ? "" : "sm:col-span-3"} p-6 lg:p-8 bg-card flex flex-col justify-center border-l border-border`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${div.color === "secondary" ? "bg-secondary/10" : "bg-primary/10"}`}>
                    <div.icon className={`w-6 h-6 ${div.color === "secondary" ? "text-secondary" : "text-primary"}`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{div.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{div.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {div.items.slice(0, i === 3 ? 8 : 5).map((item) => (
                      <span key={item} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{item}</span>
                    ))}
                    {div.items.length > (i === 3 ? 8 : 5) && (
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium">+{div.items.length - (i === 3 ? 8 : 5)} more</span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">Explore Division <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoreServicesOverview;
