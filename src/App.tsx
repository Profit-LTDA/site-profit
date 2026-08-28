import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudy } from './pages/CaseStudy';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
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
