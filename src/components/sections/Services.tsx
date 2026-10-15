import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { ALL_SERVICES } from '../../data/services';

export interface ServicesProps {
  onSelectService?: (serviceType: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="COMPREHENSIVE BOOKINGS"
          heading="EVERYTHING YOU NEED FOR YOUR NEXT JOURNEY"
          supportingText="Whether you need flight tickets, curated hotel stays, ocean cruises, or full holiday arrangements, Travel Buggy coordinates all the details for you."
        />

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ALL_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEnquire={onSelectService}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
