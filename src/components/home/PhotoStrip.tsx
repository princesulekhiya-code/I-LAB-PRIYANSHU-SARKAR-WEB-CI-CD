import { useRef, useState, useCallback, useEffect } from "react";
import waterTestingImg from "@/assets/water-testing.jpg";
import etpStpImg from "@/assets/etp-stp.jpg";
import mushroomFarmingImg from "@/assets/mushroom-farming.jpg";
import laminarCabinetImg from "@/assets/laminar-cabinet.jpg";
import microscopeImg from "@/assets/microscope-lab.jpg";
import stpPlantImg from "@/assets/stp-plant.jpg";
import incubatorImg from "@/assets/incubator.jpg";
import hotAirOvenImg from "@/assets/hot-air-oven.jpg";
import customFabricationImg from "@/assets/custom-fabrication.jpg";
import autoclaveImg from "@/assets/autoclave.jpg";
import fumeHoodImg from "@/assets/fume-hood.jpg";

const photos = [
  { img: hotAirOvenImg, label: "Lab Equipment" },
  { img: etpStpImg, label: "Water Treatment" },
  { img: laminarCabinetImg, label: "Clean Room" },
  { img: mushroomFarmingImg, label: "Production Lab" },
  { img: microscopeImg, label: "Instruments" },
  { img: stpPlantImg, label: "ETP/STP" },
  { img: incubatorImg, label: "Manufacturing" },
  { img: incubatorImg, label: "Biochemical" },
  { img: customFabricationImg, label: "Fabrication" },
  { img: autoclaveImg, label: "Autoclave" },
  { img: waterTestingImg, label: "Testing" },
  { img: fumeHoodImg, label: "Fume Hood" },
];

const PhotoStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const autoScrollRef = useRef<number>();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const tick = () => {
      if (!isDragging && !isPaused && el) {
        el.scrollLeft += 1;
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

  const allPhotos = [...photos, ...photos];

  return (
    <section className="py-4 bg-hero overflow-hidden border-y border-primary-foreground/10">
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {allPhotos.map((p, i) => (
          <div key={i} className="shrink-0 w-52 h-36 rounded-xl overflow-hidden relative group border border-primary-foreground/10 select-none">
            <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none" loading="lazy" width={800} height={600} />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-2">
              <span className="text-xs text-primary-foreground font-medium">{p.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoStrip;
