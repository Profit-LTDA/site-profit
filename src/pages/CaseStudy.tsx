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
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#1E50FF]/20 selection:text-[#1E50FF]">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1E50FF] origin-left z-50" style={{ scaleX }} />
      <Navbar />

      <main>
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -top-48 right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ backgroundColor: caseData.accent }} />
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative">
            <Link to="/#cases" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1E50FF] text-sm font-semibold transition-colors mb-14"><ArrowLeft className="w-4 h-4" /> Todos os cases</Link>
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
              <div>
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] mb-7" style={{ color: caseData.accent }}>
                  <span>{caseData.eyebrow}</span><span className="w-1 h-1 rounded-full bg-current" /><span className="text-slate-400">{caseData.sector}</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.02]">{caseData.title}</motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
                <p className="text-lg text-slate-500 leading-relaxed">{caseData.summary}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400"><CircleDot className="w-4 h-4" style={{ color: caseData.accent }} /> Projeto desenvolvido no contexto de hackathon{caseData.period && <><span className="w-1 h-1 rounded-full bg-slate-300" /><span>{caseData.period}</span></>}</div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="max-w-4xl mx-auto grid lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] gap-8 lg:gap-12 items-stretch">
            {caseData.image && <img src={caseData.image} alt={`Registro do ${caseData.eyebrow}`} decoding="async" className="block w-auto max-w-full h-auto max-h-[610px] mx-auto rounded-[1.25rem]" />}
            <figcaption className="pt-7 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center">
              <span className="block text-sm font-bold uppercase tracking-[0.2em]" style={{ color: caseData.accent }}>Registro do evento</span>
              <strong className="block text-3xl md:text-4xl font-black tracking-tight leading-tight mt-5">{caseData.metric.label}</strong>
              <p className="text-base md:text-lg text-slate-500 mt-5 leading-relaxed">{caseData.metric.detail}</p>
              <div className="mt-10 pt-7 border-t border-slate-200 flex flex-wrap items-end justify-between gap-5"><span className="block text-4xl md:text-5xl font-black tracking-tighter" style={{ color: caseData.accent }}>{caseData.metric.value}</span>{caseData.period && <span className="block text-base font-bold text-slate-600 pb-1">{caseData.period}</span>}</div>
            </figcaption>
          </motion.figure>
        </section>

        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-24">
            <div><span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: caseData.accent }}>Entenda o cenário</span><h2 className="text-3xl md:text-4xl font-black tracking-tight mt-4">Da pergunta à proposta.</h2></div>
            <div className="divide-y divide-slate-200">
              <div className="grid md:grid-cols-[140px_1fr] gap-5 py-2 pb-10"><h3 className="font-bold text-slate-900">O desafio</h3><p className="text-slate-500 leading-relaxed text-lg">{caseData.challenge}</p></div>
              <div className="grid md:grid-cols-[140px_1fr] gap-5 py-10"><h3 className="font-bold text-slate-900">A resposta</h3><p className="text-slate-500 leading-relaxed text-lg">{caseData.solution}</p></div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div><span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: caseData.accent }}>Por dentro do projeto</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4">Construção em movimento.</h2></div>
            <p className="text-base text-slate-500 leading-relaxed max-w-md">Os registros mostram como as decisões ganharam forma durante o desenvolvimento da solução.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            {caseData.gallery.map((photo, index) => (
              <figure key={photo.src} className="w-full max-w-sm justify-self-center">
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="block w-auto max-w-full h-auto max-h-[440px] mx-auto rounded-xl" />
                <figcaption className="mt-4 pt-4 border-t border-slate-200 flex gap-3 text-sm text-slate-600 leading-relaxed"><span className="font-black" style={{ color: caseData.accent }}>/0{index + 1}</span><span>{photo.caption}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 text-white py-28">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl mb-16"><span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">Como pensamos a solução</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5">Complexidade por dentro.<br /><span className="text-slate-500">Clareza para quem usa.</span></h2></div>
            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              {caseData.steps.map((step) => (
                <div key={step.number} className="bg-slate-950 py-10 md:px-8 md:first:pl-0 md:last:pr-0"><span className="text-xs font-bold text-slate-600">/{step.number}</span><h3 className="text-xl font-bold mt-10 mb-4">{step.title}</h3><p className="text-sm text-slate-400 leading-relaxed">{step.description}</p></div>
              ))}
            </div>
            <div className="mt-20">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-7">Fluxo simplificado</p>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {caseData.flow.map((node, index) => (
                  <div key={node} className="contents"><div className="flex-1 rounded-2xl px-5 py-5 text-sm font-semibold text-center" style={{ backgroundColor: `${caseData.accent}22`, color: index === caseData.flow.length - 1 ? '#fff' : '#cbd5e1' }}>{node}</div>{index < caseData.flow.length - 1 && <MoveRight className="w-5 h-5 text-slate-600 rotate-90 md:rotate-0 self-center" />}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
            <div><span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: caseData.accent }}>Resultado e aprendizados</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5">O que esse desafio deixou para a Profit.</h2><p className="text-sm text-slate-400 leading-relaxed mt-7 max-w-md">{caseData.impactNote}</p></div>
            <div className="grid sm:grid-cols-2 gap-x-10 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {caseData.secondaryMetrics.map((metric) => (
                <div key={metric.label} className="py-8 sm:py-0 sm:pl-10 first:pl-0"><Check className="w-5 h-5 mb-10" style={{ color: caseData.accent }} /><strong className="block text-2xl lg:text-3xl font-black tracking-tight break-words">{metric.value}</strong><span className="block mt-3 text-sm text-slate-500">{metric.label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
          <div className="border-t border-slate-200 pt-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-5">O que vem depois</h2>
            <p className="text-lg leading-relaxed text-slate-600">{caseData.evolution}</p>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <Link to={`/cases/${nextCase.slug}`} className="group block rounded-[1.5rem] p-8 md:p-12 text-white overflow-hidden relative bg-[#1E50FF]">
            <div className="absolute right-[-5%] top-[-60%] w-[420px] h-[420px] bg-white/15 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-10"><div><span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Próximo case · {nextCase.sector}</span><h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5 max-w-3xl">{nextCase.title}</h2></div><span className="w-14 h-14 rounded-full bg-white text-[#1E50FF] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform"><ArrowRight className="w-5 h-5" /></span></div>
          </Link>
        </section>
      </main>

      <Footer /><ChatWidget />
    </div>
  );
}
