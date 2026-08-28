import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ChatWidget } from '../components/features/ChatWidget';
import { FoundersSection } from '../components/sections/FoundersSection';
import robotIdea from '../assets/robot/robot_ideia.png';
import robotNotebook from '../assets/robot/robot_notebook.png';
import robotChat from '../assets/robot/robot_chat.png';
import robotWaving from '../assets/robot/robot_acenando (1).png';



const TIMELINE_STEPS = [
  {
    year: '2022',
    title: 'O Nascimento da Ideia',
    desc: 'Percebemos que as PMEs estavam reféns de softwares engessados e processos manuais. Decidimos que a tecnologia deveria se adaptar ao negócio, e não o contrário.',
    robot: robotIdea,
    tag: 'Origem',
    accent: '#1E50FF',
  },
  {
    year: '2023',
    title: 'Primeiras Soluções',
    desc: 'Lançamos nossos primeiros sistemas sob medida, validando nossa abordagem "Problem Driven" construindo a quatro mãos com nossos clientes fundadores.',
    robot: robotNotebook,
    tag: 'Desenvolvimento',
    accent: '#0284c7',
  },
  {
    year: '2024',
    title: 'Expansão e Integrações',
    desc: 'Começamos a integrar IA e pipelines de dados para automatizar tarefas repetitivas de forma pragmática, elevando exponencialmente o ROI entregue a cada parceiro.',
    robot: robotChat,
    tag: 'Inovação & IA',
    accent: '#7c3aed',
  },
  {
    year: 'Hoje',
    title: 'O Tech Studio',
    desc: 'Um estúdio de tecnologia sólido, atuando como o braço de inteligência técnica de diversas empresas e moldando o futuro da eficiência operacional.',
    robot: robotWaving,
    tag: 'Presente',
    accent: '#059669',
  },
];

