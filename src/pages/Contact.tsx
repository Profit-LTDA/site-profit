import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Camera, CheckCircle2, Mail, Send } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ChatWidget } from '../components/features/ChatWidget';
import { FOUNDERS } from '../components/sections/FoundersSection';
import robotChat from '../assets/robot/robot_chat.png';

const CONTACT_EMAIL = 'profit.ltda0@gmail.com';

const SOCIALS = [
  { name: 'Instagram', handle: '@profit.solucoes', href: 'https://www.instagram.com/profit.solucoes/', icon: Camera },
];

const TEAM_ROLES: Record<string, string> = {
  felipe: 'Negócios e estratégia',
  adriano: 'Engenharia de software',
  gabriel: 'Engenharia de software e produto',
  arthur: 'Dados e infraestrutura',
  hyago: 'Automação e integrações',
};

const TEAM = FOUNDERS.map((member) => ({
  id: member.id,
  name: member.name,
  role: TEAM_ROLES[member.id] || member.role,
  image: member.individualImage,
  email: member.email,
}));

const SUBJECTS = [
  'Quero desenvolver uma solução',
  'Automação de processos',
  'Integração de sistemas',
  'Dados e inteligência',
  'Parceria comercial',
  'Suporte e atendimento',
  'Outro assunto',
];

