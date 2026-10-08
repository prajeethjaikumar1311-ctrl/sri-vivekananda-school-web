import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../data/schoolData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview modal"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between text-white/90 max-w-7xl mx-auto w-full z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/60 text-xs font-semibold text-blue-100 border border-blue-400/30">
            <Tag size={12} />
            {currentItem.category}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
          aria-label="Close Lightbox (Escape)"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-2 max-w-6xl mx-auto w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.src}
          alt={currentItem.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-200 select-none"
        />

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white/90 hover:text-white border border-white/20 transition-all transform hover:scale-110 active:scale-90 shadow-lg focus:outline-hidden focus:ring-2 focus:ring-amber-400"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white/90 hover:text-white border border-white/20 transition-all transform hover:scale-110 active:scale-90 shadow-lg focus:outline-hidden focus:ring-2 focus:ring-amber-400"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div
        className="max-w-4xl mx-auto w-full text-center text-white px-4 py-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-base sm:text-lg font-bold text-slate-100">
          {currentItem.title}
        </h3>
        {currentItem.subtitle && (
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {currentItem.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
