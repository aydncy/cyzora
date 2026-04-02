"use client"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
  const [apiKey, setApiKey] = useState("ovwi_live_onjneyjiwh")
  const [result, setResult] = useState(null)

  const handleVerify = async () => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: apiKey })
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>OVWI</h1>
      <p>Verification, usage tracking, plan limits, monthly reset.</p>

      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <input
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          style={{ padding: 12, width: 360, border: "1px solid #ccc", borderRadius: 8 }}
          placeholder="ovwi_live_..."
        />
        <button onClick={handleVerify} style={{ padding: "12px 16px" }}>Verify</button>
        <Link href="/dashboard" style={{ padding: "12px 16px", border: "1px solid #ccc", borderRadius: 8, textDecoration: "none" }}>
          Dashboard
        </Link>
      </div>

      <pre style={{ marginTop: 24, padding: 16, background: "#111", color: "#0f0", borderRadius: 12 }}>
{JSON.stringify(result, null, 2)}
      </pre>
    </div>
  )
}
