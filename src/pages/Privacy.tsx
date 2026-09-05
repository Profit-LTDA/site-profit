import { ArrowUpRight, Database, Eye, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/company';

const SUMMARY = [
  {
    icon: Database,
    title: 'Coleta limitada',
    description: 'Usamos somente os dados que você decide incluir em uma mensagem para a Profit.',
  },
  {
    icon: Eye,
    title: 'Fluxo transparente',
    description: 'O formulário envia a mensagem por uma função protegida, sem expor credenciais ou destinatários no navegador.',
  },
  {
    icon: ShieldCheck,
    title: 'Seus direitos',
    description: 'Você pode pedir acesso, correção, informação, oposição ou eliminação pelos nossos canais oficiais.',
  },
];

const SECTIONS = [
  {
    number: '01',
    title: 'Quem é responsável pelos dados',
    content: (
      <>
        <p>A <strong>{COMPANY.name}</strong> decide como utilizar os dados pessoais recebidos pelos canais deste site e atua como controladora dessas informações.</p>
        <p>Solicitações relacionadas à privacidade podem ser enviadas para <a href={`mailto:${COMPANY.email}`} className="font-bold text-(--color-accent) hover:underline">{COMPANY.email}</a>. Esse é também o canal para confirmar a identidade da pessoa solicitante e acompanhar o pedido.</p>
      </>
    ),
  },
  {
    number: '02',
    title: 'Quais dados utilizamos',
    content: (
      <>
        <p>No formulário de contato, nome, e-mail, assunto e mensagem são obrigatórios. Empresa e telefone são opcionais. Também podemos receber a indicação do integrante escolhido para conduzir a conversa.</p>
        <p>O site não utiliza cookies de publicidade ou ferramentas de analytics. A preferência entre tema claro e escuro é salva apenas no <code>localStorage</code> do navegador. A fonte visual é carregada pelo Google Fonts, que recebe dados técnicos necessários à entrega do arquivo, como endereço IP e informações do navegador.</p>
      </>
    ),
  },
  {
    number: '03',
    title: 'Como o formulário funciona',
    content: (
      <>
        <p>Ao clicar em “Enviar mensagem”, os dados seguem por conexão HTTPS para uma função serverless da Profit. A função valida o conteúdo, limita tentativas abusivas e encaminha a mensagem pelo serviço transacional Resend, sem revelar a chave de acesso no navegador.</p>
        <p>O site não mantém um banco de dados próprio para o formulário. A Resend e o provedor das caixas de entrada da Profit participam da transmissão e do armazenamento técnico da mensagem conforme suas próprias políticas e os períodos necessários à prestação do serviço.</p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Finalidades e bases legais',
    content: (
      <>
        <p>Usamos os dados para responder ao contato, compreender uma necessidade, direcionar a conversa ao integrante adequado e, quando solicitado, preparar uma proposta ou iniciar tratativas comerciais.</p>
        <p>Conforme o contexto, o tratamento se apoia no consentimento manifestado no formulário, em procedimentos preliminares relacionados a uma possível contratação solicitada por você e no exercício regular de direitos. Não vendemos dados pessoais.</p>
      </>
    ),
  },
  {
    number: '05',
    title: 'Compartilhamento e conservação',
    content: (
      <>
        <p>A mensagem pode ser acessada pelo integrante da Profit selecionado no formulário e pelos serviços de e-mail envolvidos. Não compartilhamos essas informações para publicidade de terceiros.</p>
        <p>As mensagens são mantidas durante o atendimento e pelo período necessário ao acompanhamento da relação comercial. Depois disso, podem ser conservadas somente quando houver obrigação legal ou necessidade de resguardar direitos; fora dessas hipóteses, podem ser eliminadas mediante solicitação válida.</p>
      </>
    ),
  },
  {
    number: '06',
    title: 'Direitos da pessoa titular',
    content: (
      <>
        <p>Você pode solicitar confirmação de tratamento, acesso, correção, informação sobre compartilhamento, oposição, revogação do consentimento e, quando aplicável, anonimização, bloqueio, portabilidade ou eliminação dos dados.</p>
        <p>O pedido é gratuito e pode exigir confirmação de identidade para evitar que dados sejam entregues ou alterados indevidamente. Se uma providência não puder ser adotada, explicaremos o motivo.</p>
      </>
    ),
  },
  {
    number: '07',
    title: 'Segurança e atualizações',
    content: (
      <>
        <p>Adotamos medidas técnicas e organizacionais proporcionais ao funcionamento do site, incluindo conexão HTTPS na hospedagem, política de segurança de conteúdo e acesso limitado às mensagens recebidas.</p>
        <p>Esta política pode ser atualizada quando o site passar a utilizar novos formulários, integrações ou fornecedores. A data da versão vigente estará sempre indicada no início desta página.</p>
      </>
    ),
  },
];

export function Privacy() {
  return (
    <main>
      <section className="relative overflow-hidden pt-40 lg:pt-48 pb-20 border-b border-(--color-border-subtle)">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-dot) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20 items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-(--color-accent)">Privacidade e transparência</span>
              <p className="mt-6 text-sm text-(--color-text-muted)">Última atualização: {COMPANY.privacyUpdatedAt}</p>
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.02] text-(--color-text-primary)">Seus dados merecem uma conversa <span className="text-(--color-accent)">clara.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-(--color-text-secondary)">Esta política explica, em linguagem direta, o que acontece com as informações utilizadas ao entrar em contato com a Profit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-4">
          {SUMMARY.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-7">
              <span className="w-11 h-11 rounded-xl border border-(--color-accent) text-(--color-accent) flex items-center justify-center"><Icon className="w-5 h-5" /></span>
              <h2 className="mt-6 text-lg font-black text-(--color-text-primary)">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-(--color-text-secondary)">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-12 lg:gap-24 items-start">
          <aside className="lg:sticky lg:top-32">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-accent)">Política completa</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-(--color-text-primary)">Como cuidamos das informações.</h2>
            <p className="mt-5 text-sm leading-relaxed text-(--color-text-secondary)">A política foi escrita para o funcionamento atual deste site. Novas integrações exigirão uma revisão deste documento.</p>
          </aside>

          <div className="border-t border-(--color-border)">
            {SECTIONS.map(({ number, title, content }) => (
              <article key={number} className="grid sm:grid-cols-[3rem_1fr] gap-4 sm:gap-7 py-9 border-b border-(--color-border)">
                <span className="text-sm font-black text-(--color-accent)">{number}</span>
                <div>
                  <h2 className="text-xl font-black text-(--color-text-primary)">{title}</h2>
                  <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed text-(--color-text-secondary)">{content}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-section-dark) text-(--color-section-dark-text) py-24">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-accent)">Endereços corporativos</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tighter">Canais oficiais da Profit.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-(--color-section-dark-secondary)">A operação e o atendimento são digitais. Estes são os endereços públicos válidos para contato institucional.</p>
            </div>
            <div className="border-t border-(--color-section-dark-border)">
              <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-5 py-7 border-b border-(--color-section-dark-border)">
                <Mail className="w-5 h-5 text-(--color-accent)" />
                <span className="flex-1"><strong className="block">E-mail institucional e privacidade</strong><span className="block mt-1 text-sm text-(--color-section-dark-muted)">{COMPANY.email}</span></span>
                <ArrowUpRight className="w-5 h-5 group-hover:text-(--color-accent) transition-colors" />
              </a>
              <a href={COMPANY.instagram.href} target="_blank" rel="noreferrer" className="group flex items-center gap-5 py-7 border-b border-(--color-section-dark-border)">
                <span className="w-5 text-center font-black text-(--color-accent)">@</span>
                <span className="flex-1"><strong className="block">Instagram oficial</strong><span className="block mt-1 text-sm text-(--color-section-dark-muted)">{COMPANY.instagram.handle}</span></span>
                <ArrowUpRight className="w-5 h-5 group-hover:text-(--color-accent) transition-colors" />
              </a>
              <div className="flex items-center gap-5 py-7 border-b border-(--color-section-dark-border)">
                <MapPin className="w-5 h-5 text-(--color-accent)" />
                <span><strong className="block">Área de atendimento</strong><span className="block mt-1 text-sm text-(--color-section-dark-muted)">{COMPANY.serviceArea}</span></span>
              </div>
            </div>
          </div>
          <div className="mt-12"><Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-(--color-accent) px-6 py-3 text-sm font-bold hover:bg-(--color-accent) hover:text-white transition-colors">Falar com a Profit <ArrowUpRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </main>
  );
}
