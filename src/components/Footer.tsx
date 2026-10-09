import React from 'react';
import { Link } from 'wouter';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Heart,
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5 shadow-md ring-2 ring-amber-400 shrink-0">
                <img
                  src="/images/logo/sri-vivekananda-school-logo.jpeg"
                  alt="Sri Vivekananda School Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight">
                  SRI VIVEKANANDA SCHOOL
                </h3>
                <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Singarapettai – 635 307
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Providing a dependable educational foundation for young minds through quality
              teaching, good discipline, trilingual development, and joyful learning in a
              supportive environment.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 shadow-xs shrink-0 ring-1 ring-blue-500">
                <img
                  src={schoolData.trustSeal}
                  alt="JSP Educational Trust Seal"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-slate-200">{schoolData.trustName}</p>
                <p className="text-amber-400 text-[11px] italic font-medium">
                  &ldquo;{schoolData.trustMotto}&rdquo;
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-700/50 text-blue-200 text-xs">
              <ShieldCheck size={14} className="text-amber-400 shrink-0" />
              <span>{schoolData.recognition}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Academics', href: '/academics' },
                { label: 'School Facilities', href: '/facilities' },
                { label: 'Student Activities', href: '/activities' },
                { label: 'Admissions 2026–2027', href: '/admissions' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight size={12} className="text-blue-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Highlights */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Academics & Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Pre-KG, LKG & UKG Kindergarten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Standard I to VIII (Class 1 to 8)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Trilingual Curriculum (Tamil, English, Hindi)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Spoken English & Handwriting Training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Computer Training & Activity-Based Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Yoga Practice & Karate Training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>School Bus Fleet for Designated Routes</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={schoolData.rtePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 underline font-medium"
              >
                <span>Tamil Nadu RTE Official Portal</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Column 4: Official Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact School
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Sri Vivekananda School</p>
                  <p className="text-slate-400">SKR Nagar, Singarapettai – 635 307</p>
                  <p className="text-slate-400">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="font-semibold text-white">Admissions & Office:</p>
                  <div className="flex flex-col gap-1 text-slate-300">
                    {schoolData.phoneNumbers.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="hover:text-amber-300 transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email Address:</p>
                  <a
                    href={`mailto:${schoolData.emails.official}`}
                    className="text-amber-300 hover:text-amber-200 transition-colors underline break-all"
                  >
                    {schoolData.emails.official}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Sri Vivekananda School, Singarapettai. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>SKR Nagar, Singarapettai – 635 307</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Quality Education with <Heart size={11} className="text-red-500 fill-red-500" /> & Discipline
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
