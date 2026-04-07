import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Globe, Factory, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";
import heroOvenImg from "@/assets/hero-hot-air-oven.jpg";
import heroCleanRoomImg from "@/assets/hero-clean-room.jpg";
import heroProductionImg from "@/assets/hero-production-lab.jpg";
import heroFurnitureImg from "@/assets/hero-lab-furniture.jpg";

const heroProducts = [
  { img: heroOvenImg, label: "Hot Air Oven", cat: "Lab Equipment" },
  { img: heroCleanRoomImg, label: "Clean Room Systems", cat: "Clean Air" },
  { img: heroProductionImg, label: "Production Lab", cat: "Biochemical" },
  { img: heroFurnitureImg, label: "Lab Furniture", cat: "Infrastructure" },
];

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center bg-hero overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-60" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_45%_4%/0.60)] via-[hsl(213_50%_8%/0.45)] to-[hsl(215_40%_6%/0.55)]" />
    </div>

    {/* Subtle grid overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(213 90% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(213 90% 60%) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

    {/* Top accent */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-accent" />

    {/* Decorative elements */}
    <div className="absolute top-32 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[120px] hidden lg:block" />
    <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-[100px] hidden lg:block" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-0">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left content - 7 cols */}
        <div className="lg:col-span-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 mb-8 animate-fade-up">
            <Factory className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-[0.15em]">Manufacturing & Engineering Since 2009</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-heading font-bold text-primary-foreground leading-[1.08] tracking-tight animate-fade-up animation-delay-100">
            Manufacturer of{" "}
            <span className="text-gradient">Laboratory Equipment</span>
            , Furniture, Water Treatment Chemicals &{" "}
            <span className="text-gradient">Clean Room Systems</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-secondary font-semibold text-lg lg:text-xl tracking-wide animate-fade-up animation-delay-150">
            "Engineering Precision, Delivering Excellence"
          </p>
          <p className="mt-3 text-primary-foreground/60 text-base lg:text-lg max-w-xl leading-relaxed animate-fade-up animation-delay-200">
            Precision-engineered lab instruments, furniture, water treatment chemicals, clean room systems & biochemical solutions — trusted by 500+ clients across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 animate-fade-up animation-delay-300">
            <Link to="/contact" className="group bg-gradient-accent text-primary-foreground px-7 py-3.5 rounded-xl font-semibold hover:shadow-glow-green transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm">
              Get Manufacturing Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products" className="border border-primary-foreground/15 text-primary-foreground/80 px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-foreground/5 hover:text-primary-foreground hover:border-primary-foreground/25 transition-all duration-300 text-center text-sm">
              View Product Divisions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 animate-fade-up animation-delay-400">
            {[
              { icon: Shield, text: "ISO Compliant" },
              { icon: Users, text: "In-House Team" },
              { icon: Globe, text: "Pan-India Delivery" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 text-primary-foreground/40 text-xs font-medium">
                <Icon className="w-3.5 h-3.5 text-secondary/70" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Product showcase grid - 5 cols */}
        <div className="hidden lg:block lg:col-span-5 animate-fade-up animation-delay-300">
          <div className="grid grid-cols-2 gap-3">
            {heroProducts.map((product, i) => (
              <Link
                to="/products"
                key={product.label}
                className={`group relative rounded-2xl overflow-hidden border border-primary-foreground/8 hover:border-primary-foreground/20 transition-all duration-500 ${
                  i === 0 || i === 3 ? "h-[200px]" : "h-[240px]"
                }`}
              >
                <img
                  src={product.img}
                  alt={product.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading={i < 2 ? "eager" : "lazy"}
                  width={800}
                  height={600}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_45%_4%/0.85)] via-transparent to-transparent" />

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] px-2.5 py-1 rounded-md bg-primary/80 text-primary-foreground font-semibold backdrop-blur-sm uppercase tracking-wider">
                    {product.cat}
                  </span>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-foreground font-semibold">{product.label}</span>
                    <ChevronRight className="w-4 h-4 text-primary-foreground/50 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(215_45%_5%)] to-transparent" />
  </section>
);

export default HeroSection;
