export interface BusinessConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneDisplay: string;
  phoneUri: string;
  whatsappPhone: string;
  whatsappBaseUrl: string;
  email: string;
  location: string;
  locationQuery: string;
  thailandSpecialHeadline: string;
  ratesDisclaimer: string;
  services: string[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "TRAVEL BUGGY",
  tagline: "YOUR NEXT ADVENTURE STARTS HERE",
  subTagline: "YOUR PARTNER FOR FLIGHTS, STAYS & HOLIDAY EXPERIENCES",
  phone: "+91 9052720191",
  phoneDisplay: "+91 9052720191",
  phoneUri: "tel:+919052720191",
  whatsappPhone: "919052720191",
  whatsappBaseUrl: "https://wa.me/919052720191",
  email: "sales.thetravelbuggy@gmail.com",
  location: "Hyderabad, Telangana, India",
  locationQuery: "https://www.google.com/maps/search/?api=1&query=Hyderabad,+Telangana,+India",
  thailandSpecialHeadline: "SPECIAL THAILAND TRAVEL DEALS — ENQUIRE FOR OUR BEST AVAILABLE RATES",
  ratesDisclaimer: "ENQUIRE FOR CURRENT RATES AND AVAILABILITY",
  services: [
    "Flight Ticket Booking",
    "Hotel Booking",
    "Cruise Booking",
    "Domestic Holiday Packages",
    "International Holiday Packages",
    "Thailand Travel"
  ]
};
