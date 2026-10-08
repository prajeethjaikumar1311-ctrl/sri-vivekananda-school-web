import React from 'react';
import { Link } from 'wouter';
import { Camera, Sparkles, ChevronRight, Users, Heart } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

interface SchoolLifeSectionProps {
  onImageClick?: (index: number) => void;
}

export const SchoolLifeSection: React.FC<SchoolLifeSectionProps> = ({ onImageClick }) => {
  return (
    <section id="school-life" className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          light
          centered
          badge="Vibrant Student Community"
          title="LEARNING BEYOND THE CLASSROOM"
          subtitle="Encouraging students to learn, explore, participate and grow."
          description="True education happens when young minds engage with the world around them—in classrooms, campus courtyards, stage celebrations, and memorable educational journeys."
        />

        {/* Dynamic Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Collage Item 1: Large Featured Trip Photo (span 7) */}
          <div className="md:col-span-7 group relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800 min-h-[340px] sm:min-h-[420px]">
            <img
              src="/images/students/educational-trip-paravasa-uganam.jpeg"
              alt="Sri Vivekananda School group trip to Paravasa Ulagam"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
                Experiential Learning
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Educational Tour to Paravasa Ulagam
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Students and teaching faculty together exploring science, nature and cooperative fun.
              </p>
            </div>
          </div>

          {/* Collage Item 2: Courtyard Celebration (span 5) */}
          <div className="md:col-span-5 group relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800 min-h-[340px] sm:min-h-[420px]">
            <img
              src="/images/events/school-celebration.jpeg"
              alt="School Courtyard Celebration with balloon decor and assembly"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white">
                Campus Celebrations
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Joyful Assemblies & Stage Events
              </h3>
              <p className="text-xs text-slate-300">
                Children presenting speeches, songs, and cultural items in the festive courtyard.
              </p>
            </div>
          </div>

          {/* Collage Item 3: Heritage Excursion (span 5) */}
          <div className="md:col-span-5 group relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800 min-h-[280px] sm:min-h-[340px]">
            <img
              src="/images/students/educational-trip-outdoor.jpeg"
              alt="Students visiting Krishna's Butterball heritage site"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-slate-950">
                Historical Heritage
              </span>
              <h3 className="text-lg font-black text-white">
                Discovery at Krishna’s Butterball
              </h3>
              <p className="text-xs text-slate-300">
                Experiencing Tamil Nadu’s living heritage and ancient architecture firsthand.
              </p>
            </div>
          </div>

          {/* Collage Item 4: Traditional Kolam & Assembly with School Buses (span 7) */}
          <div className="md:col-span-7 group relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800 min-h-[280px] sm:min-h-[340px]">
            <img
              src="/images/events/cultural-celebration-kolam.jpeg"
              alt="Traditional assembly with Kolam and school buses"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500 text-white">
                Community & Culture
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Festive Assembly & Traditional Values
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Students assembled in cultural attire with official school buses parked on campus.
              </p>
            </div>
          </div>
        </div>

        {/* View Activities CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Camera size={18} />
            <span>VIEW STUDENT ACTIVITIES</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
