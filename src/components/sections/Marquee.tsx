import { motion } from 'framer-motion';
import { 
  Zap, ShieldCheck, Cloud, Cpu, Database, Terminal, 
  Lock, Atom, Server, Globe, Layers, Code2 
} from 'lucide-react';

const ROW_1 = [
  { name: 'Vercel', icon: Zap },
  { name: 'ISO 27001', icon: ShieldCheck },
  { name: 'AWS Partner', icon: Cloud },
  { name: 'Microsoft', icon: Cpu },
  { name: 'Oracle', icon: Database },
  { name: 'Docker', icon: Terminal },
];

const ROW_2 = [
  { name: 'Secure Net', icon: Lock },
  { name: 'React Corp', icon: Atom },
  { name: 'Node Ent.', icon: Server },
  { name: 'Global Tech', icon: Globe },
  { name: 'SaaS Vent.', icon: Layers },
  { name: 'Dev Labs', icon: Code2 },
];

function MarqueeRow({ items, direction = 1 }: { items: typeof ROW_1, direction?: 1 | -1 }) {
  // 4 copies guarantee that half the container is wider than any standard monitor, enabling seamless -50% looping.
  const extendedItems = [...items, ...items, ...items, ...items]; 
  
  return (
    <div className="flex w-max mb-8">
      <motion.div
        className="flex gap-12 pr-12 md:gap-20 md:pr-20"
        animate={{ x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        {extendedItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div 
              key={i} 
              className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(30,80,255,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12 text-slate-800 mb-3 md:mb-4" strokeWidth={1.5} />
              <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest">{item.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="py-24 overflow-hidden relative bg-white">
      
      {/* Background gradients for subtle depth */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1E50FF] rounded-full blur-[150px] opacity-[0.03] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-[0.03] pointer-events-none -translate-y-1/2" />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
        <div>
          <span className="text-[#1E50FF] font-bold text-xs tracking-widest uppercase mb-3 block">Prova Social & Clientes</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Junte-se aos melhores</h2>
        </div>
        <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-2 md:text-right">
          Parcerias estratégicas e marcas que confiam na nossa engenharia de software para escalar suas operações.
        </p>
      </div>
      
      {/* Marquee Rows with Fading Edges */}
      <div className="relative z-10">
        {/* Left/Right Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        
        <MarqueeRow items={ROW_1} direction={1} />
        <MarqueeRow items={ROW_2} direction={-1} />
      </div>

    </section>
  );
}
