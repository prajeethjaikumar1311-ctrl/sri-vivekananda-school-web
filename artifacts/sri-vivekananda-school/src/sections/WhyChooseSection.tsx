import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Languages,
  MessageSquare,
  Laptop,
  Sparkles,
  HeartPulse,
  Bus,
  Droplets,
  Building2,
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { whyChooseUs } from '../data/schoolData';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={24} className="text-blue-700" />,
  ShieldCheck: <ShieldCheck size={24} className="text-blue-700" />,
  Languages: <Languages size={24} className="text-blue-700" />,
  MessageSquare: <MessageSquare size={24} className="text-blue-700" />,
  Laptop: <Laptop size={24} className="text-blue-700" />,
  Sparkles: <Sparkles size={24} className="text-blue-700" />,
  HeartPulse: <HeartPulse size={24} className="text-blue-700" />,
  Bus: <Bus size={24} className="text-blue-700" />,
  Droplets: <Droplets size={24} className="text-blue-700" />,
  Building2: <Building2 size={24} className="text-blue-700" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          badge="Excellence In Early Learning"
          title="WHY CHOOSE SRI VIVEKANANDA SCHOOL?"
          subtitle="Ten Pillars of Quality Education and Character Development"
          description="Every child deserves an educational environment where foundational learning, strong personal values, physical vitality, and individual care come together seamlessly."
        />

        {/* 10 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-6 shadow-xs hover:shadow-xl border border-slate-200/80 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-700 text-blue-700 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    {/* Render icon with dynamic color transition */}
                    <div className="group-hover:brightness-0 group-hover:invert transition-all">
                      {iconMap[item.iconName] || <GraduationCap size={24} />}
                    </div>
                  </div>
                  <span className="text-xs font-black font-mono text-slate-300 group-hover:text-amber-500 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-amber-600 mt-1 uppercase tracking-wide">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>Verified Facility</span>
                <span className="text-amber-500">★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
