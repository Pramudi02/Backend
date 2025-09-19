# Backend (Portfolio Contact API)

![node-version](https://img.shields.io/badge/node-22.x-green)
![vercel](https://img.shields.io/badge/deploy-vercel-blue)

This repository contains the backend for a portfolio contact/email service used by the portfolio frontend.

- Frontend repository: https://github.com/Pramudi02/MyPortfolio
- Live portfolio site: https://portfolio990.web.app

Summary
-------
This Express-based Node.js backend receives contact form submissions from the frontend and sends emails (using Gmail SMTP). It's designed to be deployed on Vercel (serverless Node) but also runs locally for development.

Features
--------
- Receive contact form POST requests at `/api/send-email` (expects JSON: `{ name, email, message }`).
- Sends an email to the configured `EMAIL_TO` address and optionally sends an auto-reply to the sender.
- Health check endpoint at `/health` for uptime monitoring.
- CORS configured to accept the frontend origin configured via `FRONTEND_URL`.
- Configurable via environment variables for secure credentials.

Repository structure
--------------------
- `server.js` — main Express app (routes, email sending, health check)
- `frontend-config.js` — frontend configuration constants (update `BACKEND_URL` to deployed URL)
- `vercel.json` — Vercel configuration (build and routes)
- `DEPLOYMENT_GUIDE.md` — updated instructions (Vercel-focused)

Environment variables
---------------------
Set these in Vercel Project Settings → Environment Variables or locally in a `.env` file (do NOT commit `.env`):

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=destination@example.com
FRONTEND_URL=https://your-frontend.vercel.app
AUTO_REPLY_SUBJECT=Thank you for contacting me

Notes:
- For Gmail, use an App Password (recommended) and enable appropriate security settings.
- `FRONTEND_URL` should match the origin used by the frontend (e.g., `https://portfolio990.web.app`).

Local development
-----------------
1. Create a `.env` file in the project root with the environment variables above.
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Health check: visit `http://localhost:3000/health` in a browser or use `curl http://localhost:3000/health`.


This repository contains the backend for a portfolio contact/email service used by the portfolio frontend.

Local development
-----------------
1. Create a `.env` file in the project root with the variables from the section above.
2. Install dependencies:

```powershell
npm install
```

3. Start the server:

```powershell
npm start
```

4. Health check (browser or curl):

```bash
curl http://localhost:3000/health
```

API examples
------------

Send a contact request (example with `curl`):

```bash
curl -X POST https://<your-backend>.vercel.app/api/send-email \
	-H "Content-Type: application/json" \
	-d '{"name":"Jane","email":"jane@example.com","message":"Hello!"}'
```

Local POST example (when running locally):

```bash
curl -X POST http://localhost:3000/api/send-email \
	-H "Content-Type: application/json" \
	-d '{"name":"Jane","email":"jane@example.com","message":"Hello!"}'
```

