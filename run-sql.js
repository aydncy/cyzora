const { Client } = require('pg');

const client = new Client({
  connectionString: "postgresql://postgres:oJxcFunsPhw50hab@db.bfeoiyzucaylpgjyzuxi.supabase.co:5432/postgres",
});

(async () => {
  await client.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS api_keys (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id),
    key text unique,
    plan text default 'free',
    usage_count int default 0,
    created_at timestamp default now()
  );
  `);

  await client.query(`
  CREATE TABLE IF NOT EXISTS usage_logs (
    id uuid primary key default gen_random_uuid(),
    user_id uuid,
    api_key text,
    status text,
    latency_ms int,
    created_at timestamp default now()
  );
  `);

  console.log("✅ Tables created");

  await client.end();
})();

