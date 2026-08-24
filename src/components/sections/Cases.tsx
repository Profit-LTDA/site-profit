import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CASES = [
  {
    slug: 'case-logistica',
    title: 'Automação Logística',
    client: 'Transportadora XYZ',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    shortDesc: 'Reduzimos o tempo de roteirização em 70% com um algoritmo proprietário integrado ao ERP.',
  },
  {
    slug: 'case-fintech',
    title: 'Dashboard Financeiro',
    client: 'Fintech Alpha',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    shortDesc: 'Unificação de 5 fontes de dados em um painel em tempo real, aumentando a margem de lucro.',
  },
  {
    slug: 'case-clinica',
    title: 'Gestão de Pacientes',
    client: 'Clínica Bem Estar',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
    shortDesc: 'Sistema agendamento inteligente via WhatsApp, reduzindo faltas em 40% no primeiro mês.',
  }
];

export function Cases() {
  return (
    <section id="cases" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-3 h-3 text-[#1E50FF]" />
            <span className="text-xs font-bold text-[#1E50FF] tracking-wider uppercase">Casos de Sucesso</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Resultados reais, <br className="hidden md:block" />
            <span className="text-[#1E50FF]">código que gera lucro.</span>
          </motion.h2>
        </div>

        {/* Cases Grid / Horizontal Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASES.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="group relative w-full h-[420px] rounded-[2rem] overflow-hidden bg-slate-900 isolate">
                
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />

                {/* Content Box (Expands Upwards on Hover) */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
                  
                  {/* Title & Client - Always Visible */}
                  <div className="transform translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <span className="text-[#1E50FF] font-bold text-sm tracking-widest uppercase mb-2 block">{item.client}</span>
                    <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.title}</h3>
                    
                    {/* Hidden Content - Reveals on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-slate-300 text-sm leading-relaxed mb-8 line-clamp-3">
                        {item.shortDesc}
                      </p>
                      
                      <Link 
                        to={`/cases/${item.slug}`} 
                        className="inline-flex items-center gap-2 bg-[#1E50FF] hover:bg-blue-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors shadow-[0_0_20px_rgba(30,80,255,0.4)]"
                      >
                        Ver case completo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
