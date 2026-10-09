import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'CAMPUS' | 'STUDENTS' | 'EVENTS' | 'ACTIVITIES';
  categories: string[];
  featured?: boolean;
  heightClassDesktop?: string;
  heightClassMobile?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-campus-wide',
    src: '/images/campus/campus-building-wide.jpeg',
    alt: 'Sri Vivekananda School campus three-storey building with colourful verandas and garden',
    title: 'A school that feels like home',
    category: 'CAMPUS',
    categories: ['CAMPUS'],
    featured: true,
    heightClassDesktop: 'h-[500px] lg:h-[560px]',
    heightClassMobile: 'h-[360px] sm:h-[420px]',
  },
  {
    id: 'gal-campus-evening',
    src: '/images/campus/campus-building-evening.jpeg',
    alt: 'Sri Vivekananda School building in Singarapettai in evening light',
    title: 'School in the evening light',
    category: 'CAMPUS',
    categories: ['CAMPUS'],
    heightClassDesktop: 'h-[270px]',
    heightClassMobile: 'h-[260px] sm:h-[280px]',
  },
  {
    id: 'gal-neighbourhood',
    src: '/images/campus/aerial-village-view.jpeg',
    alt: 'Panoramic countryside view of palm groves and village landscape surrounding the school in Singarapettai',
    title: 'Our neighbourhood',
    category: 'CAMPUS',
    categories: ['CAMPUS'],
    heightClassDesktop: 'h-[320px]',
    heightClassMobile: 'h-[260px] sm:h-[280px]',
  },
  {
    id: 'gal-trip-paravasa',
    src: '/images/students/educational-trip-paravasa-uganam.jpeg',
    alt: 'Sri Vivekananda School students in uniform on an experiential educational trip at Paravasa Ulagam',
    title: 'Learning beyond the classroom',
    category: 'STUDENTS',
    categories: ['STUDENTS', 'ACTIVITIES'],
    heightClassDesktop: 'h-[320px]',
    heightClassMobile: 'h-[260px] sm:h-[300px]',
  },
  {
    id: 'gal-campus-aerial',
    src: '/images/campus/aerial-campus-view.jpeg',
    alt: 'Aerial view capturing the school campus building, roof pavilion and courtyard',
    title: 'Campus from above',
    category: 'CAMPUS',
    categories: ['CAMPUS'],
    heightClassDesktop: 'h-[270px]',
    heightClassMobile: 'h-[260px] sm:h-[280px]',
  },
  {
    id: 'gal-trip-outdoor',
    src: '/images/students/educational-trip-outdoor.jpeg',
    alt: 'Students and teachers exploring historic landmarks in Mahabalipuram on an educational tour',
    title: 'A day of discovery',
    category: 'STUDENTS',
    categories: ['STUDENTS', 'ACTIVITIES'],
    heightClassDesktop: 'h-[310px]',
    heightClassMobile: 'h-[260px] sm:h-[290px]',
  },
  {
    id: 'gal-kolam',
    src: '/images/events/cultural-celebration-kolam.jpeg',
    alt: 'Students assembled around an intricate traditional Kolam in the campus courtyard for Pongal celebration',
    title: 'Culture, colour and community',
    category: 'EVENTS',
    categories: ['EVENTS', 'ACTIVITIES'],
    heightClassDesktop: 'h-[360px]',
    heightClassMobile: 'h-[280px] sm:h-[320px]',
  },
  {
    id: 'gal-celebration',
    src: '/images/events/school-celebration.jpeg',
    alt: 'School courtyard function with festive balloon decoration and children in celebration attire',
    title: 'Celebrating together',
    category: 'EVENTS',
    categories: ['EVENTS', 'ACTIVITIES'],
    heightClassDesktop: 'h-[280px]',
    heightClassMobile: 'h-[260px] sm:h-[280px]',
  },
  {
    id: 'gal-courtyard',
    src: '/images/campus/campus-courtyard.jpeg',
    alt: 'Spacious campus courtyard and three-tier classroom building for assemblies and games',
    title: 'Open spaces to learn',
    category: 'ACTIVITIES',
    categories: ['ACTIVITIES', 'CAMPUS'],
    heightClassDesktop: 'h-[300px]',
    heightClassMobile: 'h-[260px] sm:h-[280px]',
  },
];

