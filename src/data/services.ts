export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  ctaText: string;
  iconName: 'Plane' | 'Hotel' | 'Ship' | 'Compass' | 'Globe' | 'Palmtree';
  serviceType: string;
  whatsAppPresetKey: 'flight' | 'hotel' | 'cruise' | 'domestic' | 'international' | 'thailand';
  badge?: string;
}

export const HIGHLIGHT_SERVICES = [
  {
    id: 'highlight-flights',
    title: 'Flight Booking',
    description: 'Enquire about domestic and international flight tickets with competitive fare options.',
    iconName: 'Plane' as const,
    serviceType: 'Flight Ticket Booking'
  },
  {
    id: 'highlight-hotels',
    title: 'Hotel Booking',
    description: 'Explore accommodation options tailored to your destination, comfort level, and budget.',
    iconName: 'Hotel' as const,
    serviceType: 'Hotel Booking'
  },
  {
    id: 'highlight-cruises',
    title: 'Cruise Holidays',
    description: 'Enquire about luxury and ocean cruise travel experiences for unforgettable voyages.',
    iconName: 'Ship' as const,
    serviceType: 'Cruise Booking'
  },
  {
    id: 'highlight-packages',
    title: 'Holiday Packages',
    description: 'Discover curated domestic and international travel packages designed around you.',
    iconName: 'Compass' as const,
    serviceType: 'Domestic Holiday Package'
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'flight-booking',
    title: 'Flight Ticket Booking',
    shortDescription: 'Domestic and international flights.',
    fullDescription: 'Enquire about domestic and international flight booking options for your travel plans.',
    ctaText: 'ENQUIRE ABOUT FLIGHTS',
    iconName: 'Plane',
    serviceType: 'Flight Ticket Booking',
    whatsAppPresetKey: 'flight'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    shortDescription: 'Curated stays and resorts.',
    fullDescription: 'Find accommodation options for your destination and travel requirements.',
    ctaText: 'ENQUIRE ABOUT HOTELS',
    iconName: 'Hotel',
    serviceType: 'Hotel Booking',
    whatsAppPresetKey: 'hotel'
  },
  {
    id: 'cruise-booking',
    title: 'Cruise Booking',
    shortDescription: 'Ocean escapes & island voyages.',
    fullDescription: 'Explore cruise travel options and enquire about availability, routes, and booking details.',
    ctaText: 'EXPLORE CRUISES',
    iconName: 'Ship',
    serviceType: 'Cruise Booking',
    whatsAppPresetKey: 'cruise'
  },
  {
    id: 'domestic-packages',
    title: 'Domestic Holiday Packages',
    shortDescription: 'Incredible India holidays.',
    fullDescription: 'Plan holidays within India and enquire about destination options and travel arrangements.',
    ctaText: 'EXPLORE INDIA',
    iconName: 'Compass',
    serviceType: 'Domestic Holiday Package',
    whatsAppPresetKey: 'domestic'
  },
  {
    id: 'international-packages',
    title: 'International Holiday Packages',
    shortDescription: 'Worldwide holiday getaways.',
    fullDescription: 'Discover overseas holiday possibilities and enquire about travel arrangements.',
    ctaText: 'EXPLORE INTERNATIONAL TRIPS',
    iconName: 'Globe',
    serviceType: 'International Holiday Package',
    whatsAppPresetKey: 'international'
  },
  {
    id: 'thailand-travel',
    title: 'Thailand Travel Specialist',
    shortDescription: 'Dedicated Thailand expertise.',
    fullDescription: 'Make Thailand your next getaway. Contact Travel Buggy for current travel options and rates.',
    ctaText: 'PLAN A THAILAND TRIP',
    iconName: 'Palmtree',
    serviceType: 'Thailand Holiday',
    whatsAppPresetKey: 'thailand',
    badge: 'Specialist Focus'
  }
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Briefcase' | 'Sparkles' | 'Globe2' | 'UserCheck' | 'MessageSquare' | 'Compass';
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'multiple-services',
    title: 'Multiple Travel Services',
    description: 'Flight tickets, hotels, cruises, and holiday package enquiries in one place.',
    iconName: 'Briefcase'
  },
  {
    id: 'thailand-focused',
    title: 'Thailand-Focused Travel',
    description: 'Special attention and dedicated assistance for Thailand travel enquiries.',
    iconName: 'Sparkles'
  },
  {
    id: 'domestic-international',
    title: 'Domestic & International',
    description: 'Explore travel possibilities within India and overseas destinations.',
    iconName: 'Globe2'
  },
  {
    id: 'personalized-enquiries',
    title: 'Personalized Enquiries',
    description: 'Share your destination and preferences to discuss suitable travel options.',
    iconName: 'UserCheck'
  },
  {
    id: 'easy-communication',
    title: 'Easy Communication',
    description: 'Contact the team directly by phone, email, or fast WhatsApp messaging.',
    iconName: 'MessageSquare'
  },
  {
    id: 'planning-support',
    title: 'Travel Planning Support',
    description: 'Enquire about arrangements and custom requirements for your upcoming journey.',
    iconName: 'Compass'
  }
];

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Choose Your Travel Interest',
    description: 'Select flights, hotels, cruises, or a domestic or international holiday destination.'
  },
  {
    step: '02',
    title: 'Share Your Requirements',
    description: 'Provide your dates, traveller count, destination, and personal preferences via our quick form.'
  },
  {
    step: '03',
    title: 'Discuss Available Options',
    description: 'Contact Travel Buggy to review current options, rates, and customized booking requirements.'
  }
];
