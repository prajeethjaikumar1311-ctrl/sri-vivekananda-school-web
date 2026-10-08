import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-20 xl:bottom-8 right-5 z-40 p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
