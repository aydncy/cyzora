import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  const body = await req.json()
  const email = body.email?.trim().toLowerCase()

  const { data, error } = await supabase
    .from('users')
    .select('*')

  console.log("ALL USERS:", data)

  const user = data?.find(u => u.email.toLowerCase() === email)

  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 404 })
  }

  const PLAN_LIMITS = {
    free: 50,
    pro: 1000,
    enterprise: 10000,
    scale: 100000
  }

  const limit = PLAN_LIMITS[user.plan] || 0

  if (user.usage_count >= limit) {
    return Response.json({ error: 'Limit exceeded' }, { status: 403 })
  }

  await supabase
    .from('users')
    .update({ usage_count: user.usage_count + 1 })
    .eq('id', user.id)

  return Response.json({
    ok: true,
    plan: user.plan,
    usage: user.usage_count + 1,
    limit
  })
}
