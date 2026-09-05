import hack2lTeamPhoto from '../assets/hackathons/treinamento-ia/foto_comAvaliador.webp';
import hack2lWorkingPhoto from '../assets/hackathons/treinamento-ia/socios_trabalhando.webp';
import hack2lEventPhoto from '../assets/hackathons/treinamento-ia/socios_rindo.webp';
import wehandleTeamPhoto from '../assets/hackathons/wehandle/socios_na_wehandle.webp';
import wehandleWorkingPhoto from '../assets/hackathons/wehandle/socios_trabalhando_wehandle.webp';
import wehandleThinkingPhoto from '../assets/hackathons/wehandle/socio_pensando.webp';

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  sector: string;
  summary: string;
  image?: string;
  period?: string;
  gallery: { src: string; alt: string; caption: string }[];
  accent: string;
  metric: { value: string; label: string; detail: string };
  secondaryMetrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  impactNote: string;
  evolution: string;
  steps: { number: string; title: string; description: string }[];
  flow: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: 'hackathon-wehandle', index: '01',
    title: 'Um desafio real, uma solução construída em equipe.',
    eyebrow: 'Hackathon WeHandle', sector: 'Inovação e tecnologia',
    summary: 'A equipe uniu análise, engenharia e visão de negócio para desenvolver uma proposta tecnológica campeã. Os detalhes da solução são preservados por confidencialidade.',
    image: wehandleTeamPhoto, period: 'Julho', accent: 'var(--color-accent)',
    gallery: [
      { src: wehandleWorkingPhoto, alt: 'Sócios da Profit trabalhando durante o Hackathon WeHandle', caption: 'Colaboração da equipe durante o desenvolvimento da proposta.' },
      { src: wehandleThinkingPhoto, alt: 'Sócio da Profit durante o Hackathon WeHandle', caption: 'Análise e tomada de decisão durante a competição.' },
    ],
    metric: { value: 'Campeões', label: 'Hackathon WeHandle', detail: 'Primeiro lugar com uma proposta tecnológica criada durante a competição.' },
    secondaryMetrics: [
      { value: 'Colaboração', label: 'Competências complementares reunidas em torno de um desafio real.' },
      { value: 'Execução', label: 'Da análise inicial à apresentação de uma proposta consistente.' },
    ],
    challenge: 'A competição apresentou um desafio ligado ao contexto empresarial, exigindo que a equipe compreendesse o cenário, organizasse diferentes perspectivas e tomasse decisões em um período limitado. Por confidencialidade, o problema específico não é detalhado.',
    solution: 'A Profit estruturou uma proposta tecnológica para responder ao desafio apresentado. Como a WeHandle está aplicando a solução, preservamos seu escopo, funcionamento, arquitetura e diferenciais. O que podemos compartilhar é o processo de colaboração que reuniu engenharia, análise e visão de negócio.',
    impactNote: 'A Profit foi campeã do Hackathon WeHandle. A conquista demonstrou a capacidade da equipe de compreender um desafio real, construir uma resposta consistente e comunicar seu valor. O reconhecimento apresentado é o resultado da competição, sem divulgação de informações proprietárias.',
    evolution: 'A experiência fortaleceu uma forma de trabalho baseada em entendimento de contexto, colaboração entre perfis complementares, execução e comunicação clara. Esses aprendizados passaram a orientar a construção da Profit.',
    steps: [
      { number: '01', title: 'Compreender o contexto', description: 'Analisar o desafio apresentado e alinhar uma visão comum entre os integrantes.' },
      { number: '02', title: 'Construir em equipe', description: 'Combinar competências técnicas, estratégicas e de negócio durante a elaboração da proposta.' },
      { number: '03', title: 'Comunicar a proposta', description: 'Apresentar o trabalho com clareza, conectando a construção realizada ao valor percebido.' },
    ],
    flow: ['Entendimento do desafio', 'Alinhamento do time', 'Construção da proposta', 'Apresentação'],
  },
  {
    slug: 'treinamento-ia-cobranca', index: '02',
    title: 'Treinar negociações com IA, voz e contexto de negócio.',
    eyebrow: 'Hackathon Hack2L', sector: 'Treinamento em cobrança',
    summary: 'Uma plataforma com trilhas, quizzes e simulações por voz para preparar equipes de cobrança. Em agosto, o projeto foi reconhecido pela qualidade da oratória no Hackathon Hack2L.',
    image: hack2lTeamPhoto, period: 'Agosto', accent: '#8B5CF6',
    gallery: [
      { src: hack2lWorkingPhoto, alt: 'Sócios da Profit desenvolvendo a solução no Hackathon Hack2L', caption: 'Desenvolvimento da plataforma de treinamento com IA.' },
      { src: hack2lEventPhoto, alt: 'Sócios da Profit durante o Hackathon Hack2L', caption: 'A equipe durante as atividades do Hackathon Hack2L.' },
    ],
    metric: { value: 'Oratória', label: 'Destaque no Hackathon Hack2L', detail: 'Reconhecimento pela clareza ao comunicar a proposta e seu valor para o negócio.' },
    secondaryMetrics: [
      { value: 'Aprendizagem', label: 'Trilhas, quizzes e simulações de atendimento na proposta de treinamento.' },
      { value: 'Produto', label: 'Modelo de negócio, proposta de valor e estratégia discutidos em conjunto.' },
    ],
    challenge: 'Empresas de cobrança precisam preparar novos colaboradores e disseminar boas práticas de negociação. A ideia nasceu dessa dor real: oferecer oportunidades de treinamento contextualizado antes do contato com clientes.',
    solution: 'No Hackathon Hack2L, a equipe estruturou a proposta de uma plataforma de treinamento com inteligência artificial. A preparação incluiu discussões sobre modelo de negócio, proposta de valor e estratégia. A solução combinava personalização, trilhas de aprendizagem, quizzes e simulações de atendimento com interação por voz.',
    impactNote: 'Em agosto, a equipe recebeu reconhecimento pela oratória no Hackathon Hack2L. A experiência também consolidou o trabalho conjunto entre engenharia, visão de negócio e comunicação. A plataforma é apresentada aqui como projeto de hackathon, sem resultados operacionais de clientes atribuídos a ela.',
    evolution: 'A evolução imaginada seria aprender com dados de interações reais, identificar abordagens de negociação adequadas a cada empresa e desenvolver um copiloto para apoiar atendimentos em tempo real. Essa é uma direção futura da proposta, não uma funcionalidade apresentada como já entregue.',
    steps: [
      { number: '01', title: 'Estruturar a proposta', description: 'Partir da dificuldade de treinar equipes e discutir o modelo de negócio, o público e o valor do produto.' },
      { number: '02', title: 'Aprender e praticar', description: 'Combinar trilhas e quizzes com simulações por voz na experiência de treinamento proposta.' },
      { number: '03', title: 'Apresentar o valor', description: 'Explicar como a tecnologia responde à dor do setor, conectando a demonstração à visão de produto.' },
    ],
    flow: ['Contexto da empresa', 'Trilhas e quizzes', 'Simulações por voz', 'Prática de negociação'],
  },
];

export function getCaseBySlug(slug?: string) {
  return CASES.find((item) => item.slug === slug);
}
