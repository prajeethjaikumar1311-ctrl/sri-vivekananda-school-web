import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { WelcomeSection } from '../sections/WelcomeSection';
import { WhyChooseSection } from '../sections/WhyChooseSection';
import { AboutSection } from '../sections/AboutSection';
import { AcademicsSection } from '../sections/AcademicsSection';
import { LeadershipSection } from '../sections/LeadershipSection';
import { GallerySection } from '../sections/GallerySection';
import { AdmissionsSection } from '../sections/AdmissionsSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* 3. Hero */}
      <HeroSection />

      {/* 4. Welcome to Sri Vivekananda School */}
      <WelcomeSection />

      {/* 5. Why Choose Us */}
      <WhyChooseSection />

      {/* 6. About the School */}
      <AboutSection />

      {/* 7. Academics */}
      <AcademicsSection />

      {/* 8. Admissions 2026–2027 */}
      <AdmissionsSection />

      {/* 9. School Administration */}
      <LeadershipSection />

      {/* 10. School Photo Gallery */}
      <GallerySection />

      {/* 11. Contact / Get In Touch */}
      <ContactSection />
    </main>
  );
};
