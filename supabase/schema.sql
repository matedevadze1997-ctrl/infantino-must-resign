create extension if not exists citext;

create table if not exists public.signatures (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(first_name) between 2 and 60),
  last_name text not null check (char_length(last_name) between 2 and 60),
  email citext not null unique,
  country text not null check (char_length(country) between 2 and 80),
  comment text check (comment is null or char_length(comment) <= 500),
  consent boolean not null default false,
  status text not null default 'pending'
    check (status in ('pending', 'published', 'rejected')),
  ip_hint text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists signatures_status_created_idx
  on public.signatures(status, created_at desc);

alter table public.signatures enable row level security;

-- No public table policies are created.
-- All writes and counts go through server-only API routes using the service role key.
-- Never expose SUPABASE_SERVICE_ROLE_KEY in browser code.
