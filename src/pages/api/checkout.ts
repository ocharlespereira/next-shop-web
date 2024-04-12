import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = '';

  const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/success`;
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
