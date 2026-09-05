import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import logoIcon from '../../assets/logo/profit_Plogo.png';
import logoIconWhite from '../../assets/logo/profit_Plogo_branca.webp';

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 bg-(--color-bg)/80 backdrop-blur-xl border-b border-(--color-border-subtle) transition-colors duration-300"
      >
        <Link
          to="/"
          aria-label="Profit — página inicial"
          className="relative block h-11 w-[78px] flex-shrink-0"
          onClick={closeMobileMenu}
        >
          <img
            src={logoIcon}
            alt=""
            aria-hidden="true"
            decoding="sync"
            className="absolute inset-0 h-11 w-auto object-contain opacity-100 transition-opacity duration-200 dark:opacity-0"
          />
          <img
            src={logoIconWhite}
            alt=""
            aria-hidden="true"
            decoding="sync"
            className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-[0.84] object-contain opacity-0 transition-opacity duration-200 dark:opacity-100"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="group relative text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) font-medium transition-colors"
            >
              {label}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-(--color-accent) origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contato"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-(--color-bg) bg-(--color-text-primary) hover:bg-(--color-accent) hover:text-white px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Começar <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
            className="p-2 text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-(--color-bg) pt-24 px-6 md:hidden flex flex-col transition-colors duration-300"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={closeMobileMenu}
                  className="text-2xl font-black text-(--color-text-primary) hover:text-(--color-accent) transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={closeMobileMenu}
                className="mt-8 inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-(--color-accent) hover:bg-(--color-accent-hover) py-4 rounded-full transition-all"
              >
                Começar um projeto <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
            <div className="mt-auto mb-8 pt-6 border-t border-(--color-border) flex items-center justify-between">
              <span className="text-sm font-semibold text-(--color-text-secondary)">Aparência</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
