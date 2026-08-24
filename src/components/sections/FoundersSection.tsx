import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  fullBio: string;
  individualImage: string;
  linkedin: string;
  email: string;
}

export const TEAM_OVERVIEW = {
  groupImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  title: "Quem faz acontecer",
  missionQuote: "Tecnologia sob medida feita por pessoas, para resolver problemas reais de empresas.",
};

export const FOUNDERS: Founder[] = [
  {
    id: 'felipe',
    name: 'Felipe Terossi',
    role: 'Sócio & Fundador',
    fullBio: 'Estrategista de negócios e focado em resolver problemas operacionais crônicos. Acredita que a tecnologia deve ser invisível, enquanto o resultado é o que realmente brilha no final do mês.',
    individualImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'adriano',
    name: 'Adriano Kenzo',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de Software apaixonado por criar arquiteturas escaláveis. Lidera a inteligência técnica da Profit garantindo entregas robustas e sob medida.',
    individualImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'gabriel',
    name: 'Gabriel Felix',
    role: 'Sócio & Fundador',
    fullBio: 'Especialista em design de produto e experiência do usuário. Focado obsessivamente em transformar sistemas complexos em interfaces simples que as pessoas amam usar.',
    individualImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'arthur',
    name: 'Arthur Miele',
    role: 'Sócio & Fundador',
    fullBio: 'Analista de dados e estrategista em infraestrutura. Seu objetivo é estruturar o oceano de dados das PMEs em relatórios pragmáticos e inteligentes.',
    individualImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'hyago',
    name: 'Hyago Sampaio',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de automação, conectando APIs e eliminando tarefas repetitivas. Garante que os processos rodem no piloto automático com precisão.',
    individualImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  }
];

export function FoundersSection() {
  const [activeId, setActiveId] = useState<string>("team");

  // Esc key to return to team view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeId !== 'team') {
        setActiveId('team');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeId]);

  const activeFounder = FOUNDERS.find(f => f.id === activeId);

  const pills = [
    { id: 'team', label: 'Time Completo' },
    ...FOUNDERS.map(f => ({ id: f.id, label: f.name }))
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900"
          >
            Quem faz acontecer
          </motion.h2>
      </div>

      {/* Pills Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 p-1.5 bg-slate-100/80 rounded-full overflow-x-auto hide-scrollbar max-w-full">
          {pills.map((pill) => {
            const isActive = activeId === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setActiveId(pill.id)}
                className={`relative px-4 py-2 text-sm font-bold rounded-full transition-colors whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#1E50FF] rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{pill.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Card / Container */}
      <motion.div 
        layout
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className={`relative w-full mx-auto rounded-[2rem] overflow-hidden bg-[#020617] border border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(30,80,255,0.25)] flex flex-col transition-all duration-500 ${
          activeId === 'team' 
            ? 'max-w-4xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]' 
            : 'max-w-4xl md:h-[380px] md:flex-row'
        }`}
      >
        <AnimatePresence mode="wait">
          {activeId === 'team' ? (
            <motion.div
              key="team-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full flex flex-col"
            >
              {/* Image Section */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={TEAM_OVERVIEW.groupImage}
                  alt="Equipe Profit"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
              </div>
              
              {/* Footer Content */}
              <div className="mt-auto relative z-10 w-full p-6 sm:p-8 pb-6 sm:pb-8 text-center">
                <h3 className="text-3xl font-black text-white mb-3">
                  {TEAM_OVERVIEW.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
                  "{TEAM_OVERVIEW.missionQuote}"
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="founder-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col md:flex-row flex-1"
            >
              {/* Left: Founder Image */}
              <div className="relative w-full md:w-5/12 aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:h-full shrink-0 overflow-hidden bg-slate-900">
                <motion.img
                  key={`img-${activeFounder?.id}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={activeFounder?.individualImage}
                  alt={activeFounder?.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Mobile bottom fade to blend with text area */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent md:hidden" />
                
                {/* Back Button */}
                <button
                  onClick={() => setActiveId('team')}
                  className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-2 bg-black/40 hover:bg-[#1E50FF] backdrop-blur-md text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 border border-white/10 hover:border-transparent shadow-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </button>
              </div>

              {/* Right: Founder Details */}
              <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-8 flex flex-col justify-center relative z-10 bg-[#020617]">
                 <motion.div
                    key={`founder-details-${activeId}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                 >
                    <div className="mb-3">
                      <span className="text-white font-bold text-xs uppercase tracking-widest bg-[#1E50FF] px-3.5 py-1 rounded-full inline-block shadow-[0_4px_14px_rgba(30,80,255,0.45)]">
                        {activeFounder?.role}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                      {activeFounder?.name}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-sm leading-relaxed mb-6">
                      {activeFounder?.fullBio}
                    </p>
                    <div className="flex items-center gap-3">
                      <a href={activeFounder?.linkedin} className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1E50FF] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent hover:scale-110 shadow-md">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a href={activeFounder?.email} className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1E50FF] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent hover:scale-110 shadow-md">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                 </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