function TimelineCardItem({
  step,
  index,
  isActive,
  onActivate,
}: {
  step: typeof TIMELINE_STEPS[0];
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    margin: '-25% 0px -25% 0px',
  });

  useEffect(() => {
    if (isInView) {
      onActivate(index);
    }
  }, [isInView, index, onActivate]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`flex gap-5 sm:gap-8 items-start group cursor-pointer transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-55 hover:opacity-85'
      }`}
      onClick={() => onActivate(index)}
    >
      {/* Node dot on the line */}
      <div className="relative mt-2 shrink-0">
        <div
          className={`w-5 h-5 rounded-full border-[3px] transition-all duration-500 flex items-center justify-center ${
            isActive
              ? 'bg-[#1E50FF] border-white shadow-[0_0_20px_rgba(30,80,255,0.9)] scale-125'
              : 'bg-white border-slate-300 group-hover:border-[#1E50FF]'
          }`}
        >
          {isActive && (
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          )}
        </div>
      </div>

      {/* Glassmorphism Card */}
      <div
        className={`flex-1 rounded-2xl p-6 sm:p-7 transition-[background-color,border-color,box-shadow] duration-300 border ${
          isActive
            ? 'bg-white/95 border-[#1E50FF]/40 shadow-[0_20px_45px_rgba(30,80,255,0.12)] ring-1 ring-[#1E50FF]/20'
            : 'bg-white/50 border-slate-100 hover:border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className={`font-black text-xs sm:text-sm uppercase tracking-widest px-3 py-1 rounded-full transition-colors ${
              isActive
                ? 'bg-blue-50 text-[#1E50FF]'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            {step.year}
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {step.tag}
          </span>
        </div>

        <h3
          className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${
            isActive ? 'text-slate-900' : 'text-slate-700'
          }`}
        >
          {step.title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-sm">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = TIMELINE_STEPS[activeStep];

  return (
    <div className="relative max-w-6xl mx-auto mb-32 md:mb-48 pt-10">
      <div className="text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4"
        >
          <Sparkles className="w-3 h-3 text-[#1E50FF]" />
          <span className="text-xs font-bold text-[#1E50FF] tracking-wider uppercase">Nossa Jornada</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-slate-900"
        >
          A História da Profit
        </motion.h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        {/* Left: Sticky 3D Depth Robot Stage */}
        <div className="w-full md:w-1/2 md:sticky top-28 flex flex-col justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square flex items-center justify-center">
            
            {/* Dynamic ambient glow behind the robot */}
            <div
              key={`blob-${activeStep}`}
              className="absolute inset-[5%] rounded-full opacity-70"
              style={{ background: `radial-gradient(circle, ${currentStep.accent}45 0%, transparent 68%)`, transition: 'background 300ms ease' }}
            />

            {/* Depth Robot Container with AnimatePresence */}
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 overflow-visible">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentStep.year}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    transition: {
                      duration: 0.18,
                      ease: [0.32, 0, 0.67, 0],
                    },
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={currentStep.robot} 
                    alt={`Robô Profit - ${currentStep.year}`} 
                    loading="lazy"
                    decoding="async"
                    className="max-w-[280px] sm:max-w-[340px] max-h-[340px] w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(30,80,255,0.22)] select-none pointer-events-none" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Year pill indicator under the robot */}
            <motion.div 
              key={`badge-${currentStep.year}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-3 bg-white border border-slate-200/80 shadow-md px-4 py-1.5 rounded-full flex items-center gap-2 z-20"
            >
              <span className="text-xs font-black text-[#1E50FF]">{currentStep.year}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className="text-xs font-semibold text-slate-700">{currentStep.title}</span>
            </motion.div>
          </div>
        </div>

        {/* Right: Vertical Scrolling Timeline */}
        <div className="w-full md:w-1/2 relative py-4 md:py-8">
          {/* Base track */}
          <div className="absolute left-[9px] top-6 bottom-10 w-[3px] bg-slate-100 rounded-full" />
          
          {/* Active progress indicator line */}
          <div 
            className="absolute left-[9px] top-6 w-[3px] bg-gradient-to-b from-[#1E50FF] via-blue-400 to-[#1E50FF] rounded-full shadow-[0_0_12px_rgba(30,80,255,0.7)] transition-all duration-500" 
            style={{
              height: `${((activeStep + 1) / TIMELINE_STEPS.length) * 85}%`,
            }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-10 md:gap-14 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => (
              <TimelineCardItem
                key={step.year}
                step={step}
                index={idx}
                isActive={activeStep === idx}
                onActivate={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-clip selection:bg-[#1E50FF]/20 selection:text-[#1E50FF]">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#1E50FF] origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="pt-32 pb-20 relative">
        {/* Background dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Static ambient color without expensive blur filters */}
        <div className="absolute inset-0 pointer-events-none opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 100% 5%, rgba(30,80,255,0.08), transparent 30%), radial-gradient(circle at 0% 95%, rgba(56,189,248,0.06), transparent 28%)' }} />

        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-3 h-3 text-[#1E50FF]" />
              <span className="text-xs font-bold text-[#1E50FF] tracking-wider uppercase">Sobre a Profit</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1] mb-6"
            >
              Tecnologia feita por pessoas, para resolver problemas de pessoas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
            >
              Nós fundamos a Profit porque acreditamos que as Pequenas e Médias Empresas merecem a mesma tecnologia de ponta e arquitetura de elite das gigantes corporativas.
            </motion.p>
          </div>

          {/* The Story of Profit (Interactive 3D Depth Timeline) */}
          <TimelineSection />

          {/* Founders Animated Section */}
          <FoundersSection />
          {/* Call to action at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 text-center"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-6">Vamos escalar sua operação?</h2>
            <a href="/contato" className="inline-flex items-center gap-2 bg-[#1E50FF] hover:bg-blue-700 text-white text-sm font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-blue-500/25">
              Começar um projeto <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
