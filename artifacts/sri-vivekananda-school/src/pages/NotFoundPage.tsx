import React from 'react';
import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-2xl">
          404
        </div>

        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          Please return to the official home page of Sri Vivekananda School.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
          >
            <span>Contact School</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
