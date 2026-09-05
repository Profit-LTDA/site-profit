const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const SUBJECTS = new Set([
  'Quero desenvolver uma solução',
  'Automação de processos',
  'Integração de sistemas',
  'Dados e inteligência',
  'Parceria comercial',
  'Suporte e atendimento',
  'Outro assunto',
]);

const MEMBER_RECIPIENTS: Record<string, string> = {
  felipe: 'felipeterossi2@gmail.com',
  adriano: 'kenzo.o.camargo@gmail.com',
  gabriel: 'fgabrielmorais05@gmail.com',
  arthur: 'arthurmielemalveste@gmail.com',
  hyago: 'hyago.spalves@gmail.com',
};

const rateLimits = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  memberId?: unknown;
  consent?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function json(body: Record<string, unknown>, status: number, extraHeaders?: Record<string, string>) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}

function getText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  if (!normalized || normalized.length > maxLength) return null;
  return normalized;
}

function optionalText(value: unknown, maxLength: number) {
  if (value === undefined || value === null || value === '') return '';
  return getText(value, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function getClientIp(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  return origin !== null && origin === new URL(request.url).origin;
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return json({ error: 'Método não permitido.' }, 405, { Allow: 'POST' });
    }

    if (!isSameOrigin(request)) {
      return json({ error: 'Origem da solicitação não permitida.' }, 403);
    }

    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return json({ error: 'Formato da solicitação não suportado.' }, 415);
    }

    const declaredLength = Number(request.headers.get('content-length') || 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return json({ error: 'A mensagem excede o tamanho permitido.' }, 413);
    }

    if (isRateLimited(getClientIp(request))) {
      return json({ error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' }, 429, { 'Retry-After': '600' });
    }

    let payload: ContactPayload;
    try {
      const rawBody = await request.text();
      if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
        return json({ error: 'A mensagem excede o tamanho permitido.' }, 413);
      }
      payload = JSON.parse(rawBody) as ContactPayload;
    } catch {
      return json({ error: 'Não foi possível interpretar a solicitação.' }, 400);
    }

    if (typeof payload.website === 'string' && payload.website.trim()) {
      return json({ success: true }, 200);
    }

    const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : 0;
    const elapsed = Date.now() - startedAt;
    if (elapsed < 1_500 || elapsed > 24 * 60 * 60 * 1000) {
      return json({ error: 'Não foi possível validar o formulário. Recarregue a página e tente novamente.' }, 400);
    }

    const name = getText(payload.name, 100);
    const email = getText(payload.email, 254);
    const company = optionalText(payload.company, 120);
    const phone = optionalText(payload.phone, 30);
    const subject = getText(payload.subject, 100);
    const message = getText(payload.message, 5_000);
    const memberId = typeof payload.memberId === 'string' ? payload.memberId : '';

    if (!name || !email || !isValidEmail(email) || !subject || !SUBJECTS.has(subject) || !message || message.length < 10 || payload.consent !== true) {
      return json({ error: 'Revise os campos obrigatórios e tente novamente.' }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const defaultRecipient = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !defaultRecipient) {
      return json({ error: 'O canal de envio ainda não foi configurado.' }, 503);
    }

    const recipient = MEMBER_RECIPIENTS[memberId] || defaultRecipient;
    const directedTo = memberId && MEMBER_RECIPIENTS[memberId] ? memberId : 'equipe';
    const text = [
      'Nova mensagem enviada pelo site da Profit',
      '',
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Empresa: ${company || 'Não informada'}`,
      `Telefone: ${phone || 'Não informado'}`,
      `Direcionamento: ${directedTo}`,
      `Assunto: ${subject}`,
      '',
      'Mensagem:',
      message,
    ].join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': crypto.randomUUID(),
        'User-Agent': 'Profit-Site/1.0',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[Site Profit] ${subject}`,
        text,
      }),
    });

    if (!resendResponse.ok) {
      return json({ error: 'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.' }, 502);
    }

    return json({ success: true }, 200);
  },
};
