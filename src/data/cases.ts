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
    slug: 'wehandle-conformidade-fornecedores', index: '01',
    title: 'Conformidade de fornecedores com o contexto de cada empresa.',
    eyebrow: 'Hackathon WeHandle', sector: 'Avaliação de fornecedores',
    summary: 'Dados públicos, APIs e um chatbot para entender prioridades e personalizar a avaliação de fornecedores. A Profit foi campeã do Hackathon WeHandle com essa solução.',
    image: wehandleTeamPhoto, period: 'Julho', accent: 'var(--color-accent)',
    gallery: [
      { src: wehandleWorkingPhoto, alt: 'Sócios da Profit trabalhando durante o Hackathon WeHandle', caption: 'Trabalho em equipe durante o desenvolvimento da solução.' },
      { src: wehandleThinkingPhoto, alt: 'Sócio da Profit analisando a solução durante o Hackathon WeHandle', caption: 'Análise das decisões técnicas e dos critérios de negócio.' },
    ],
    metric: { value: 'Campeões', label: 'Hackathon WeHandle', detail: 'Primeiro lugar com a solução de conformidade de fornecedores.' },
    secondaryMetrics: [
      { value: 'Contexto', label: 'Critérios alinhados ao setor e às prioridades da contratante.' },
      { value: 'Diálogo', label: 'Chatbot para mapear o que importa na avaliação.' },
    ],
    challenge: 'Como avaliar a conformidade de fornecedores usando dados públicos e informações de APIs sem ignorar as diferenças entre as empresas contratantes? Uma mesma lista de critérios nem sempre representa as prioridades de setores e operações diferentes.',
    solution: 'A equipe desenvolveu uma solução que partia do contexto da contratante. Um chatbot guiava o levantamento das prioridades; essas informações orientavam uma avaliação personalizada, combinada com dados públicos e APIs. A decisão técnica central foi adaptar a análise à realidade de cada organização.',
    impactNote: 'A Profit foi campeã do Hackathon WeHandle. A conquista demonstrou a capacidade da equipe de transformar um problema de negócio em uma solução técnica e defender uma abordagem própria. O resultado relatado é da competição; não há métricas de implantação em clientes.',
    evolution: 'O aprendizado que levamos para outros projetos é começar pelas perguntas certas: quem vai decidir, em qual contexto e com quais prioridades? A personalização passou a fazer parte da forma como pensamos software.',
    steps: [
      { number: '01', title: 'Entender a contratante', description: 'Identificar o setor, o contexto e os fatores relevantes para a seleção de fornecedores.' },
      { number: '02', title: 'Mapear prioridades', description: 'Usar o chatbot para conduzir uma conversa e organizar os critérios da avaliação.' },
      { number: '03', title: 'Personalizar a análise', description: 'Relacionar as prioridades levantadas aos dados públicos e às informações obtidas por APIs.' },
    ],
    flow: ['Contexto da empresa', 'Conversa guiada', 'Dados públicos e APIs', 'Avaliação personalizada'],
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
