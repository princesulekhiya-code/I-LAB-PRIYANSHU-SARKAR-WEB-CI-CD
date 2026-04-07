import { Reveal } from "@/hooks/use-scroll-reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What products does I-Lab manufacture?",
    a: "We manufacture laboratory instruments (hot air ovens, autoclaves, incubators, laminar airflow, fume hoods), water treatment plants (RO, DM, ETP, STP), clean room systems (air showers, pass boxes, modular clean rooms), and biochemical products (mushroom spawn, bio-cultures).",
  },
  {
    q: "Do you provide custom manufacturing?",
    a: "Yes, we specialize in custom manufacturing. Every product can be tailored to your exact specifications — size, material (SS 304/316, MS), capacity, and features. Share your requirements and we'll provide a detailed quote.",
  },
  {
    q: "What is the delivery timeline?",
    a: "Standard equipment: 7-15 working days. Custom orders: 15-30 working days depending on complexity. Water treatment plants and clean room installations: 30-60 days including site work.",
  },
  {
    q: "Do you provide installation and AMC services?",
    a: "Yes, we provide complete turnkey installation, commissioning, operator training, and Annual Maintenance Contracts (AMC) across India. Our technical team handles everything from delivery to after-sales support.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We deliver and install across all of India. Our headquarters is in Bhopal, MP, but we regularly serve clients in Delhi, Mumbai, Chennai, Hyderabad, Kolkata, and all major cities and towns.",
  },
  {
    q: "Are your products ISO/GMP compliant?",
    a: "Yes, our manufacturing follows ISO 9001:2015 quality management standards. Our lab equipment and clean room systems are designed to meet GMP and CPCB/SPCB compliance requirements.",
  },
  {
    q: "How can I get a quotation?",
    a: "You can request a quote through our Contact page, call us at +91 8120120714, or WhatsApp us directly. We typically respond within 2-4 hours during business hours.",
  },
  {
    q: "Do you supply water treatment chemicals?",
    a: "Yes, we manufacture and supply a complete range of water treatment chemicals including coagulants, flocculants, pH adjusters, anti-scalants, and specialty chemicals for ETP/STP/RO systems.",
  },
];

const FAQSection = () => (
  <section className="py-24 lg:py-32 blueprint-grid">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our manufacturing, products, and services" />
      </Reveal>
      <div className="max-w-3xl mx-auto">
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card data-[state=open]:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5 text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FAQSection;
