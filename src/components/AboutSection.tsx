import aboutShop from "@/assets/about-shop.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about-us" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 rounded-bl-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-in slide-in-from-left-8 duration-1000">
            <div className="inline-block mb-4 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full">
              <p className="text-secondary uppercase tracking-[0.3em] font-bold text-[10px] sm:text-xs">
                Our Legacy
              </p>
            </div>
            <h2 className="text-primary mb-6 leading-[1.1] text-5xl sm:text-6xl md:text-7xl font-rozha drop-shadow-sm">
              About Us
            </h2>
            <div className="space-y-6 relative">
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-primary via-secondary to-transparent opacity-50 hidden sm:block rounded-full" />
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                <strong className="font-semibold text-slate-800">Kalyan Steels</strong> is the leading Jindal steel pipe supplier in Patrunivalasa, Srikakulam. We are recognized as the prime source for Jindal Stainless Steel, Carbon Steel, and Alloy Steel pipes & tubes, fittings, Welded Pipes, Flats, Angles, Bars, Rods, and Laser Sheets in premium Grades 304, 316, and JT.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Srikakulam's most trusted name for custom Stainless Steel Gates, Grills, Railings, Glass Railings, Compound Gates, Balcony Railings, Main Doors, Gold Coated Railings, Signboards, Dining Tables, and Chairs.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/our-story"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all rounded-sm shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Discover Our Story
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative animate-in slide-in-from-right-8 duration-1000">
            <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[5rem] shadow-2xl h-80 sm:h-[500px] border border-slate-200">
              <img
                src={aboutShop}
                alt="Kalyan Steels shop"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-110 filter hover:saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                  <p className="font-bold text-xl font-rozha tracking-wide">Since 1998</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Decades of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
