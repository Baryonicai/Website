# Baryonic — Next.js Website

A ready-to-deploy Next.js (App Router) website for baryonicai.com

## Run locally
```bash
npm i
npm run dev
```

## Deploy on Vercel
1. Push this project to GitHub.
2. On Vercel: New Project → Import this repo → Deploy.
3. In Vercel Project → Settings → Domains → Add `baryonicai.com` and `www.baryonicai.com`.
4. Copy the DNS records shown by Vercel into your GoDaddy DNS (keep nameservers at GoDaddy).
5. Wait for DNS to propagate. SSL is automatic.

## Notes
- TailwindCSS included.
- Pages: Home, About, Work (Projects/Experience), Contact.
- Edit copy in `app/*` pages and styles in `app/globals.css`.
