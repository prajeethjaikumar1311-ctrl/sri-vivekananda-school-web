import React from 'react';
import { Link } from 'wouter';
import { ChevronRight, CheckCircle2, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Image Composition with School Building */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image: School Courtyard & Building */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-slate-100">
                <img
                  src="/images/campus/campus-courtyard.jpeg"
                  alt="Sri Vivekananda School courtyard and learning corridors"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Inset Badge: JSP Educational Trust Seal */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white p-3 rounded-2xl shadow-2xl ring-1 ring-slate-900/10 flex items-center gap-3 max-w-[280px]">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-amber-400">
                  <img
                    src={schoolData.trustSeal}
                    alt="JSP Educational Trust Seal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    Founded Under
                  </p>
                  <p className="text-xs font-extrabold text-slate-900">
                    JSP Educational Trust
                  </p>
                  <p className="text-[10px] text-amber-600 font-semibold italic">
                    &ldquo;Nothing is Impossible&rdquo;
                  </p>
                </div>
              </div>

              {/* Decorative Accent Pill on Top Left */}
              <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold">
                <Sparkles size={14} className="text-amber-300" />
                <span>Foundational Educational Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Welcome Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="About Our Institution"
              title="WELCOME TO SRI VIVEKANANDA SCHOOL"
              subtitle="Nurturing Young Minds in Singarapettai"
              description="Sri Vivekananda School, Singarapettai is committed to providing quality foundational education, strong personal discipline, character development, and a supportive, caring learning environment for young students."
            />

            <p className="text-slate-600 leading-relaxed text-base">
              At Sri Vivekananda School, early education is crafted to give every child a safe,
              encouraging space to learn, express, and thrive. From their very first steps in Pre-KG
              through Class 8, students are guided by experienced teachers who blend academic rigor
              with values of respect, truthfulness, and self-confidence inspired by the teachings of Swami Vivekananda.
            </p>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: 'Quality Education', desc: 'Pre-KG to Class 8 comprehensive learning' },
                { title: 'Good Discipline', desc: 'Character building, respect & timeless values' },
                { title: 'Trilingual Curriculum', desc: 'Tamil, English and Hindi language learning' },
                { title: 'Fluency Training', desc: 'Dedicated Spoken English and Handwriting focus' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70"
                >
                  <CheckCircle2 size={18} className="text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>READ MORE ABOUT US</span>
                <ChevronRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-blue-700 text-slate-700 hover:text-blue-700 font-bold text-sm tracking-wide transition-all"
              >
                <span>VISIT OUR CAMPUS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
