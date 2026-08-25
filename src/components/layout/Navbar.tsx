import { motion } from 'framer-motion';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo/profit_Plogo.png';

export function Navbar() {
  const navLinks = [
    { label: 'Início', to: '/' },
    { label: 'Soluções', to: '/solucoes' },
    { label: 'Sobre nós', to: '/sobre' },
    { label: 'Contato', to: '/#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100/60"
    >
      <Link to="/" className="flex-shrink-0">
        <img src={logoIcon} alt="Profit" className="h-11 w-auto object-contain" />
      </Link>
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map(({ label, to }) => (
          <Link key={label} to={to} className="group relative text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">
            {label}
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1E50FF] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Link to="/#contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-white bg-slate-900 hover:bg-[#1E50FF] px-5 py-2.5 rounded-full transition-all duration-300">
          Começar <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </motion.header>
  );
}
