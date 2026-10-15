import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Ship, Compass, Globe, Palmtree, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../data/services';
import { WHATSAPP_PRESETS, getWhatsAppUrl } from '../../utils/whatsapp';

export interface ServiceCardProps {
  service: ServiceItem;
  onEnquire?: (serviceType: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEnquire }) => {
  const getIcon = (name: ServiceItem['iconName']) => {
    const props = { className: "h-6 w-6 sm:h-7 sm:w-7" };
    switch (name) {
      case 'Plane': return <Plane {...props} />;
      case 'Hotel': return <Hotel {...props} />;
      case 'Ship': return <Ship {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Palmtree': return <Palmtree {...props} />;
      default: return <Compass {...props} />;
    }
  };

  const whatsappMessage = WHATSAPP_PRESETS[service.whatsAppPresetKey] || WHATSAPP_PRESETS.default;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Top row: Icon + optional badge */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
            {getIcon(service.iconName)}
          </div>
          {service.badge && (
            <span className="rounded-full bg-accent/15 text-accent border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-extrabold text-primary group-hover:text-secondary-dark transition-colors duration-200 mb-2.5">
          {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-brandText-supporting mb-6">
          {service.fullDescription}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 space-y-2">
        <button
          onClick={() => onEnquire && onEnquire(service.serviceType)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-white py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-200"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="h-4 w-4" />
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-brandText-supporting hover:text-secondary-dark transition-colors py-1"
        >
          <span>or enquire directly via WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};
