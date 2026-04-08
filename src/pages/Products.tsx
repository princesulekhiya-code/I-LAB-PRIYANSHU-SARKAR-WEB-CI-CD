import usePageSEO from "@/hooks/use-page-seo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Droplets, Wind, Sprout, ShieldCheck, Truck, Package, Factory } from "lucide-react";
import Layout from "@/components/Layout";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroProductsImg from "@/assets/hero-products.jpg";
import hotAirOvenImg from "@/assets/hot-air-oven.jpg";
import autoclaveImg from "@/assets/autoclave.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import fumeHoodImg from "@/assets/fume-hood.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import stpPlantImg from "@/assets/stp-plant.jpg";
import mushroomFarmingImg from "@/assets/mushroom-farming.jpg";
import mushroomSpawnImg from "@/assets/mushroom-spawn.jpg";

import incubatorImg from "@/assets/incubator.jpg";
import airShowerImg from "@/assets/air-shower.jpg";
import modularCleanroomImg from "@/assets/modular-cleanroom.jpg";
import chemicalDosingImg from "@/assets/chemical-dosing.jpg";
import waterChemicalsImg from "@/assets/water-chemicals.jpg";

const divisions = [
  {
    id: "lab", icon: Wrench, title: "Laboratory Instruments",
    desc: "Precision-manufactured scientific instruments for research, pharma, healthcare, and education.",
    products: [
      { name: "Hot Air Oven", img: hotAirOvenImg, specs: "Temperature range: 50°C - 300°C | SS/MS chamber" },
      { name: "Autoclave", img: autoclaveImg, specs: "Pressure: 15-20 PSI | Vertical/Horizontal" },
      { name: "Incubator", img: incubatorImg, specs: "BOD/Bacteriological | Digital PID controller" },
      { name: "Laminar Air Flow", img: laminarCabinetImg, specs: "HEPA H14 | Vertical/Horizontal | SS 304" },
    ],
  },
  {
    id: "water", icon: Droplets, title: "Water Treatment Plants & Chemicals",
    desc: "Complete water treatment infrastructure — RO, DM, ETP/STP plants with chemical manufacturing and supply.",
    products: [
      { name: "RO Plant", img: etpStpImg, specs: "Capacity: 500-50,000 LPH | Industrial grade" },
      { name: "STP / ETP System", img: stpPlantImg, specs: "Custom capacity | CPCB/SPCB compliant" },
      { name: "Chemical Dosing System", img: chemicalDosingImg, specs: "Automated dosing | Multi-chemical support" },
      { name: "Water Treatment Chemicals", img: waterChemicalsImg, specs: "Coagulants, flocculants, pH adjusters" },
    ],
  },
  {
    id: "clean", icon: Wind, title: "Clean Air & Clean Room Equipment",
    desc: "ISO-standard clean environment manufacturing — laminar airflow, air showers, pass boxes, and modular clean rooms.",
    products: [
      { name: "Laminar Airflow Unit", img: laminarCabinetImg, specs: "HEPA H14 | Class 100 | SS 304/316" },
      { name: "Fume Hood", img: fumeHoodImg, specs: "Ducted/Ductless | Chemical resistant" },
      { name: "Air Shower", img: airShowerImg, specs: "Single/Double door | HEPA filtered" },
      { name: "Modular Clean Room", img: modularCleanroomImg, specs: "ISO 5-8 | Turnkey installation" },
    ],
  },
  {
    id: "bio", icon: Sprout, title: "Mushroom Spawn & Biochemical Products",
    desc: "Advanced biological production — mushroom spawn, fresh mushroom processing, and biochemical formulations.",
    products: [
      { name: "Mushroom Spawn", img: mushroomSpawnImg, specs: "Oyster/Shiitake | Lab-tested | High germination" },
      { name: "Fresh Mushroom", img: mushroomFarmingImg, specs: "Organic | Pesticide-free | Bulk packs" },
      { name: "Bio-Culture Products", img: mushroomFarmingImg, specs: "Agricultural microbials | Soil enhancers" },
    ],
  },
];

const Products = () => {
  usePageSEO({ title: "Laboratory Equipment & Water Treatment Plant Products", description: "Buy laboratory instruments, water treatment plants (ETP/STP/RO), clean room equipment, laminar airflow units & biochemical products from I-Lab Bhopal. Best quality, competitive prices.", keywords: "buy laboratory equipment Bhopal, water treatment plant price, clean room equipment India, laminar airflow unit price, lab instruments Bhopal, ETP plant manufacturer, STP plant manufacturer, RO plant Bhopal, biochemical products, lab furniture price", canonical: "https://ilabgroup.in/products" });
  const [enquiryProduct, setEnquiryProduct] = useState<string | null>(null);

  return (
    <Layout>
    <PageHero
      title="Our Products"
      subtitle="Four Manufacturing Divisions — Precision Built for Science, Industry & Agriculture"
      bgImage={heroProductsImg}
      breadcrumb={[{ label: "Products" }]}
    />

    {divisions.map((div, idx) => (
      <section key={div.id} className={`py-24 lg:py-32 ${idx % 2 === 1 ? "bg-muted" : ""} ${idx % 2 === 0 ? "blueprint-grid" : "tech-dots"}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${div.id === "bio" ? "bg-secondary/10" : "bg-primary/10"}`}>
              <div.icon className={`w-7 h-7 ${div.id === "bio" ? "text-secondary" : "text-primary"}`} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{div.title}</h2>
              <p className="text-muted-foreground text-sm">{div.desc}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {div.products.map((p) => (
              <div key={p.name} className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-industrial hover:-translate-y-2 transition-all duration-500 border border-border">
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{p.specs}</p>
                  <div className="flex gap-2">
                    <button onClick={() => setEnquiryProduct(p.name)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Get Quote</button>
                    <a href={`https://wa.me/918120120714?text=${encodeURIComponent(`Hi I-Lab, I'm interested in ${p.name}. Please share details.`)}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors font-medium">WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={`https://wa.me/918120120714?text=${encodeURIComponent(`Hi I-Lab, I need bulk inquiry for ${div.title}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
              Bulk Inquiry for {div.title} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    ))}

    <section className="py-24 lg:py-32 bg-gradient-accent blueprint-grid-dark">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">Need Custom Manufacturing?</h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">We manufacture to your exact specifications — get a custom quote today</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">Custom Order <ArrowRight className="w-4 h-4" /></Link>
          <a href="https://wa.me/918120120714?text=Hi%20I-Lab%2C%20I%20need%20a%20custom%20manufacturing%20quote" target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2">WhatsApp Inquiry</a>
        </div>
      </div>
    </section>

      {enquiryProduct && <ProductEnquiryForm productName={enquiryProduct} onClose={() => setEnquiryProduct(null)} />}
    </Layout>
  );
};

export default Products;
