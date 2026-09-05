import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { AppRoutes } from './app/router';
import { AppErrorBoundary } from './app/AppErrorBoundary';

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
      <AppErrorBoundary>
        <AppRoutes />
      </AppErrorBoundary>
    </MotionConfig>
  );
}

export default App;
