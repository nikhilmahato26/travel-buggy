import React from 'react';
import { MessageCircle, Sparkles, Palmtree, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { DestinationCard } from '../ui/DestinationCard';
import { THAILAND_DESTINATIONS } from '../../data/destinations';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../../utils/whatsapp';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export interface ThailandSpecialsProps {
  onEnquireClick?: (destinationName: string, serviceType?: string) => void;
}

export const ThailandSpecials: React.FC<ThailandSpecialsProps> = ({ onEnquireClick }) => {
  const thailandWhatsAppUrl = getWhatsAppUrl(WHATSAPP_PRESETS.thailand);

  return (
    <section id="thailand-specials" className="py-16 lg:py-24 bg-gradient-to-b from-[#F0F4F8] via-white to-[#FAFBFD] relative">
      {/* Decorative Tropical Wave Accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="THAILAND SPECIALS"
          badge="Specialist Focus"
          heading="DISCOVER THAILAND WITH TRAVEL BUGGY"
          supportingText="Explore Thailand's beaches, vibrant cities, island escapes, and cultural attractions. Contact Travel Buggy to enquire about Thailand holiday options and current travel rates."
        />

        {/* Promotional Rate Notice Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-secondary/15 via-primary/5 to-accent/15 border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                HYDERABAD'S THAILAND TRAVEL PARTNER
              </p>
              <p className="text-sm font-extrabold text-primary">
                {BUSINESS_CONFIG.thailandSpecialHeadline}
              </p>
            </div>
          </div>

          <a
            href={thailandWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-2 text-xs sm:text-sm font-bold shadow-md hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>Chat for Thailand Rates</span>
          </a>
        </div>

        {/* Destination Discovery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {THAILAND_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onEnquireClick={onEnquireClick}
              featured={destination.featured}
            />
          ))}
        </div>

        {/* Bottom Callout & Main Section CTA */}
        <div className="mt-14 rounded-3xl bg-primary text-white p-8 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Palmtree className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/30 text-secondary-light text-xs font-bold uppercase tracking-wider">
              <Palmtree className="h-3.5 w-3.5" />
              Tailored Thailand Journeys
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Planning a trip to Bangkok, Phuket, Krabi or Pattaya?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are planning a relaxing island getaway, a family holiday, or a romantic retreat, our Hyderabad team provides personalized assistance and competitive travel options.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={thailandWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-[#25D366]/30 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                <span>ENQUIRE ABOUT THAILAND</span>
              </a>

              <button
                onClick={() => {
                  if (onEnquireClick) onEnquireClick('Thailand', 'Thailand Holiday');
                  else scrollToSection('enquiry-form');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 text-sm sm:text-base font-bold transition-all duration-200"
              >
                <span>Complete Enquiry Form</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
