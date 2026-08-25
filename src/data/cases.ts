export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  sector: string;
  summary: string;
  image: string;
  accent: string;
  metric: { value: string; label: string; detail: string };
  secondaryMetrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  impactNote: string;
  steps: { number: string; title: string; description: string }[];
  flow: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: 'operacao-logistica', index: '01', title: 'Uma operação que aprende a escolher a melhor rota.',
    eyebrow: 'Inteligência operacional', sector: 'Logística',
    summary: 'Pedidos, restrições e custos deixam de viver em planilhas isoladas e passam a orientar uma roteirização inteligente.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=85&w=1400', accent: '#1E50FF',
    metric: { value: '−70%', label: 'tempo de planejamento', detail: 'de 6 horas para menos de 2 horas por ciclo' },
    secondaryMetrics: [{ value: '−12%', label: 'quilômetros rodados' }, { value: '+22%', label: 'entregas por veículo' }],
    challenge: 'A equipe cruza manualmente pedidos, janelas de entrega, capacidade dos veículos e disponibilidade dos motoristas. Quando uma variável muda, o plano inteiro precisa ser refeito.',
    solution: 'Uma camada de decisão recebe os dados da operação, simula milhares de combinações e recomenda rotas viáveis. O time continua no controle: pode comparar cenários, ajustar exceções e aprovar o plano antes do envio.',
    impactNote: 'Projeção ilustrativa baseada em uma operação de médio porte, com 40 veículos e 350 entregas diárias.',
    steps: [
      { number: '01', title: 'Conectar', description: 'Integramos pedidos, frota e regras comerciais ao ERP que a equipe já utiliza.' },
      { number: '02', title: 'Calcular', description: 'O motor avalia distância, capacidade, prioridade e janelas de entrega em conjunto.' },
      { number: '03', title: 'Decidir', description: 'O planejador compara cenários, ajusta exceções e publica a melhor alternativa.' },
    ], flow: ['ERP e pedidos', 'Motor de otimização', 'Painel operacional', 'Motoristas'],
  },
  {
    slug: 'inteligencia-financeira', index: '02', title: 'Cinco fontes de dados. Uma só versão da verdade.',
    eyebrow: 'Dados para decisão', sector: 'Serviços financeiros',
    summary: 'Receita, custos e operação se encontram em um painel que explica o negócio — sem depender de consolidações manuais.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1400', accent: '#8B5CF6',
    metric: { value: '−18h', label: 'de trabalho manual por semana', detail: 'consolidação automática e rastreável' },
    secondaryMetrics: [{ value: '5', label: 'fontes integradas' }, { value: '+15%', label: 'margem identificada' }],
    challenge: 'Indicadores estratégicos chegam de ferramentas diferentes, em formatos e horários distintos. A liderança toma decisões olhando para recortes que nem sempre contam a mesma história.',
    solution: 'Um pipeline valida, padroniza e cruza os dados antes de alimentar um painel vivo. Cada indicador pode ser rastreado até a origem, e alertas destacam desvios que merecem atenção.',
    impactNote: 'Projeção ilustrativa para uma empresa com cinco fontes de dados e fechamento gerencial semanal.',
    steps: [
      { number: '01', title: 'Coletar', description: 'APIs e conectores trazem os dados das ferramentas sem alterar a rotina dos times.' },
      { number: '02', title: 'Organizar', description: 'Regras de qualidade eliminam duplicidades e criam definições consistentes.' },
      { number: '03', title: 'Explicar', description: 'O painel traduz métricas em tendências, alertas e oportunidades acionáveis.' },
    ], flow: ['Sistemas de origem', 'Pipeline de dados', 'Camada de métricas', 'Decisões'],
  },
  {
    slug: 'jornada-do-paciente', index: '03', title: 'Uma jornada de cuidado que começa antes da consulta.',
    eyebrow: 'Automação de relacionamento', sector: 'Saúde',
    summary: 'Confirmações, lembretes e encaixes acontecem no canal que o paciente já usa, enquanto a equipe acompanha as exceções.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=85&w=1400', accent: '#10B981',
    metric: { value: '−40%', label: 'faltas não avisadas', detail: 'mais previsibilidade para pacientes e equipe' },
    secondaryMetrics: [{ value: '24/7', label: 'confirmação automática' }, { value: '+18%', label: 'ocupação da agenda' }],
    challenge: 'A recepção gasta horas confirmando horários. Cancelamentos tardios criam espaços ociosos, enquanto pacientes interessados aguardam por uma oportunidade de encaixe.',
    solution: 'Uma régua de comunicação conversa com o paciente, registra confirmações e oferece horários vagos à lista de espera. A equipe recebe apenas casos que realmente precisam de intervenção humana.',
    impactNote: 'Projeção ilustrativa para uma clínica com 1.200 consultas mensais e comunicação via WhatsApp.',
    steps: [
      { number: '01', title: 'Antecipar', description: 'Lembretes são enviados no melhor momento e com linguagem clara para cada etapa.' },
      { number: '02', title: 'Reagir', description: 'Cancelamentos liberam a agenda e acionam automaticamente a lista de espera.' },
      { number: '03', title: 'Acolher', description: 'Dúvidas e exceções chegam organizadas para a equipe, com todo o contexto necessário.' },
    ], flow: ['Agenda clínica', 'Automação', 'WhatsApp', 'Paciente e recepção'],
  },
];

export function getCaseBySlug(slug?: string) {
  return CASES.find((item) => item.slug === slug);
}
