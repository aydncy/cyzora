# íº€ Cyzora OVWI - Webhook Verification SaaS

Production-ready webhook verification platform with premium design, interactive demo, and authentication UI.

## âœ¨ Features

- âš¡ Real-time webhook verification
- í¾¨ Stripe-level premium design
- í³Š Dashboard with API key management
- í²³ 3-tier pricing model
- í³± Mobile responsive
- í´ Authentication ready (Supabase)

## í» ï¸ Tech Stack

- **Frontend:** Next.js 16 + React 19
- **Styling:** Tailwind CSS + Custom Design System
- **Auth:** Supabase (ready)
- **Payments:** Stripe (ready)
- **Hosting:** Vercel

## íº€ Quick Start
```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## í³‚ Structure
```
app/
â”œâ”€â”€ page.js              # Landing + Demo
â”œâ”€â”€ auth/
â”‚   â”œâ”€â”€ login/page.js
â”‚   â”œâ”€â”€ signup/page.js
â”œâ”€â”€ dashboard/page.js
â””â”€â”€ globals.css          # Design system

components/
â””â”€â”€ OVWIDemo.jsx         # Interactive demo
```

## í³ Pages

- `/` - Landing with interactive webhook demo
- `/auth/signup` - User registration
- `/auth/login` - User login
- `/dashboard` - API key & stats

## í²° Pricing

- **Starter:** $0/mo (50 verifications)
- **Pro:** $49/mo (10K verifications)
- **Enterprise:** Custom

## íº€ Deploy to Production
```bash
# From home PC:
npm install
npm run build
vercel --prod
```

**Live:** `https://cyzora.vercel.app`

## í³ Next Phase

- Supabase Auth integration
- Stripe payment processing
- Email notifications (Resend)
- Usage tracking & analytics

---

**Built for developers who value their time** âš¡
