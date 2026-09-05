import { motion, useScroll, useSpring } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { ChatWidget } from '../components/features/ChatWidget';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { CustomCursor } from '../components/ui/CustomCursor';

export function AppLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-(--color-bg) font-sans text-(--color-text-primary) overflow-x-hidden selection:bg-(--color-accent)/20 selection:text-(--color-accent) transition-colors duration-300">
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] bg-(--color-accent) origin-left z-50"
        style={{ scaleX }}
      />
      <CustomCursor />
      <Navbar />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
}
