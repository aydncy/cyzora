"use client"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
  const [apiKey, setApiKey] = useState("")

  return (
    <div style={{padding:40,maxWidth:1000,margin:"0 auto"}}>

      <h1 style={{fontSize:48,fontWeight:800,lineHeight:1.1}}>
        Stop debugging.<br/>
        <span style={{color:"#3b82f6"}}>Start verifying.</span>
      </h1>

      <p style={{opacity:.7,marginTop:10}}>
        Verify webhooks instantly with usage tracking and zero setup.
      </p>

      <div style={{marginTop:30,display:"flex",gap:10}}>
        <input
          className="input"
          placeholder="Enter API key"
          value={apiKey}
          onChange={(e)=>setApiKey(e.target.value)}
          style={{flex:1}}
        />

        <Link href="/dashboard">
          <button className="button">Dashboard</button>
        </Link>
      </div>

      <div style={{marginTop:60,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>

        <div className="card">
          <h3>Real-time</h3>
          <p style={{opacity:.6}}>Instant verification responses</p>
        </div>

        <div className="card">
          <h3>Usage tracking</h3>
          <p style={{opacity:.6}}>Track every request</p>
        </div>

        <div className="card">
          <h3>Zero setup</h3>
          <p style={{opacity:.6}}>Works instantly</p>
        </div>

      </div>

    </div>
  )
}
