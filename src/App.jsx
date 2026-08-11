import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Page Views
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PracticeAreas from './pages/PracticeAreas';
import OurTeam from './pages/OurTeam';
import LegalInsights from './pages/LegalInsights';
import Internships from './pages/Internships';
import InternWall from './pages/InternWall';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

// ScrollToTop component ensures that whenever a route changes, the viewport scrolls cleanly to (0, 0)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="legal-insights" element={<LegalInsights />} />
          <Route path="insights" element={<LegalInsights />} />
          <Route path="internships" element={<Internships />} />
          <Route path="careers" element={<Internships />} />
          <Route path="intern-wall" element={<InternWall />} />
          <Route path="internwall" element={<InternWall />} />
          <Route path="alumni" element={<InternWall />} />
          <Route path="contact" element={<Contact />} />
          {/* Fallback redirect for unknown routes */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
