import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { schoolData } from '../data/schoolData';

interface NavItem {
  label: string;
  href: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '/#hero', path: '/' },
  { label: 'ABOUT US', href: '/about', path: '/about' },
  { label: 'ACADEMICS', href: '/academics', path: '/academics' },
  { label: 'FACILITIES', href: '/facilities', path: '/facilities' },
  { label: 'ACTIVITIES', href: '/activities', path: '/activities' },
  { label: 'GALLERY', href: '/gallery', path: '/gallery' },
  { label: 'ADMISSIONS', href: '/admissions', path: '/admissions' },
  { label: 'CONTACT', href: '/contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
          : 'bg-white py-3.5 border-b border-slate-100 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & School Name */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group text-left shrink-0"
            aria-label="Sri Vivekananda School Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md ring-2 ring-blue-600/30 group-hover:ring-blue-600 transition-all bg-white shrink-0">
              <img
                src="/images/logo/sri-vivekananda-school-logo.jpeg"
                alt="Sri Vivekananda School Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-extrabold text-blue-950 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                SRI VIVEKANANDA
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-blue-700 tracking-wider uppercase">
                Nursery & Primary School
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Singarapettai – 635 307
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1.5"
            aria-label="Desktop Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location === '/'
                  : location.startsWith(item.path);

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-3 py-2 text-xs font-bold tracking-wide transition-all rounded-md relative ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${schoolData.primaryPhone.replace(/\s+/g, '')}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors border border-slate-200"
              title="Call School"
            >
              <Phone size={14} className="text-blue-600" />
              <span>Call Us</span>
            </a>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>ADMISSIONS OPEN</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/admissions"
              className="inline-flex sm:hidden items-center px-2.5 py-1.5 rounded-md bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider"
            >
              ADMISSIONS
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location === '/'
                  : location.startsWith(item.path);

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.label === 'ADMISSIONS' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      2026–2027
                    </span>
                  )}
                  {isActive && <ChevronRight size={16} className="text-blue-700" />}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-wide shadow-sm"
              >
                <span>APPLY FOR ADMISSIONS 2026–2027</span>
                <ChevronRight size={16} />
              </Link>

              <a
                href={`tel:${schoolData.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                <Phone size={15} className="text-blue-600" />
                <span>Call School: {schoolData.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
