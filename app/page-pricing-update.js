// Replace the pricing section in app/page.js with this

<section id="pricing" style={{ marginBottom: '100px' }}>
  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    <h2>Simple Pricing</h2>
  </div>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  }}>
    {/* Starter */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Starter</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>Free</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>One-time</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>50</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>requests</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Get Started</button>
    </div>

    {/* Professional */}
    <div className="panel accent" style={{
      border: '2px solid #3b82f6',
      transform: 'scale(1.05)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span className="badge" style={{ display: 'inline-block', alignSelf: 'center', marginBottom: '16px' }}>Popular</span>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Professional</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#3b82f6', marginBottom: '8px' }}>€6</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>1,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn primary" style={{ width: '100%' }}>Get Started</button>
    </div>

    {/* Enterprise */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Enterprise</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€18</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>10,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Upgrade</button>
    </div>

    {/* Scale */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Scale</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€49</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>100,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Contact Sales</button>
    </div>
  </div>
</section>
EOF~[200~cat > app/page-pricing-update.js << 'EOF'
// Replace the pricing section in app/page.js with this

<section id="pricing" style={{ marginBottom: '100px' }}>
  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    <h2>Simple Pricing</h2>
  </div>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  }}>
    {/* Starter */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Starter</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>Free</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>One-time</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>50</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>requests</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Get Started</button>
    </div>

    {/* Professional */}
    <div className="panel accent" style={{
      border: '2px solid #3b82f6',
      transform: 'scale(1.05)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span className="badge" style={{ display: 'inline-block', alignSelf: 'center', marginBottom: '16px' }}>Popular</span>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Professional</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#3b82f6', marginBottom: '8px' }}>€6</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>1,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn primary" style={{ width: '100%' }}>Get Started</button>
    </div>

    {/* Enterprise */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Enterprise</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€18</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>10,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Upgrade</button>
    </div>

    {/* Scale */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Scale</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€49</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>100,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Contact Sales</button>
    </div>
  </div>
</section>
EOF~[200~cat > app/page-pricing-update.js << 'EOF'
// Replace the pricing section in app/page.js with this

<section id="pricing" style={{ marginBottom: '100px' }}>
  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    <h2>Simple Pricing</h2>
  </div>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  }}>
    {/* Starter */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Starter</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>Free</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>One-time</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>50</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>requests</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Get Started</button>
    </div>

    {/* Professional */}
    <div className="panel accent" style={{
      border: '2px solid #3b82f6',
      transform: 'scale(1.05)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span className="badge" style={{ display: 'inline-block', alignSelf: 'center', marginBottom: '16px' }}>Popular</span>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Professional</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#3b82f6', marginBottom: '8px' }}>€6</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>1,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn primary" style={{ width: '100%' }}>Get Started</button>
    </div>

    {/* Enterprise */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Enterprise</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€18</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>10,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Upgrade</button>
    </div>

    {/* Scale */}
    <div className="panel" style={{
      border: '1px solid rgba(226, 232, 240, 0.1)',
      padding: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Scale</h4>
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€49</div>
        <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>100,000</div>
        <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
      </div>
      <button className="btn secondary" style={{ width: '100%' }}>Contact Sales</button>
    </div>
  </div>
</section>
EOF~[200~cat > app/page.js << 'EOF'
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [payload, setPayload] = useState(`{
  "id": "evt_1234567890",
  "type": "charge.succeeded"
}`);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 100));
    setResult({
      messageId: 'msg_abc123',
      latency: Math.floor(Math.random() * 80 + 20),
      provider: 'Stripe',
    });
    setLoading(false);
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
              <Link href="/auth/signup" className="btn primary">Try free →</Link>
              <a href="#demo" className="btn secondary">View demo</a>
            </div>
          </div>
          <div className="panel accent">
            <div style={{
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '12px',
              marginBottom: '16px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div style={{ fontSize: '12px', color: 'rgba(148, 163, 184, 1)', fontWeight: '700' }}>WEBHOOK / VERIFICATION</div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
              }} />
            </div>
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#e0e7ff',
              marginBottom: '20px',
            }}>
              <div style={{ color: '#94a3b8', marginBottom: '8px' }}>POST /verify</div>
              <div>provider: <span style={{ color: '#34d399' }}>stripe</span></div>
            </div>
            <button className="btn primary" style={{ width: '100%', marginBottom: '20px' }}>Verify Webhook</button>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '8px',
              padding: '12px',
            }}>
              <div style={{ color: '#34d399', fontWeight: '600' }}>✓ VALID WEBHOOK</div>
            </div>
          </div>
        </section>

        <section id="demo" style={{ marginBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2>Try OVWI Free</h2>
            <p style={{ marginTop: '16px', color: 'rgba(148, 163, 184, 1)' }}>Paste webhook payload, verify instantly</p>
          </div>

          <div className="panel accent" style={{ padding: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600' }}>Paste Webhook:</label>
                <textarea
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  style={{
                    width: '100%',
                    height: '300px',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                    borderRadius: '8px',
                    padding: '16px',
                    color: '#e0e7ff',
                    resize: 'none',
                  }}
                />
                <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                  <button onClick={handleVerify} disabled={loading} className="btn primary" style={{ flex: 1 }}>
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>
                  <button onClick={handleReset} className="btn secondary" style={{ flex: 1 }}>
                    Reset
                  </button>
                </div>
              </div>

              <div>
                {!result ? (
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.05)',
                    border: '1px dashed rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '32px',
                    textAlign: 'center',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <p style={{ color: 'rgba(148, 163, 184, 1)' }}>Results appear here</p>
                  </div>
                ) : (
                  <div>
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '12px',
                      padding: '16px',
                      marginBottom: '16px',
                    }}>
                      <div style={{ color: '#34d399', fontWeight: '700' }}>✓ VALID WEBHOOK</div>
                      <div style={{ fontSize: '12px', color: 'rgba(148, 163, 184, 1)', marginTop: '4px' }}>{result.provider}</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '8px', padding: '12px' }}>
                        <p style={{ fontSize: '11px', color: 'rgba(148, 163, 184, 1)' }}>Message ID</p>
                        <p style={{ fontSize: '12px', color: '#e0e7ff' }}>{result.messageId}</p>
                      </div>
                      <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '8px', padding: '12px' }}>
                        <p style={{ fontSize: '11px', color: 'rgba(148, 163, 184, 1)' }}>Latency</p>
                        <p style={{ fontSize: '12px', color: '#f59e0b' }}>{result.latency}ms</p>
                      </div>
                    </div>

                    <Link href="/auth/signup" className="btn primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Upgrade to Pro</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" style={{ marginBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>Simple Pricing</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {/* Starter */}
            <div className="panel" style={{ border: '1px solid rgba(226, 232, 240, 0.1)', padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Starter</h4>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>Free</div>
                <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>One-time</div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>50</div>
                <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>requests</div>
              </div>
              <Link href="/auth/signup" className="btn secondary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Get Started</Link>
            </div>

            {/* Professional */}
            <div className="panel accent" style={{ border: '2px solid #3b82f6', transform: 'scale(1.05)', padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <span className="badge" style={{ display: 'inline-block', alignSelf: 'center', marginBottom: '16px' }}>Popular</span>
              <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Professional</h4>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#3b82f6', marginBottom: '8px' }}>€6</div>
                <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>1,000</div>
                <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
              </div>
              <Link href="/auth/signup" className="btn primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Get Started</Link>
            </div>

            {/* Enterprise */}
            <div className="panel" style={{ border: '1px solid rgba(226, 232, 240, 0.1)', padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Enterprise</h4>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€18</div>
                <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>10,000</div>
                <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
              </div>
              <button className="btn secondary" style={{ width: '100%' }}>Upgrade</button>
            </div>

            {/* Scale */}
            <div className="panel" style={{ border: '1px solid rgba(226, 232, 240, 0.1)', padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '24px' }}>Scale</h4>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#f3f6fb', marginBottom: '8px' }}>€49</div>
                <div style={{ fontSize: '14px', color: 'rgba(148, 163, 184, 1)' }}>per month</div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#06b6d4', marginTop: '16px' }}>100,000</div>
                <div style={{ fontSize: '13px', color: 'rgba(148, 163, 184, 1)' }}>verifications/month</div>
              </div>
              <button className="btn secondary" style={{ width: '100%' }}>Contact Sales</button>
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '60px 24px',
        background: 'rgba(3, 7, 18, 0.5)',
        textAlign: 'center',
        color: 'rgba(148, 163, 184, 1)',
      }}>
        <p>© 2026 Cyzora OVWI. Verify webhooks instantly.</p>
      </footer>
    </>
  );
}
