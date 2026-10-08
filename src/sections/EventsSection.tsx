import React from 'react';
import { Calendar, Tag, ChevronRight, Sparkles } from 'lucide-react';
import { schoolEventsTimeline } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="School Happenings"
          title="EVENTS & CELEBRATIONS"
          subtitle="Celebrations, Excursions & Annual Milestones"
          description="A calendar of cherished moments that bring students, teachers, and parents together in joyous learning and cultural community."
        />

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolEventsTimeline.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Event Photo */}
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 text-amber-300 backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                    {item.highlight}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>School Milestone</span>
                <span className="text-blue-700 font-bold">Official Event</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Events Notice Note */}
        <div className="mt-10 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/70 max-w-2xl mx-auto text-center text-xs text-blue-900">
          <p>
            <strong>Note for Parents:</strong> Upcoming school circulars, celebration schedules,
            and parent-teacher meeting notices are shared directly through the school administration office.
          </p>
        </div>
      </div>
    </section>
  );
};
