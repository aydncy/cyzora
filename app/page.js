'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Home() {
  const checkout = (plan) => {
    const urls = {
      pro: process.env.NEXT_PUBLIC_LEMON_CHECKOUT_PRO,
      enterprise: process.env.NEXT_PUBLIC_LEMON_CHECKOUT_ENTERPRISE,
      scale: process.env.NEXT_PUBLIC_LEMON_CHECKOUT_SCALE,
    };
    window.location.href = urls[plan];
  };
  const [payload, setPayload] = useState(`{
  "id": "evt_1234567890",
  "type": "charge.succeeded"
}`);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleVerify = async () => {
    setLoading(true);
    try {
      // 1. Check usage
      const usageRes = await fetch('/api/usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const usage = await usageRes.json();
      
      if (usage.error) {
        alert(usage.error);
        setLoading(false);
        return;
      }
      
      // 2. Check limit
      if (usage.exceeded) {
        alert('Limit exceeded! Upgrading...');
        const nextPlan = { free: 'pro', pro: 'enterprise', enterprise: 'scale', scale: 'scale' };
        checkout(nextPlan[usage.plan]);
        return;
      }
      
      // 3. Mock result (real verify logic)
      setResult({
        messageId: 'msg_abc123',
        latency: Math.floor(Math.random() * 80 + 20),
        provider: 'Stripe',
        plan: usage.plan,
        usage: usage.usage,
        limit: usage.limit
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        background: 'rgba(3, 7, 18, 0.8)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Cyzora
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#demo" style={{ color: 'rgba(203, 213, 225, 0.8)', fontSize: '14px' }}>Demo</a>
            <a href="#pricing" style={{ color: 'rgba(203, 213, 225, 0.8)', fontSize: '14px' }}>Pricing</a>
            <Link href="/auth/login" className="btn primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Login</Link>
          </div>
        </div>
      </nav>
      <main className="page" style={{ paddingTop: '140px' }}>
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '100px',
        }}>
          <div>
            <span className="badge" style={{ display: 'inline-flex', marginBottom: '24px' }}>✨ Now available</span>
            <h1 style={{ marginTop: '16px', marginBottom: '24px' }}>
              Stop debugging.<br />
              Start <span className="gradient-text">verifying.</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(203, 213, 225, 0.9)',
              maxWidth: '500px',
              lineHeight: '1.8',
              marginBottom: '32px',
            }}>
              Verify webhooks instantly with real-time feedback and zero setup.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
              <button onClick={() => checkout('pro')} className="btn primary" style={{ padding: '12px 32px' }}>Get Started</button>
              <a href="#demo" className="btn secondary" style={{ padding: '12px 32px', textDecoration: 'none', display: 'inline-block' }}>View Demo</a>
            </div>
          </div>
          <div style={{
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '12px',
            padding: '32px',
          }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#999' }}>Email</label>
              <input type="email" placeholder="test@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', marginBottom: '16px' }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#999' }}>Payload</label>
              <textarea value={payload} onChange={(e) => setPayload(e.target.value)} style={{ width: '100%', height: '120px', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontFamily: 'monospace', fontSize: '12px' }} />
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={handleVerify} disabled={loading} className="btn primary" style={{ flex: 1, padding: '12px' }}>
                {loading ? 'Verifying...' : 'Verify'}
              </button>
              <button onClick={handleReset} className="btn secondary" style={{ flex: 1, padding: '12px' }}>
                Reset
              </button>
            </div>
            {result && (
              <div style={{ marginTop: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px', marginRight: '8px' }}>✓</span>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>Verified</span>
                </div>
                <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', overflow: 'auto', fontSize: '11px', color: '#10b981' }}>{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}
          </div>
        </section>

        <section id="demo" style={{ marginBottom: '100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { step: '1', title: 'Send Webhook', desc: 'Paste your webhook payload' },
              { step: '2', title: 'Verify', desc: 'Instant verification & debugging' },
              { step: '3', title: 'Deploy', desc: 'Confident webhook handling' },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6', marginBottom: '16px' }}>{item.step}</div>
                <h3 style={{ marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(203, 213, 225, 0.8)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" style={{ marginBottom: '100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { name: 'Free', limit: 50, price: '$0', plan: null },
              { name: 'Pro', limit: 1000, price: '€6', plan: 'pro' },
              { name: 'Enterprise', limit: 10000, price: '€18', plan: 'enterprise' },
              { name: 'Scale', limit: 100000, price: '€49', plan: 'scale' },
            ].map((tier) => (
              <div key={tier.name} style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{tier.name}</h3>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '24px' }}>{tier.limit.toLocaleString()} verifications/month</p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>{tier.price}</p>
                {tier.plan ? (
                  <button onClick={() => checkout(tier.plan)} className="btn primary" style={{ width: '100%', padding: '12px' }}>
                    Get {tier.name}
                  </button>
                ) : (
                  <button onClick={() => alert('Sign up for free')} className="btn secondary" style={{ width: '100%', padding: '12px' }}>
                    Get Started
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
