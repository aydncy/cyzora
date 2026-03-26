'use client';

import Link from 'next/link';

export default function Page() {

  const checkout = (plan) => {
    const urls = {
      pro: process.env.NEXT_PUBLIC_LEMON_CHECKOUT_PRO,
      enterprise: process.env.NEXT_PUBLIC_LEMON_CHECKOUT_ENTERPRISE,
      scale: process.env.NEXT_PUBLIC_LEMON_CHECKOUT_SCALE
    }
    window.location.href = urls[plan]
  }

  return (
    <main style={{ padding: '24px', color: 'white', background: '#020617', minHeight: '100vh' }}>

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#60a5fa' }}>Cyzora</h1>
        <Link href="/login">Login</Link>
      </div>

      {/* HERO */}
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1>Verify webhooks instantly</h1>
        <p>Production-ready verification API in seconds.</p>
      </div>

      {/* PRICING */}
      <section style={{ marginTop: '120px' }}>
        <h2 style={{ textAlign: 'center' }}>Simple Pricing</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '24px',
          maxWidth: '1100px',
          margin: '40px auto'
        }}>

          <div className="panel">
            <h4>Starter</h4>
            <h2>Free</h2>
            <p>50 verifications/month</p>
            <Link href="/login" className="btn secondary">Get Started</Link>
          </div>

          <div className="panel">
            <h4>Professional</h4>
            <h2>€6 / month</h2>
            <p>1,000 verifications/month</p>
            <button onClick={() => checkout('pro')} className="btn primary">Get Started</button>
          </div>

          <div className="panel">
            <h4>Enterprise</h4>
            <h2>€18 / month</h2>
            <p>10,000 verifications/month</p>
            <button onClick={() => checkout('enterprise')} className="btn secondary">Get Started</button>
          </div>

          <div className="panel">
            <h4>Scale</h4>
            <h2>€49 / month</h2>
            <p>100,000 verifications/month</p>
            <button onClick={() => checkout('scale')} className="btn secondary">Get Started</button>
          </div>

        </div>
      </section>

    </main>
  )
}
