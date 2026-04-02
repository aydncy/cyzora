import { supabaseAdmin } from '@/app/lib/supabase'

function makeKey() {
  return 'ovwi_live_' + Math.random().toString(36).slice(2, 14)
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const email = (searchParams.get('email') || '').trim().toLowerCase()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('api_keys')
      .select('id,key,email,plan,usage_count,monthly_usage,current_period_start,current_period_end,created_at')
      .eq('email', email)
      .order('created_at', { ascending: false })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ ok: true, items: data || [] })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const email = body.email?.trim().toLowerCase()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const key = makeKey()
    const now = new Date()
    const nextMonth = new Date()
    nextMonth.setMonth(nextMonth.getMonth() + 1)

    const { data, error } = await supabaseAdmin
      .from('api_keys')
      .insert([{
        key,
        email,
        plan: 'free',
        usage_count: 0,
        monthly_usage: 0,
        current_period_start: now.toISOString(),
        current_period_end: nextMonth.toISOString()
      }])
      .select()
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ ok: true, item: data })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
