import React, { useState } from 'react';
import { Link } from 'wouter';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { academicClasses } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'kindergarten' | 'primary'>('all');

  const filteredClasses = academicClasses.filter((c) => {
    if (activeTab === 'kindergarten') return c.category === 'Early Childhood' || c.category === 'Kindergarten';
    if (activeTab === 'primary') return c.category === 'Primary';
    return true;
  });

  return (
    <section id="academics" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Curriculum"
          title="ACADEMICS"
          subtitle="Pre-KG to Standard V Learning Framework"
          description="A structured, stage-by-stage educational pathway supporting early childhood discovery through comprehensive primary mastery with language proficiency and foundational skills."
        />

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Classes (Pre-KG to V)' },
            { id: 'kindergarten', label: 'Pre-KG, LKG & UKG' },
            { id: 'primary', label: 'Primary Standards I – V' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as 'all' | 'kindergarten' | 'primary')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-blue-200 group-hover:text-blue-600 transition-colors">
                    {item.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/70">
                    {item.ageGroup}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mt-0.5">
                  {item.category}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {item.focus}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Curriculum Highlights:
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={13} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <Link
                  href="/admissions"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-700 transition-all"
                >
                  <span>Enquire For {item.title}</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
