import usePageSEO from "@/hooks/use-page-seo";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Shield, Leaf, Settings, Clock, Truck, Factory, Wrench, Beaker, Sprout } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroAboutImg from "@/assets/hero-about.jpg";
import aboutImg from "@/assets/about-lab.jpg";
import teamImg from "@/assets/team-real.png";
import qualityCertImg from "@/assets/quality-cert.jpg";
import customFabricationImg from "@/assets/custom-fabrication.jpg";

const timeline = [
  { year: "2009", title: "Founded", desc: "I-Lab established as a laboratory equipment manufacturing company in Bhopal." },
  { year: "2012", title: "ISO Certified", desc: "Achieved ISO 9001 & 14001 certification for manufacturing quality." },
  { year: "2018", title: "Expanded Divisions", desc: "Added water treatment, clean room, and biochemical production divisions." },
  { year: "2024", title: "Industry Leader", desc: "Recognized as a multi-division manufacturing and engineering company." },
];

const ecosystem = [
  { icon: Wrench, title: "Fabrication", desc: "In-house metalwork, welding, and precision machining" },
  { icon: Beaker, title: "Testing & QC", desc: "Rigorous quality control and performance testing" },
  { icon: Factory, title: "Assembly", desc: "Skilled assembly of complex instruments and systems" },
  { icon: Shield, title: "Validation", desc: "ISO-compliant validation and documentation" },
  { icon: Truck, title: "Dispatch", desc: "Secure packaging and pan-India delivery" },
];

const whyUs = [
  { icon: Award, title: "Manufacturing Excellence", desc: "15+ years of precision manufacturing and engineering expertise." },
  { icon: Shield, title: "Quality Certified", desc: "ISO 9001 and ISO 14001 certified manufacturing processes." },
  { icon: Factory, title: "In-House Production", desc: "Own fabrication workshop and biochemical production laboratory." },
  { icon: Settings, title: "Custom Engineering", desc: "Bespoke solutions designed and built to exact specifications." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical support and AMC services." },
  { icon: Leaf, title: "Sustainable Methods", desc: "Eco-friendly manufacturing and bio-based production systems." },
];

const About = () => {
  usePageSEO({ title: "About I-Lab - Laboratory Equipment Manufacturer Since 2009", description: "I-Lab is a premier manufacturer of laboratory equipment, water treatment plants, clean room systems & laminar airflow units in Bhopal, Madhya Pradesh since 2009. Trusted by BMHRC, ICAR, CSIR, BHEL & 500+ organizations.", keywords: "about I-Lab Bhopal, laboratory equipment company India, lab equipment manufacturer history, clean room company Bhopal, water treatment company Madhya Pradesh", canonical: "https://ilabgroup.in/about" });
  return (
  <Layout>
    <PageHero
      title="About I-Lab"
      subtitle="Engineering, Manufacturing & Scientific Production Excellence Since 2009"
      bgImage={heroAboutImg}
      breadcrumb={[{ label: "About" }]}
    />

    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading badge="Who We Are" title="About I-Lab" center={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>I-Lab is a premier manufacturing and engineering company specializing in laboratory equipment, water treatment plants, clean room systems, and biochemical production. Founded in 2009, we have grown into a multi-division manufacturer trusted by pharma, healthcare, research, and agricultural sectors across India.</p>
              <p>Our in-house fabrication workshop, production laboratory, and skilled engineering team enable us to deliver custom-manufactured solutions — from precision lab instruments to complete water treatment plants and controlled mushroom production facilities.</p>
            </div>
            <div className="flex gap-8 mt-8">
              <div><div className="text-3xl font-heading font-bold text-primary">15+</div><div className="text-sm text-muted-foreground">Years Manufacturing</div></div>
              <div><div className="text-3xl font-heading font-bold text-primary">500+</div><div className="text-sm text-muted-foreground">Projects Delivered</div></div>
              <div><div className="text-3xl font-heading font-bold text-primary">4</div><div className="text-sm text-muted-foreground">Production Divisions</div></div>
            </div>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="I-Lab Manufacturing Facility" className="rounded-2xl shadow-industrial w-full" loading="lazy" width={1024} height={768} />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 hidden lg:block border border-border">
              <div className="text-2xl font-heading font-bold text-secondary">ISO</div>
              <div className="text-sm text-muted-foreground">Certified Manufacturer</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-muted tech-dots">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Production Ecosystem" title="Our Production Ecosystem" subtitle="End-to-end in-house manufacturing capability" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ecosystem.map((step, i) => (
            <div key={step.title} className="relative group">
              <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-industrial transition-all border border-border h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-green transition-all">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
              {i < ecosystem.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-primary/30"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1"><img src={teamImg} alt="I-Lab Team" className="rounded-2xl shadow-industrial w-full" loading="lazy" width={800} height={600} /></div>
          <div className="order-1 lg:order-2">
            <SectionHeading badge="Our Team" title="Engineers, Scientists & Specialists" center={false} />
            <p className="text-muted-foreground leading-relaxed mb-6">Our team combines manufacturing engineers, lab technicians, water treatment specialists, clean room experts, and biochemical scientists — ensuring precision at every stage.</p>
            <ul className="space-y-3">
              {["Manufacturing & Fabrication Engineers", "Water Treatment Plant Specialists", "Clean Room & HVAC Experts", "Mushroom & Biochemical Scientists", "Installation & AMC Support Team"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground"><span className="w-2 h-2 rounded-full bg-secondary shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 blueprint-grid">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Our Journey" title="Manufacturing Journey" subtitle="From a lab equipment workshop to a multi-division manufacturer" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((t) => (
            <div key={t.year} className="bg-card rounded-xl p-6 shadow-card hover:shadow-industrial transition-all text-center border border-border">
              <div className="text-3xl font-heading font-bold text-primary mb-2">{t.year}</div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2"><img src={qualityCertImg} alt="Quality Certification" className="rounded-2xl shadow-industrial w-full" loading="lazy" width={800} height={600} /></div>
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">To manufacture world-class laboratory, water treatment, and clean room solutions that power scientific research and industrial progress.</p>
            </div>
            <div className="border border-border rounded-xl p-6 hover:border-secondary/30 transition-colors">
              <Eye className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">To be India's most trusted manufacturer of scientific infrastructure and biochemical production systems.</p>
            </div>
            <div className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">Our Values</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Precision engineering, innovation, sustainability, and customer-first manufacturing excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Why Us" title="Why Choose I-Lab" subtitle="Trusted manufacturing partner for science and industry" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-industrial hover:-translate-y-1 transition-all border border-border">
              <w.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-gradient-accent blueprint-grid-dark">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">Partner with I-Lab Today</h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">Custom manufacturing, turnkey solutions, and ongoing engineering support</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/products" className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2">View Products <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default About;
