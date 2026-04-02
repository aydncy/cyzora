import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const body = await req.json()

    if (body.meta?.event_name === 'order:created') {

      const email = body.data.attributes.customer_email
      const productName = body.data.attributes.product_name.toLowerCase()

      let plan = 'pro'
      if (productName.includes('enterprise')) plan = 'enterprise'
      if (productName.includes('scale')) plan = 'scale'

      const now = new Date()
      const nextMonth = new Date()
      nextMonth.setMonth(nextMonth.getMonth() + 1)

      await supabase
        .from('api_keys')
        .update({
          plan,
          monthly_usage: 0,
          current_period_start: now,
          current_period_end: nextMonth
        })
        .eq('email', email)

      return Response.json({ success: true })
    }

    return Response.json({ ok: true })

  } catch (err) {
    return Response.json({ error: err.message })
  }
}
