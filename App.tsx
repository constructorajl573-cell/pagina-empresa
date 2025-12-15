import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Define constants outside component to avoid recreation
const BG_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJhrVC_wL_2uZUloRbho1-F4DNZYScZM0XYZLJcc3Wh0uY6kZ45O18zFVl6UxrbyOLYTerA9U3fEfZ-j2idqgXqo6raNmJP_xRwjKwEeWS63-3cfd07nhzlFf4U1ge_K6fctuRBb_qPnoZ7npIyxY0QC22wzRsDPvULK1VEKdhB5kh9myTp7o76r2yL4Q9Z7-9JLQm7KFeZIQ5iCGdSeTmq_WHxC4nWXdWqs4FTyByHTCqQhIFBhlXLN0KcYhumILzhFAHaUVtc7Q';
const OVERLAY_GRADIENT = 'linear-gradient(rgba(16, 34, 28, 0.92) 0%, rgba(16, 34, 28, 0.98) 100%)';

const App: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        // Zoom in (scale up) as user scrolls down. 
        // 0.0003 provides a subtle zoom effect over 1000s of pixels.
        const scale = 1 + scrollY * 0.0003;
        bgRef.current.style.transform = `scale(${scale})`;
      }
    };

    // Initial call to set state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex min-h-screen w-full flex-col font-sans">
        {/* Global Background Layer */}
        <div
          ref={bgRef}
          className="fixed top-0 left-0 w-full h-full -z-50 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `${OVERLAY_GRADIENT}, url("${BG_IMAGE_URL}")`,
            // Ensure origin is center for the zoom effect
            transformOrigin: 'center center'
          }}
        />

        <Navbar />

        <main className="flex h-full grow flex-col">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;