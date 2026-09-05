import { Code2, MessagesSquare, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const QUALITIES = [
  { title: 'Engenharia', description: 'Conhecimento técnico para transformar ideias em soluções.', icon: Code2 },
  { title: 'Visão de negócio', description: 'Entender a dor e construir uma proposta de valor.', icon: Lightbulb },
  { title: 'Comunicação', description: 'Explicar decisões e apresentar o valor do produto.', icon: MessagesSquare },
  { title: 'Construção conjunta', description: 'Combinar habilidades, experimentar e aprender em equipe.', icon: Users },
];

export function Marquee() {
  return (
    <section className="py-24 bg-(--color-surface) transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div>
            <span className="text-(--color-accent) font-bold text-sm uppercase tracking-widest">O que nos trouxe até aqui</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 text-(--color-text-primary)">
              Competências alinhadas.<br />Uma equipe em construção.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-lg leading-relaxed text-(--color-text-secondary)">
              A colaboração em projetos e hackathons mostrou como nossos perfis se complementam. A Profit nasceu do alinhamento entre capacidade técnica, visão de negócio e disposição para resolver problemas reais.
            </p>
            <Link to="/sobre" className="inline-block mt-6 text-(--color-accent) font-bold hover:underline">
              Conheça nossa história →
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {QUALITIES.map(({ title, description, icon: Icon }) => (
            <article key={title} className="border-t border-(--color-border) pt-6">
              <Icon className="w-6 h-6 text-(--color-accent) mb-6" />
              <h3 className="text-lg font-bold mb-3 text-(--color-text-primary)">{title}</h3>
              <p className="text-base text-(--color-text-secondary) leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
