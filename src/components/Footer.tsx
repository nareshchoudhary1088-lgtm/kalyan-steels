import { Phone, Mail, MapPin } from "lucide-react";
import ksLogo from "../assets/new_logo2.png";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const contact = formData.get("contact") as string;
    
    if (!contact) return;

    const isEmail = contact.includes("@");
    const type = isEmail ? "email" : "phone";

    setLoading(true);
    const { error } = await supabase.from("subscribers").insert({ contact, type });
    setLoading(false);

    if (error) {
      if (error.code === '23505') {
         toast.error("You are already subscribed!");
      } else {
         toast.error(`Failed: ${error.message || "Please try again."}`);
      }
    } else {
      toast.success("Successfully subscribed to price alerts!");
      form.reset();
    }
  };

  return (
    <footer className="bg-white text-slate-800 py-16 sm:py-20 relative overflow-hidden border-t border-slate-200">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 pb-16 border-b border-slate-200">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full overflow-hidden shadow-md border border-slate-200 bg-slate-50">
                <img
                  src={ksLogo}
                  alt="Kalyan Steel"
                  className="w-full h-full object-cover scale-[1.1] filter drop-shadow-sm"
                />
              </div>
              <span className="font-rozha font-bold text-2xl sm:text-3xl tracking-wide text-primary whitespace-nowrap drop-shadow-sm">
                Kalyan Steel
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Your premier destination for Jindal stainless steel pipes (Grade 316, 304 & JT), plus expert fabrication works including staircase railings, high-security gates, intricate grills, and custom signage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Product", "Get Quote"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-500 text-sm font-medium hover:text-primary transition-all hover:pl-2"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                856, 1, 1-37-1, Pedapadu Rd, near Bharat petroleum, Visakha A Colony,<br />
                Patrunivalasa, Srikakulam,<br />
                Andhra Pradesh 532001
              </p>
              <div className="space-y-2">
                <a href="tel:+919849094570" className="text-primary text-[13px] hover:text-primary/80 block font-medium transition-colors">+91 98490 94570</a>
                <a href="tel:+918523026075" className="text-primary text-[13px] hover:text-primary/80 block font-medium transition-colors">+91 85230 26075</a>
                <a href="tel:+918074425605" className="text-primary text-[13px] hover:text-primary/80 block font-medium transition-colors">+91 80744 25605</a>
                <a href="mailto:kalyansteels44@gmail.com" className="text-primary text-[13px] hover:text-primary/80 block font-medium transition-all break-all mt-4">
                  kalyansteels44@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Price Alerts</h4>
            <div className="space-y-4">
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Subscribe to get notified about steel price drops, new arrivals, and clearance sales.
              </p>
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 mt-4"
              >
                <input 
                  type="text" 
                  name="contact"
                  required
                  placeholder="Email or WhatsApp number" 
                  className="bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-light"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white font-bold text-sm rounded-md px-4 py-3 hover:bg-primary/90 transition-colors uppercase tracking-wider disabled:opacity-50 shadow-sm"
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">© 2025 Kalyan Steel. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Srikakulam</span>
            <span className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
