import { useEffect, useState } from "react";
import heroSlide2 from "@/assets/hero-slide2.jpg";
import heroShop from "@/assets/hero-shop.jpg";

// hero-slide1 lives in public/ for a stable URL so the <link rel="preload"> in index.html works
const heroSlide1 = "/hero-slide1.jpg";
const slides = [heroSlide1, heroShop, heroSlide2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[82vh] sm:h-[90vh] min-h-[480px] overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero slide ${i + 1}`}
          width={1440}
          height={900}
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent" />

      {/* Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 overflow-hidden z-10 pointer-events-none">
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,96 C240,20 480,80 720,50 C960,20 1200,70 1440,30 L1440,96 Z" fill="hsl(0 0% 98%)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-5 sm:px-10 max-w-7xl mx-auto">
        <div className="max-w-3xl lg:max-w-4xl w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <p className="text-secondary uppercase tracking-[0.2em] font-bold text-xs sm:text-sm drop-shadow-md">
              Premium Stainless Steel Supplier
            </p>
          </div>

          <h1 className="text-[3.5rem] sm:text-7xl md:text-[8.5rem] leading-[0.9] mb-8 text-white drop-shadow-2xl font-rozha tracking-tight">
            KALYAN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#f9d77e] drop-shadow-lg">
              STEEL
            </span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 font-light leading-relaxed">
            Elevating industrial and residential architecture with bespoke, high-grade steel fabrication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none">
            <a
              href="#product"
              className="px-8 py-4 bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all rounded-sm shadow-[0_0_20px_rgba(122,0,16,0.3)] hover:shadow-[0_0_30px_rgba(122,0,16,0.5)] text-center border border-primary hover:-translate-y-0.5"
            >
              Explore Products
            </a>
            <a
              href="#enquiry-form"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all rounded-sm shadow-lg text-center hover:-translate-y-0.5"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-secondary w-6" : "bg-white/50 w-2"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
