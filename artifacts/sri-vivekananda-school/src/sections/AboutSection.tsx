import React from 'react';
import { Link } from 'wouter';
import {
  BookOpen,
  Languages,
  PenTool,
  Laptop,
  HeartPulse,
  Music,
  Droplets,
  Bus,
  CheckCircle,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { schoolData, curriculumPillars } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Educational Philosophy"
          title="ABOUT OUR SCHOOL"
          subtitle="Rooted in Discipline, Character & Holistic Growth"
          description="Sri Vivekananda Nursery and Primary School provides an integrated educational experience from Pre-KG to Standard V, combining foundational academics with character-building, language fluency, and creative development."
        />

        {/* Top Grid: Campus Drone View & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 relative group">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/10">
              <img
                src="/images/campus/aerial-campus-view.jpeg"
                alt="Aerial Drone View of Sri Vivekananda School in Singarapettai"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md text-white p-4 rounded-xl border border-white/10">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Campus Setting
              </p>
              <p className="text-sm font-bold text-slate-100">
                Surrounded by verdant coconut groves and peaceful nature in SKR Nagar, Singarapettai.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                <ShieldCheck size={16} className="text-blue-700" />
                <span>Our Guiding Motto</span>
              </div>
              <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                &ldquo;Arise • Awake • Achieve&rdquo;
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Inspired by Swami Vivekananda’s vision of man-making education, our school
                strives to awaken the natural intellectual and moral potential in every student
                with loving guidance, patience, and clear discipline.
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              We offer structured early childhood and primary education with modern classrooms,
              experienced faculty, clean drinking water, and safe transport. Our curriculum
              prepares young learners for secondary education through rigorous literacy,
              analytical problem solving, and confidence in public communication.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/academics"
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-extrabold text-sm group"
              >
                <span>Explore Academic Programs</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trilingual Curriculum Special Feature Card */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                Language Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Trilingual Curriculum
              </h3>
              <p className="text-sm text-blue-200 leading-relaxed">
                Equipping young learners with proficiency in mother tongue Tamil, global English,
                and national language Hindi from an early age for broad communication and cognitive agility.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Tamil', script: 'தமிழ்', role: 'Mother Tongue', desc: 'Tamil literature, phonetics & cultural roots' },
                { name: 'English', script: 'English', role: 'Global Medium', desc: 'Spoken English fluency, phonics & grammar' },
                { name: 'Hindi', script: 'हिन्दी', role: 'National Language', desc: 'Conversational basics & script awareness' },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-amber-300 block mb-1">
                      {lang.script}
                    </span>
                    <h4 className="text-base font-bold text-white">{lang.name}</h4>
                    <p className="text-[11px] font-semibold text-blue-300 uppercase tracking-wide">
                      {lang.role}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-white/10 leading-snug">
                    {lang.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Structured Information Cards on School Programs */}
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-blue-700" />
            <span>Comprehensive Learning & Extracurricular Focus</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Spoken English Training',
                desc: 'Special interactive sessions to develop fluent pronunciation and public speaking confidence.',
                icon: <Languages className="text-blue-700" size={20} />,
              },
              {
                title: 'Handwriting Coaching',
                desc: 'Dedicated penmanship practice ensuring neat, legible cursive and print letterforms.',
                icon: <PenTool className="text-blue-700" size={20} />,
              },
              {
                title: 'Computer Training',
                desc: 'Early digital familiarity, keyboard usage, and interactive educational software.',
                icon: <Laptop className="text-blue-700" size={20} />,
              },
              {
                title: 'Yoga Practice',
                desc: 'Mindful breathing, postures, and concentration exercises promoting mental calmness.',
                icon: <HeartPulse className="text-blue-700" size={20} />,
              },
              {
                title: 'Karate Practice',
                desc: 'Martial arts discipline, physical coordination, self-defense skills, and alertness.',
                icon: <ShieldCheck className="text-blue-700" size={20} />,
              },
              {
                title: 'Dance Practice',
                desc: 'Rhythm, coordination, and creative stage expression for cultural programs.',
                icon: <Music className="text-blue-700" size={20} />,
              },
              {
                title: 'Purified Drinking Water',
                desc: 'On-campus water filtration ensuring safe, healthy hydration for all children.',
                icon: <Droplets className="text-blue-700" size={20} />,
              },
              {
                title: 'School Bus Transport',
                desc: 'Dedicated bus fleet with reliable drivers covering designated school routes.',
                icon: <Bus className="text-blue-700" size={20} />,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">{card.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
