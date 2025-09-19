Backend (Portfolio Contact API)

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

Deployment (Vercel)
-------------------
1. Create a Vercel account and connect your GitHub account.
2. Import this repository (branch `main`) and set Project Name (e.g., `backend-nuja`).
3. Ensure `vercel.json` is present — Vercel will use it to deploy `server.js`.
4. Add the environment variables in Project → Settings → Environment Variables.
5. Deploy. After deployment, test `https://<your-project>.vercel.app/health` and the contact API.

# Backend (Portfolio Contact API)

![node-version](https://img.shields.io/badge/node-22.x-green)
![vercel](https://img.shields.io/badge/deploy-vercel-blue)

This repository contains the backend for a portfolio contact/email service used by the portfolio frontend.

- Frontend repository: https://github.com/Pramudi02/MyPortfolio
- Live portfolio site: https://portfolio990.web.app

Table of contents
-----------------
- [Summary](#summary)
- [Features](#features)
- [Repository structure](#repository-structure)
- [Environment variables](#environment-variables)
- [Local development](#local-development)
- [API examples](#api-examples)
- [Deployment (Vercel)](#deployment-vercel)
- [Frontend integration](#frontend-integration)
- [Troubleshooting](#troubleshooting)

Summary
-------
This Express-based Node.js backend receives contact form submissions from the frontend and sends emails (using Gmail SMTP). It's intended for Vercel but works locally for development.

Features
--------
- POST `/api/send-email`: Accepts JSON `{ name, email, message }` and sends email to `EMAIL_TO`.
- Auto-reply to sender (configurable via env).
- GET `/health`: returns simple health info for monitoring.
- CORS allowed origin via `FRONTEND_URL`.
- Minimal, dependency-light server suitable for serverless deployment.

Repository structure
--------------------
- `server.js` — main Express app (routes, email sending, health check)
- `frontend-config.js` — frontend configuration constants (update `BACKEND_URL` to deployed URL)
- `vercel.json` — Vercel configuration (build and routes)
- `DEPLOYMENT_GUIDE.md` — updated instructions (Vercel-focused)

Environment variables
---------------------
Set these in Vercel Project Settings → Environment Variables or locally in a `.env` file (do NOT commit `.env`):

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=destination@example.com
FRONTEND_URL=https://your-frontend.vercel.app
AUTO_REPLY_SUBJECT=Thank you for contacting me
```

Notes:
- For Gmail, use an App Password (recommended) and enable two-factor and app-passwords if needed.
- `FRONTEND_URL` should match the origin used by the frontend (e.g., `https://portfolio990.web.app`).

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

Deployment (Vercel)
-------------------
1. Create a Vercel account and connect GitHub.
2. Import this repository (branch `main`).
3. Use the following import settings:

```text
Project Name: backend-nuja (or your choice)
Framework Preset: Express
Root Directory: ./
Build Command: None
Install Command: npm install
```

4. Add environment variables in Project Settings → Environment Variables.
5. Deploy. After deployment, test `https://<your-project>.vercel.app/health` and the contact API.

Frontend integration
--------------------
- Frontend repo: https://github.com/Pramudi02/MyPortfolio
- Live frontend: https://portfolio990.web.app
- Update frontend `BACKEND_URL` to the Vercel backend URL (e.g., `https://backend-nuja.vercel.app`).

Troubleshooting
---------------
- Build error about Node version: Ensure `package.json` contains:

```json
"engines": { "node": "22.x" }
```

- If emails are not sent: verify `EMAIL_USER` and `EMAIL_PASS` and check Vercel logs for errors.

Contributing / Contact
----------------------
If you want help wiring the frontend to this backend or need a `.env.example` added here, tell me and I will add it.

