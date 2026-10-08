import React from 'react';
import { Link } from 'wouter';
import {
  School,
  MapPin,
  Trophy,
  Bus,
  Droplets,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { facilitiesList } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

const facilityIconMap: Record<string, React.ReactNode> = {
  School: <School size={20} className="text-white" />,
  MapPin: <MapPin size={20} className="text-white" />,
  Trophy: <Trophy size={20} className="text-white" />,
  Bus: <Bus size={20} className="text-white" />,
  Droplets: <Droplets size={20} className="text-white" />,
  Sparkles: <Sparkles size={20} className="text-white" />,
};

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Campus Infrastructure"
          title="SCHOOL FACILITIES"
          subtitle="Real Infrastructure Built for Child Comfort, Safety & Learning"
          description="Every corner of Sri Vivekananda School is crafted to provide a safe, airy, and engaging atmosphere with spacious learning halls, open play areas, pure water, and secure transport."
        />

        {/* 6 Image-Focused Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility) => (
            <div
              key={facility.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Real School Photo */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200">
                  {facility.image ? (
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white">
                      <School size={48} />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Icon Badge Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-700/90 backdrop-blur-xs flex items-center justify-center shadow-md">
                      {facilityIconMap[facility.iconName] || <School size={20} className="text-white" />}
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      {facility.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-3 border-t border-slate-200/70 space-y-2">
                    {facility.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={13} className="text-blue-700 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="p-4 bg-white border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>Authentic Campus Asset</span>
                <span className="text-amber-500 font-mono text-[11px]">Sri Vivekananda School</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Contact / Enquire */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-wide shadow-md transition-all"
          >
            <span>PLAN A VISIT TO SEE OUR CAMPUS</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
