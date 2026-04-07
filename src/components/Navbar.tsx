import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sun, Moon, MapPin, Mail, Clock, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-[hsl(215_45%_5%)] text-primary-foreground/60 text-[11px] py-2 fixed top-0 left-0 right-0 z-[60]">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center divide-x divide-primary-foreground/10">
            <a href="https://maps.google.com/?q=312/9A,+Saket+Nagar,+Near+AIIMS,+Bhopal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 pr-4 hover:text-primary-foreground/90 transition-colors">
              <MapPin className="w-3 h-3 text-secondary" />
              312/9A, Saket Nagar, Near AIIMS, Bhopal
            </a>
            <a href="mailto:ilabbhopal@gmail.com" className="flex items-center gap-1.5 px-4 hover:text-primary-foreground/90 transition-colors">
              <Mail className="w-3 h-3 text-secondary" />
              ilabbhopal@gmail.com
            </a>
          </div>
          <div className="flex items-center divide-x divide-primary-foreground/10">
            <a href="tel:+918120120714" className="flex items-center gap-1.5 pr-4 hover:text-primary-foreground/90 transition-colors">
              <Phone className="w-3 h-3 text-secondary" />
              +91 8120120714
            </a>
            <span className="flex items-center gap-1.5 pl-4">
              <Clock className="w-3 h-3 text-secondary" />
              Mon – Sat: 9 AM – 7 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 lg:top-[36px] top-0 ${
        scrolled
          ? "bg-card/[0.98] backdrop-blur-2xl shadow-[0_4px_30px_-4px_hsl(215_40%_8%/0.1)] border-b border-border/80"
          : "bg-card backdrop-blur-xl border-b border-border/40"
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <img src={logo} alt="I-Lab" className="h-10 w-10 rounded-xl border border-border group-hover:border-primary/30 transition-all duration-300 shadow-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-foreground leading-none tracking-tight">I-Lab</span>
                <span className="text-[9px] text-muted-foreground/70 font-medium tracking-[0.12em] uppercase mt-0.5 hidden sm:block">Manufacturing · Bhopal</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gradient-accent rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right section */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <div className="w-px h-6 bg-border/60 mx-1" />

              <a href="tel:+918120120714" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-semibold text-[13px]">8120120714</span>
              </a>

              <Link
                to="/contact"
                className="bg-gradient-accent text-primary-foreground px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:shadow-glow-green transition-all duration-300 hover:-translate-y-px"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-card border-t border-border/60">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.to
                        ? "bg-primary/8 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border/60 flex flex-col gap-2">
                <div className="flex items-center gap-3 px-4 py-2">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4 text-secondary" /> : <Moon className="w-4 h-4 text-secondary" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                </div>
                <a href="tel:+918120120714" className="flex items-center gap-2 text-sm font-medium text-foreground px-4 py-2">
                  <Phone className="w-4 h-4 text-primary" /> +91 8120120714
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-gradient-accent text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center mt-1">
                  Get Manufacturing Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
