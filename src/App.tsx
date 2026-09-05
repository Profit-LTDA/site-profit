import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudy } from './pages/CaseStudy';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';
import { CustomCursor } from './components/ui/CustomCursor';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/solucoes" element={<Solutions />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/cases/:slug" element={<CaseStudy />} />
      </Routes>
    </MotionConfig>
  );
}

export default App;
