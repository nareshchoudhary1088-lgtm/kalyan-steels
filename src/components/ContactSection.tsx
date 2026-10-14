import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("enquiries").insert({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="get-quote" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 border border-slate-200 rounded-full bg-white font-bold text-secondary uppercase tracking-[0.3em] text-[10px] sm:text-xs shadow-sm">
            Connect With Us
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 text-primary font-rozha tracking-tight drop-shadow-sm">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">Together</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed mb-12">
            Connect with our industrial experts for custom fabrication quotes and premium product inquiries.
          </p>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl p-2 bg-white mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kalyan+Steel+Patrunivalasa+Srikakulam"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[250px] sm:h-[320px] bg-slate-100 rounded-xl overflow-hidden shadow-inner relative group"
            title="Open in Google Maps"
          >
            {/* Invisible overlay to capture clicks and add a subtle hover effect */}
            <div className="absolute inset-0 z-10 bg-transparent cursor-pointer group-hover:bg-black/5 transition-colors duration-300" />
            <iframe
              title="Kalyan Steel Location"
              src="https://maps.google.com/maps?q=KALYAN+STEEL,+Patrunivalasa,+Andhra+Pradesh&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="pointer-events-none"
            />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div className="space-y-10">
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center gap-3">
                    <div className="p-2 bg-primary/5 rounded-full border border-primary/10">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    Srikakulam
                  </h3>
                  <p className="text-primary text-lg leading-relaxed mb-2 font-bold font-rozha tracking-wide">
                    Kalyan Steel
                  </p>
                  <p className="text-slate-500 text-base leading-relaxed font-light">
                    856, 1, 1-37-1, Pedapadu Rd, near Bharat petroleum,<br />
                    Visakha A Colony, Patrunivalasa,<br />
                    Srikakulam, Andhra Pradesh 532001
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kalyan+Steel+Patrunivalasa+Srikakulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-white font-bold text-[10px] uppercase tracking-wider bg-primary px-5 py-3 rounded-sm hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    Locate Main Office &#8599;
                  </a>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t border-slate-200">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/5 rounded-full border border-primary/10">
                      <Phone size={18} className="text-primary" />
                    </div>
                    Phone
                  </h3>
                  <div className="space-y-2">
                    <a href="tel:+919849094570" className="block text-primary hover:text-primary/80 text-base font-medium transition-colors">+91 98490 94570</a>
                    <a href="tel:+918523026075" className="block text-primary hover:text-primary/80 text-base font-medium transition-colors">+91 85230 26075</a>
                    <a href="tel:+918074425605" className="block text-primary hover:text-primary/80 text-base font-medium transition-colors">+91 80744 25605</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/5 rounded-full border border-primary/10">
                      <Mail size={18} className="text-primary" />
                    </div>
                    Email
                  </h3>
                  <a href="mailto:kalyansteels44@gmail.com" className="block text-primary hover:text-primary/80 text-base font-medium transition-colors break-all">
                    kalyansteels44@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div id="enquiry-form" className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden group scroll-mt-28">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary" />

            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-rozha">Send an Enquiry</h3>
            <p className="text-slate-500 text-sm mb-8 font-light">Please share your requirements below. Our experts will contact you quickly with a personalized quote.</p>

            {submitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                <p className="text-slate-500">Thank you for reaching out. We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g., Kalyan Sharma"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-800 placeholder:text-slate-400 font-light"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g., 9849094570"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-800 placeholder:text-slate-400 font-light"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g., kalyan@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-800 placeholder:text-slate-400 font-light"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="e.g., I need a quote for a 20ft stainless steel balcony railing and a main gate..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-800 placeholder:text-slate-400 font-light resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 mt-2 bg-primary hover:bg-primary/90 text-white font-bold tracking-wider uppercase text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(122,0,16,0.4)] hover:shadow-[0_0_30px_rgba(122,0,16,0.6)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group border border-primary"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Submit Enquiry"
                  )}
                  {!loading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
