import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EventsSection } from '../sections/EventsSection';

export const ActivitiesPage: React.FC = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Activities' }]} />

      {/* Subpage Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-400 text-slate-950">
              Co-Curricular & Student Life
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Student Activities & Celebrations
            </h1>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Yoga and Karate practice, dance training, cultural festivals, and annual
              educational celebrations and milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <EventsSection />
    </div>
  );
};
