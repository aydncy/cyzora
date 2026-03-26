'use client'

import { useState } from 'react'
import { supabase } from '../../utils/supabase/client'

export default function Login() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const login = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'http://localhost:3001/dashboard'
      }
    })

    if (error) setMsg(error.message)
    else setMsg('Check your email')
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Send Magic Link</button>

      <p>{msg}</p>
    </main>
  )
}
