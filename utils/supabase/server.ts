import { createClient } from '@supabase/supabase-js'

export const supabaseAdmin = createClient(
  "https://bfeoiyzucaylpgjyzuxi.supabase.co",
  "process.env.SUPABASE_SERVICE_ROLE_KEY"
)
