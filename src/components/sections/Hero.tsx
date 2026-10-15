import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Palmtree, MapPin, Sparkles, ShieldCheck, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-white to-[#F0F4F8] pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-60 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/15 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span>TRAVEL BUGGY • HYDERABAD</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-accent/15 text-accent border border-accent/25 shadow-sm animate-pulse">
                <Palmtree className="h-3.5 w-3.5" />
                <span>THAILAND TRAVEL SPECIALIST</span>
              </span>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-[1.1] text-balance"
            >
              YOUR NEXT ADVENTURE <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">STARTS HERE</span>
            </motion.h1>

            {/* Thailand Best Rates Promotional Highlight */}
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-secondary/20 via-primary/10 to-accent/20">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-bold text-primary shadow-sm">
                <Sparkles className="h-4 w-4 text-accent shrink-0" />
                <span>{BUSINESS_CONFIG.thailandSpecialHeadline}</span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brandText-supporting leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From flight tickets and hotel stays to cruises and unforgettable domestic and international holidays, Travel Buggy helps you plan your next journey with personalized attention and competitive rates.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => scrollToSection('destinations')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white px-7 py-4 text-base font-bold shadow-lg hover:shadow-xl shadow-primary/20 transition-all duration-200 active:scale-[0.98]"
              >
                <span>EXPLORE HOLIDAY PACKAGES</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection('enquiry-form')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent hover:bg-accent-dark text-white px-7 py-4 text-base font-bold shadow-lg hover:shadow-xl shadow-accent/25 transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                <span>PLAN MY TRIP</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-xs font-semibold text-brandText-main">Direct Hyderabad Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-brandText-main">Customized Itineraries</span>
              </div>
              <div className="flex items-center gap-2">
                <Palmtree className="h-4 w-4 text-accent shrink-0" />
                <span className="text-xs font-semibold text-brandText-main">Thailand Specialist</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Collage with Dynamic Travel Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image: Tropical Thailand Cliff / Beach */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85"
                  alt="Scenic Thailand Beach and Limestone Cliffs - Travel Buggy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/20" />
                
                {/* Floating Tag inside the main image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold mb-2 shadow-sm">
                    <Palmtree className="h-3.5 w-3.5" />
                    <span>Specialist Spotlight</span>
                  </div>
                  <h3 className="text-2xl font-black drop-shadow-md">Thailand Island & Coastlines</h3>
                  <p className="text-xs text-slate-200 mt-1">Phuket • Krabi • Bangkok • Pattaya</p>
                </div>
              </motion.div>

              {/* Floating Card 1: Luxury Cruise Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden sm:flex absolute -bottom-6 -left-8 z-20 items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-[260px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=300&q=80"
                  alt="Luxury Cruise Holidays"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold text-secondary">Ocean Getaways</span>
                  <p className="text-xs font-extrabold text-primary">Luxury Cruise Holidays</p>
                  <p className="text-[10px] text-brandText-supporting">Enquire for routes & cabins</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Quick Enquiry Callout */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-3 bg-white/95 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-md">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-primary">Ready to Explore?</p>
                  <p className="text-[11px] text-accent font-bold">Fast WhatsApp Response</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
