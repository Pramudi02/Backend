# Deployment Guide: Vercel Backend + Vercel or other Frontend

This project is a small Express backend for sending emails from a portfolio contact form. The original guide referenced Railway; this document replaces those steps with instructions for Vercel.

## Deploying the Backend to Vercel

1. Create a Vercel account (https://vercel.com) and link your GitHub repository.
2. Push your repo to GitHub (if not already).
3. In Vercel, import the project and choose the `main` branch.
4. Vercel will detect `vercel.json` and deploy the app using `@vercel/node`.

### Environment Variables

Set these in the Vercel dashboard (Project Settings → Environment Variables):

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-gmail@gmail.com
EMAIL_TO=where-to-receive-emails@gmail.com
FRONTEND_URL=https://your-frontend.vercel.app
AUTO_REPLY_SUBJECT=Thank you for contacting me
```

Notes:
- Use a Gmail App Password (recommended) rather than your main password.

## Frontend

You can host your frontend on Vercel, Firebase, Netlify, or any static host. Update your frontend's `BACKEND_URL` to point to your Vercel deployment, e.g. `https://your-app-name.vercel.app`.

## Testing

- Health check: `https://your-app-name.vercel.app/health`
- Send a test message from your frontend to `POST https://your-app-name.vercel.app/api/send-email` with JSON { name, email, message }

## Local Development

1. Copy `.env.example` (if you have one) or create a `.env` file with the environment variables above.
2. Install dependencies: `npm install`
3. Start locally: `npm start` (or `npm run dev` for nodemon)

## Troubleshooting

- If emails fail, verify `EMAIL_USER` and `EMAIL_PASS` and check the logs in Vercel.
- If CORS issues occur, update allowed origins in `server.js`.

## Environment Variables Reference

Same list as above.

---

This guide replaces previous Railway-specific instructions.