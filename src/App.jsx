import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import Home from './pages/Home';
import Work from './pages/Work';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import LegalPrivacy from './pages/legal/LegalPrivacy';
import TermsOfService from './pages/legal/TermsOfService';

const App = () => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null; // Defensive DOM guard

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ReactLenis root options={{ duration: 1.2, smoothTouch: true, wheelMultiplier: 0.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <div className="flex flex-col min-h-screen bg-primary text-text-main font-sans selection:bg-accent selection:text-white transition-colors duration-500">
        <ScrollToTop />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<LegalPrivacy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
