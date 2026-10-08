import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'wouter';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingMobileCTA } from './components/FloatingMobileCTA';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [location] = useLocation();

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-16 xl:pb-0">
      {/* 1. Top Announcement Bar */}
      <TopAnnouncementBar />

      {/* 2. Sticky Navigation Bar */}
      <Navbar />

      {/* Router View */}
      <div className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/academics" component={AcademicsPage} />
          <Route path="/facilities" component={FacilitiesPage} />
          <Route path="/activities" component={ActivitiesPage} />
          <Route path="/admissions" component={AdmissionsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

      {/* 16. Footer */}
      <Footer />

      {/* Floating CTA for Mobile Screens */}
      <FloatingMobileCTA />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
