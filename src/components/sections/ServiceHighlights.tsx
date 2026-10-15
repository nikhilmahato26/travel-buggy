import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Ship, Compass, ArrowRight } from 'lucide-react';
import { HIGHLIGHT_SERVICES } from '../../data/services';
import { scrollToSection } from '../../utils/contact';

export interface ServiceHighlightsProps {
  onSelectService?: (serviceType: string) => void;
}

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Plane': return <Plane className="h-6 w-6" />;
      case 'Hotel': return <Hotel className="h-6 w-6" />;
      case 'Ship': return <Ship className="h-6 w-6" />;
      case 'Compass': return <Compass className="h-6 w-6" />;
      default: return <Compass className="h-6 w-6" />;
    }
  };

  const handleClick = (serviceType: string, id: string) => {
    if (id === 'highlight-cruises') {
      scrollToSection('cruises');
    } else if (id === 'highlight-packages') {
      scrollToSection('destinations');
    } else {
      if (onSelectService) {
        onSelectService(serviceType);
      } else {
        scrollToSection('enquiry-form');
      }
    }
  };

  return (
    <section className="relative -mt-6 z-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHT_SERVICES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => handleClick(item.serviceType, item.id)}
              className="group cursor-pointer rounded-2xl bg-white p-6 shadow-soft hover:shadow-card-hover border border-slate-100 hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 mb-4 shadow-sm">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brandText-supporting leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors">
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
