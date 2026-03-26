'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock auth for now
    if (email && password) {
      window.location.href = '/dashboard';
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="page" style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h1 style={{ marginBottom: '32px' }}>Login to Cyzora</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ width: '100%' }}
          />
        </div>
        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#fca5a5' }}>{error}</div>}
        <button type="submit" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>Login</button>
      </form>
      <p style={{ marginTop: '24px', textAlign: 'center', color: 'rgba(148, 163, 184, 1)', fontSize: '14px' }}>No account? <Link href="/auth/signup" style={{ color: '#3b82f6' }}>Sign up</Link></p>
    </div>
  );
}
