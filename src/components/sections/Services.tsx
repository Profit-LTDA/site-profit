import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import robotNotebook from '../../assets/robot/robot_notebook.png';
import robotIdea from '../../assets/robot/robot_ideia.png';
import robotWaving from '../../assets/robot/robot_acenando (1).png';

const SERVICES = [
  {
    number: '01', tag: 'Problem Driven',
    title: 'Ouvir Antes de Codar',
    desc: 'Apaixonados pelo seu problema, não por jargões. Mergulhamos na sua operação para criar a solução exata que o seu negócio precisa para alavancar.',
    robot: robotIdea,
    robotAlt: 'Robô com uma ideia',
  },
  {
    number: '02', tag: 'Engenharia de Processos',
    title: 'Sob Medida na Prática',
    desc: 'A tecnologia se adapta ao seu negócio, nunca o contrário. Desenvolvemos sistemas únicos que eliminam gargalos operacionais e rotinas manuais engessadas.',
    robot: robotNotebook,
    robotAlt: 'Robô trabalhando no notebook',
  },
  {
    number: '03', tag: 'Eficiência PME',
    title: 'Automação Pragmática',
    desc: 'Integramos suas ferramentas e automatizamos o que é repetitivo. Foco estrito em utilidade, produtividade e retorno sobre o investimento (ROI).',
    robot: robotNotebook,
    robotAlt: 'Robô analisando dados',
  },
  {
    number: '04', tag: 'Tech Studio',
    title: 'Parceria Lado a Lado',
    desc: 'Não entregamos um pacote fechado e sumimos. Construímos a quatro mãos, agindo como o braço de inteligência técnica que evolui junto com a sua empresa.',
    robot: robotWaving,
    robotAlt: 'Robô parceiro acenando',
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-slate-100 hover:border-[#1E50FF]/30 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(30,80,255,0.06)] rounded-3xl p-8 mb-6 cursor-pointer transition-all duration-300"
    >
      
      {/* Hover vertical blue line */}
      <div className="absolute top-8 bottom-8 left-0 w-[4px] bg-[#1E50FF] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300 rounded-r-full" />

      <div className="relative grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
        {/* Number */}
        <span className="text-xs font-black text-slate-200 group-hover:text-[#1E50FF]/40 transition-colors tracking-widest uppercase w-10">{service.number}</span>

        {/* Content */}
        <div>
          <span className="text-[10px] font-bold text-[#1E50FF] tracking-[0.2em] uppercase mb-2 block">{service.tag}</span>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 mb-2 group-hover:text-[#1E50FF] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-lg">
            {service.desc}
          </p>
        </div>

        {/* Robot + arrow */}
        <div className="flex items-center gap-5">
          <img
            src={service.robot}
            alt={service.robotAlt}
            className="w-16 md:w-24 object-contain drop-shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-[opacity,transform] duration-300"
          />
          <div className="w-10 h-10 rounded-full border border-slate-100 group-hover:border-[#1E50FF] group-hover:bg-[#1E50FF] flex items-center justify-center transition-all duration-300 flex-shrink-0">
            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="what-we-do" className="px-6 sm:px-10 lg:px-16 py-28 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.22em] uppercase text-[#1E50FF] flex items-center gap-2 mb-5"
          >
            <span className="w-5 h-px bg-[#1E50FF]" /> O que fazemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-tight"
          >
            Soluções sob medida<br />para a sua operação.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base max-w-xs md:text-right leading-relaxed"
        >
          Você traz o gargalo.<br />Nós construímos a solução.
        </motion.p>
      </div>

      <div className="mt-8">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.number} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
