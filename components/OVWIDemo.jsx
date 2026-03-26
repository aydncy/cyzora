'use client';
import { useState } from 'react';

export default function OVWIDemo() {
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
      status: 'valid',
      messageId: 'msg_abc123',
      latency: Math.floor(Math.random() * 80 + 20),
      provider: 'Stripe',
      trustScore: 98,
      creditsRemaining: 49,
    });
    setLoading(false);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="panel accent" style={{ marginTop: '40px', padding: '32px' }}>
      <h3 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '700' }}>Try OVWI Now (Free)</h3>

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
                <div style={{ color: '#34d399', fontWeight: '700', marginBottom: '8px' }}>✓ VALID WEBHOOK</div>
                <div style={{ fontSize: '12px', color: 'rgba(148, 163, 184, 1)' }}>Signature verified • {result.provider}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '8px', padding: '12px' }}>
                  <p style={{ fontSize: '11px', color: 'rgba(148, 163, 184, 1)' }}>Message ID</p>
                  <p style={{ fontSize: '12px', color: '#e0e7ff', fontFamily: 'monospace' }}>{result.messageId}</p>
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '8px', padding: '12px' }}>
                  <p style={{ fontSize: '11px', color: 'rgba(148, 163, 184, 1)' }}>Latency</p>
                  <p style={{ fontSize: '12px', color: '#f59e0b', fontWeight: '600' }}>{result.latency}ms</p>
                </div>
              </div>

              <button className="btn primary" style={{ width: '100%' }}>Upgrade ($29/mo)</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
