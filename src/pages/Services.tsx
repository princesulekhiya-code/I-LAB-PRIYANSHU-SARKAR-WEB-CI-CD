import usePageSEO from "@/hooks/use-page-seo";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Droplets, Wind, Sprout, Settings, ClipboardCheck, RefreshCw, LayoutGrid } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";
import heroServicesImg from "@/assets/hero-services.jpg";
import hotAirOvenImg from "@/assets/hot-air-oven.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import mushroomFarmingImg from "@/assets/mushroom-farming.jpg";
import labRenovationImg from "@/assets/lab-renovation.jpg";
import customFabricationImg from "@/assets/custom-fabrication.jpg";

const services = [
  { icon: Wrench, title: "Custom Laboratory Equipment Manufacturing", desc: "Design and manufacture precision scientific instruments — ovens, incubators, autoclaves, laminar flow, fume hoods, and custom equipment to your specifications.", img: hotAirOvenImg },
  { icon: Droplets, title: "Water Treatment Plant Fabrication", desc: "End-to-end manufacturing of RO plants, DM plants, ETP/STP systems, and chemical dosing units with installation and commissioning support.", img: etpStpImg },
  { icon: Settings, title: "Chemical Formulation & Supply", desc: "Manufacturing and supply of water treatment chemicals, testing reagents, industrial process chemicals, and EM bio-solutions." },
  { icon: Wind, title: "Clean Room Design & Installation", desc: "Turnkey clean room solutions — laminar airflow, air showers, pass boxes, AHU integration, modular clean rooms, and HVAC filtration systems.", img: laminarCabinetImg },
  { icon: Sprout, title: "Mushroom & Biochemical Lab Setup", desc: "Complete setup of controlled environment mushroom production labs, spawn production facilities, and EM/biochemical manufacturing units.", img: mushroomFarmingImg },
  { icon: ClipboardCheck, title: "Production Process Consultancy", desc: "Expert consulting for lab setup, water treatment compliance, clean room validation, and agricultural production systems." },
  { icon: RefreshCw, title: "Equipment AMC & Maintenance", desc: "Annual maintenance contracts, preventive maintenance, spare parts supply, and 24/7 emergency repair services.", img: customFabricationImg },
  { icon: LayoutGrid, title: "Facility Upgrades & Renovation", desc: "Complete lab renovation — furniture, partitions, gas lines, electrical trunking, HVAC, and infrastructure modernization.", img: labRenovationImg },
];

const Services = () => {
  usePageSEO({ title: "Lab Equipment Manufacturing & Engineering Services Bhopal", description: "Custom laboratory equipment manufacturing, water treatment plant fabrication, clean room installation, laminar airflow systems & AMC services by I-Lab Bhopal. Turnkey solutions for labs across India.", keywords: "lab equipment manufacturing services, water treatment plant fabrication Bhopal, clean room installation India, laminar airflow installation, AMC services lab equipment, turnkey lab setup Bhopal, ETP STP fabrication", canonical: "https://ilabgroup.in/services" });
  return (
  <Layout>
    <PageHero
      title="Manufacturing & Engineering Services"
      subtitle="Custom Manufacturing, Turnkey Installation & Ongoing Support"
      bgImage={heroServicesImg}
      breadcrumb={[{ label: "Manufacturing & Services" }]}
    />

    <section className="py-24 lg:py-32 blueprint-grid">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading badge="Services" title="What We Manufacture & Engineer" subtitle="From precision instruments to complete production facilities" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-industrial hover:-translate-y-2 transition-all duration-500 border border-border h-full">
                {s.img && (
                  <div className="h-48 overflow-hidden relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={600} />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.img ? "-mt-8 relative z-10 border-2 border-card shadow-card" : ""} bg-primary/10`}>
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-gradient-accent blueprint-grid-dark">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">Need a Custom Manufacturing Service?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">Contact us for a free consultation and manufacturing quote</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5 duration-300">Get Free Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href="https://wa.me/918120120714?text=Hi%20I-Lab%2C%20I%20need%20manufacturing%20services" target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2 hover:-translate-y-0.5 duration-300">WhatsApp Us</a>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
  );
};

export default Services;