const CATEGORIES = ['ALL', 'CAMPUS', 'STUDENTS', 'EVENTS', 'ACTIVITIES'] as const;
type Category = (typeof CATEGORIES)[number];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered images based on current tab
  const filteredImages = React.useMemo(() => {
    if (selectedCategory === 'ALL') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(
      (img) => img.category === selectedCategory || img.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  // Two-column layout distribution for desktop
  const { leftColImages, rightColImages } = React.useMemo(() => {
    if (selectedCategory === 'ALL') {
      // Balanced editorial layout with large featured card on the left
      const left = [
        GALLERY_IMAGES[0], // Featured: A school that feels like home
        GALLERY_IMAGES[3], // Learning beyond the classroom
        GALLERY_IMAGES[2], // Our neighbourhood
        GALLERY_IMAGES[7], // Celebrating together
      ];
      const right = [
        GALLERY_IMAGES[1], // School in the evening light
        GALLERY_IMAGES[6], // Culture, colour and community
        GALLERY_IMAGES[4], // Campus from above
        GALLERY_IMAGES[5], // A day of discovery
        GALLERY_IMAGES[8], // Open spaces to learn
      ];
      return { leftColImages: left, rightColImages: right };
    }

    const left = filteredImages.filter((_, idx) => idx % 2 === 0);
    const right = filteredImages.filter((_, idx) => idx % 2 !== 0);
    return { leftColImages: left, rightColImages: right };
  }, [selectedCategory, filteredImages]);

  // Lightbox navigation handlers
  const handleOpenLightbox = (image: GalleryImage) => {
    const idx = filteredImages.findIndex((item) => item.id === image.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  // Keyboard controls for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-amber-400/15 text-amber-600 border border-amber-400/30 shadow-xs">
              <span>{selectedCategory === 'ALL' ? '9 IMAGES' : `${filteredImages.length} IMAGES`}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              GALLERY
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25 scale-[1.02]'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop View: Two-Column Masonry Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftColImages.map((image) => (
              <GalleryCard
                key={image.id}
                image={image}
                onClick={() => handleOpenLightbox(image)}
                isFeatured={image.featured && selectedCategory === 'ALL'}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightColImages.map((image) => (
              <GalleryCard
                key={image.id}
                image={image}
                onClick={() => handleOpenLightbox(image)}
              />
            ))}
          </div>
        </div>

        {/* Mobile View: Single Column Layout Preserving Visual Hierarchy */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {filteredImages.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => handleOpenLightbox(image)}
              isFeatured={image.featured && selectedCategory === 'ALL'}
              isMobile
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white pb-3 z-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-amber-400 text-slate-950">
                {activeImage.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {(lightboxIndex ?? 0) + 1} of {filteredImages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCloseLightbox}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700/80"
              aria-label="Close lightbox (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Middle: Image with Previous / Next Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center w-full max-w-6xl my-auto px-2 sm:px-12"
          >
            {/* Previous Button */}
            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all duration-200 cursor-pointer border border-slate-700 shadow-xl"
                aria-label="Previous image (Left Arrow)"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Lightbox Image (preserves original aspect ratio) */}
            <div className="relative max-h-[72vh] max-w-full flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </div>

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all duration-200 cursor-pointer border border-slate-700 shadow-xl"
                aria-label="Next image (Right Arrow)"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Bottom Bar: Title & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl text-center pt-3 pb-2 z-10 space-y-1"
          >
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {activeImage.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
              {activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
  isFeatured?: boolean;
  isMobile?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  image,
  onClick,
  isFeatured = false,
  isMobile = false,
}) => {
  const heightClass = isMobile
    ? isFeatured
      ? 'h-[360px] sm:h-[420px]'
      : image.heightClassMobile || 'h-[260px]'
    : isFeatured
    ? image.heightClassDesktop || 'h-[520px]'
    : image.heightClassDesktop || 'h-[300px]';

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-slate-900 border border-slate-200/40 ${heightClass}`}
    >
      {/* Background Photograph */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Hover Icon Indicator */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
        <Maximize2 size={15} />
      </div>

      {/* Text Overlay at Bottom */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 flex flex-col justify-end space-y-1 pointer-events-none">
        {/* Gold Uppercase Category Label */}
        <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-amber-400 drop-shadow-sm font-mono">
          {image.category}
        </span>

        {/* White Image Title */}
        <h3
          className={`font-black text-white tracking-tight leading-snug drop-shadow-md ${
            isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          }`}
        >
          {image.title}
        </h3>
      </div>
    </div>
  );
};
