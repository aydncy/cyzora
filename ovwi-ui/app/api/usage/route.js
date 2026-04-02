export async function POST(req) {
  const body = await req.json();
  const email = body.email;

  // fake plan system (şimdilik)
  const plans = {
    free: { limit: 50 },
    pro: { limit: 1000 },
    enterprise: { limit: 10000 },
    scale: { limit: 100000 }
  };

  // demo user → pro olsun
  const plan = email?.includes("aydinceylan") ? "pro" : "free";

  const usage = Math.floor(Math.random() * 40);

  return Response.json({
    plan,
    usage,
    limit: plans[plan].limit,
    exceeded: usage > plans[plan].limit
  });
}
