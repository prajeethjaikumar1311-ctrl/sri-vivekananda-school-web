import React from 'react';
import { Link } from 'wouter';
import {
  Compass,
  Palette,
  Landmark,
  CalendarDays,
  Smile,
  Dumbbell,
  Music,
  Laptop,
  Pencil,
  ChevronRight,
} from 'lucide-react';
import { activitiesList } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

const activityIconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={20} className="text-blue-700" />,
  Compass: <Compass size={20} className="text-blue-700" />,
  Landmark: <Landmark size={20} className="text-blue-700" />,
  CalendarDays: <CalendarDays size={20} className="text-blue-700" />,
  Smile: <Smile size={20} className="text-blue-700" />,
  Dumbbell: <Dumbbell size={20} className="text-blue-700" />,
  Music: <Music size={20} className="text-blue-700" />,
  Laptop: <Laptop size={20} className="text-blue-700" />,
  Pencil: <Pencil size={20} className="text-blue-700" />,
};

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Beyond The Classroom"
          title="STUDENT ACTIVITIES"
          subtitle="Holistic Learning through Culture, Sports, Arts & Outdoor Excursions"
          description="Life at Sri Vivekananda School is rich with memorable experiences—cultural celebrations, martial arts, yoga, handwriting clubs, and annual educational tours."
        />

        {/* 2 Featured Large Activity Cards with Actual School Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Activity 1: Educational Tour */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src="/images/students/educational-trip-paravasa-uganam.jpeg"
                  alt="Students and teachers on an educational trip to Paravasa Ulagam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                  Educational Tours
                </span>
                <span className="absolute bottom-4 left-4 text-white text-sm font-bold">
                  Tour to Paravasa Ulagam • Outdoor Learning
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  Educational Trips & Outdoor Excursions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Students and faculty embark on guided annual study trips, broadening young
                  perspectives beyond textbooks, experiencing nature, history, and cooperative teamwork.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>Real Student Photograph</span>
              <Link href="/activities" className="hover:text-blue-900 inline-flex items-center gap-1">
                <span>View Activities</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* Featured Activity 2: Cultural Celebration & Kolam */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src="/images/events/cultural-celebration-kolam.jpeg"
                  alt="Traditional Kolam and Pongal celebration with students and school buses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-700 text-white shadow-md">
                  Cultural Heritage
                </span>
                <span className="absolute bottom-4 left-4 text-white text-sm font-bold">
                  Traditional Kolam & School Gathering
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  Cultural Celebrations & Community Heritage
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Honoring traditional Tamil festivals with authentic courtyard assemblies,
                  intricate floral Kolam creations, festive attire, and community prayers.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>Courtyard Assembly</span>
              <Link href="/activities" className="hover:text-blue-900 inline-flex items-center gap-1">
                <span>View Activities</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* 9 Structured Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    {activityIconMap[item.iconName] || <Palette size={20} className="text-blue-700" />}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-blue-700">
                <span>Active School Program</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