export function Contact() {
  const [selectedMember, setSelectedMember] = useState('');
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    document.title = 'Contato | Profit';
    return () => { document.title = 'Profit'; };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const company = String(form.get('company') || 'Não informado');
    const phone = String(form.get('phone') || 'Não informado');
    const subject = String(form.get('subject') || 'Contato pelo site');
    const message = String(form.get('message') || '');
    const responsible = selectedMember || 'Equipe Profit';
    const memberEmail = FOUNDERS.find((member) => member.name === selectedMember)?.email;
    const recipient = memberEmail || CONTACT_EMAIL;
    const body = [`Nome: ${name}`, `E-mail: ${email}`, `Empresa: ${company}`, `Telefone: ${phone}`, `Direcionado a: ${responsible}`, '', message].join('\n');
    setFeedback(true);
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function chooseMember(name: string) {
    setSelectedMember(name);
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="min-h-screen bg-(--color-bg) font-sans text-(--color-text-primary) overflow-x-hidden selection:bg-(--color-accent)/20 selection:text-(--color-accent) transition-colors duration-300">
      <Navbar />
      <main>
        <section className="relative pt-40 lg:pt-48 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-dot) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 90% 15%, rgba(30,80,255,0.12), transparent 30%)' }} />
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-end">
              <div>
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-(--color-accent) flex items-center gap-2 mb-8"><span className="w-5 h-px bg-(--color-accent)" /> Fale com a Profit</span>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.03] text-(--color-text-primary)">Uma boa solução começa com uma <span className="text-(--color-accent)">boa conversa.</span></h1>
              </div>
              <div className="flex items-end gap-5">
                <img src={robotChat} alt="Mascote Profit pronto para conversar" className="w-28 sm:w-36 lg:w-44 h-auto object-contain shrink-0" />
                <div className="pb-4"><p className="text-(--color-text-secondary) leading-relaxed">Conte o contexto, o gargalo ou apenas a ideia. A gente ajuda a transformar isso em um próximo passo claro.</p><a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-(--color-text-primary) hover:text-(--color-accent) transition-colors"><Mail className="w-4 h-4" /> {CONTACT_EMAIL}</a></div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-28">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">
            <aside className="lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-accent)">Outros canais</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-4">Acompanhe o que estamos construindo.</h2>
              <div className="mt-10 border-t border-(--color-border)">
                {SOCIALS.map(({ name, handle, href, icon: Icon }) => (
                  <a key={name} href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-5 border-b border-(--color-border)">
                    <span className="w-10 h-10 rounded-full bg-(--color-surface) group-hover:bg-(--color-accent) text-(--color-text-secondary) group-hover:text-white flex items-center justify-center transition-colors"><Icon className="w-4 h-4" /></span>
                    <span className="flex-1"><strong className="block text-sm text-(--color-text-primary)">{name}</strong><span className="block text-xs text-(--color-text-muted) mt-0.5">{handle}</span></span>
                    <ArrowUpRight className="w-4 h-4 text-(--color-text-muted) group-hover:text-(--color-accent) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </aside>

            <section id="formulario" className="scroll-mt-28 rounded-[1.75rem] bg-(--color-surface) border border-(--color-border-subtle) p-6 sm:p-9 md:p-12 transition-colors duration-300">
              <div className="mb-10"><span className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-accent)">Envie sua mensagem</span><h2 className="text-3xl font-black text-(--color-text-primary) tracking-tight mt-4">Como podemos ajudar?</h2><p className="text-sm text-(--color-text-secondary) mt-3">Preencha os campos e abriremos seu aplicativo de e-mail com a mensagem pronta para envio.</p></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="text-sm font-semibold text-(--color-text-primary)">Nome<span className="text-(--color-accent)"> *</span><input required name="name" autoComplete="name" className="mt-3 min-h-[58px] w-full bg-(--color-surface-elevated) text-(--color-text-primary) placeholder:text-(--color-text-muted) border border-(--color-border) rounded-xl px-4 py-4 outline-none focus:border-(--color-accent) focus:ring-4 focus:ring-(--color-accent-subtle) transition-shadow" placeholder="Seu nome" /></label>
                  <label className="text-sm font-semibold text-(--color-text-primary)">E-mail<span className="text-(--color-accent)"> *</span><input required type="email" name="email" autoComplete="email" className="mt-3 min-h-[58px] w-full bg-(--color-surface-elevated) text-(--color-text-primary) placeholder:text-(--color-text-muted) border border-(--color-border) rounded-xl px-4 py-4 outline-none focus:border-(--color-accent) focus:ring-4 focus:ring-(--color-accent-subtle) transition-shadow" placeholder="voce@empresa.com" /></label>
                  <label className="text-sm font-semibold text-(--color-text-primary)">Empresa<input name="company" autoComplete="organization" className="mt-3 min-h-[58px] w-full bg-(--color-surface-elevated) text-(--color-text-primary) placeholder:text-(--color-text-muted) border border-(--color-border) rounded-xl px-4 py-4 outline-none focus:border-(--color-accent) focus:ring-4 focus:ring-(--color-accent-subtle) transition-shadow" placeholder="Nome da empresa" /></label>
                  <label className="text-sm font-semibold text-(--color-text-primary)">Telefone<input name="phone" autoComplete="tel" className="mt-3 min-h-[58px] w-full bg-(--color-surface-elevated) text-(--color-text-primary) placeholder:text-(--color-text-muted) border border-(--color-border) rounded-xl px-4 py-4 outline-none focus:border-(--color-accent) focus:ring-4 focus:ring-(--color-accent-subtle) transition-shadow" placeholder="(00) 00000-0000" /></label>
                </div>
                <label className="block text-sm font-semibold text-(--color-text-primary)">Assunto<span className="text-(--color-accent)"> *</span><select required name="subject" defaultValue="" className="mt-3 min-h-[58px] w-full bg-(--color-surface-elevated) text-(--color-text-primary) border border-(--color-border) rounded-xl px-4 py-4 outline-none focus:border-(--color-accent) focus:ring-4 focus:ring-(--color-accent-subtle) transition-shadow"><option value="" disabled>Selecione um assunto</option>{SUBJECTS.map((subject) => <option key={subject}>{subject}</option>)}</select></label>
                {selectedMember && <div className="flex items-center justify-between gap-4 rounded-xl bg-(--color-accent-subtle) text-(--color-text-primary) px-4 py-3 text-sm"><span><strong>Direcionar para:</strong> {selectedMember}</span><button type="button" onClick={() => setSelectedMember('')} className="text-(--color-accent) font-bold">Remover</button></div>}
                <label className="block text-sm font-semibold text-(--color-text-primary)">Mensagem<span className="text-(--color-accent)"> *</span><textarea required name="message" rows={6} className="mt-3 min-h-[180px] w-full resize-y bg-(--color-surface-elevated) text-(--color-text-primary) placeholder:text-(--color-text-muted) border border-(--color-border) rounded-xl px-4 py-4 outline-none focus:border-(--color-accent) focus:ring-4 focus:ring-(--color-accent-subtle) transition-shadow" placeholder="Conte um pouco sobre o que você precisa resolver..." /></label>
                <label className="flex items-start gap-3 text-xs text-(--color-text-secondary) leading-relaxed"><input required type="checkbox" className="mt-0.5 accent-(--color-accent)" /><span>Concordo que a Profit utilize estes dados exclusivamente para responder ao meu contato.</span></label>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4"><button type="submit" className="inline-flex items-center justify-center gap-2 bg-(--color-accent) hover:bg-(--color-accent-hover) text-white text-sm font-bold px-7 py-4 rounded-full transition-colors">Preparar mensagem <Send className="w-4 h-4" /></button>{feedback && <span className="inline-flex items-center gap-2 text-sm text-(--color-success)"><CheckCircle2 className="w-4 h-4" /> Mensagem preparada no seu aplicativo de e-mail.</span>}</div>
              </form>
            </section>
          </div>
        </section>

        <section className="bg-(--color-section-dark) text-(--color-section-dark-text) py-28">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20 mb-16"><div><span className="text-xs font-bold tracking-[0.2em] uppercase text-(--color-accent)">Fale com o time</span></div><div><h2 className="text-4xl md:text-6xl font-black tracking-tighter">Encontre a pessoa certa para a conversa.</h2><p className="text-(--color-section-dark-secondary) mt-6 max-w-xl leading-relaxed">Escolha um membro e o formulário será direcionado para a área correspondente.</p></div></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-(--color-section-dark-border)">
              {TEAM.map((member) => (
                <article key={member.name} className="bg-(--color-section-dark) py-8 sm:px-6 sm:first:pl-0">
                  <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="w-16 h-16 rounded-full object-cover mb-6" />
                  <h3 className="font-bold">{member.name}</h3><p className="text-xs text-(--color-section-dark-muted) mt-2 min-h-8">{member.role}</p><a href={`mailto:${member.email}`} className="block text-[11px] text-(--color-section-dark-muted) hover:text-(--color-accent) mt-3 break-all transition-colors">{member.email}</a>
                  <button type="button" onClick={() => chooseMember(member.name)} className="inline-flex items-center gap-1.5 text-xs font-bold text-(--color-accent) hover:text-(--color-section-dark-text) mt-6 transition-colors">Falar com {member.name.split(' ')[0]} <ArrowUpRight className="w-3.5 h-3.5" /></button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer /><ChatWidget />
    </div>
  );
}
