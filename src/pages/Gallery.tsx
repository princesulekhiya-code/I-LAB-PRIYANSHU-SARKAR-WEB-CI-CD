import usePageSEO from "@/hooks/use-page-seo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroGalleryImg from "@/assets/hero-gallery.jpg";
import waterTestingImg from "@/assets/water-testing.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import mushroomFarmingImg from "@/assets/mushroom-farming.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import labRenovationImg from "@/assets/lab-renovation.jpg";
import labRepairImg from "@/assets/lab-repair.jpg";
import microscopeImg from "@/assets/microscope-lab.jpg";
import stpPlantImg from "@/assets/stp-plant.jpg";
import mushroomSpawnImg from "@/assets/mushroom-spawn.jpg";
import fumeHoodImg from "@/assets/fume-hood.jpg";
import customFabricationImg from "@/assets/custom-fabrication.jpg";
import hotAirOvenImg from "@/assets/hot-air-oven.jpg";
import autoclaveImg from "@/assets/autoclave.jpg";
import incubatorImg from "@/assets/incubator.jpg";
import teamImg from "@/assets/team.jpg";
import qualityCertImg from "@/assets/quality-cert.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import galleryReal1 from "@/assets/gallery-real-1.png";
import galleryReal2 from "@/assets/gallery-real-2.png";
import galleryReal3 from "@/assets/gallery-real-3.png";
import machineManufacturingImg from "@/assets/machine-manufacturing.png";

type Category = "all" | "manufacturing" | "water" | "clean" | "mushroom" | "equipment" | "installation" | "workshop";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "water", label: "Water Plants" },
  { key: "clean", label: "Clean Rooms" },
  { key: "mushroom", label: "Mushroom Lab" },
  { key: "equipment", label: "Equipment" },
  { key: "installation", label: "Installation" },
  { key: "workshop", label: "Workshop" },
];

const galleryItems: { src: string; title: string; desc: string; cat: Category }[] = [
  { src: hotAirOvenImg, cat: "manufacturing", title: "Hot Air Oven Manufacturing", desc: "Precision temperature control equipment" },
  { src: autoclaveImg, cat: "manufacturing", title: "Autoclave Production", desc: "High-pressure sterilization systems" },
  { src: incubatorImg, cat: "manufacturing", title: "Incubator Assembly", desc: "BOD and bacteriological incubators" },
  { src: etpStpImg, cat: "water", title: "ETP System", desc: "Effluent treatment plant installation" },
  { src: stpPlantImg, cat: "water", title: "STP Plant", desc: "Sewage treatment system" },
  { src: waterTestingImg, cat: "water", title: "Water Testing Lab", desc: "Quality analysis facility" },
  { src: laminarCabinetImg, cat: "clean", title: "Laminar Airflow Unit", desc: "HEPA filtered clean air system" },
  { src: fumeHoodImg, cat: "clean", title: "Fume Hood", desc: "Chemical safety ventilation" },
  { src: mushroomFarmingImg, cat: "mushroom", title: "Mushroom Production Lab", desc: "Controlled environment cultivation" },
  { src: mushroomSpawnImg, cat: "mushroom", title: "Spawn Production", desc: "Lab-grade mushroom spawn" },
  { src: customFabricationImg, cat: "workshop", title: "Fabrication Workshop", desc: "In-house metalwork and assembly" },
  { src: labRepairImg, cat: "equipment", title: "Equipment Servicing", desc: "Professional maintenance and repair" },
  { src: labRenovationImg, cat: "installation", title: "Lab Installation", desc: "Complete lab infrastructure setup" },
  { src: microscopeImg, cat: "equipment", title: "Precision Instruments", desc: "Scientific instrument manufacturing" },
  { src: teamImg, cat: "workshop", title: "Engineering Team", desc: "Skilled manufacturing professionals" },
  { src: qualityCertImg, cat: "manufacturing", title: "Quality Certification", desc: "ISO-compliant manufacturing" },
  { src: gallery1, cat: "installation", title: "Facility Setup", desc: "Turnkey lab infrastructure installation" },
  { src: gallery2, cat: "installation", title: "Clean Room Installation", desc: "Modular clean room commissioning" },
  { src: galleryReal1, cat: "equipment", title: "Lab Furniture Setup", desc: "Stainless steel lab furniture & storage cabinets" },
  { src: galleryReal2, cat: "clean", title: "Modern Lab Interior", desc: "Complete clean lab with workstations & instruments" },
  { src: galleryReal3, cat: "mushroom", title: "Mushroom Cultivation", desc: "Oyster mushroom production facility" },
  { src: machineManufacturingImg, cat: "manufacturing", title: "CNC Machine Manufacturing", desc: "Advanced automated manufacturing equipment" },
];

const Gallery = () => {
  usePageSEO({ title: "Factory & Production Gallery", description: "See our manufacturing facility, lab equipment, water treatment plants & clean room installations in action." });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const filtered = activeCategory === "all" ? galleryItems : galleryItems.filter((i) => i.cat === activeCategory);
  const navigate = (dir: number) => { if (lightbox !== null) setLightbox((lightbox + dir + filtered.length) % filtered.length); };

  return (
    <Layout>
    <PageHero
      title="Factory & Production Gallery"
      subtitle="Manufacturing, Installation & Production Showcase"
      bgImage={heroGalleryImg}
      breadcrumb={[{ label: "Gallery" }]}
    />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Portfolio" title="Our Manufacturing in Action" />
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((c) => (
              <button key={c.key} onClick={() => setActiveCategory(c.key)} className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeCategory === c.key ? "bg-primary text-primary-foreground shadow-glow" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"}`}>{c.label}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <div key={`${item.title}-${i}`} className="group cursor-pointer rounded-xl overflow-hidden shadow-card hover:shadow-industrial transition-all border border-border" onClick={() => setLightbox(i)}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-heading font-semibold text-primary-foreground">{item.title}</h4>
                      <p className="text-primary-foreground/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setLightbox(null)}><X className="w-8 h-8" /></button>
          <button className="absolute left-4 text-primary-foreground" onClick={(e) => { e.stopPropagation(); navigate(-1); }}><ChevronLeft className="w-10 h-10" /></button>
          <button className="absolute right-4 text-primary-foreground" onClick={(e) => { e.stopPropagation(); navigate(1); }}><ChevronRight className="w-10 h-10" /></button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="w-full rounded-xl" />
            <div className="text-center mt-4">
              <h3 className="font-heading font-bold text-xl text-primary-foreground">{filtered[lightbox].title}</h3>
              <p className="text-primary-foreground/70">{filtered[lightbox].desc}</p>
            </div>
          </div>
        </div>
      )}

      <section className="py-24 lg:py-32 bg-gradient-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">Impressed by Our Manufacturing?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">Let's discuss your project requirements</p>
          <Link to="/contact" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
