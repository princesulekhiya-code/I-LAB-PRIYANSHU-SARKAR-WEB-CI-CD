import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";
import certIso from "@/assets/cert-iso.png";
import certGmp from "@/assets/cert-gmp.png";
import certCpcb from "@/assets/cert-cpcb.png";
import certBis from "@/assets/cert-bis.png";

const certs = [
  { img: certIso, title: "ISO 9001:2015", desc: "Quality Management System certified manufacturing processes" },
  { img: certGmp, title: "GMP Compliant", desc: "Good Manufacturing Practices for pharma-grade equipment" },
  { img: certCpcb, title: "CPCB / SPCB", desc: "Water treatment plants compliant with pollution control norms" },
  { img: certBis, title: "BIS Standards", desc: "Products manufactured as per Bureau of Indian Standards" },
];

const CertificationsSection = () => (
  <section className="py-24 lg:py-32 bg-muted tech-dots">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Certifications" title="Quality Certifications & Compliance" subtitle="Our manufacturing meets the highest national and international standards" />
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} direction="scale">
            <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-industrial hover:-translate-y-1 transition-all duration-500 h-full flex flex-col items-center text-center gap-4">
              <img src={c.img} alt={c.title} loading="lazy" width={512} height={512} className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
