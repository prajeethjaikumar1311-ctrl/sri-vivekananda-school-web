import React from 'react';
import { Link } from 'wouter';
import { ChevronRight, ArrowDown, Sparkles, ShieldCheck, BookOpen, Award } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background High-Quality Campus Building Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/campus/campus-building-wide.jpeg"
          alt="Sri Vivekananda School Building in Singarapettai"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
          loading="eager"
        />
        {/* Deep Royal Blue Gradient Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-slate-900/75" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-blue-950/40 to-slate-950/80" />
      </div>

      {/* Decorative Grid Lines / Overlay Accent */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Announcement / Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-lg border border-amber-300">
            <Sparkles size={14} className="text-blue-950 animate-spin" />
            <span>ADMISSIONS OPEN FOR {schoolData.academicYear}</span>
            <span className="bg-slate-950 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
              {schoolData.classesOffered}
            </span>
          </div>

          {/* Main Title */}
          <div>
            <div className="text-amber-400 text-sm sm:text-base font-extrabold uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-amber-400" />
              <span>FOUNDATIONAL & ELEMENTARY EDUCATION</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-md">
              SRI VIVEKANANDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-amber-200 to-amber-400">SCHOOL</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="inline-block border-l-4 border-amber-400 pl-4 py-1">
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-slate-100">
              {schoolData.address.village} – {schoolData.address.pincode}
            </p>
            <p className="text-sm sm:text-base text-blue-200 font-medium">
              {schoolData.address.street}, Tamil Nadu, India
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl font-semibold text-amber-300 tracking-wide drop-shadow-xs">
            {schoolData.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
            Empowering children from Pre-KG to Class V with strong academic foundations,
            fluent spoken English, trilingual learning (Tamil, English, Hindi), handwriting mastery,
            and noble values inspired by Swami Vivekananda.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>ADMISSIONS {schoolData.academicYear}</span>
              <ChevronRight size={18} />
            </Link>

            <a
              href="#welcome"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wide border border-white/25 backdrop-blur-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>EXPLORE OUR SCHOOL</span>
              <ArrowDown size={17} />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
              <ShieldCheck size={24} className="text-amber-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">Govt. Recognized</p>
                <p className="text-slate-300">TN Govt. Approved</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
              <BookOpen size={24} className="text-blue-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">Trilingual Curriculum</p>
                <p className="text-slate-300">Tamil, English & Hindi</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
              <Award size={24} className="text-emerald-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white">{schoolData.trustName}</p>
                <p className="text-slate-300">18+ Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
