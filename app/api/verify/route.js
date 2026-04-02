import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const PLAN_LIMITS = {
  free: 50,
  pro: 1000,
  enterprise: 10000,
  scale: 100000
}

export async function POST(req) {
  try {
    const { key } = await req.json()

    if (!key) {
      return Response.json({ error: 'No API key' }, { status: 400 })
    }

    const { data } = await supabase
      .from('api_keys')
      .select('*')
      .eq('key', key)
      .single()

    if (!data) {
      return Response.json({ error: 'Invalid key' }, { status: 401 })
    }

    const now = new Date()
    const periodEnd = new Date(data.current_period_end || 0)

    let usage = data.monthly_usage || 0

    if (!data.current_period_end || now > periodEnd) {
      const nextMonth = new Date()
      nextMonth.setMonth(nextMonth.getMonth() + 1)

      usage = 0

      await supabase
        .from('api_keys')
        .update({
          monthly_usage: 0,
          current_period_start: now,
          current_period_end: nextMonth
        })
        .eq('id', data.id)
    }

    const limit = PLAN_LIMITS[data.plan] || 0

    if (usage >= limit) {
      return Response.json({ error: 'Limit exceeded' }, { status: 403 })
    }

    const newUsage = usage + 1

    await supabase
      .from('api_keys')
      .update({ monthly_usage: newUsage })
      .eq('id', data.id)

    return Response.json({
      ok: true,
      plan: data.plan,
      usage: newUsage,
      remaining: limit - newUsage
    })

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
