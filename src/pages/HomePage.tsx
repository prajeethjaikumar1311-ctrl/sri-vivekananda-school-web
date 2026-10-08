import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { WelcomeSection } from '../sections/WelcomeSection';
import { WhyChooseSection } from '../sections/WhyChooseSection';
import { AboutSection } from '../sections/AboutSection';
import { AcademicsSection } from '../sections/AcademicsSection';
import { FacilitiesSection } from '../sections/FacilitiesSection';
import { LeadershipSection } from '../sections/LeadershipSection';
import { ActivitiesSection } from '../sections/ActivitiesSection';
import { SchoolLifeSection } from '../sections/SchoolLifeSection';
import { AdmissionsSection } from '../sections/AdmissionsSection';
import { TransportationSection } from '../sections/TransportationSection';
import { GallerySection } from '../sections/GallerySection';
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

      {/* 8. Facilities */}
      <FacilitiesSection />

      {/* 9. Leadership */}
      <LeadershipSection />

      {/* 10. Student Activities */}
      <ActivitiesSection />

      {/* 11. School Life / Photo Showcase */}
      <SchoolLifeSection />

      {/* 12. Admissions 2026–2027 */}
      <AdmissionsSection />

      {/* 13. Transportation */}
      <TransportationSection />

      {/* 14. Gallery */}
      <GallerySection />

      {/* 15. Contact */}
      <ContactSection />
    </main>
  );
};
