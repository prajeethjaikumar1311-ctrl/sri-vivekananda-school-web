import React from 'react';
import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      className="flex items-center text-xs font-medium text-slate-500 py-3 px-4 sm:px-6 bg-slate-50/80 border-b border-slate-200/60"
      aria-label="Breadcrumb Navigation"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center gap-1.5 flex-wrap">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors"
        >
          <Home size={13} className="text-blue-600" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.label}>
              <ChevronRight size={12} className="text-slate-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-blue-900">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
