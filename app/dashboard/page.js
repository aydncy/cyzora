'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [copied, setCopied] = useState(false);
  const apiKey = 'ovwi_live_abc123def456';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1>Dashboard</h1>
          <p style={{ marginTop: '8px', color: 'rgba(148, 163, 184, 1)' }}>Welcome back!</p>
        </div>
        <button className="btn secondary" onClick={handleLogout}>Logout</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div className="panel">
          <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '8px' }}>Verifications This Month</p>
          <p style={{ fontSize: '32px', fontWeight: '800', color: '#3b82f6' }}>1,234</p>
        </div>
        <div className="panel">
          <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '8px' }}>Success Rate</p>
          <p style={{ fontSize: '32px', fontWeight: '800', color: '#10b981' }}>99.1%</p>
        </div>
        <div className="panel">
          <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '8px' }}>Current Plan</p>
          <p style={{ fontSize: '32px', fontWeight: '800', color: '#f59e0b' }}>Pro</p>
        </div>
      </div>

      <div className="panel accent" style={{ padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '16px' }}>API Key</h2>
        <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '16px' }}>Use this key to verify webhooks</p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input
            type="text"
            value={apiKey}
            readOnly
            style={{
              flex: 1,
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.3)',
              borderRadius: '8px',
              padding: '12px 16px',
              color: '#3b82f6',
              fontFamily: 'monospace',
            }}
          />
          <button onClick={handleCopyKey} className="btn primary" style={{ padding: '12px 24px' }}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="panel" style={{ padding: '32px' }}>
        <h2 style={{ marginBottom: '16px' }}>Recent Activity</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {[
            { time: '2 hours ago', event: 'Verified webhook from Stripe', status: '✓' },
            { time: '5 hours ago', event: 'API key created', status: '✓' },
            { time: 'Yesterday', event: 'Plan upgraded to Pro', status: '✓' },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div>
                <p style={{ color: '#f3f6fb' }}>{item.event}</p>
                <p style={{ fontSize: '12px', color: 'rgba(148, 163, 184, 1)', marginTop: '4px' }}>{item.time}</p>
              </div>
              <p style={{ color: '#10b981', fontWeight: '600' }}>{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
