import usePageSEO from "@/hooks/use-page-seo";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Factory } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroContactImg from "@/assets/hero-contact.jpg";

const Contact = () => {
  usePageSEO({ title: "Contact I-Lab - Lab Equipment Manufacturer Bhopal", description: "Contact I-Lab for laboratory equipment, water treatment plants & clean room systems. Call +91 8120120714, email ilabbhopal@gmail.com. Visit: 312/9A Saket Nagar, Near AIIMS, Bhopal 462024.", keywords: "contact lab equipment manufacturer Bhopal, I-Lab phone number, lab equipment supplier contact, water treatment plant inquiry Bhopal, I-Lab address Saket Nagar", canonical: "https://ilabgroup.in/contact" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Manufacturing Inquiry from I-Lab Website*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Subject:* ${encodeURIComponent(form.subject)}%0A*Message:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918120120714?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
    <PageHero
      title="Contact Us"
      subtitle="Get a Custom Manufacturing Quote — We're Ready to Engineer Your Solution"
      bgImage={heroContactImg}
      breadcrumb={[{ label: "Contact" }]}
    />

      <section className="py-24 lg:py-32 blueprint-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionHeading badge="Inquiry" title="Send Manufacturing Inquiry" center={false} />
              {submitted && (
                <div className="bg-secondary/10 text-secondary border border-secondary/20 rounded-lg p-4 mb-6 font-medium">✓ Inquiry sent! We'll respond shortly.</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="+91 XXXXXXXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                    <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="e.g. Custom Lab Equipment Manufacturing" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Requirements *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder="Describe your manufacturing requirements..." />
                </div>
                <button type="submit" className="bg-gradient-accent text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-glow-green">
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <SectionHeading badge="Info" title="Contact Information" center={false} />
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "Manufacturing Office", content: "312/9A, Saket Nagar\nNear AIIMS, Bhopal - 462024\nIndia" },
                  { icon: Phone, title: "Phone", content: "Main: +91 8120120714\nSupport: +91 8109241030", isLink: true },
                  { icon: Mail, title: "Email", content: "ilabbhopal@gmail.com", isEmail: true },
                  { icon: Clock, title: "Business Hours", content: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 bg-muted rounded-xl border border-border">
                    <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-muted rounded-xl overflow-hidden h-[400px] border border-border">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0!2d77.44!3d23.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE0JzI0LjAiTiA3N8KwMjYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="I-Lab Manufacturing Office" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
