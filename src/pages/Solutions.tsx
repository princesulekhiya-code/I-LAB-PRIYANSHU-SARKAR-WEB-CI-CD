import usePageSEO from "@/hooks/use-page-seo";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Factory, Sprout, Wind, Settings, Shield, Users, ClipboardCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroSolutionsImg from "@/assets/hero-solutions.jpg";
import waterTestingImg from "@/assets/water-testing.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import mushroomFarmingImg from "@/assets/mushroom-farming.jpg";


const solutions = [
  { icon: Factory, title: "Complete Lab-to-Factory Setup", desc: "Turnkey laboratory and production facility design, manufacturing, and installation.", features: ["Lab design & planning", "Equipment manufacturing", "Infrastructure installation", "Validation & compliance"], img: laminarCabinetImg },
  { icon: Droplets, title: "Water Purification & Treatment Systems", desc: "End-to-end water treatment solutions — RO, DM, ETP, STP with chemical supply.", features: ["RO & DM plant manufacturing", "ETP/STP systems", "Chemical dosing & supply", "Compliance support"], img: etpStpImg },
  { icon: Wind, title: "Controlled Clean Room Environments", desc: "Modular clean rooms, laminar flow systems, and sterile production environments.", features: ["Clean room design", "Laminar airflow units", "Air showers & pass boxes", "HVAC filtration"], img: laminarCabinetImg },
  { icon: Sprout, title: "Mushroom Production & Biochemical Units", desc: "Controlled environment mushroom farms, spawn labs, and bio-culture production facilities.", features: ["Mushroom lab setup", "Spawn production facility", "Bio-culture production", "Agricultural microbials"], img: mushroomFarmingImg },
];

const steps = [
  { num: "01", title: "Assessment", desc: "Understanding your requirements and site conditions" },
  { num: "02", title: "Design", desc: "Custom engineering design and technical specifications" },
  { num: "03", title: "Manufacturing", desc: "In-house fabrication with ISO-grade quality control" },
  { num: "04", title: "Installation", desc: "On-site delivery, installation, and commissioning" },
  { num: "05", title: "Support", desc: "AMC, maintenance, and 24/7 technical support" },
];

const Solutions = () => {
  usePageSEO({ title: "Turnkey Lab Setup & Water Treatment Solutions Bhopal", description: "Complete turnkey laboratory setup, water treatment systems, clean room solutions & mushroom spawn production lab solutions by I-Lab Bhopal. End-to-end engineering for government & private sector.", keywords: "turnkey lab setup India, water treatment solutions Bhopal, clean room solutions Madhya Pradesh, mushroom spawn production lab, complete lab solutions, ETP STP solutions, engineering solutions Bhopal", canonical: "https://ilabgroup.in/solutions" });
  return (
  <Layout>
    <PageHero
      title="Industrial Engineering Solutions"
      subtitle="Turnkey Manufacturing & Installation Solutions"
      bgImage={heroSolutionsImg}
      breadcrumb={[{ label: "Engineering Solutions" }]}
    />

    <section className="py-24 lg:py-32 blueprint-grid">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Solutions" title="Engineering Solutions We Deliver" subtitle="Complete turnkey solutions from design to installation and support" />
        <div className="space-y-12">
          {solutions.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-industrial border border-border">
                  <img src={s.img} alt={s.title} className="w-full h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-foreground"><span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />{f}</li>))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">Get Quote <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-hero blueprint-grid-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Process" title="How We Deliver" subtitle="Structured engineering workflow from concept to commissioning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="glass-card-dark rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4 shadow-glow-green">
                <span className="text-primary-foreground font-heading font-bold">{step.num}</span>
              </div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-2">{step.title}</h4>
              <p className="text-primary-foreground/60 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-gradient-accent">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Build Your Facility?</h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">Custom engineering solutions tailored to your industry needs</p>
        <Link to="/contact" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">Get Started <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </section>
  </Layout>
  );
};

export default Solutions;
