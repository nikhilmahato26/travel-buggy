import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { DestinationCard } from '../ui/DestinationCard';
import { DOMESTIC_DESTINATIONS } from '../../data/destinations';

export interface DomesticDestinationsProps {
  onEnquireClick?: (destinationName: string, serviceType?: string) => void;
}

export const DomesticDestinations: React.FC<DomesticDestinationsProps> = ({ onEnquireClick }) => {
  return (
    <section id="domestic-destinations" className="py-16 lg:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="DOMESTIC HOLIDAY INSPIRATION"
          heading="EXPLORE INDIA"
          supportingText="Discover domestic destinations and enquire about holiday arrangements tailored to your travel preferences across India's most scenic regions."
        />

        {/* Discovery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOMESTIC_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onEnquireClick={onEnquireClick}
            />
          ))}
        </div>

        {/* Informational Disclaimer Banner */}
        <div className="mt-10 text-center">
          <p className="text-xs text-brandText-supporting bg-white inline-block px-5 py-2.5 rounded-full border border-slate-200/80 shadow-sm">
            ✨ Looking for another Indian destination? We arrange customized travel for all major states. <span className="font-bold text-primary">Enquire with your preferred destination.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
