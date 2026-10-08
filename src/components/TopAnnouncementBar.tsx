import React from 'react';
import { Phone, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export const TopAnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white text-xs py-2 px-4 border-b border-blue-800/60 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Admissions Announcement Pill */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide shadow-xs animate-pulse">
            <Sparkles size={11} className="text-blue-950" />
            Admissions 2026–2027
          </span>
          <span className="text-slate-100 font-medium hidden md:inline">
            Now enrolling Pre-KG to V Standard
          </span>
          <span className="text-slate-300 hidden xl:inline">
            • Quality Education, Good Discipline & Holistic Development
          </span>
        </div>

        {/* Right: Quick Contacts & RTE Link */}
        <div className="flex items-center gap-4 text-slate-200 text-xs">
          <a
            href={`tel:${schoolData.primaryPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
            title="Call Sri Vivekananda School"
          >
            <Phone size={13} className="text-amber-400" />
            <span>{schoolData.primaryPhone}</span>
          </a>

          <span className="text-blue-700 hidden sm:inline">|</span>

          <a
            href={`mailto:${schoolData.emails.official}`}
            className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors hidden sm:inline-flex"
            title="Send email to school"
          >
            <Mail size={13} className="text-amber-400" />
            <span>{schoolData.emails.official}</span>
          </a>

          <span className="text-blue-700 hidden md:inline">|</span>

          <a
            href={schoolData.rtePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium"
            title="Tamil Nadu Right to Education Portal"
          >
            <span>RTE Portal</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </div>
  );
};
