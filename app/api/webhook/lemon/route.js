import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    
    if (body.meta.event_name === 'order:created') {
      const email = body.data.attributes.customer_email;
      const productName = body.data.attributes.product_name;
      const plan = productName.toLowerCase().includes('enterprise') ? 'enterprise' 
                 : productName.toLowerCase().includes('scale') ? 'scale'
                 : 'pro';
      
      const { error } = await supabase
        .from('users')
        .update({ plan, usage_count: 0 })
        .eq('email', email);
      
      if (!error) {
        console.log(`Updated ${email} to ${plan}`);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
      }
    }
    
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Webhook error:', err);
    return new Response(JSON.stringify({ error: 'Invalid webhook' }), { status: 400 });
  }
}
