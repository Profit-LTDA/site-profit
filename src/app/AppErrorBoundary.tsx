import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import logoIcon from '../assets/logo/profit_Plogo.png';
import logoIconWhite from '../assets/logo/profit_Plogo_branca.webp';

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    document.title = 'Algo deu errado | Profit';

    if (import.meta.env.DEV) {
      console.error('Erro não tratado na interface:', error, info.componentStack);
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main
        role="alert"
        className="relative min-h-screen overflow-hidden bg-(--color-bg) px-6 py-12 text-(--color-text-primary)"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-dot) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/15 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-2xl flex-col items-center justify-center text-center">
          <a href="/" aria-label="Profit — página inicial" className="relative mb-12 block h-12 w-[86px]">
            <img src={logoIcon} alt="" aria-hidden="true" className="absolute inset-0 h-12 w-auto object-contain dark:opacity-0" />
            <img src={logoIconWhite} alt="" aria-hidden="true" className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-[0.84] object-contain opacity-0 dark:opacity-100" />
          </a>

          <span className="mb-6 rounded-full border border-(--color-border) bg-(--color-accent-subtle) px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-(--color-accent-subtle-text)">
            Erro inesperado
          </span>
          <h1 className="text-4xl font-black tracking-tighter sm:text-6xl">Não conseguimos carregar esta página.</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-(--color-text-secondary)">
            Seus dados não foram enviados. Recarregue a página ou volte ao início para continuar navegando.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-(--color-accent-hover)"
            >
              Tentar novamente <RefreshCw className="h-4 w-4" />
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface) px-7 py-4 text-sm font-bold text-(--color-text-primary) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao início
            </a>
          </div>
        </div>
      </main>
    );
  }
}
