import React from 'react';
import { Link } from 'wouter';
import {
  Sparkles,
  CheckCircle,
  FileText,
  Calendar,
  ExternalLink,
  ChevronRight,
  Phone,
  AlertCircle,
  ShieldAlert,
} from 'lucide-react';
import { schoolData, admissionChecklist, rteAdmissionInfo } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const AdmissionsSection: React.FC = () => {
  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Admissions 2026–2027"
          title="ADMISSIONS OPEN 2026–2027"
          subtitle="Enrolling for Pre-KG to Standard V"
          description="Give your child a strong foundation for a bright future. Welcome to Sri Vivekananda School, where learning, discipline, and character flourish together."
        />

        {/* Admissions Overview Card & Official Poster Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left: Official Admission Poster Inset */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-slate-900 group relative">
              <img
                src="/images/admissions/admissions-2026-2027-poster.jpeg"
                alt="Sri Vivekananda School Official Admissions 2026-2027 Poster"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-slate-950 text-white flex items-center justify-between text-xs">
                <span className="font-bold text-amber-400">Official Admissions Poster</span>
                <span className="text-slate-400">Academic Year {schoolData.academicYear}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <Sparkles size={16} className="text-blue-700 mt-0.5 shrink-0" />
              <p>
                <strong>Early Application Recommended:</strong> Seats in Pre-KG, LKG, UKG, and
                Primary grades are filled in order of application. Contact the school office for
                in-person visits and prospectus details.
              </p>
            </div>
          </div>

          {/* Right: Key Admission Features & Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-700 text-white">
                  Classes Enrolling
                </span>
                <span className="text-xs font-bold text-amber-600">
                  Ages 2.5 Years to 10+ Years
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Give your child a strong foundation for a bright future.
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Sri Vivekananda School welcomes applications for all grades from Pre-KG through
                Class V. Our admission process is transparent, parent-friendly, and focused on
                providing an enriching educational journey for your child.
              </p>

              {/* Class Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {['Pre-KG', 'LKG', 'UKG', 'Standard I', 'Standard II', 'Standard III', 'Standard IV', 'Standard V'].map(
                  (grade) => (
                    <div
                      key={grade}
                      className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-center font-bold text-xs text-slate-800 shadow-2xs"
                    >
                      {grade}
                    </div>
                  )
                )}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-md transition-all"
                >
                  <span>ENQUIRE FOR ADMISSION</span>
                  <ChevronRight size={16} />
                </Link>

                <a
                  href={`tel:${schoolData.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-blue-700 text-slate-800 font-bold text-sm transition-all"
                >
                  <Phone size={15} className="text-blue-700" />
                  <span>CALL: {schoolData.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Document Requirements Checklist */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <FileText size={20} className="text-blue-700" />
                  <h3 className="text-lg font-black text-slate-900">
                    Required Admission Documents
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Document Checklist</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {admissionChecklist.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                  >
                    <CheckCircle size={17} className="text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{doc.title}</p>
                      <p className="text-[11px] text-amber-700 font-semibold">{doc.tamil}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Crucial Note to prevent outdated dates */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2 mt-4">
                <AlertCircle size={16} className="text-amber-700 mt-0.5 shrink-0" />
                <p>
                  <strong>Important Notice:</strong> Please contact the school office directly
                  for the latest admission requirements, seat availability, and applicable dates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RTE Admission Information Card */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-10 shadow-2xl border border-blue-800/60 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* RTE Poster Inset */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-2 ring-amber-400 bg-slate-900">
                <img
                  src="/images/admissions/rte-admission-notice-2026.jpeg"
                  alt="RTE Admission Notice 2026-2027"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-slate-300 text-center mt-2">
                Official Tamil Nadu RTE Notice
              </p>
            </div>

            {/* RTE Information Details */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
                <Sparkles size={12} />
                {rteAdmissionInfo.title}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Right to Education (RTE) Scheme Guidelines
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                As per the Right of Children to Free and Compulsory Education Act, eligible
                students can apply through the official Government of Tamil Nadu RTE portal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
                    Age Eligibility (Birth Period)
                  </p>
                  <p className="text-sm font-extrabold text-white mt-1">
                    {rteAdmissionInfo.eligibilityBirthPeriod}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Applicable for entry level admission.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
                    Residential Criteria
                  </p>
                  <p className="text-sm font-extrabold text-white mt-1">
                    Within 1-Kilometer from School
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Residential address must be within 1km.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={rteAdmissionInfo.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>APPLY ON TN RTE PORTAL</span>
                  <ExternalLink size={14} />
                </a>

                <p className="text-[11px] text-slate-300 max-w-md">
                  {rteAdmissionInfo.scheduleNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
