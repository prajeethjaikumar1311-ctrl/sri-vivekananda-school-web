import React from 'react';
import { Award, ShieldCheck, Mail, Phone, BookOpen, Quote } from 'lucide-react';
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
          title="OUR LEADERSHIP"
          subtitle="Guided by Integrity, Experience & Educational Dedication"
          description="Dedicated leadership focused on fostering academic discipline, moral values, and supportive guidance for young children in Singarapettai."
        />

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chairman Card: Mr. R. Jayakumar */}
          <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header with Portrait and Trust Seal */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                {/* Chairman Portrait */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-amber-400 shrink-0 bg-slate-900">
                  <img
                    src={chairman.image}
                    alt="Chairman Mr. R. Jayakumar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
                    {chairman.role}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {chairman.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-300 font-mono">
                    {chairman.qualifications}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    {chairman.organization}
                  </p>
                </div>
              </div>

              {/* Educational Vision Quote */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 relative">
                <Quote size={20} className="text-amber-400/40 mb-1" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{chairman.vision}&rdquo;
                </p>
              </div>
            </div>

            {/* Official Contact Reference */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300">
                <ShieldCheck size={14} />
                <span>JSP Educational Trust</span>
              </span>
              <a
                href={`mailto:${schoolData.emails.official}`}
                className="hover:text-white transition-colors underline"
              >
                {schoolData.emails.official}
              </a>
            </div>
          </div>

          {/* Correspondent Card: Mrs. C. Sathiya Jayakumar */}
          <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header with Trust Seal & Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                {/* Trust Seal Presentation */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500 shrink-0 bg-slate-900 p-1 flex items-center justify-center">
                  <img
                    src={chairman.seal}
                    alt="JSP Educational Trust Seal"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-500 text-white">
                    {correspondent.role}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {correspondent.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-300 font-mono leading-relaxed">
                    {correspondent.qualifications}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    {correspondent.organization}
                  </p>
                </div>
              </div>

              {/* Educational Vision Quote */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 relative">
                <Quote size={20} className="text-blue-400/40 mb-1" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{correspondent.vision}&rdquo;
                </p>
              </div>
            </div>

            {/* Official Contact Reference */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-300">
                <BookOpen size={14} />
                <span>Early Childhood & Primary Care</span>
              </span>
              <a
                href={`mailto:${schoolData.emails.official}`}
                className="hover:text-white transition-colors underline"
              >
                {schoolData.emails.official}
              </a>
            </div>
          </div>
        </div>

        {/* Trust Seal Feature Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center flex items-center justify-center gap-3 text-xs text-slate-300">
          <Award size={16} className="text-amber-400 shrink-0" />
          <span>
            Managed under <strong>JSP Educational Trust, Singarapettai</strong> • Motto:{' '}
            <em className="text-amber-300">&ldquo;Nothing is Impossible&rdquo;</em>
          </span>
        </div>
      </div>
    </section>
  );
};
