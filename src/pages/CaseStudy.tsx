import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, CircleDot, MoveRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ChatWidget } from '../components/features/ChatWidget';
import { CASES, getCaseBySlug } from '../data/cases';

export function CaseStudy() {
  const { slug } = useParams();
  const caseData = getCaseBySlug(slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (caseData) document.title = `${caseData.eyebrow} | Profit`;
    return () => { document.title = 'Profit'; };
  }, [caseData]);

  if (!caseData) return <Navigate to="/solucoes#cases" replace />;
  const currentIndex = CASES.findIndex((item) => item.slug === caseData.slug);
  const nextCase = CASES[(currentIndex + 1) % CASES.length];

  return (
    <div className="min-h-screen bg-(--color-bg) font-sans text-(--color-text-primary) overflow-x-hidden selection:bg-(--color-accent)/20 selection:text-(--color-accent) transition-colors duration-300">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-(--color-accent) origin-left z-50" style={{ scaleX }} />
      <Navbar />

      <main>
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-dot) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -top-48 right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ backgroundColor: caseData.accent }} />
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative">
            <Link to="/#cases" className="inline-flex items-center gap-2 text-(--color-text-secondary) hover:text-(--color-accent) text-sm font-semibold transition-colors mb-14"><ArrowLeft className="w-4 h-4" /> Todos os cases</Link>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-end">
              <div>
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] mb-7" style={{ color: caseData.accent }}>
                  <span>{caseData.eyebrow}</span><span className="w-1 h-1 rounded-full bg-current" /><span className="text-(--color-text-muted)">{caseData.sector}</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.02] text-(--color-text-primary)">{caseData.title}</motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
                <p className="text-lg text-(--color-text-secondary) leading-relaxed">{caseData.summary}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium bg-(--color-surface) border border-(--color-border) rounded-full px-4 py-2 w-max text-(--color-text-secondary)">
                  <CircleDot className="w-4 h-4" style={{ color: caseData.accent }} /> 
                  Projeto desenvolvido no contexto de hackathon
                  {caseData.period && <><span className="w-1 h-1 rounded-full bg-(--color-border) mx-1" /><span>{caseData.period}</span></>}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="max-w-4xl mx-auto grid lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] gap-8 lg:gap-12 items-stretch">
            {caseData.image && <img src={caseData.image} alt={`Registro do ${caseData.eyebrow}`} decoding="async" className="block w-auto max-w-full h-auto max-h-[610px] mx-auto rounded-[1.25rem]" />}
            <figcaption className="pt-7 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-(--color-border) flex flex-col justify-center">
              <span className="block text-sm font-bold uppercase tracking-[0.2em]" style={{ color: caseData.accent }}>Registro do evento</span>
              <strong className="block text-3xl md:text-4xl font-black tracking-tight leading-tight mt-5 text-(--color-text-primary)">{caseData.metric.label}</strong>
              <p className="text-base md:text-lg text-(--color-text-secondary) mt-5 leading-relaxed">{caseData.metric.detail}</p>
              <div className="mt-10 pt-7 border-t border-(--color-border) flex flex-wrap items-end justify-between gap-5"><span className="block text-4xl md:text-5xl font-black tracking-tighter" style={{ color: caseData.accent }}>{caseData.metric.value}</span>{caseData.period && <span className="block text-base font-bold text-(--color-text-secondary) pb-1">{caseData.period}</span>}</div>
            </figcaption>
          </motion.figure>
        </section>

        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-24">
            <div><span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: caseData.accent }}>Entenda o cenário</span><h2 className="text-3xl md:text-4xl font-black tracking-tight mt-4 text-(--color-text-primary)">Da pergunta à proposta.</h2></div>
            <div className="divide-y divide-(--color-border)">
              <div className="grid md:grid-cols-[140px_1fr] gap-5 py-2 pb-10"><h3 className="font-bold text-(--color-text-primary)">O desafio</h3><p className="text-(--color-text-secondary) leading-relaxed text-lg">{caseData.challenge}</p></div>
              <div className="grid md:grid-cols-[140px_1fr] gap-5 py-10"><h3 className="font-bold text-(--color-text-primary)">A resposta</h3><p className="text-(--color-text-secondary) leading-relaxed text-lg">{caseData.solution}</p></div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div><span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: caseData.accent }}>Por dentro do projeto</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4 text-(--color-text-primary)">Construção em movimento.</h2></div>
            <p className="text-base text-(--color-text-secondary) leading-relaxed max-w-md">Os registros mostram como as decisões ganharam forma durante o desenvolvimento da solução.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            {caseData.gallery.map((photo, index) => (
              <figure key={photo.src} className="w-full max-w-sm justify-self-center">
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="block w-auto max-w-full h-auto max-h-[440px] mx-auto rounded-xl" />
                <figcaption className="mt-4 pt-4 border-t border-(--color-border) flex gap-3 text-sm text-(--color-text-secondary) leading-relaxed"><span className="font-black" style={{ color: caseData.accent }}>/0{index + 1}</span><span>{photo.caption}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-(--color-section-dark) text-(--color-section-dark-text) py-28">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl mb-16"><span className="text-xs font-bold uppercase tracking-[0.22em] text-(--color-accent)">Como pensamos a solução</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5">Complexidade por dentro.<br /><span className="text-(--color-section-dark-muted)">Clareza para quem usa.</span></h2></div>
            <div className="grid md:grid-cols-3 gap-px bg-(--color-section-dark-border)">
              {caseData.steps.map((step) => (
                <div key={step.number} className="bg-(--color-section-dark) py-10 md:px-8 md:first:pl-0 md:last:pr-0"><span className="text-xs font-bold text-(--color-section-dark-muted)">/{step.number}</span><h3 className="text-xl font-bold mt-10 mb-4">{step.title}</h3><p className="text-sm text-(--color-section-dark-secondary) leading-relaxed">{step.description}</p></div>
              ))}
            </div>
            <div className="mt-20">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-section-dark-muted) mb-7">Fluxo simplificado (Solução)</p>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {caseData.flow.map((node, index) => (
                  <div key={node} className="contents">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 rounded-2xl px-5 py-6 text-sm font-semibold text-center border border-(--color-section-dark-border) backdrop-blur-md shadow-xl transition-colors cursor-default" 
                      style={{ 
                        backgroundColor: index === caseData.flow.length - 1 ? caseData.accent : `${caseData.accent}15`, 
                        color: index === caseData.flow.length - 1 ? 'var(--color-section-dark-text)' : 'var(--color-section-dark-secondary)' 
                      }}
                    >
                      {node}
                    </motion.div>
                    {index < caseData.flow.length - 1 && (
                      <motion.div 
                        initial={{ x: -5, opacity: 0 }} 
                        whileInView={{ x: 0, opacity: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.3 + index * 0.1 }} 
                        className="self-center flex justify-center py-2 md:py-0"
                      >
                        <MoveRight className="w-6 h-6 text-(--color-section-dark-muted) rotate-90 md:rotate-0" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
            <div><span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: caseData.accent }}>Resultado e aprendizados</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5 text-(--color-text-primary)">O que esse desafio deixou para a Profit.</h2><p className="text-sm text-(--color-text-secondary) leading-relaxed mt-7 max-w-md">{caseData.impactNote}</p></div>
            <div className="grid sm:grid-cols-2 gap-x-10 divide-y sm:divide-y-0 sm:divide-x divide-(--color-border)">
              {caseData.secondaryMetrics.map((metric) => (
                <div key={metric.label} className="py-8 sm:py-0 sm:pl-10 first:pl-0"><Check className="w-5 h-5 mb-10" style={{ color: caseData.accent }} /><strong className="block text-2xl lg:text-3xl font-black tracking-tight break-words text-(--color-text-primary)">{metric.value}</strong><span className="block mt-3 text-sm text-(--color-text-secondary)">{metric.label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
          <div className="border-t border-(--color-border) pt-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-5 text-(--color-text-primary)">O que vem depois</h2>
            <p className="text-lg leading-relaxed text-(--color-text-secondary)">{caseData.evolution}</p>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <Link to={`/cases/${nextCase.slug}`} className="group block rounded-[2rem] p-10 md:p-16 text-white overflow-hidden relative" style={{ backgroundColor: nextCase.accent || 'var(--color-accent)' }}>
            <motion.div 
              className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div 
              className="absolute right-[-10%] top-[-50%] w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Próximo case · {nextCase.sector}</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4 max-w-3xl leading-[1.05] group-hover:-translate-y-1 transition-transform duration-500">{nextCase.title}</h2>
              </div>
              <span className="w-16 h-16 rounded-full bg-(--color-section-dark-text) text-(--color-section-dark) flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </section>
      </main>

      <Footer /><ChatWidget />
    </div>
  );
}
