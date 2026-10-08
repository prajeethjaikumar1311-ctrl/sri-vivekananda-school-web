import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            light
              ? 'bg-white/15 text-amber-300 border border-white/20'
              : 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-2 text-lg sm:text-xl font-medium ${
            light ? 'text-blue-100' : 'text-blue-700'
          }`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-amber-500 to-red-600 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
