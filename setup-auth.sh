#!/bin/bash

echo "í´¥ Cyzora Auth System Setup"

# 1. Create directories
mkdir -p app/lib app/api/auth app/api/keys app/api/usage

# 2. Create supabase.js
cat > app/lib/supabase.js << 'SUPABASE'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
SUPABASE

# 3. Create env file
cat > .env.local << 'ENV'
NEXT_PUBLIC_SUPABASE_URL=https://bfeoiyzucaylpgjyzuxi.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUPABASE_KEY=$SUPABASE_SERVICE_ROLE_KEY
SUPABASE_SERVICE_ROLE_KEY=SUPABASE_KEY=$SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_API_URL=http://localhost:3001
ENV

# 4. Create jsconfig.json
cat > jsconfig.json << 'JSCONFIG'
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
JSCONFIG

# 5. Create signup page
cat > app/auth/signup/page.js << 'SIGNUP'
'use client';
import { useState } from 'react';
import { supabase } from '@/app/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        setError(signupError.message);
        setLoading(false);
        return;
      }

      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: data.user.id, email: email }]);

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      router.push('/auth/login?message=Account created! Please login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h1 style={{ marginBottom: '32px' }}>Create Account</h1>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={{ width: '100%' }} required />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" style={{ width: '100%' }} required />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" style={{ width: '100%' }} required />
        </div>
        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#fca5a5' }}>{error}</div>}
        <button type="submit" disabled={loading} className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>{loading ? 'Creating...' : 'Sign Up'}</button>
      </form>
      <p style={{ marginTop: '24px', textAlign: 'center', color: 'rgba(148, 163, 184, 1)', fontSize: '14px' }}>Already have account? <Link href="/auth/login" style={{ color: '#3b82f6' }}>Login</Link></p>
    </div>
  );
}
SIGNUP

# 6. Create login page
cat > app/auth/login/page.js << 'LOGIN'
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const msg = searchParams.get('message');
    if (msg) setMessage(msg);
  }, [searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });

      if (loginError) {
        setError(loginError.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h1 style={{ marginBottom: '32px' }}>Login to Cyzora</h1>
      {message && <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#86efac' }}>{message}</div>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={{ width: '100%' }} required />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" style={{ width: '100%' }} required />
        </div>
        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#fca5a5' }}>{error}</div>}
        <button type="submit" disabled={loading} className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
      <p style={{ marginTop: '24px', textAlign: 'center', color: 'rgba(148, 163, 184, 1)', fontSize: '14px' }}>Don't have account? <Link href="/auth/signup" style={{ color: '#3b82f6' }}>Sign up</Link></p>
    </div>
  );
}
LOGIN

# 7. Create dashboard
cat > app/dashboard/page.js << 'DASHBOARD'
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [apiKey, setApiKey] = useState('ovwi_live_' + Math.random().toString(36).slice(2, 12));
  const [usage, setUsage] = useState(0);
  const [plan, setPlan] = useState('free');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      router.push('/auth/login');
      return;
    }

    setUser(session.user);
    setLoading(false);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) return <div className="page">Loading...</div>;

  const limits = { free: 50, pro: 10000, enterprise: Infinity };
  const currentLimit = limits[plan];
  const usagePercent = (usage / currentLimit) * 100;

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1>Dashboard</h1>
          <p style={{ marginTop: '8px', color: 'rgba(148, 163, 184, 1)' }}>Welcome, {user?.email}</p>
        </div>
        <button className="btn secondary" onClick={handleLogout}>Logout</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div className="panel">
          <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '8px' }}>Verifications</p>
          <p style={{ fontSize: '32px', fontWeight: '800', color: '#3b82f6' }}>{usage}</p>
        </div>
        <div className="panel">
          <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '8px' }}>Plan</p>
          <p style={{ fontSize: '32px', fontWeight: '800', color: '#f59e0b', textTransform: 'capitalize' }}>{plan}</p>
        </div>
        <div className="panel">
          <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '8px' }}>Limit</p>
          <p style={{ fontSize: '32px', fontWeight: '800', color: '#10b981' }}>{currentLimit === Infinity ? 'âˆž' : currentLimit}</p>
        </div>
      </div>

      <div className="panel accent" style={{ padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '16px' }}>API Key</h2>
        <p style={{ color: 'rgba(148, 163, 184, 1)', marginBottom: '16px' }}>Use this key to verify webhooks</p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input type="text" value={apiKey} readOnly style={{ flex: 1, background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '8px', padding: '12px 16px', color: '#3b82f6', fontFamily: 'monospace' }} />
          <button onClick={handleCopyKey} className="btn primary" style={{ padding: '12px 24px' }}>{copied ? 'âœ“ Copied' : 'Copy'}</button>
        </div>
      </div>

      <div className="panel" style={{ padding: '32px' }}>
        <h2 style={{ marginBottom: '16px' }}>Usage</h2>
        <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'rgba(148, 163, 184, 1)' }}>Monthly Verifications</p>
          <p style={{ color: '#f3f6fb', fontWeight: '600' }}>{usage} / {currentLimit === Infinity ? 'âˆž' : currentLimit}</p>
        </div>
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '8px', height: '8px', overflow: 'hidden' }}>
          <div style={{ background: usagePercent > 80 ? '#ef4444' : usagePercent > 50 ? '#f59e0b' : '#10b981', height: '100%', width: `${Math.min(usagePercent, 100)}%` }} />
        </div>
      </div>
    </div>
  );
}
DASHBOARD

echo "âœ… Auth system setup complete!"
echo "í³‹ Next steps:"
echo "1. Run: npm install uuid"
echo "2. Run: rm -rf .next"
echo "3. Run: node node_modules/next/dist/bin/next dev -p 3001"
echo "4. Test: http://localhost:3001/auth/signup"

