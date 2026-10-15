import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MessageCircle, Mail, CheckCircle2, User, Phone, MapPin, Calendar, Users, DollarSign, Info } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { buildEnquiryMessage, buildEmailFallback, type FormEnquiryData } from '../../utils/whatsapp';
import { BUSINESS_CONFIG } from '../../config/business';

const SERVICE_OPTIONS = [
  'Flight Ticket Booking',
  'Hotel Booking',
  'Cruise Booking',
  'Domestic Holiday Package',
  'International Holiday Package',
  'Thailand Holiday',
  'Other'
] as const;

const enquirySchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number (at least 10 digits)' }),
  email: z.string().email({ message: 'Please enter a valid email address' }).optional().or(z.literal('')),
  service: z.enum(SERVICE_OPTIONS),
  preferredDestination: z.string().optional(),
  departureCity: z.string().optional(),
  startDate: z.string().optional(),
  returnDate: z.string().optional(),
  adults: z.string().optional(),
  children: z.string().optional(),
  budgetRange: z.string().optional(),
  requirements: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export interface TravelEnquiryFormProps {
  prefilledDestination?: string;
  prefilledService?: string;
}

export const TravelEnquiryForm: React.FC<TravelEnquiryFormProps> = ({
  prefilledDestination,
  prefilledService,
}) => {
  const [submittedData, setSubmittedData] = useState<FormEnquiryData | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: (prefilledService as any) || 'Thailand Holiday',
      preferredDestination: prefilledDestination || '',
      departureCity: 'Hyderabad',
      startDate: '',
      returnDate: '',
      adults: '2',
      children: '0',
      budgetRange: 'Not Decided',
      requirements: '',
    },
  });

  // Keep form in sync when props change
  useEffect(() => {
    if (prefilledDestination) {
      setValue('preferredDestination', prefilledDestination);
    }
    if (prefilledService) {
      setValue('service', prefilledService as any);
    }
  }, [prefilledDestination, prefilledService, setValue]);

  const onSubmit = (data: EnquiryFormData) => {
    const formattedData: FormEnquiryData = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || undefined,
      service: data.service,
      preferredDestination: data.preferredDestination || undefined,
      departureCity: data.departureCity || undefined,
      startDate: data.startDate || undefined,
      returnDate: data.returnDate || undefined,
      adults: data.adults || undefined,
      children: data.children || undefined,
      budgetRange: data.budgetRange || undefined,
      requirements: data.requirements || undefined,
    };

    setSubmittedData(formattedData);
    setShowSuccessModal(true);

    // Build WhatsApp message and open window
    const message = buildEnquiryMessage(formattedData);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;
    
    // Attempt opening WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleManualWhatsApp = () => {
    if (!submittedData) return;
    const message = buildEnquiryMessage(submittedData);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailFallback = () => {
    if (!submittedData) return;
    const { subject, body } = buildEmailFallback(submittedData);
    const mailtoUrl = `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="enquiry-form" className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-[#F0F4F8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PLAN YOUR HOLIDAY"
          badge="Fast Response"
          heading="LET'S PLAN YOUR NEXT TRIP"
          supportingText="Tell us about your travel plans. We will review your preferences and share available options, current rates, and itinerary ideas via WhatsApp or call."
        />

        {/* Main Form Container */}
        <div className="mt-10 rounded-3xl bg-white p-6 sm:p-10 shadow-soft-xl border border-slate-100">
          
          {/* Informational Guidance Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-3">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-brandText-main leading-relaxed">
              Submitting this form connects you directly with our Hyderabad travel team on WhatsApp. <strong className="text-primary font-semibold">No booking fees or immediate payment required.</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Row 1: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-brandText-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Phone Number (WhatsApp) <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="e.g. +91 9876543210"
                    className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-brandText-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Email & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="e.g. rajesh@example.com"
                    className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-brandText-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Service Required <span className="text-accent">*</span>
                </label>
                <select
                  {...register('service')}
                  className={`w-full rounded-xl border px-3.5 py-3 text-sm text-brandText-main focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/50 ${
                    errors.service ? 'border-red-400' : 'border-slate-200'
                  }`}
                >
                  <option value="Thailand Holiday">Thailand Holiday (Specialist)</option>
                  <option value="Flight Ticket Booking">Flight Ticket Booking</option>
                  <option value="Hotel Booking">Hotel Booking</option>
                  <option value="Cruise Booking">Cruise Booking</option>
                  <option value="Domestic Holiday Package">Domestic Holiday Package (India)</option>
                  <option value="International Holiday Package">International Holiday Package</option>
                  <option value="Other">Other Travel Service</option>
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.service.message}</p>
                )}
              </div>
            </div>

            {/* Row 3: Destination & Departure City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Preferred Destination */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Preferred Destination <span className="text-slate-400 font-normal">(e.g. Phuket, Goa, Dubai)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    {...register('preferredDestination')}
                    placeholder="e.g. Bangkok & Phuket"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-brandText-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Departure City */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Departure City
                </label>
                <input
                  type="text"
                  {...register('departureCity')}
                  placeholder="e.g. Hyderabad, Bengaluru, etc."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-brandText-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Row 4: Travel Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Estimated Travel Start Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <input
                    type="date"
                    {...register('startDate')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-brandText-main focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Return Date <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <input
                    type="date"
                    {...register('returnDate')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-brandText-main focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>

            {/* Row 5: Travelers & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Number of Adults
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Users className="h-4 w-4" />
                  </div>
                  <select
                    {...register('adults')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 py-3 text-sm text-brandText-main focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5+">5+ Adults (Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Number of Children
                </label>
                <select
                  {...register('children')}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 text-sm text-brandText-main focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="0">0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3+">3+ Children</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Estimated Trip Budget <span className="text-[10px] text-slate-400 font-normal">(Total)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <select
                    {...register('budgetRange')}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 py-3 text-sm text-brandText-main focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="Not Decided">Not Decided</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                    <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                    <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 6: Additional Requirements */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                Additional Requirements / Preferences <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                {...register('requirements')}
                placeholder="Share any special preferences, hotel star preferences, preferred activities, or specific travel plans..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-brandText-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-accent hover:bg-accent-dark text-white py-4 px-6 text-base font-extrabold shadow-lg shadow-accent/25 hover:shadow-xl transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
                <span>SEND TRAVEL ENQUIRY</span>
              </button>
              
              <p className="mt-2 text-center text-xs text-brandText-supporting">
                🔒 We respect your privacy. Enquiries are sent directly to Travel Buggy Hyderabad for personalized assistance.
              </p>
            </div>

          </form>

        </div>

      </div>

      {/* Confirmation & Fallback Modal */}
      {showSuccessModal && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
            
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black text-primary">Enquiry Prepared!</h3>
              <p className="text-sm text-brandText-supporting">
                Your travel enquiry for <strong className="text-primary">{submittedData.service}</strong> has been prepared for Travel Buggy.
              </p>
            </div>

            {/* Enquiry Summary Card */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs sm:text-sm space-y-1.5">
              <div className="flex justify-between text-brandText-main">
                <span className="font-semibold text-slate-500">Name:</span>
                <span className="font-bold">{submittedData.fullName}</span>
              </div>
              <div className="flex justify-between text-brandText-main">
                <span className="font-semibold text-slate-500">Phone:</span>
                <span className="font-bold">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between text-brandText-main">
                <span className="font-semibold text-slate-500">Service:</span>
                <span className="font-bold">{submittedData.service}</span>
              </div>
              {submittedData.preferredDestination && (
                <div className="flex justify-between text-brandText-main">
                  <span className="font-semibold text-slate-500">Destination:</span>
                  <span className="font-bold">{submittedData.preferredDestination}</span>
                </div>
              )}
              {submittedData.budgetRange && submittedData.budgetRange !== 'Not Decided' && (
                <div className="flex justify-between text-brandText-main">
                  <span className="font-semibold text-slate-500">Estimated Budget:</span>
                  <span className="font-bold">{submittedData.budgetRange}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-center text-slate-500">
              WhatsApp should have opened automatically. If it did not, or if you prefer email, use the buttons below:
            </p>

            {/* Modal Actions */}
            <div className="space-y-3">
              <button
                onClick={handleManualWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 text-sm font-bold shadow-md shadow-[#25D366]/25 transition-all"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                <span>Open in WhatsApp</span>
              </button>

              <button
                onClick={handleEmailFallback}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-brandText-main py-3 text-sm font-semibold transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Send via Email Fallback</span>
              </button>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  reset();
                }}
                className="w-full text-center text-xs text-slate-400 hover:text-slate-600 font-medium py-1"
              >
                Close & Clear Form
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
