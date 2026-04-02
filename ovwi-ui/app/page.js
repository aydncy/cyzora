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
    if (urls[plan]) window.location.href = urls[plan];
  };

  const [payload, setPayload] = useState(`{
  "id": "evt_1234567890",
  "type": "charge.succeeded"
}`);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('aydinceylan07@gmail.com');

  const handleVerify = async () => {
    setLoading(true);
    try {
      // usage check
      const usageRes = await fetch('/api/usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const usage = await usageRes.json();

      if (usage.exceeded) {
        const nextPlan = {
          free: 'pro',
          pro: 'enterprise',
          enterprise: 'scale',
          scale: 'scale'
        };
        checkout(nextPlan[usage.plan]);
        return;
      }

      // REAL VERIFY
      const parsed = JSON.parse(payload);

      const verifyRes = await fetch('https://ovwi-oss-production.up.railway.app/verify/ovwi_live_testkey123', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed)
      });

      const data = await verifyRes.json();

      setResult({
        ...data,
        plan: usage.plan,
        usage: usage.usage,
        limit: usage.limit
      });

    } catch (e) {
      setResult({ error: e.message });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => setResult(null);

  return (
    <div className="page-shell">
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">Cyzora</div>
          <div className="nav-links">
            <a className="nav-link" href="#demo">Demo</a>
            <a className="nav-link" href="#pricing">Pricing</a>
            <Link href="/auth/login" className="login-btn">Login</Link>
          </div>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <div>
            <span className="badge">✨ Now available</span>
            <h1 className="hero-title">
              Stop debugging.<br />
              Start <span className="gradient-text">verifying.</span>
            </h1>
            <p className="hero-copy">
              Verify webhooks instantly with real-time feedback and zero setup.
            </p>
            <div className="hero-actions">
              <button onClick={() => checkout('pro')} className="btn btn-primary">Get Started</button>
              <a href="#demo" className="btn btn-secondary">View Demo</a>
            </div>
          </div>

          <div className="panel">
            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label className="label">Payload</label>
              <textarea
                className="textarea"
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
              />
            </div>

            <div className="panel-actions">
              <button onClick={handleVerify} disabled={loading} className="btn btn-primary">
                {loading ? 'Verifying...' : 'Verify'}
              </button>
              <button onClick={handleReset} className="btn btn-secondary">
                Reset
              </button>
            </div>

            {result && (
              <div className="result">
                <div className="result-head">✓ Verified</div>
                <pre>{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}
          </div>
        </section>

        <section id="demo" className="section">
          <h2 className="section-title">How it works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3 className="step-title">Send Webhook</h3>
              <p className="step-copy">Paste your webhook payload</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3 className="step-title">Verify</h3>
              <p className="step-copy">Instant verification & debugging</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3 className="step-title">Deploy</h3>
              <p className="step-copy">Confident webhook handling</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <h2 className="section-title">Pricing</h2>
          <div className="pricing">
            <div className="price-card">
              <h3 className="price-name">Free</h3>
              <p className="price-limit">50 / month</p>
              <p className="price-value">$0</p>
              <button className="btn btn-secondary">Get Started</button>
            </div>

            <div className="price-card">
              <h3 className="price-name">Pro</h3>
              <p className="price-limit">1,000 / month</p>
              <p className="price-value">€6</p>
              <button onClick={() => checkout('pro')} className="btn btn-primary">Get Pro</button>
            </div>

            <div className="price-card">
              <h3 className="price-name">Enterprise</h3>
              <p className="price-limit">10,000 / month</p>
              <p className="price-value">€18</p>
              <button onClick={() => checkout('enterprise')} className="btn btn-primary">Get Enterprise</button>
            </div>

            <div className="price-card">
              <h3 className="price-name">Scale</h3>
              <p className="price-limit">100,000 / month</p>
              <p className="price-value">€49</p>
              <button onClick={() => checkout('scale')} className="btn btn-primary">Get Scale</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
