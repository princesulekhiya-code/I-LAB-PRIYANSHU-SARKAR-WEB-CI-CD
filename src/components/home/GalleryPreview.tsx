import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";
import microscopeImg from "@/assets/microscope-lab.jpg";
import stpPlantImg from "@/assets/stp-plant.jpg";
import mushroomSpawnImg from "@/assets/mushroom-spawn.jpg";
import fumeHoodImg from "@/assets/fume-hood.jpg";
import customFabricationImg from "@/assets/custom-fabrication.jpg";
import labRenovationImg from "@/assets/lab-renovation.jpg";
import autoclaveImg from "@/assets/autoclave.jpg";
import incubatorImg from "@/assets/incubator.jpg";

const images = [
  { src: microscopeImg, label: "Workshop" },
  { src: stpPlantImg, label: "Water Plant" },
  { src: mushroomSpawnImg, label: "Mushroom Lab" },
  { src: fumeHoodImg, label: "Clean Room" },
  { src: customFabricationImg, label: "Fabrication" },
  { src: labRenovationImg, label: "Installation" },
  { src: autoclaveImg, label: "Equipment" },
  { src: incubatorImg, label: "Manufacturing" },
];

const GalleryPreview = () => (
  <section className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Gallery" title="Factory & Production Gallery" subtitle="A glimpse into our manufacturing workshop, production labs, and installation projects" />
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <Reveal key={i} delay={i * 80} direction="scale">
            <Link to="/gallery" className={`group rounded-xl overflow-hidden shadow-card hover:shadow-industrial transition-all block ${i === 0 || i === 5 ? "row-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 || i === 5 ? "h-full min-h-[300px]" : "h-40 md:h-44"}`}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-semibold text-primary-foreground bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">{img.label}</span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={600}>
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default GalleryPreview;
