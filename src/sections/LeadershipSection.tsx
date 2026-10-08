import React from 'react';
import { ShieldCheck, Mail, BookOpen, Quote } from 'lucide-react';
import { leadershipData, schoolData } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const LeadershipSection: React.FC = () => {
  const { chairman, correspondent } = leadershipData;

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          light
          centered
          badge="School Administration"
          title="SCHOOL ADMINISTRATION"
          subtitle="Guided by Integrity, Experience & Educational Dedication"
          description="Dedicated leadership focused on fostering academic discipline, moral values, and supportive guidance for young children in Singarapettai."
        />

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chairman Card: Mr. R. Jayakumar */}
          <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header with Title and Details */}
              <div className="mb-6 space-y-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                    {chairman.role}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {chairman.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-300 font-mono tracking-wide">
                  {chairman.qualifications}
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {chairman.organization}
                </p>
              </div>

              {/* Educational Vision Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-700/60 relative">
                <Quote size={20} className="text-amber-400/40 mb-1" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{chairman.vision}&rdquo;
                </p>
              </div>

              {/* Focus Pillars */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-medium">
                  Institutional Governance
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-medium">
                  Academic Discipline
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-medium">
                  Value-Based Education
                </span>
              </div>
            </div>

            {/* Official Contact Reference */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                <ShieldCheck size={14} />
                <span>JSP Educational Trust</span>
              </span>
              <a
                href={`mailto:${schoolData.emails.official}`}
                className="hover:text-white transition-colors underline flex items-center gap-1.5"
              >
                <Mail size={13} className="text-slate-400" />
                <span>{schoolData.emails.official}</span>
              </a>
            </div>
          </div>

          {/* Correspondent Card: Mrs. C. Sathiya Jayakumar */}
          <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-blue-400/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header with Title and Details */}
              <div className="mb-6 space-y-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                    {correspondent.role}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {correspondent.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-300 font-mono tracking-wide">
                  {correspondent.qualifications}
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {correspondent.organization}
                </p>
              </div>

              {/* Educational Vision Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-700/60 relative">
                <Quote size={20} className="text-blue-400/40 mb-1" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{correspondent.vision}&rdquo;
                </p>
              </div>

              {/* Focus Pillars */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-medium">
                  Holistic Child Care
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-medium">
                  Trilingual Learning
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 font-medium">
                  Student Welfare
                </span>
              </div>
            </div>

            {/* Official Contact Reference */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-300 font-medium">
                <BookOpen size={14} />
                <span>Early Childhood & Primary Care</span>
              </span>
              <a
                href={`mailto:${schoolData.emails.official}`}
                className="hover:text-white transition-colors underline flex items-center gap-1.5"
              >
                <Mail size={13} className="text-slate-400" />
                <span>{schoolData.emails.official}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
