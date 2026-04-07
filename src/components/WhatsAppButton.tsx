import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918120120714?text=Hi%20I-Lab%2C%20I%20need%20information%20about%20your%20products%20and%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
    <span className="absolute right-full mr-3 bg-card text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border">
      Chat with us
    </span>
  </a>
);

export default WhatsAppButton;
