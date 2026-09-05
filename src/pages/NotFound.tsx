import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import robotError from '../assets/robot/robo_erro404.webp';

export function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada | Profit';
  }, []);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-36 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-dot) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute -right-40 top-20 h-[580px] w-[580px] rounded-full bg-(--color-accent)/15 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-screen-xl items-center gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-(--color-accent)">
            <span className="h-px w-5 bg-(--color-accent)" /> Erro 404
          </span>
          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-tighter text-(--color-text-primary) md:text-7xl">
            Esta rota não leva a lugar nenhum.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-(--color-text-secondary) md:text-lg">
            O endereço pode ter mudado ou não existir. Você pode retornar à página inicial ou continuar pelas nossas soluções.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-(--color-accent-hover)"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao início
            </Link>
            <Link
              to="/solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface) px-7 py-4 text-sm font-bold text-(--color-text-primary) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              Conhecer soluções <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={robotError}
            alt="Mascote Profit observando o erro 404"
            className="h-auto w-full max-w-[560px] rounded-[2rem] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
