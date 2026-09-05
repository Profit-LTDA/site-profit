import logoFull from '../../assets/logo/profit_logo.jpeg';
import logoFullWhite from '../../assets/logo/profit_logo_branca.webp';
import { COMPANY } from '../../data/company';

export function Footer() {
  return (
    <footer className="border-t border-(--color-border-subtle) bg-(--color-bg) px-6 sm:px-10 lg:px-16 py-10 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div className="flex-shrink-0">
          <img src={logoFull} alt="Profit Soluções de Software" className="h-10 w-auto object-contain dark:hidden" />
          <img src={logoFullWhite} alt="Profit Soluções de Software" className="hidden h-10 w-auto object-contain dark:block" />
        </div>
        <div className="flex flex-col md:items-end gap-3 text-sm text-(--color-text-muted) font-medium">
          <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-(--color-accent) transition-colors">{COMPANY.email}</a>
            <a href={COMPANY.instagram.href} target="_blank" rel="noreferrer" className="hover:text-(--color-accent) transition-colors">{COMPANY.instagram.handle}</a>
          </nav>
          <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
