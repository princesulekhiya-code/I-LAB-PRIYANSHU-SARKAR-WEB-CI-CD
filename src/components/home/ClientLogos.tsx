import { useRef, useState, useCallback, useEffect } from "react";
import { Reveal } from "@/hooks/use-scroll-reveal";
import logoBmhrc from "@/assets/logo-bmhrc.png";
import logoIcarNihsad from "@/assets/logo-icar-nihsad.png";
import logoCsirAmpri from "@/assets/logo-csir-ampri.png";
import logoIcarIiss from "@/assets/logo-icar-iiss.png";
import logoBhel from "@/assets/logo-bhel.png";
import logoGsi from "@/assets/logo-gsi.png";
import logoRgpv from "@/assets/logo-rgpv.png";
import logoLnct from "@/assets/logo-lnct.png";
import logoCes from "@/assets/logo-ces.png";

const clients = [
  { name: "Bhopal Memorial Hospital", logo: logoBmhrc },
  { name: "ICAR - NIHSAD", logo: logoIcarNihsad },
  { name: "CSIR - AMPRI", logo: logoCsirAmpri },
  { name: "ICAR - IISS", logo: logoIcarIiss },
  { name: "BHEL Bhopal", logo: logoBhel },
  { name: "Geological Survey of India", logo: logoGsi },
  { name: "RGPV University", logo: logoRgpv },
  { name: "LNCT University", logo: logoLnct },
  { name: "CES Analytical", logo: logoCes },
];

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const autoScrollRef = useRef<number>();

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const tick = () => {
      if (!isDragging && !isPaused && el) {
        el.scrollLeft += 1;
        // Reset to start for infinite loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };
    autoScrollRef.current = requestAnimationFrame(tick);
    return () => { if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current); };
  }, [isDragging, isPaused]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    scrollRef.current.scrollLeft = scrollLeftRef.current - (x - startX.current);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  }, []);

  const allClients = [...clients, ...clients];

  return (
    <section className="py-16 lg:py-20 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-[0.15em] mb-10">
            Trusted by Leading Institutions & Organizations
          </p>
        </Reveal>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {allClients.map((client, i) => (
              <div key={`${client.name}-${i}`} className="shrink-0 flex items-center gap-4 px-6 py-4 rounded-xl border border-border/60 bg-card/80 hover:border-primary/20 hover:shadow-card transition-all duration-300 select-none">
                <img src={client.logo} alt={client.name} loading="lazy" width={48} height={48} className="w-12 h-12 object-contain shrink-0 pointer-events-none" />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
