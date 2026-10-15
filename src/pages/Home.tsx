import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MobileBottomBar } from '../components/layout/MobileBottomBar';
import { Hero } from '../components/sections/Hero';
import { ServiceHighlights } from '../components/sections/ServiceHighlights';
import { ThailandSpecials } from '../components/sections/ThailandSpecials';
import { DomesticDestinations } from '../components/sections/DomesticDestinations';
import { InternationalDestinations } from '../components/sections/InternationalDestinations';
import { Services } from '../components/sections/Services';
import { CruiseExperience } from '../components/sections/CruiseExperience';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { HowItWorks } from '../components/sections/HowItWorks';
import { TravelEnquiryForm } from '../components/sections/TravelEnquiryForm';
import { Contact } from '../components/sections/Contact';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { BUSINESS_CONFIG } from '../config/business';
import { scrollToSection } from '../utils/contact';

export const Home: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('Thailand Holiday');

  const handleDestinationEnquire = (destinationName: string, serviceType?: string) => {
    setSelectedDestination(destinationName);
    if (serviceType) {
      setSelectedService(serviceType);
    }
    scrollToSection('enquiry-form');
  };

  const handleServiceSelect = (serviceType: string) => {
    setSelectedService(serviceType);
    setSelectedDestination('');
    scrollToSection('enquiry-form');
  };

  const handleCruiseSelect = () => {
    setSelectedService('Cruise Booking');
    setSelectedDestination('Cruise Vacation');
    scrollToSection('enquiry-form');
  };

  // Structured Data schema for SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": BUSINESS_CONFIG.name,
    "description": "Travel Buggy in Hyderabad offers flight ticket booking, hotel booking, cruise enquiries, domestic and international holiday packages, and Thailand travel enquiries.",
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Telangana"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "knowsAbout": [
      "Thailand travel bookings",
      "Flight ticket booking",
      "Hotel booking",
      "Cruise booking",
      "Domestic holiday packages",
      "International holiday packages"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-brandText-main selection:bg-secondary selection:text-white">
      {/* SEO & Meta tags */}
      <Helmet>
        <title>Travel Buggy Hyderabad | Flights, Hotels, Cruises & Holiday Packages</title>
        <meta
          name="description"
          content="Travel Buggy in Hyderabad offers flight ticket booking, hotel booking, cruise enquiries, domestic and international holiday packages, and Thailand travel enquiries."
        />
        <meta
          name="keywords"
          content="Travel Buggy Hyderabad, travel agency Hyderabad, flight ticket booking Hyderabad, hotel booking Hyderabad, cruise booking Hyderabad, domestic holiday packages, international holiday packages, Thailand tour packages from Hyderabad, Thailand travel booking Hyderabad, international travel enquiries Hyderabad"
        />
        <meta property="og:title" content="Travel Buggy Hyderabad | Flights, Hotels, Cruises & Holiday Packages" />
        <meta
          property="og:description"
          content="Travel Buggy in Hyderabad offers flight ticket booking, hotel booking, cruise enquiries, domestic and international holiday packages, and Thailand travel enquiries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Service Highlights */}
        <ServiceHighlights onSelectService={handleServiceSelect} />

        {/* 4. Thailand Specials (Primary Feature) */}
        <ThailandSpecials onEnquireClick={handleDestinationEnquire} />

        {/* 5. Domestic Holiday Destinations (Explore India) */}
        <DomesticDestinations onEnquireClick={handleDestinationEnquire} />

        {/* 6. International Holiday Destinations (Explore the World) */}
        <InternationalDestinations onEnquireClick={handleDestinationEnquire} />

        {/* 7. Travel Services */}
        <Services onSelectService={handleServiceSelect} />

        {/* 8. Cruise Experience Section */}
        <CruiseExperience onCruiseEnquire={handleCruiseSelect} />

        {/* 9. Why Choose Travel Buggy */}
        <WhyChooseUs />

        {/* 10. How It Works */}
        <HowItWorks />

        {/* 11. Travel Enquiry Form */}
        <TravelEnquiryForm
          prefilledDestination={selectedDestination}
          prefilledService={selectedService}
        />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating WhatsApp Button (Desktop) */}
      <WhatsAppButton />

      {/* 15. Mobile Sticky Bottom Bar (Call, WhatsApp, Plan Trip) */}
      <MobileBottomBar />
    </div>
  );
};
