import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const { email } = await req.json();
  
  const { data, error } = await supabase
    .from('users')
    .select('plan, usage_count')
    .eq('email', email)
    .single();
  
  if (error) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }
  
  const limits = { free: 50, pro: 1000, enterprise: 10000, scale: 100000 };
  const limit = limits[data.plan] || 50;
  
  return new Response(JSON.stringify({
    plan: data.plan,
    usage: data.usage_count,
    limit,
    exceeded: data.usage_count >= limit
  }));
}
