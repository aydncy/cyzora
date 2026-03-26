"use client";
import { useState } from "react";

export default function Ovwi() {

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [usage, setUsage] = useState(0);

  const verify = () => {
    setLoading(true);

    setTimeout(() => {
      setResult({
        status: "valid",
        latency: "24ms"
      });
      setUsage(usage + 1);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="page">

      <h1>Verify webhooks instantly.</h1>

      <p style={{marginTop:"20px"}}>
        Send a request and get validation immediately.
      </p>

      <div style={{
        marginTop:"40px",
        padding:"20px",
        border:"1px solid rgba(255,255,255,0.1)",
        borderRadius:"12px"
      }}>

        <p style={{fontFamily:"monospace"}}>
{`POST /verify
provider: stripe`}
        </p>

        <button
          className="btn"
          style={{marginTop:"20px"}}
          onClick={verify}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {result && (
          <div style={{marginTop:"20px"}}>
            <p>✔ {result.status}</p>
            <p>latency: {result.latency}</p>
            <p>usage: {usage} / 50</p>
          </div>
        )}

      </div>

    </div>
  );
}
