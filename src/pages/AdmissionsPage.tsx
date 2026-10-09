import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdmissionsSection } from '../sections/AdmissionsSection';
import { ContactSection } from '../sections/ContactSection';
import { schoolData } from '../data/schoolData';

export const AdmissionsPage: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Admissions' }]} />

      {/* Subpage Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-400 text-slate-950">
              Enrollment 2026–2027
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Admissions Open 2026–2027
            </h1>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Enrolling students for Pre-KG to Class 8. Discover admission guidelines,
              required documents checklist, and RTE application procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Core Section */}
      <AdmissionsSection />

      {/* Direct Contact & Enquiry Form */}
      <ContactSection />
    </div>
  );
};
