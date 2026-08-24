import logoFull from '../../assets/logo/profit_logo.jpeg';

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-6 sm:px-10 lg:px-16 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <img src={logoFull} alt="Profit Soluções de Software" className="h-10 w-auto object-contain" />
        <p className="text-sm text-slate-400 font-medium">
          © {new Date().getFullYear()} Profit Soluções de Software. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
