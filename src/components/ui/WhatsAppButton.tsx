import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../../utils/whatsapp';

export interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = '',
}) => {
  const url = getWhatsAppUrl(customMessage || WHATSAPP_PRESETS.default);

  return (
    <div className={`fixed bottom-24 md:bottom-8 right-5 sm:right-7 z-40 ${className}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Travel Buggy on WhatsApp"
        className="group relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        {/* Pulse animation ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 duration-1000 pointer-events-none" />

        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 fill-white relative z-10" />

        {/* Desktop Tooltip */}
        <span className="hidden md:group-hover:inline-block absolute right-full mr-3 whitespace-nowrap bg-primary text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg pointer-events-none transition-all">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
};
