import React, { useState, useMemo } from 'react';
import { Camera, Tag, Maximize2, Sparkles, Filter } from 'lucide-react';
import { galleryImages, GalleryItem } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';
import { LightboxModal } from '../components/LightboxModal';

const categories = [
  'ALL',
  'CAMPUS',
  'STUDENTS',
  'EVENTS',
  'EDUCATIONAL TRIPS',
  'CULTURAL ACTIVITIES',
  'CELEBRATIONS',
  'TRANSPORTATION',
  'SCHOOL LIFE',
];

interface GallerySectionProps {
  initialCategory?: string;
  isFullPage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  initialCategory = 'ALL',
  isFullPage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return galleryImages;
    }
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (imgId: string) => {
    const idx = filteredImages.findIndex((item) => item.id === imgId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          badge="Official Photo Gallery"
          title="CAMPUS & STUDENT LIFE GALLERY"
          subtitle="Authentic Photographs from Sri Vivekananda School"
          description="A photographic record of our school community—featuring our modern campus building, joyful students, caring teachers, festival celebrations, and memorable educational tours."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-700 text-white shadow-md transform scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout preserving Aspect Ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => handleOpenLightbox(image.id)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-slate-200"
            >
              {/* Image Container */}
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-extrabold uppercase tracking-wider border border-white/10">
                    <Tag size={10} />
                    {image.category}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 size={14} />
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm font-extrabold text-white leading-snug drop-shadow-md">
                    {image.title}
                  </h3>
                  {image.subtitle && (
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 drop-shadow-sm">
                      {image.subtitle}
                    </p>
                  )}
                  <span className="inline-block text-[11px] text-amber-400 font-bold mt-2">
                    Click to view full photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Component Integration */}
        <LightboxModal
          items={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      </div>
    </section>
  );
};
