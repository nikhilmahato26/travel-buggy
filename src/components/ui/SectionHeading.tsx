import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  supportingText?: string;
  badge?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  supportingText,
  badge,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {/* Eyebrow or Badge */}
      <div className={`flex flex-wrap items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {eyebrow && (
          <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
            isDark 
              ? 'bg-secondary/20 text-secondary-light border border-secondary/30' 
              : 'bg-primary/10 text-primary border border-primary/15'
          }`}>
            {eyebrow}
          </span>
        )}
        {badge && (
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent text-white shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Main Heading */}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-primary'
      }`}>
        {heading}
      </h2>

      {/* Supporting Text */}
      {supportingText && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed text-balance ${
          isDark ? 'text-slate-300' : 'text-brandText-supporting'
        }`}>
          {supportingText}
        </p>
      )}
    </div>
  );
};
