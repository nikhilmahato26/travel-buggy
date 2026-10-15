import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { BUSINESS_CONFIG } from '../../config/business';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../../utils/whatsapp';

export const Contact: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PRESETS.default);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="REACH OUT TO OUR TEAM"
          heading="GET IN TOUCH WITH TRAVEL BUGGY"
          supportingText="We are based in Hyderabad and ready to assist you with flight bookings, hotel reservations, cruises, and domestic & international holiday plans."
        />

        {/* Two-Column Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards and Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-primary">
                Direct Communication Channels
              </h3>
              <p className="text-sm text-brandText-supporting leading-relaxed">
                Connect directly with our travel coordinators for quick rate quotes, availability checks, and personalized package planning.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex flex-col justify-between space-y-3 shadow-soft hover:shadow-card transition-all">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400">Phone Support</span>
                    <p className="text-base font-extrabold text-primary">{BUSINESS_CONFIG.phone}</p>
                  </div>
                </div>

                <a
                  href={BUSINESS_CONFIG.phoneUri}
                  className="w-full text-center py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold transition-all"
                >
                  Call Now
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex flex-col justify-between space-y-3 shadow-soft hover:shadow-card transition-all">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                    <MessageCircle className="h-5 w-5 fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400">Instant Chat</span>
                    <p className="text-base font-extrabold text-primary">WhatsApp Booking</p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20BD5A] text-xs font-bold transition-all shadow-sm"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex flex-col justify-between space-y-3 shadow-soft hover:shadow-card transition-all sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs uppercase font-bold text-slate-400">Email Address</span>
                    <p className="text-sm sm:text-base font-extrabold text-primary truncate">{BUSINESS_CONFIG.email}</p>
                  </div>
                </div>

                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="w-full text-center py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-brandText-main text-xs font-bold transition-all"
                >
                  Email Us Directly
                </a>
              </div>

            </div>

            {/* Location Notice */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Operating City</span>
                <p className="text-sm font-extrabold text-primary">{BUSINESS_CONFIG.location}</p>
                <p className="text-xs text-brandText-supporting mt-0.5">
                  Serving clients across Hyderabad and Telangana for domestic and international travel bookings.
                </p>
                <a
                  href={BUSINESS_CONFIG.locationQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary-dark hover:underline mt-2"
                >
                  <span>View Hyderabad on Map</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Thailand Focus & Rate Assurance Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-[#0B233D] text-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Specialized Thailand Desk</span>
              </div>

              <h4 className="text-2xl font-black leading-snug">
                Need Fast Pricing For Your Upcoming Thailand Trip?
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our dedicated Thailand travel team. Whether it’s Bangkok city breaks, Krabi coastal retreats, or Phuket island stays, we are here to assist with rates and custom itineraries.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2 w-2 rounded-full bg-secondary" />
                  <span>Personalized quotes for solo, couple, family & group travel</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2 w-2 rounded-full bg-secondary" />
                  <span>Assistance with flight ticketing & hotel reservations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2 w-2 rounded-full bg-secondary" />
                  <span>Current seasonal rate consultation</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 px-4 text-sm font-bold shadow-lg shadow-[#25D366]/25 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phoneUri}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white py-3 px-4 text-xs sm:text-sm font-bold border border-white/20 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
