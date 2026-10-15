import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Compass, Send, Palmtree } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft py-3'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex items-center gap-2.5 group focus-visible:outline-none"
            >
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <Compass className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-primary flex items-center gap-1">
                  TRAVEL <span className="text-secondary">BUGGY</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-brandText-supporting">
                  Hyderabad • Holiday Specialist
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button
                onClick={() => handleNavClick('hero')}
                className="px-3 py-2 text-sm font-semibold text-brandText-main hover:text-primary transition-colors rounded-lg hover:bg-slate-50"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('thailand-specials')}
                className="px-3 py-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors rounded-lg hover:bg-accent/5 flex items-center gap-1.5"
              >
                <Palmtree className="h-4 w-4" />
                <span>Thailand Specials</span>
              </button>
              <button
                onClick={() => handleNavClick('destinations')}
                className="px-3 py-2 text-sm font-semibold text-brandText-main hover:text-primary transition-colors rounded-lg hover:bg-slate-50"
              >
                Destinations
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="px-3 py-2 text-sm font-semibold text-brandText-main hover:text-primary transition-colors rounded-lg hover:bg-slate-50"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('cruises')}
                className="px-3 py-2 text-sm font-semibold text-brandText-main hover:text-primary transition-colors rounded-lg hover:bg-slate-50"
              >
                Cruises
              </button>
              <button
                onClick={() => handleNavClick('why-us')}
                className="px-3 py-2 text-sm font-semibold text-brandText-main hover:text-primary transition-colors rounded-lg hover:bg-slate-50"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 py-2 text-sm font-semibold text-brandText-main hover:text-primary transition-colors rounded-lg hover:bg-slate-50"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Contact & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={BUSINESS_CONFIG.phoneUri}
                className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
                title="Call Travel Buggy"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <button
                onClick={() => handleNavClick('enquiry-form')}
                className="inline-flex items-center gap-2 rounded-xl bg-accent text-white px-4 py-2.5 text-sm font-bold shadow-md hover:bg-accent-dark hover:shadow-lg shadow-accent/25 transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                <span>Plan Your Trip</span>
              </button>
            </div>

            {/* Mobile Actions: Phone Icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BUSINESS_CONFIG.phoneUri}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary active:scale-95 transition-transform"
                aria-label="Call Travel Buggy"
              >
                <Phone className="h-4 w-4" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-brandText-main hover:bg-slate-200 transition-colors focus-visible:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="space-y-1 py-2">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full text-left px-3 py-2.5 text-base font-medium text-brandText-main hover:bg-slate-50 rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('thailand-specials')}
                className="w-full text-left px-3 py-2.5 text-base font-bold text-accent bg-accent/5 rounded-lg flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Palmtree className="h-4 w-4" />
                  <span>Thailand Specials</span>
                </span>
                <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full font-bold">Featured</span>
              </button>
              <button
                onClick={() => handleNavClick('destinations')}
                className="w-full text-left px-3 py-2.5 text-base font-medium text-brandText-main hover:bg-slate-50 rounded-lg"
              >
                Holiday Destinations
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="w-full text-left px-3 py-2.5 text-base font-medium text-brandText-main hover:bg-slate-50 rounded-lg"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('cruises')}
                className="w-full text-left px-3 py-2.5 text-base font-medium text-brandText-main hover:bg-slate-50 rounded-lg"
              >
                Cruise Holidays
              </button>
              <button
                onClick={() => handleNavClick('why-us')}
                className="w-full text-left px-3 py-2.5 text-base font-medium text-brandText-main hover:bg-slate-50 rounded-lg"
              >
                Why Travel Buggy
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left px-3 py-2.5 text-base font-medium text-brandText-main hover:bg-slate-50 rounded-lg"
              >
                Contact
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between px-1 text-sm text-brandText-supporting">
                <span>Direct Contact:</span>
                <a
                  href={BUSINESS_CONFIG.phoneUri}
                  className="font-bold text-primary"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>

              <button
                onClick={() => handleNavClick('enquiry-form')}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-white py-3 text-sm font-bold shadow-md active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                <span>Plan Your Trip Now</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
