import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';

const Home = lazy(() => import('../pages/Home').then(({ Home }) => ({ default: Home })));
const About = lazy(() => import('../pages/About').then(({ About }) => ({ default: About })));
const Solutions = lazy(() => import('../pages/Solutions').then(({ Solutions }) => ({ default: Solutions })));
const Contact = lazy(() => import('../pages/Contact').then(({ Contact }) => ({ default: Contact })));
const CaseStudy = lazy(() => import('../pages/CaseStudy').then(({ CaseStudy }) => ({ default: CaseStudy })));
const NotFound = lazy(() => import('../pages/NotFound').then(({ NotFound }) => ({ default: NotFound })));

function PageTitle({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
}

export function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-(--color-bg)" aria-label="Carregando página" />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<PageTitle title="Profit | Soluções de Software"><Home /></PageTitle>} />
          <Route path="sobre" element={<PageTitle title="Sobre nós | Profit"><About /></PageTitle>} />
          <Route path="solucoes" element={<PageTitle title="Soluções e cases | Profit"><Solutions /></PageTitle>} />
          <Route path="contato" element={<PageTitle title="Contato | Profit"><Contact /></PageTitle>} />
          <Route path="cases/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
