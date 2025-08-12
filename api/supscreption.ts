// /api/fungies-webhook.ts

import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const paymentData = req.body;

  try {
    if (paymentData.type === 'payment_success') {
      // console.log('email user =>', paymentData.data.customer.email);
      // console.log('user id =>', userId);
      console.log('payment success');
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Webhook handler error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
