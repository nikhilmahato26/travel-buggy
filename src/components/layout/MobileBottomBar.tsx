import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 px-3">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={BUSINESS_CONFIG.phoneUri}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-primary active:scale-95 transition-all text-center"
        >
          <Phone className="h-5 w-5 mb-0.5 text-primary" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={BUSINESS_CONFIG.whatsappBaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#25D366] text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <MessageCircle className="h-5 w-5 mb-0.5 fill-white" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Plan Trip CTA */}
        <button
          onClick={() => scrollToSection('enquiry-form')}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-accent text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <Send className="h-5 w-5 mb-0.5" />
          <span className="text-[11px] font-bold">Plan Trip</span>
        </button>
      </div>
    </div>
  );
};
