import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, ChartNoAxesCombined, GitMerge, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ChatWidget } from '../components/features/ChatWidget';
import { CASES } from '../data/cases';
import robotNotebook from '../assets/robot/robot_notebook.png';

const SOLUTIONS = [
  {
    number: '01',
    icon: Braces,
    title: 'Software sob medida',
    description: 'Sistemas desenhados ao redor da sua operação, das regras do negócio e de quem vai usar todos os dias.',
    tags: ['Plataformas web', 'Portais', 'Sistemas internos'],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Automação de processos',
    description: 'Rotinas repetitivas viram fluxos confiáveis, com menos tarefas manuais e mais tempo para decisões importantes.',
    tags: ['Workflows', 'Notificações', 'Operações'],
  },
  {
    number: '03',
    icon: GitMerge,
    title: 'Integração de sistemas',
    description: 'Ferramentas que antes trabalhavam isoladas passam a trocar dados e manter a operação sincronizada.',
    tags: ['APIs', 'ERPs', 'Conectores'],
  },
  {
    number: '04',
    icon: ChartNoAxesCombined,
    title: 'Inteligência artificial aplicada',
    description: 'Conversas guiadas, personalização e simulações para apoiar decisões e aprendizagem, partindo do contexto de cada empresa.',
    tags: ['Chatbots', 'Personalização', 'Simulações por voz'],
  },
];

export function Solutions() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.title = 'Soluções e cases | Profit';
    return () => { document.title = 'Profit'; };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#1E50FF]/20 selection:text-[#1E50FF]">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1E50FF] origin-left z-50" style={{ scaleX }} />
      <Navbar />

      <main>
        <section className="relative min-h-[82vh] flex items-center pt-40 lg:pt-44 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -right-40 -top-40 w-[680px] h-[680px] bg-[#1E50FF]/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-10 lg:px-16 relative">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-24 items-end">
              <div>
                <motion.span initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-bold tracking-[0.22em] uppercase text-[#1E50FF] flex items-center gap-2 mb-8">
                  <span className="w-5 h-px bg-[#1E50FF]" /> Soluções Profit
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.06] pb-2">
                  Tecnologia que liga <span className="text-[#1E50FF]">problema, processo e resultado.</span>
                </motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="lg:pb-2">
                <p className="text-lg text-slate-500 leading-relaxed">Entendemos o que trava a sua operação, construímos a solução certa e acompanhamos o impacto na prática.</p>
                <a href="#cases" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-slate-900 hover:text-[#1E50FF] transition-colors">Conheça as aplicações <ArrowDown className="w-4 h-4" /></a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
          <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-12 lg:gap-24">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#1E50FF]">Como ajudamos</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5">A tecnologia certa para cada camada do negócio.</h2>
              <p className="text-slate-400 leading-relaxed mt-6 max-w-sm">As frentes se combinam conforme o desafio. O ponto de partida nunca é uma ferramenta pronta: é a sua realidade.</p>
            </div>

            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {SOLUTIONS.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.article key={solution.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: index * 0.06 }} className="grid md:grid-cols-[72px_1fr] gap-7 md:gap-9 py-12 md:py-14 group">
                    <div className="w-11 h-11 rounded-full bg-blue-50 text-[#1E50FF] flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                    <div>
                      <div className="flex items-baseline gap-4"><span className="text-xs font-bold text-slate-300">/{solution.number}</span><h3 className="text-2xl font-extrabold tracking-tight group-hover:text-[#1E50FF] transition-colors">{solution.title}</h3></div>
                      <p className="text-slate-500 leading-relaxed mt-4 max-w-2xl">{solution.description}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">{solution.tags.map((tag) => <span key={tag} className="text-xs font-semibold text-slate-400">{tag}</span>)}</div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cases" className="bg-slate-50 py-28 scroll-mt-20">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-end mb-20">
              <div className="flex items-end justify-center lg:justify-start">
                <img src={robotNotebook} alt="Mascote Profit usando um notebook" className="w-28 sm:w-36 lg:w-52 h-auto object-contain shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#1E50FF] flex items-center gap-2 mb-5"><span className="w-5 h-px bg-[#1E50FF]" /> Aplicações práticas</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.02]">Soluções em contexto.</h2>
                <p className="text-slate-500 mt-6 max-w-xl leading-relaxed"><strong className="text-slate-700">Projetos que ajudaram a formar nossa história.</strong> Conheça a solução campeã da WeHandle e a plataforma de treinamento com IA apresentada no Hackathon Hack2L.</p>
              </div>
            </div>

            <div className="bg-white rounded-[1.5rem] px-7 md:px-12 divide-y divide-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              {CASES.map((item, index) => (
                <motion.div key={item.slug} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                  <Link to={`/cases/${item.slug}`} className="group grid md:grid-cols-[56px_minmax(0,1fr)_220px] gap-7 md:gap-12 items-center py-12 md:py-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E50FF] rounded-sm">
                    <span className="text-sm font-black text-slate-300">/{item.index}</span>
                    <div><div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: item.accent }}><span>{item.sector}</span><span className="w-1 h-1 rounded-full bg-current" /><span className="text-slate-400">{item.eyebrow}</span><span className="w-1 h-1 rounded-full bg-current" /><span className="text-slate-400">{item.period}</span></div><h3 className="text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-[#1E50FF] transition-colors">{item.title}</h3><p className="text-sm text-slate-500 leading-relaxed mt-3 max-w-2xl">{item.summary}</p></div>
                    <div className="ml-auto w-full max-w-[220px] md:border-l md:border-slate-200 md:pl-8 flex items-center justify-end gap-6 text-right"><div><strong className="block text-2xl font-black tracking-tight">{item.metric.value}</strong><span className="text-xs text-slate-400">{item.metric.label}</span></div><span className="w-11 h-11 rounded-full bg-slate-100 group-hover:bg-[#1E50FF] text-slate-500 group-hover:text-white flex items-center justify-center transition-colors shrink-0"><ArrowRight className="w-4 h-4" /></span></div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-5">Projetos de hackathon: os reconhecimentos apresentados são das competições. A evolução dos produtos é descrita em cada case.</p>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
          <div className="border-t border-slate-200 pt-16 md:pt-20 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div><span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1E50FF]">Seu contexto é o próximo</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5 max-w-3xl text-slate-900">Conte o que está travando. A gente desenha o caminho.</h2></div>
            <Link to="/contato" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#1E50FF] border border-slate-200 hover:border-[#1E50FF] text-slate-900 hover:text-white text-sm font-bold px-7 py-4 rounded-full transition-all shadow-sm">Conversar com a Profit <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </section>
      </main>

      <Footer /><ChatWidget />
    </div>
  );
}
