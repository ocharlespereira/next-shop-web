import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price ID is required' });
  }

  const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`;

  const ckeckoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({ checkoutUrl: ckeckoutSession.url });
}

export default handler;
