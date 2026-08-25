import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudy } from './pages/CaseStudy';
import { Solutions } from './pages/Solutions';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/solucoes" element={<Solutions />} />
        <Route path="/cases/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
