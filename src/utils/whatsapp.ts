import { BUSINESS_CONFIG } from '../config/business';

export interface FormEnquiryData {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  preferredDestination?: string;
  departureCity?: string;
  startDate?: string;
  returnDate?: string;
  adults?: string;
  children?: string;
  budgetRange?: string;
  requirements?: string;
}

export const WHATSAPP_PRESETS = {
  default: "Hello Travel Buggy, I would like to enquire about your travel services. Please contact me to discuss the available options and current rates.",
  thailand: "Hello Travel Buggy, I am interested in Thailand travel packages. Please share the available options, current rates, and booking details.",
  flight: "Hello Travel Buggy, I would like to enquire about flight ticket booking. Please contact me with the available options.",
  hotel: "Hello Travel Buggy, I would like to enquire about hotel booking. Please share the available options and rates.",
  cruise: "Hello Travel Buggy, I would like to enquire about cruise travel experiences. Please share the available options and booking details.",
  domestic: "Hello Travel Buggy, I am interested in domestic holiday packages in India. Please share available travel options and rates.",
  international: "Hello Travel Buggy, I am interested in international holiday packages. Please share the available options and current rates."
};

/**
 * Generates an encoded WhatsApp URL with the given message.
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_CONFIG.whatsappPhone}?text=${encoded}`;
}

/**
 * Generates WhatsApp URL for a specific destination.
 */
export function getDestinationWhatsAppUrl(destinationName: string, category?: string): string {
  const context = category ? ` (${category})` : '';
  const message = `Hello Travel Buggy, I would like to enquire about travel options for ${destinationName}${context}. Please share the current available options, rates, and itinerary details.`;
  return getWhatsAppUrl(message);
}

/**
 * Builds formatted message from the Travel Enquiry Form.
 */
export function buildEnquiryMessage(data: FormEnquiryData): string {
  const lines: string[] = [
    `*NEW TRAVEL ENQUIRY — TRAVEL BUGGY*`,
    `----------------------------------------`,
    `*Name:* ${data.fullName}`,
    `*Phone:* ${data.phone}`,
  ];

  if (data.email) lines.push(`*Email:* ${data.email}`);
  lines.push(`*Service Requested:* ${data.service}`);
  if (data.preferredDestination) lines.push(`*Preferred Destination:* ${data.preferredDestination}`);
  if (data.departureCity) lines.push(`*Departure City:* ${data.departureCity}`);
  if (data.startDate) lines.push(`*Travel Start Date:* ${data.startDate}`);
  if (data.returnDate) lines.push(`*Return Date:* ${data.returnDate}`);
  if (data.adults) lines.push(`*Adults:* ${data.adults}`);
  if (data.children) lines.push(`*Children:* ${data.children}`);
  if (data.budgetRange && data.budgetRange !== 'Not Decided') lines.push(`*Estimated Trip Budget:* ${data.budgetRange}`);
  if (data.requirements) lines.push(`*Additional Requirements:* ${data.requirements}`);

  lines.push(`----------------------------------------`);
  lines.push(`*Note:* Please review my requirements and share available options and current rates.`);

  return lines.join('\n');
}

/**
 * Builds email subject and body for fallback.
 */
export function buildEmailFallback(data: FormEnquiryData): { subject: string; body: string } {
  const subject = `Travel Enquiry from ${data.fullName} - ${data.service}`;
  const body = `Hello Travel Buggy Team,

Here are my travel enquiry details:

Full Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Service: ${data.service}
Preferred Destination: ${data.preferredDestination || 'Not specified'}
Departure City: ${data.departureCity || 'Not specified'}
Travel Dates: ${data.startDate || 'Flexible'} to ${data.returnDate || 'Flexible'}
Travelers: ${data.adults || '1'} Adult(s), ${data.children || '0'} Child(ren)
Estimated Budget: ${data.budgetRange || 'Not Decided'}

Additional Requirements:
${data.requirements || 'None specified'}

Please contact me with available options and current rates.

Thank you,
${data.fullName}`;

  return { subject, body };
}
