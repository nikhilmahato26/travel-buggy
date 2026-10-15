import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { DestinationCard } from '../ui/DestinationCard';
import { INTERNATIONAL_DESTINATIONS } from '../../data/destinations';

export interface InternationalDestinationsProps {
  onEnquireClick?: (destinationName: string, serviceType?: string) => void;
}

export const InternationalDestinations: React.FC<InternationalDestinationsProps> = ({ onEnquireClick }) => {
  return (
    <section id="destinations" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="INTERNATIONAL HOLIDAYS"
          badge="Global Enquiries"
          heading="EXPLORE THE WORLD"
          supportingText="From tropical escapes to international city experiences, enquire about travel options for your next overseas holiday with dedicated Hyderabad booking support."
        />

        {/* International Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INTERNATIONAL_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onEnquireClick={onEnquireClick}
              featured={destination.featured}
            />
          ))}
        </div>

        {/* Global Travel Notice */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <p className="text-xs sm:text-sm text-brandText-supporting">
            * All international trips are personalized to your chosen travel dates, preferred airline, and stay category. <strong className="text-primary font-bold">Enquire for current international airfares and hotel rates.</strong>
          </p>
        </div>

      </div>
    </section>
  );
};
