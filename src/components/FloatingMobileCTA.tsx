import React from 'react';
import { Link } from 'wouter';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export const FloatingMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl xl:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${schoolData.primaryPhone.replace(/\s+/g, '')}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors active:scale-95"
          aria-label="Call Sri Vivekananda School"
        >
          <Phone size={15} className="text-blue-700 mb-0.5" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${schoolData.whatsappNumber}?text=${encodeURIComponent(
            'Hello Sri Vivekananda School, I would like to enquire about admissions for the 2026-2027 academic year.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200 transition-colors active:scale-95"
          aria-label="WhatsApp School Enquiry"
        >
          <MessageCircle size={15} className="text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Apply / Admissions */}
        <Link
          href="/admissions"
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white text-xs font-extrabold uppercase tracking-wider shadow-md active:scale-95 text-center"
        >
          <Sparkles size={13} className="text-amber-400" />
          <span>Admissions</span>
        </Link>
      </div>
    </div>
  );
};
