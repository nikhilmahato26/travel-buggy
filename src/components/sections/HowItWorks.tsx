import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, FileText, PhoneCall, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { HOW_IT_WORKS_STEPS } from '../../data/services';
import { scrollToSection } from '../../utils/contact';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <MousePointerClick className="h-6 w-6 text-primary" />;
      case 1: return <FileText className="h-6 w-6 text-secondary" />;
      case 2: return <PhoneCall className="h-6 w-6 text-accent" />;
      default: return <FileText className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SIMPLE 3-STEP PROCESS"
          heading="HOW IT WORKS"
          supportingText="We keep travel planning simple and personalized. Follow these easy steps to get your tailored travel itinerary and rates."
        />

        {/* 3 Steps */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-soft"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 px-3.5 py-1 rounded-full bg-primary text-white text-xs font-black tracking-widest shadow-md">
                STEP {stepItem.step}
              </div>

              {/* Step Icon */}
              <div className="mt-2 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                {getStepIcon(index)}
              </div>

              <h3 className="text-lg font-extrabold text-primary mb-2">
                {stepItem.title}
              </h3>

              <p className="text-sm text-brandText-supporting leading-relaxed">
                {stepItem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => scrollToSection('enquiry-form')}
            className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <span>Start Your Enquiry Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
