import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASES } from '../../data/cases';

export function Cases() {
  return (
    <section id="cases" className="py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-64 right-[-15%] w-[720px] h-[720px] rounded-full bg-[#1E50FF]/15 blur-[140px] pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-24 items-end mb-20">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-xs font-bold tracking-[0.22em] uppercase text-blue-400 flex items-center gap-2">
            <span className="w-5 h-px bg-blue-400" /> Impacto em movimento
          </motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.02]">
              Não mostramos telas.<br /><span className="text-slate-500">Mostramos o que muda.</span>
            </motion.h2>
            <p className="mt-6 text-slate-400 max-w-xl leading-relaxed">Três cenários demonstrativos de como tecnologia sob medida pode transformar rotinas, decisões e resultados.</p>
          </div>
        </div>

        <div className="divide-y divide-white/10">
          {CASES.map((item, i) => (
            <motion.article key={item.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.65, delay: i * 0.08 }} className="group py-12 md:py-16">
              <Link to={`/cases/${item.slug}`} className="grid lg:grid-cols-[80px_1fr_0.9fr] gap-7 lg:gap-14 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-8 focus-visible:ring-offset-slate-950 rounded-sm">
                <span className="text-sm font-bold text-slate-600 self-start pt-2">/{item.index}</span>
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: item.accent }}>
                    <span>{item.eyebrow}</span><span className="w-1 h-1 bg-current rounded-full" /><span className="text-slate-500">{item.sector}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] group-hover:text-blue-300 transition-colors duration-300">{item.title}</h3>
                  <p className="mt-6 text-slate-400 leading-relaxed max-w-2xl">{item.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">Explorar o case <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                </div>
                <div className="relative min-h-[310px] overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="flex items-end gap-1 h-12 mb-5" aria-hidden="true">
                      {[36, 52, 43, 68, 58, 82, 100].map((height, barIndex) => (
                        <motion.span key={barIndex} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: 0.25 + barIndex * 0.05 }} className="flex-1 rounded-t-sm opacity-80" style={{ backgroundColor: item.accent }} />
                      ))}
                    </div>
                    <p className="text-4xl font-black tracking-tighter">{item.metric.value}</p>
                    <p className="text-sm text-slate-300 mt-1">{item.metric.label}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
