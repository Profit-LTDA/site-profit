import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from '../Typewriter';
import robotWaving from '../../assets/robot/robot_acenando (1).png';

function HeroHeadline() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.22 } },
  };
  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 48, skewX: -4 },
    visible: { opacity: 1, y: 0, skewX: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.h1
      className="font-black tracking-tighter leading-[1.1] text-[clamp(2.5rem,5.5vw,5.5rem)] py-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={lineVariants} className="block text-slate-900">Pense além.</motion.span>
      <motion.span variants={lineVariants} className="block text-slate-900">Escale</motion.span>
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.1, delay: 0 } },
        }}
        className="block whitespace-nowrap"
      >
        <Typewriter
          texts={['resultados.', 'negócios.', 'o futuro.', 'times.']}
          typedColor="#1E50FF"
          color="#0f172a"
          cursorChar="|"
          showCursor
          ease={{ type: 'tween', duration: 0.07, delay: 2, ease: 'easeInOut' } as any}
          deleteSpeed={0.05}
          font={{
            fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            fontSize: 'inherit',
          }}
        />
      </motion.span>
    </motion.h1>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col pt-[72px] overflow-hidden"
    >
      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Subtle warm bottom left */}
      <div className="pointer-events-none absolute bottom-0 -left-20 w-[600px] h-[600px] bg-[#1E50FF] rounded-full blur-[150px] opacity-[0.15]" />

      {/* Content grid */}
      <div className="relative flex-1 flex items-center max-w-screen-xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-16 lg:gap-8 w-full items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-10"
            >
              <Sparkles className="w-3 h-3 text-[#1E50FF]" />
              <span className="text-xs font-bold text-[#1E50FF] tracking-wider uppercase">Profit · Soluções de Software</span>
            </motion.div>

            <HeroHeadline />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 text-base md:text-lg text-slate-400 leading-relaxed max-w-md"
            >
              Nascemos da vontade de construir juntos. Unimos engenharia de software, visão de negócio e personalização para transformar problemas reais em soluções.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link to="/contato" className="inline-flex items-center gap-2 bg-[#1E50FF] hover:bg-blue-700 text-white text-sm font-bold px-7 py-4 rounded-full transition-colors shadow-lg shadow-blue-500/25">
                Fale com a gente <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/#what-we-do" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                Ver soluções <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-14 flex items-center gap-4 flex-wrap"
            >
              <div className="flex -space-x-2">
                {['#f472b6','#60a5fa','#34d399','#fbbf24'].map(color => (
                  <div key={color} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Uma equipe formada construindo</p>
                <p className="text-xs text-slate-400">Engenharia, negócio e comunicação colocados em prática.</p>
              </div>
            </motion.div>
          </div>

          {/* Right: floating robot */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] pointer-events-none">
                <div className="absolute top-10 left-0 w-[80%] h-[80%] bg-[#1E50FF] rounded-full blur-[70px] opacity-80" />
                <div className="absolute top-0 left-10 w-[60%] h-[60%] bg-sky-400 rounded-full blur-[60px] opacity-70" />
                <div className="absolute bottom-0 right-10 w-[70%] h-[70%] bg-purple-600 rounded-full blur-[80px] opacity-70" />
                <div className="absolute bottom-10 left-10 w-[50%] h-[50%] bg-blue-700 rounded-full blur-[60px] opacity-80" />
              </div>

              <img
                src={robotWaving}
                alt="Mascote Profit"
                className="relative w-[280px] sm:w-[320px] lg:w-[460px] object-contain drop-shadow-2xl z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative pb-8 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-slate-300">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-300" />
          <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
