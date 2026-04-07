import { useState } from "react";
import { X, Send } from "lucide-react";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(10, "Valid phone required").max(15),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

interface ProductEnquiryFormProps {
  productName: string;
  onClose: () => void;
}

const ProductEnquiryForm = ({ productName, onClose }: ProductEnquiryFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: `I'm interested in ${productName}. Please share pricing and details.` });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const waText = encodeURIComponent(`Hi I-Lab,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${productName}\n\n${form.message}`);
    window.open(`https://wa.me/918120120714?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-card rounded-2xl shadow-industrial border border-border w-full max-w-md p-6 relative animate-fade-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"><X className="w-5 h-5" /></button>
        <h3 className="font-heading font-bold text-xl text-foreground mb-1">Get Quote</h3>
        <p className="text-muted-foreground text-sm mb-5">Enquiry for <span className="font-semibold text-foreground">{productName}</span></p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Send className="w-7 h-7 text-secondary" />
            </div>
            <h4 className="font-heading font-bold text-foreground text-lg mb-2">Enquiry Sent!</h4>
            <p className="text-muted-foreground text-sm">We'll get back to you shortly via WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {(["name", "email", "phone"] as const).map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Phone Number"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <textarea
                rows={3}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductEnquiryForm;
