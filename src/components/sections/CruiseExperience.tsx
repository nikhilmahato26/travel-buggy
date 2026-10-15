import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Anchor, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../../utils/whatsapp';
import { scrollToSection } from '../../utils/contact';

export interface CruiseExperienceProps {
  onCruiseEnquire?: () => void;
}

export const CruiseExperience: React.FC<CruiseExperienceProps> = ({ onCruiseEnquire }) => {
  const cruiseWhatsAppUrl = getWhatsAppUrl(WHATSAPP_PRESETS.cruise);

  const cruiseHighlights = [
    'Domestic & International Cruise Enquiries',
    'Scenic Island & Coastal Sailing Routes',
    'Family, Group & Honeymoon Voyage Enquiries',
    'Assistance with Cabin Selection & Bookings'
  ];

  return (
    <section id="cruises" className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Ocean Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full border border-white/20" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full border border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading in Dark Theme */}
        <SectionHeading
          eyebrow="OCEAN ESCAPES"
          badge="Cruise Booking"
          heading="SAIL TOWARD YOUR NEXT ADVENTURE"
          supportingText="Explore cruise holiday possibilities and contact Travel Buggy to discuss available options for your preferred destination and travel dates."
          theme="dark"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Cruise Visual Showcase */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Luxury Cruise Liner on the Ocean"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-light">Ocean Voyages</span>
                  <p className="text-base font-bold text-white">Luxury Cruise Liners</p>
                </div>
              </motion.div>

              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-white/10 relative group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80"
                    alt="Tropical Island Shoreline for Cruise Travelers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-bold text-white">Tropical Shore Excursions</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-white/10 relative group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                    alt="Ocean Sunset Cruise Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-bold text-white">Sunset Island Sailings</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Cruise Content & Enquiry Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/20 text-secondary-light border border-secondary/30 text-xs font-bold">
              <Anchor className="h-4 w-4" />
              <span>Cruise Enquiries & Bookings</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Experience the Magic of Floating Resorts & Island Stops
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Step aboard world-class cruise experiences. Travel Buggy assists travelers from Hyderabad with finding the right cruise itineraries, cabin types, and seasonal sailing options.
            </p>

            <div className="space-y-3 pt-2">
              {cruiseHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                    <CheckCircle className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Availability Note</span>
              <p className="text-xs text-slate-300">
                Cruise availability, routes, and cabin fares vary by season and booking window. Contact our team to check current availability for your intended travel period.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={cruiseWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 text-sm font-bold shadow-lg shadow-[#25D366]/25 transition-all"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>ENQUIRE ABOUT CRUISES</span>
              </a>

              <button
                onClick={() => {
                  if (onCruiseEnquire) onCruiseEnquire();
                  else scrollToSection('enquiry-form');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-5 py-3 text-sm font-bold shadow-lg shadow-accent/25 transition-all"
              >
                <Send className="h-4 w-4" />
                <span>Plan Cruise Trip</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
