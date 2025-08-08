// /api/fungies-webhook.ts

import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import type { User } from '@supabase/supabase-js';

// Initialize Supabase client using service role
const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ Keep this secure!
);

// ✅ Move function OUTSIDE the block
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export async function getUserIdByEmail(email: string): Promise<string | null> {
  const { data, error } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });

  if (error) {
    console.error('Error fetching user:', error.message);
    return null;
  }

  const users = data.users as User[];
  const user = users.find((u: User) => u.email?.toLowerCase() === email.toLowerCase());
  return user ? user.id : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const paymentData = req.body;

  try {
    if (paymentData.type === 'payment_success') {
      const userId = await getUserIdByEmail(paymentData.data.customer.email);
      // console.log('email user =>', paymentData.data.customer.email);
      // console.log('user id =>', userId);
      // console.log('plan offer =>', paymentData.data.items[0].offer.id);
      
      if (!userId) {
        console.error('Supabase update error: user not found found');
        return res.status(500).json({ error: 'User not found' });
      }

      // Date calculations
      const today = new Date();
      const afterOneMonth = new Date(today);
      afterOneMonth.setMonth(afterOneMonth.getMonth() + 1);
      const afterOneYear = new Date(today);
      afterOneYear.setFullYear(afterOneYear.getFullYear() + 1);

      const planId = paymentData.data.items[0].offer.id;

      if (planId === 'fdef6d19-4092-4043-9daf-a15c5001ac89') {
        const { error } = await supabase.auth.admin.updateUserById(userId, {
          user_metadata: {
            subscribe: 'monthly',
            date: formatDate(today),
            renew: formatDate(afterOneMonth),
          },
        });

        if (error) {
          console.error('Supabase update error:', error.message);
          return res.status(500).json({ error: 'Failed to update user metadata' });
        }
      } else if (planId === '5ef8dd97-c5ca-4272-8a47-6d908e85e1eb') {
        const { error } = await supabase.auth.admin.updateUserById(userId, {
          user_metadata: {
            subscribe: 'yearly',
            date: formatDate(today),
            renew: formatDate(afterOneYear),
          },
        });

        if (error) {
          console.error('Supabase update error:', error.message);
          return res.status(500).json({ error: 'Failed to update user metadata' });
        }
      }
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Webhook handler error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
