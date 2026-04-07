import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  { name: "Dr. Rajesh Sharma", role: "Research Director, AIIMS Bhopal", text: "I-Lab manufactured custom lab equipment for our research facility. The precision engineering and on-time delivery exceeded our expectations.", rating: 5 },
  { name: "Priya Verma", role: "Quality Manager, PharmaCorp", text: "Their clean room systems and laminar airflow units meet stringent GMP standards. A reliable manufacturing partner we trust for compliance.", rating: 5 },
  { name: "Amit Patel", role: "Plant Manager, Industrial Zone", text: "The water treatment plant they manufactured and installed has been running flawlessly. Their ETP/STP engineering expertise is outstanding.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24 lg:py-32 bg-steel">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Testimonials" title="What Our Clients Say" subtitle="Trusted by research labs, pharma companies, and industrial manufacturers across India" />
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 150} direction="up">
            <div className="bg-card rounded-xl p-7 shadow-card hover:shadow-industrial hover:-translate-y-2 transition-all duration-500 border border-border relative h-full">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-heading font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
