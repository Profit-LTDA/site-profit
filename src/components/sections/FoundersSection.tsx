import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import felixPhoto from '../../assets/members/felix_foto.png';
import hyagoPhoto from '../../assets/members/hyago_foto.png';
import kenzoPhoto from '../../assets/members/kenzo_foto.png';
import arthurPhoto from '../../assets/members/arthur_foto.png';
import felipePhoto from '../../assets/members/terossi_foto.jpg';

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
  title: "Perfis diferentes, uma construção em comum",
  missionQuote: "O alinhamento de ideias e o trabalho em equipe consolidaram uma atuação que combina engenharia, visão de negócio e comunicação.",
};

export const FOUNDERS: Founder[] = [
  {
    id: 'felipe',
    name: 'Felipe Terossi',
    role: 'Sócio & Fundador',
    fullBio: 'Estrategista de negócios e focado em resolver problemas operacionais crônicos. Acredita que a tecnologia deve ser invisível, enquanto o resultado é o que realmente brilha no final do mês.',
    individualImage: felipePhoto,
    linkedin: 'https://www.linkedin.com/in/felipe-terossi-5096163b8/',
    email: 'felipeterossi2@gmail.com'
  },
  {
    id: 'adriano',
    name: 'Kenzo Osako',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de Software apaixonado por criar arquiteturas escaláveis. Lidera a inteligência técnica da Profit garantindo entregas robustas e sob medida.',
    individualImage: kenzoPhoto,
    linkedin: 'https://www.linkedin.com/in/kenzoosako/',
    email: 'kenzo.o.camargo@gmail.com'
  },
  {
    id: 'gabriel',
    name: 'Gabriel Felix',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de Software focado em transformar necessidades de negócio em produtos digitais robustos, intuitivos e escaláveis. Atua da arquitetura à experiência final, conectando decisões técnicas a soluções que geram valor real para quem utiliza.',
    individualImage: felixPhoto,
    linkedin: 'https://www.linkedin.com/in/gabriel-morais-felix-017152286/',
    email: 'fgabrielmorais05@gmail.com'
  },
  {
    id: 'arthur',
    name: 'Arthur Miele',
    role: 'Sócio & Fundador',
    fullBio: 'Analista de dados e estrategista em infraestrutura. Seu objetivo é estruturar o oceano de dados das PMEs em relatórios pragmáticos e inteligentes.',
    individualImage: arthurPhoto,
    linkedin: 'https://www.linkedin.com/in/arthur-malveste-5008842aa/',
    email: 'arthurmielemalveste@gmail.com'
  },
  {
    id: 'hyago',
    name: 'Hyago Sampaio',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de automação, conectando APIs e eliminando tarefas repetitivas. Garante que os processos rodem no piloto automático com precisão.',
    individualImage: hyagoPhoto,
    linkedin: 'https://www.linkedin.com/in/hyago-sampaio-alves/',
    email: 'hyago.spalves@gmail.com'
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
        <div className="flex gap-2 p-2 bg-slate-100 rounded-full border border-slate-200/60 overflow-x-auto hide-scrollbar max-w-full items-center">
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
                {isActive && <span className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/80" />}
                <span className="relative z-10">{pill.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. O CARD PRINCIPAL ESTILO GITBOOK (Mesh + Glassmorphism) */}
      <div className="relative w-full mx-auto rounded-[32px] overflow-hidden p-1 bg-gradient-to-br from-blue-50 via-white to-slate-100 border border-slate-200/60 shadow-[0_16px_45px_rgba(15,23,42,0.05)]">
        <div className="relative z-10 bg-white/90 rounded-[30px] p-6 md:p-10 lg:p-12 min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeId === 'team' ? (
              <motion.div
                key="team-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="w-full flex flex-col"
              >
                {/* Team Image */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
                  {FOUNDERS.map((member) => <button key={member.id} type="button" onClick={() => setActiveId(member.id)} className="text-left group">
                    <img src={member.individualImage} alt={member.name} loading="lazy" decoding="async" className="w-full aspect-[4/5] rounded-xl object-cover" />
                    <span className="block mt-3 text-sm font-semibold group-hover:text-[#1E50FF]">{member.name}</span>
                  </button>)}
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
                transition={{ duration: 0.22 }}
                className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center"
              >
                {/* Left: Founder Image */}
                <div className="w-full md:w-5/12 aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-white/90 shrink-0 relative">
                  <img
                    key={`img-${activeFounder?.id}`}
                    src={activeFounder?.individualImage}
                    alt={activeFounder?.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Right: Founder Details */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <div>
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

                    <div className="flex items-center gap-3">
                      <a href={activeFounder?.linkedin} className="w-10 h-10 rounded-full bg-white hover:bg-[#1E50FF] flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-md hover:scale-105">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${activeFounder?.email}`} aria-label={`Enviar e-mail para ${activeFounder?.name}`} className="w-10 h-10 rounded-full bg-white hover:bg-[#1E50FF] flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-md hover:scale-105">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
