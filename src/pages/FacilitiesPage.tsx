import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FacilitiesSection } from '../sections/FacilitiesSection';
import { TransportationSection } from '../sections/TransportationSection';
import { ContactSection } from '../sections/ContactSection';

export const FacilitiesPage: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Facilities' }]} />

      {/* Subpage Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-400 text-slate-950">
              Campus & Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Campus Facilities
            </h1>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Airy classrooms, open playground, purified drinking water, and dedicated
              school bus transportation across Singarapettai routes.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Main Section */}
      <FacilitiesSection />

      {/* Transportation Section */}
      <TransportationSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
