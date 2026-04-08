import { useRef, useState, useCallback, useEffect } from "react";
import { Reveal } from "@/hooks/use-scroll-reveal";

const clients = [
  { name: "Bhopal Memorial Hospital" },
  { name: "ICAR - NIHSAD" },
  { name: "CSIR - AMPRI" },
  { name: "ICAR - IISS" },
  { name: "BHEL Bhopal" },
  { name: "Geological Survey of India" },
  { name: "RGPV University" },
  { name: "LNCT University" },
  { name: "CES Analytical" },
  { name: "CPCB - MPPCB" },
  { name: "Fortcaps Healthcare Limited" },
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
              <div key={`${client.name}-${i}`} className="shrink-0 flex items-center px-8 py-4 rounded-xl border border-border/60 bg-card/80 hover:border-primary/20 hover:shadow-card transition-all duration-300 select-none">
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
