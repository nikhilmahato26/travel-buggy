import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Send, Check } from 'lucide-react';
import type { DestinationItem } from '../../data/destinations';
import { getDestinationWhatsAppUrl } from '../../utils/whatsapp';
import { scrollToSection } from '../../utils/contact';

export interface DestinationCardProps {
  destination: DestinationItem;
  onEnquireClick?: (destinationName: string, serviceType?: string) => void;
  featured?: boolean;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onEnquireClick,
  featured = false,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleEnquireForm = () => {
    if (onEnquireClick) {
      const serviceType = destination.category === 'thailand' 
        ? 'Thailand Holiday' 
        : destination.category === 'domestic' 
        ? 'Domestic Holiday Package' 
        : 'International Holiday Package';
      onEnquireClick(destination.name, serviceType);
    } else {
      scrollToSection('enquiry-form');
    }
  };

  const whatsappUrl = getDestinationWhatsAppUrl(
    destination.name, 
    destination.category === 'thailand' ? 'Thailand' : destination.country
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
        featured ? 'ring-2 ring-secondary/50' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 animate-pulse bg-slate-200" />
        )}
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80' : destination.imageUrl}
          alt={`${destination.name}, ${destination.country}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Subtle Dark Gradient Overlay for Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Badges on top */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 items-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-primary shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {destination.country}
          </span>
          {destination.featured && (
            <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
              Popular
            </span>
          )}
        </div>

        {/* Destination Name on image base */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-sm tracking-tight">
            {destination.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-200 line-clamp-1">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-5 justify-between">
        <div>
          <p className="text-sm leading-relaxed text-brandText-supporting mb-4">
            {destination.description}
          </p>

          {/* Highlights */}
          {destination.highlights && destination.highlights.length > 0 && (
            <div className="mb-4 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary/70">
                Key Experiences:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {destination.highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-brandText-main">
                    <Check className="h-3.5 w-3.5 shrink-0 text-secondary" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rates Disclaimer & Actions */}
        <div className="pt-3 border-t border-slate-100 mt-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-3 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100">
            <span>Rates:</span>
            <span className="text-primary font-bold">Enquire for Current Rates</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleEnquireForm}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary text-white px-3 py-2.5 text-xs sm:text-sm font-bold hover:bg-primary-dark transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Plan Trip</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-white px-3 py-2.5 text-xs sm:text-sm font-bold hover:bg-[#20BD5A] transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow shadow-[#25D366]/20"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
