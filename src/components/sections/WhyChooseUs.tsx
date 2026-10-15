import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Globe2, UserCheck, MessageSquare, Compass } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_CHOOSE_ITEMS, type WhyChooseItem } from '../../data/services';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: WhyChooseItem['iconName']) => {
    const props = { className: "h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" };
    switch (name) {
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Globe2': return <Globe2 {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Compass': return <Compass {...props} />;
      default: return <Compass {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="YOUR TRUSTED TRAVEL PARTNER"
          heading="WHY CHOOSE TRAVEL BUGGY?"
          supportingText="Dedicated travel booking coordination based in Hyderabad, designed to make planning your holidays smooth, personalized, and transparent."
        />

        {/* 6 Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group rounded-2xl bg-[#FAFBFD] p-7 border border-slate-100 hover:border-secondary/40 hover:bg-white shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-200 mb-5 shadow-sm">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-brandText-supporting leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
