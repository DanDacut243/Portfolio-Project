import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, message } = req.body || {};
    const nameStr = typeof name === 'string' ? name.trim() : '';
    const msgStr = typeof message === 'string' ? message.trim() : '';
    const isValidEmail = (v: unknown): v is string => typeof v === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
    const safeEmail = isValidEmail(email) ? email : undefined;
    if (!nameStr || !msgStr) {
      return res.status(400).json({ error: 'Name and message are required' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Missing RESEND_API_KEY' });
    }

    const subject = `Portfolio contact from ${nameStr}`;
    const text = `Name: ${nameStr}${safeEmail ? `\nEmail: ${safeEmail}` : ''}\n\n${msgStr}`;
    const html = `<div><p><strong>Name:</strong> ${nameStr}</p>${safeEmail ? `<p><strong>Email:</strong> ${safeEmail}</p>` : ''}<hr/><p>${msgStr.replace(/\n/g, '<br/>')}</p></div>`;

    const payload: Record<string, unknown> = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['dan.dacut@urios.edu.ph'],
      subject,
      text,
      html
    };
    if (safeEmail) {
      (payload as any).reply_to = safeEmail;
    }

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      const detail = await r.text();
      return res.status(502).json({ error: 'Failed to send', detail });
    }

    const data = await r.json();
    return res.status(200).json({ id: data.id });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
