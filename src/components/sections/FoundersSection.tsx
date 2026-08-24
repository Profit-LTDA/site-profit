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

      {/* Hero Card */}
      <motion.div 
        layout
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900 shadow-[0_20px_40px_rgba(30,80,255,0.12)] flex flex-col"
      >
        {/* Image Section */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={activeId}
              src={activeId === 'team' ? TEAM_OVERVIEW.groupImage : activeFounder?.individualImage}
              alt={activeId === 'team' ? 'Equipe Profit' : activeFounder?.name}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          {/* Base gradient layer to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
        </div>

        {/* Back Button (Only visible when a founder is selected) */}
        <AnimatePresence>
          {activeId !== 'team' && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={() => setActiveId('team')}
              className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-bold px-4 py-2 rounded-full transition-colors border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer Content */}
        <motion.div 
          layout
          className="mt-auto relative z-10 w-full p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {activeId === 'team' ? (
              <motion.div
                key="team-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center pb-2"
              >
                <h3 className="text-3xl font-black text-white mb-3">
                  {TEAM_OVERVIEW.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
                  "{TEAM_OVERVIEW.missionQuote}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`founder-${activeId}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-left"
              >
                <div className="mb-4">
                  <span className="text-white font-bold text-xs uppercase tracking-widest bg-[#1E50FF] px-3 py-1.5 rounded-full">
                    {activeFounder?.role}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">
                  {activeFounder?.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {activeFounder?.fullBio}
                </p>
                <div className="flex items-center gap-3">
                  <a href={activeFounder?.linkedin} className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E50FF] flex items-center justify-center text-white transition-colors backdrop-blur-sm border border-white/10">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a href={activeFounder?.email} className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E50FF] flex items-center justify-center text-white transition-colors backdrop-blur-sm border border-white/10">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
