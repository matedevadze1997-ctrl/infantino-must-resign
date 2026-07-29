# Infantino Must Resign

First production-ready campaign website for `infantinomustresign.com`.

## 1. Supabase

Open your Supabase project:

1. Go to **SQL Editor**
2. Create a new query
3. Paste the full contents of `supabase/schema.sql`
4. Click **Run**

Then open **Project Settings → API** and copy:

- Project URL
- `service_role` key (server secret)

Never place the service-role key in public code or commit it to GitHub.

## 2. Vercel environment variables

In the Vercel project, add:

- `NEXT_PUBLIC_SITE_URL` = `https://infantinomustresign.com`
- `NEXT_PUBLIC_SUPABASE_URL` = your Supabase Project URL
- `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service-role secret

Apply them to Production, Preview and Development.

## 3. Deploy

Import the GitHub repository into Vercel. Vercel detects Next.js automatically.
Every push to the main branch creates a new production deployment.

## Important pre-launch work

This starter is functional, but before major public promotion add:

- Email verification / double opt-in
- CAPTCHA or Cloudflare Turnstile
- Rate limiting
- Admin moderation dashboard
- A working privacy-contact email
- A donation processor and transparent donation policy
- Final legal review of Privacy Policy and Terms
- Evidence/source page with carefully verified public sources

The current form immediately publishes a unique email signature. That is acceptable for
private testing, not for a high-traffic public campaign.
