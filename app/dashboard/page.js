"use client"

import { useState } from "react"

export default function DashboardPage() {
  const [email, setEmail] = useState("aydinceylan07@gmail.com")
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState(null)
  const [items, setItems] = useState([])
  const [createResult, setCreateResult] = useState(null)

  const loadDashboard = async () => {
    setLoading(true)
    setCreateResult(null)
    try {
      const res = await fetch(`/api/dashboard?email=${encodeURIComponent(email)}`)
      const data = await res.json()
      setSummary(data.summary || null)
      setItems(data.items || [])
    } finally {
      setLoading(false)
    }
  }

  const createKey = async () => {
    setLoading(true)
    setCreateResult(null)
    try {
      const res = await fetch('/api/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      setCreateResult(data)
      await loadDashboard()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: 1100, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: 8 }}>OVWI Dashboard</h1>
      <p style={{ opacity: 0.7, marginTop: 0 }}>Keys, usage, plan, reset cycle</p>

      <div style={{ display: 'flex', gap: 12, marginTop: 24, marginBottom: 24 }}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ flex: 1, padding: 12, border: '1px solid #ccc', borderRadius: 8 }}
        />
        <button onClick={loadDashboard} style={{ padding: '12px 16px' }} disabled={loading}>
          {loading ? 'Loading...' : 'Load'}
        </button>
        <button onClick={createKey} style={{ padding: '12px 16px' }} disabled={loading}>
          Create key
        </button>
      </div>

      {summary && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 24 }}>
          <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
            <div style={{ opacity: 0.6 }}>Plan</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{summary.plan}</div>
          </div>
          <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
            <div style={{ opacity: 0.6 }}>Usage</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{summary.usage}</div>
          </div>
          <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
            <div style={{ opacity: 0.6 }}>Limit</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{summary.limit}</div>
          </div>
          <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
            <div style={{ opacity: 0.6 }}>Remaining</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{summary.remaining}</div>
          </div>
          <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
            <div style={{ opacity: 0.6 }}>Keys</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{summary.keys}</div>
          </div>
        </div>
      )}

      {createResult && (
        <pre style={{ padding: 16, background: '#111', color: '#0f0', borderRadius: 12, overflow: 'auto' }}>
{JSON.stringify(createResult, null, 2)}
        </pre>
      )}

      <div style={{ marginTop: 24 }}>
        <h2>API Keys</h2>
        <div style={{ display: 'grid', gap: 12 }}>
          {items.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16 }}>
              <div><b>Key:</b> {item.key}</div>
              <div><b>Plan:</b> {item.plan}</div>
              <div><b>Monthly usage:</b> {item.monthly_usage ?? 0}</div>
              <div><b>Created:</b> {item.created_at}</div>
              <div><b>Reset at:</b> {item.current_period_end || '-'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
