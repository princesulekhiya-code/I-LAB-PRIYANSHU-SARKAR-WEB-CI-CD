import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";
import hotAirOvenImg from "@/assets/hot-air-oven.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import mushroomSpawnImg from "@/assets/mushroom-spawn.jpg";
import autoclaveImg from "@/assets/autoclave.jpg";

const products = [
  { title: "Laboratory Hot Air Oven", cat: "Lab Equipment", img: hotAirOvenImg },
  { title: "Laminar Airflow Unit", cat: "Clean Room", img: laminarCabinetImg },
  { title: "Water Treatment RO Plant", cat: "Water Treatment", img: etpStpImg },
  { title: "Mushroom Spawn", cat: "Biochemical", img: mushroomSpawnImg },
  { title: "Laboratory Autoclave", cat: "Lab Equipment", img: autoclaveImg },
];

const FeaturedProducts = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Products" title="Featured Products & Equipment" subtitle="Precision-manufactured instruments, plants, and biochemical products" />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <Link to="/products" className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-industrial hover:-translate-y-2 transition-all duration-500 border border-border block h-full">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-semibold backdrop-blur-sm">{p.cat}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={600}>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FeaturedProducts;
