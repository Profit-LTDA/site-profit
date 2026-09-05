import arthurPhoto from '../assets/members/arthur_foto.webp';
import felipePhoto from '../assets/members/terossi_foto.jpg';
import felixPhoto from '../assets/members/felix_foto.webp';
import hyagoPhoto from '../assets/members/hyago_foto.webp';
import kenzoPhoto from '../assets/members/kenzo_foto.webp';

export interface Founder {
  id: string;
  name: string;
  role: string;
  fullBio: string;
  individualImage: string;
  linkedin: string;
  email: string;
}

export const TEAM_OVERVIEW = {
  title: 'Perfis diferentes, uma construção em comum',
  missionQuote: 'O alinhamento de ideias e o trabalho em equipe consolidaram uma atuação que combina engenharia, visão de negócio e comunicação.',
};

export const FOUNDERS: Founder[] = [
  {
    id: 'felipe',
    name: 'Felipe Terossi',
    role: 'Sócio & Fundador',
    fullBio: 'Estrategista de negócios e focado em resolver problemas operacionais crônicos. Acredita que a tecnologia deve ser invisível, enquanto o resultado é o que realmente brilha no final do mês.',
    individualImage: felipePhoto,
    linkedin: 'https://www.linkedin.com/in/felipe-terossi-5096163b8/',
    email: 'felipeterossi2@gmail.com',
  },
  {
    id: 'adriano',
    name: 'Kenzo Osako',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de Software apaixonado por criar arquiteturas escaláveis. Lidera a inteligência técnica da Profit garantindo entregas robustas e sob medida.',
    individualImage: kenzoPhoto,
    linkedin: 'https://www.linkedin.com/in/kenzoosako/',
    email: 'kenzo.o.camargo@gmail.com',
  },
  {
    id: 'gabriel',
    name: 'Gabriel Felix',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de Software focado em transformar necessidades de negócio em produtos digitais robustos, intuitivos e escaláveis. Atua da arquitetura à experiência final, conectando decisões técnicas a soluções que geram valor real para quem utiliza.',
    individualImage: felixPhoto,
    linkedin: 'https://www.linkedin.com/in/gabriel-morais-felix-017152286/',
    email: 'fgabrielmorais05@gmail.com',
  },
  {
    id: 'arthur',
    name: 'Arthur Miele',
    role: 'Sócio & Fundador',
    fullBio: 'Analista de dados e estrategista em infraestrutura. Seu objetivo é estruturar o oceano de dados das PMEs em relatórios pragmáticos e inteligentes.',
    individualImage: arthurPhoto,
    linkedin: 'https://www.linkedin.com/in/arthur-malveste-5008842aa/',
    email: 'arthurmielemalveste@gmail.com',
  },
  {
    id: 'hyago',
    name: 'Hyago Sampaio',
    role: 'Sócio & Fundador',
    fullBio: 'Engenheiro de automação, conectando APIs e eliminando tarefas repetitivas. Garante que os processos rodem no piloto automático com precisão.',
    individualImage: hyagoPhoto,
    linkedin: 'https://www.linkedin.com/in/hyago-sampaio-alves/',
    email: 'hyago.spalves@gmail.com',
  },
];
