"use client"
import { useState } from "react"

export default function Dashboard() {
  const [email,setEmail]=useState("aydinceylan07@gmail.com")
  const [data,setData]=useState(null)

  const load=async()=>{
    const res=await fetch(`/api/dashboard?email=${email}`)
    const json=await res.json()
    setData(json.summary)
  }

  return (
    <div style={{padding:40,maxWidth:1100,margin:"0 auto"}}>

      <h1 style={{fontSize:32}}>Dashboard</h1>

      <div style={{display:"flex",gap:10,marginTop:20}}>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)}/>
        <button className="button" onClick={load}>Load</button>
      </div>

      {data && (
        <div style={{marginTop:40}}>

          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>

            <div className="card">
              <div style={{opacity:.6}}>Plan</div>
              <div style={{fontSize:24,fontWeight:700}}>{data.plan}</div>
            </div>

            <div className="card">
              <div style={{opacity:.6}}>Usage</div>
              <div style={{fontSize:24}}>{data.usage}</div>
            </div>

            <div className="card">
              <div style={{opacity:.6}}>Limit</div>
              <div style={{fontSize:24}}>{data.limit}</div>
            </div>

            <div className="card">
              <div style={{opacity:.6}}>Remaining</div>
              <div style={{fontSize:24}}>{data.remaining}</div>
            </div>

          </div>

          <div style={{marginTop:20}}>
            <div style={{height:8,background:"#111",borderRadius:10}}>
              <div style={{
                width:`${(data.usage/data.limit)*100}%`,
                height:8,
                background:"#3b82f6",
                borderRadius:10
              }}/>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}
