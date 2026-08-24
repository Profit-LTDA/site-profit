import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { Services } from '../components/sections/Services';
import { Cases } from '../components/sections/Cases';
import { Footer } from '../components/layout/Footer';
import { ChatWidget } from '../components/features/ChatWidget';

export function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#1E50FF]/20 selection:text-[#1E50FF]">
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#1E50FF] origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Cases />
      <Footer />
      <ChatWidget />
      
    </div>
  );
}
