import { Reveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const MapSection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.15em] border border-primary/10 w-fit">
              Visit Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">Our Manufacturing Facility</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">312/9A, Saket Nagar, Near AIIMS, Bhopal - 462024, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Phone</p>
                  <a href="tel:+918120120714" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 8120120714</a>
                  <br />
                  <a href="tel:+918109241030" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 8109241030</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <a href="mailto:ilabbhopal@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">ilabbhopal@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Working Hours</p>
                  <p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-industrial border border-border min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d77.4374!3d23.2099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sSaket%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462024!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="I-Lab Location - Saket Nagar, Bhopal"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default MapSection;
