import React from 'react';
import { Link } from 'wouter';
import { Bus, ShieldCheck, MapPin, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const TransportationSection: React.FC = () => {
  return (
    <section id="transportation" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Safe Daily Commute"
          title="SCHOOL TRANSPORT"
          subtitle="Bus facilities available for school routes."
          description="Sri Vivekananda School operates dedicated yellow buses to provide dependable, punctual transit for students between home and school."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Real School Buses Image */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-900 group relative">
              <img
                src="/images/transport/school-buses-fleet.jpeg"
                alt="Sri Vivekananda School Yellow Buses Fleet in Singarapettai"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                    Official Transport
                  </p>
                  <p className="text-sm font-extrabold text-white">
                    Sri Vivekananda School Bus Fleet
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-[10px] font-bold">
                  Dedicated Routes
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic text-center">
              * Photograph of the school bus fleet parked inside the Sri Vivekananda School campus.
            </p>
          </div>

          {/* Right: Transport Details & Route Enquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-600">
                <Bus size={28} />
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Secure & Reliable School Routes
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that safe travel gives parents complete peace of mind. Our school
                bus facilities are organized to ensure young children travel comfortably and
                arrive on time every morning.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Bus facilities available for school routes',
                  'Dedicated yellow school buses with official school identification',
                  'Careful pickup and drop for nursery and primary students',
                  'Experienced drivers prioritizing safety and punctuality',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Verified Notice: No fabricated routes or fee numbers */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Route & Timing Details:</p>
                <p>
                  Please contact the school administration office to obtain the current list of
                  designated bus stops, pickup timings, and route availability for your residential locality.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>CONTACT SCHOOL FOR ROUTE DETAILS</span>
                  <ChevronRight size={15} />
                </Link>

                <a
                  href={`tel:${schoolData.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
                  title="Call for bus route details"
                >
                  <Phone size={14} className="text-blue-700" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
