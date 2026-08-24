import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

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
  quote: string;
  individualImage: string;
  linkedin: string;
  email: string;
}

export const TEAM_OVERVIEW = {
  groupImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  title: "A equipe por trás da inovação",
  missionQuote: "Tecnologia sob medida feita por pessoas, para resolver problemas reais de empresas.",
};

export const FOUNDERS: Founder[] = [
  {
    id: 'felipe',
    name: 'Felipe Terossi',
    role: 'Sócio & Fundador',
    fullBio: 'Estrategista de negócios e focado em resolver problemas operacionais crônicos. Acredita que a tecnologia deve ser invisível, enquanto o resultado é o que realmente brilha no final do mês.',
    quote: 'Tecnologia eficiente é aquela que resolve o problema sem criar novos.',
    individualImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'adriano',
    name: 'Adriano Kenzo',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de Software apaixonado por criar arquiteturas escaláveis. Lidera a inteligência técnica da Profit garantindo entregas robustas e sob medida.',
    quote: 'Arquiteturas escaláveis são a fundação invisível dos grandes negócios.',
    individualImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'gabriel',
    name: 'Gabriel Felix',
    role: 'Sócio & Fundador',
    fullBio: 'Especialista em design de produto e experiência do usuário. Focado obsessivamente em transformar sistemas complexos em interfaces simples que as pessoas amam usar.',
    quote: 'A complexidade deve ficar nos bastidores. Para o usuário, apenas a simplicidade.',
    individualImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'arthur',
    name: 'Arthur Miele',
    role: 'Sócio & Fundador',
    fullBio: 'Analista de dados e estrategista em infraestrutura. Seu objetivo é estruturar o oceano de dados das PMEs em relatórios pragmáticos e inteligentes.',
    quote: 'Decisões brilhantes nascem de dados organizados e pragmáticos.',
    individualImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: '#'
  },
  {
    id: 'hyago',
    name: 'Hyago Sampaio',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de automação, conectando APIs e eliminando tarefas repetitivas. Garante que os processos rodem no piloto automático com precisão.',
    quote: 'Se uma tarefa é repetitiva, ela não deveria ser feita por um humano.',
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

  const pills = [
    { id: 'team', label: 'Time Completo' },
    ...FOUNDERS.map(f => ({ id: f.id, label: f.name }))
  ];

  const activeFounder = FOUNDERS.find(f => f.id === activeId);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pb-20">
      <div className="text-center mb-10">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Quem faz acontecer
          </motion.h2>
      </div>

      {/* 1. SELETOR DE NOMES (Pills de Vidro Fosco) */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-2 p-2 bg-slate-100/60 backdrop-blur-md rounded-full border border-slate-200/60 overflow-x-auto hide-scrollbar max-w-full items-center">
          {pills.map((pill) => {
            const isActive = activeId === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setActiveId(pill.id)}
                className={`relative px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill-gitbook"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/80"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{pill.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. O CARD PRINCIPAL ESTILO GITBOOK (Mesh + Glassmorphism) */}
      <div className="relative w-full mx-auto rounded-[32px] overflow-hidden p-1 bg-gradient-to-b from-white/80 to-slate-100/50 border border-slate-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
        
        {/* Blobs de Cor Orgânicos ao Fundo */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-200/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-rose-200/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-blue-100/40 rounded-full blur-[90px] pointer-events-none" />

        {/* Conteúdo em Vidro Fosco Claro */}
        <div className="relative z-10 backdrop-blur-2xl bg-white/70 rounded-[30px] p-6 md:p-10 lg:p-12 min-h-[420px] flex items-center justify-center transition-all duration-500">
          <AnimatePresence mode="wait">
            {activeId === 'team' ? (
              <motion.div
                key="team-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col"
              >
                {/* Team Image */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-white/90 mb-8 relative">
                  <img 
                    src={TEAM_OVERVIEW.groupImage}
                    alt="Equipe Profit"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Team Footer Content */}
                <div className="text-center w-full max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
                    {TEAM_OVERVIEW.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    "{TEAM_OVERVIEW.missionQuote}"
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`founder-view-${activeId}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center"
              >
                {/* Left: Founder Image */}
                <div className="w-full md:w-5/12 aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-white/90 shrink-0 relative">
                  <motion.img
                    key={`img-${activeFounder?.id}`}
                    src={activeFounder?.individualImage}
                    alt={activeFounder?.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Right: Founder Details */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <motion.div
                    key={`founder-details-${activeId}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="mb-3">
                      <span className="inline-block text-xs font-bold text-[#1E50FF] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {activeFounder?.role}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                      {activeFounder?.name}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                      {activeFounder?.fullBio}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/50 text-slate-700 italic text-sm mb-8">
                      "{activeFounder?.quote}"
                    </div>

                    <div className="flex items-center gap-3">
                      <a href={activeFounder?.linkedin} className="w-10 h-10 rounded-full bg-white hover:bg-[#1E50FF] flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-md hover:scale-105">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a href={activeFounder?.email} className="w-10 h-10 rounded-full bg-white hover:bg-[#1E50FF] flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-md hover:scale-105">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
