import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AcademicsSection } from '../sections/AcademicsSection';
import { AdmissionsSection } from '../sections/AdmissionsSection';
import { schoolData } from '../data/schoolData';
import { BookOpen, Languages, Sparkles } from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Academics' }]} />

      {/* Subpage Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-400 text-slate-950">
              Curriculum & Learning
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Academic Excellence
            </h1>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Trilingual curriculum (Tamil, English, Hindi), spoken English mastery,
              and dedicated handwriting training for students from Pre-KG to Class 8.
            </p>
          </div>
        </div>
      </section>

      {/* Main Academics Section */}
      <AcademicsSection />

      {/* Admissions Cross-Link Section */}
      <AdmissionsSection />
    </div>
  );
};
