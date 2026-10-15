import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp, Palmtree } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-md">
                <Compass className="h-6 w-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                TRAVEL <span className="text-secondary">BUGGY</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              {BUSINESS_CONFIG.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your trusted travel partner in Hyderabad for domestic and international holidays, flight tickets, hotel reservations, luxury cruises, and specialized Thailand journeys.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-secondary-light">
                <Palmtree className="h-3.5 w-3.5" />
                <span>Specialized Thailand Booking Partner</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('thailand-specials')}
                  className="text-secondary-light hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  <Palmtree className="h-3.5 w-3.5" />
                  <span>Thailand Specials</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('destinations')}
                  className="hover:text-white transition-colors"
                >
                  Holiday Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cruises')}
                  className="hover:text-white transition-colors"
                >
                  Cruise Holidays
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Travel Services Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Travel Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Flight Ticket Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hotel Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cruises')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cruise Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('domestic-destinations')}
                  className="hover:text-white transition-colors text-left"
                >
                  Domestic Packages (India)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('international-destinations')}
                  className="hover:text-white transition-colors text-left"
                >
                  International Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('thailand-specials')}
                  className="hover:text-white transition-colors text-left"
                >
                  Thailand Travel Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={BUSINESS_CONFIG.phoneUri}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-accent transition-colors text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Call / WhatsApp</span>
                  <span className="font-bold text-white">{BUSINESS_CONFIG.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-secondary transition-colors text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="break-all">
                  <span className="block text-xs text-slate-400">Email Enquiries</span>
                  <span className="font-medium text-slate-200">{BUSINESS_CONFIG.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Location</span>
                  <span className="font-medium text-slate-200">{BUSINESS_CONFIG.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 Travel Buggy. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-slate-500">
              Disclaimer: All destination visuals are illustrative. Enquire for current package availability, seasonal rates, and personalized itineraries.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
