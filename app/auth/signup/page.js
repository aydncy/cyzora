'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (email && password && confirmPassword) {
      setSuccess('Account created! Redirecting...');
      setTimeout(() => window.location.href = '/dashboard', 2000);
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="page" style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h1 style={{ marginBottom: '32px' }}>Create Account</h1>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" style={{ width: '100%' }} />
        </div>
        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>{error}</div>}
        {success && <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#86efac', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>{success}</div>}
        <button type="submit" className="btn primary" style={{ width: '100%', justifyContent: 'center' }}>Sign Up</button>
      </form>
      <p style={{ marginTop: '24px', textAlign: 'center', color: 'rgba(148, 163, 184, 1)', fontSize: '14px' }}>Already have account? <Link href="/auth/login" style={{ color: '#3b82f6' }}>Login</Link></p>
    </div>
  );
}
