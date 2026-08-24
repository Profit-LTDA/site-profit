import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ChatWidget } from '../components/features/ChatWidget';

// Mock data to simulate fetching a case by slug
const CASES_DB: Record<string, any> = {
  'case-logistica': {
    title: 'Automação Logística',
    client: 'Transportadora XYZ',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    content: 'A Transportadora XYZ enfrentava problemas gravíssimos de roteirização que consumiam dezenas de horas semanais de uma equipe inteira. Através de um algoritmo proprietário desenvolvido sob medida, conseguimos reduzir o tempo de planejamento em 70%, gerando uma economia de mais de R$ 50.000 mensais em combustível e horas extras.',
    results: ['70% menos tempo de planejamento', 'R$ 50k economia mensal', 'Integração 100% com ERP']
  },
  'case-fintech': {
    title: 'Dashboard Financeiro',
    client: 'Fintech Alpha',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    content: 'A Fintech Alpha precisava consolidar métricas de 5 plataformas diferentes. Desenvolvemos um pipeline de dados e um dashboard em tempo real, permitindo aos gestores tomar decisões baseadas em dados precisos e atualizados no segundo.',
    results: ['Métricas em Tempo Real', '5 APIs integradas', 'Aumento de 15% na margem']
  },
  'case-clinica': {
    title: 'Gestão de Pacientes',
    client: 'Clínica Bem Estar',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
    content: 'A taxa de absenteísmo (faltas) na clínica estava altíssima devido à falta de acompanhamento. Criamos um sistema de agendamento que interage diretamente via WhatsApp para confirmar horários automaticamente.',
    results: ['40% menos faltas', 'Agendamento 24/7', 'Pacientes mais satisfeitos']
  }
};

export function CaseStudy() {
  const { slug } = useParams();
  const caseData = CASES_DB[slug || ''] || CASES_DB['case-logistica']; // Fallback
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#1E50FF]/20 selection:text-[#1E50FF]">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1E50FF] origin-left z-50" style={{ scaleX }} />
      <Navbar />

      <main className="pt-32 pb-24 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E50FF] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <Link to="/#cases" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1E50FF] font-medium text-sm transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Voltar para o Início
          </Link>

          <div className="max-w-3xl mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-blue-50 text-[#1E50FF] rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> {caseData.client}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              {caseData.title}
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl">
            <img src={caseData.image} alt={caseData.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-5xl">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">O Desafio & Solução</h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-6">
                {caseData.content}
              </p>
            </div>
            
            <div>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h3 className="text-sm font-bold text-[#1E50FF] uppercase tracking-widest mb-6">Resultados</h3>
                <ul className="flex flex-col gap-4">
                  {caseData.results.map((res: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                      <ArrowRight className="w-5 h-5 text-[#1E50FF] shrink-0" /> {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
