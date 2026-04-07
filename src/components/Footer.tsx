import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Factory } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero text-primary-foreground relative">
      <div className="absolute w-full h-1 bg-gradient-accent" />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="I-Lab" className="h-10 w-10 brightness-200" />
              <div>
                <span className="text-xl font-heading font-bold block">I-Lab</span>
                <span className="text-[10px] text-primary-foreground/50 uppercase tracking-widest">Manufacturing & Engineering</span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Manufacturer of Laboratory Equipment, Water Treatment Plants, Clean Room Systems & Biochemical Production Laboratory. Engineering clean science infrastructure since 2009.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Manufacturing & Services", to: "/services" },
                { label: "Engineering Solutions", to: "/solutions" },
                { label: "Products", to: "/products" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.label} to={link.to} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Manufacturing</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <span>Laboratory Equipment</span>
              <span>Water Treatment Plants</span>
              <span>Water Treatment Chemicals</span>
              <span>Clean Room Systems</span>
              <span>Laminar Airflow Units</span>
               <span>Mushroom & Biochemical Products</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <a href="tel:+918120120714" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +91 8120120714
              </a>
              <a href="tel:+918109241030" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +91 8109241030
              </a>
              <a href="mailto:ilabbhopal@gmail.com" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                ilabbhopal@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                312/9A, Saket Nagar, Near AIIMS, Bhopal - 462024, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} I-Lab. All rights reserved. | Laboratory Equipment Manufacturer | Water Treatment Plant Manufacturer | Clean Room Systems | Biochemical Production Lab
        </div>
      </div>

      <a
        href="https://wa.me/918120120714?text=Hi%20I-Lab%2C%20I%20need%20a%20manufacturing%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
