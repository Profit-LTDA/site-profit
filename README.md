# Site Profit

Site institucional da Profit, desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Validações disponíveis:

```bash
npm run lint
npm run build
npm run check
npm run audit
```

O workflow `.github/workflows/ci.yml` executa instalação reproduzível, lint, build e auditoria de dependências em pull requests, atualizações da `main` e semanalmente. Vulnerabilidades de severidade alta ou crítica interrompem o CI. O Dependabot verifica semanalmente as dependências npm e as versões das GitHub Actions, sem mesclar atualizações automaticamente.

Na Vercel, `vercel.json` mantém o fallback da SPA e aplica uma política de segurança com CSP, bloqueio de frames, restrição de permissões do navegador e proteção de MIME/referrer. O HTTPS e o HSTS são fornecidos automaticamente pela plataforma; depois do deploy, os cabeçalhos devem ser confirmados no domínio de produção.

## Formulário de contato

O formulário envia os dados para a função serverless `api/contact.ts`, que valida a solicitação e utiliza a API da Resend. Para habilitar o envio, configure na Vercel as variáveis descritas em `.env.example`: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL`. O remetente precisa pertencer a um domínio validado na Resend. As credenciais não devem usar o prefixo `VITE_`, pois precisam permanecer exclusivas do servidor.

As imagens exibidas pelo site usam versões WebP dimensionadas para a interface. Os arquivos originais são preservados e as versões otimizadas podem ser regeneradas com `scripts/optimize_images.py` em um ambiente Python com Pillow.

## Estrutura

- `src/app`: composição global da aplicação, layout e declaração de rotas.
- `src/pages`: conteúdo e composição específicos de cada página.
- `src/components/layout`: navegação e rodapé compartilhados.
- `src/components/sections`: seções reutilizadas nas páginas.
- `src/components/ui`: componentes visuais genéricos.
- `src/data`: conteúdo estruturado da equipe, contato e cases.
- `src/context`: estados globais, como a preferência de tema.

O `AppLayout` é responsável pela estrutura comum entre as páginas. As páginas são carregadas sob demanda pela configuração central de rotas em `src/app/router.tsx`. Rotas desconhecidas exibem uma página 404 e falhas inesperadas de renderização são isoladas pelo `AppErrorBoundary`.

## Rotas

- `/`: página inicial.
- `/solucoes`: soluções e visão geral dos cases.
- `/sobre`: história e equipe.
- `/contato`: canais e formulário de contato.
- `/cases/:slug`: detalhes de cada case.
- Qualquer outro endereço: página 404 com caminhos seguros para continuar a navegação.
