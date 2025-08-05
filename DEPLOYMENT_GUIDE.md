# Deployment Guide: Railway Backend + Firebase Frontend

## 🚀 Railway Backend Deployment

### Step 1: Deploy to Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Sign in with GitHub**
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select your backend repository**
5. **Wait for deployment to complete**

### Step 2: Configure Environment Variables

In Railway dashboard, add these environment variables:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-gmail@gmail.com
EMAIL_TO=where-to-receive-emails@gmail.com
FRONTEND_URL=https://your-firebase-app.web.app
AUTO_REPLY_SUBJECT=Thank you for contacting me
```

**Important Notes:**
- Use Gmail App Password, not your regular password
- To get Gmail App Password:
  1. Go to Google Account settings
  2. Security → 2-Step Verification → App passwords
  3. Generate a new app password for "Mail"

### Step 3: Get Your Railway URL

After deployment, Railway will provide a URL like:
`https://your-app-name.railway.app`

## 🔥 Firebase Frontend Deployment

### Step 1: Deploy Frontend to Firebase

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your frontend project:**
   ```bash
   firebase init hosting
   ```

4. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

### Step 2: Update Frontend Configuration

Replace the URLs in your frontend code:

```javascript
// Update these URLs in your frontend
const BACKEND_URL = 'https://your-app-name.railway.app';
const FRONTEND_URL = 'https://your-project.web.app';
```

## 🔗 Connecting Frontend to Backend

### Update CORS Configuration

Your backend already has CORS configured. Make sure to update the `FRONTEND_URL` environment variable in Railway with your actual Firebase URL.

### Frontend API Integration

Use this code in your frontend to connect to the Railway backend:

```javascript
// Contact form submission
const handleContactSubmit = async (formData) => {
  try {
    const response = await fetch('https://your-app-name.railway.app/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message. Please try again.');
  }
};
```

## ✅ Testing Your Deployment

### 1. Test Backend Health
Visit: `https://your-app-name.railway.app/health`

Should return:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production"
}
```

### 2. Test Email Functionality
Use your contact form on the Firebase frontend to send a test email.

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Make sure `FRONTEND_URL` is set correctly in Railway
   - Check that your Firebase URL is correct

2. **Email Not Sending:**
   - Verify Gmail app password is correct
   - Check Railway logs for errors
   - Ensure all environment variables are set

3. **Railway Deployment Fails:**
   - Check that `package.json` has correct start script
   - Verify all dependencies are listed
   - Check Railway logs for build errors

### Railway Logs
View logs in Railway dashboard to debug issues.

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Gmail address | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail app password | `abcd efgh ijkl mnop` |
| `EMAIL_FROM` | From email address | `your-email@gmail.com` |
| `EMAIL_TO` | Where to receive emails | `contact@yourdomain.com` |
| `FRONTEND_URL` | Firebase frontend URL | `https://your-app.web.app` |
| `AUTO_REPLY_SUBJECT` | Auto-reply subject | `Thank you for contacting me` |

## 🎉 Success!

Once everything is configured:
1. Your backend will be running on Railway
2. Your frontend will be hosted on Firebase
3. Contact forms will send emails through your Railway backend
4. Users will receive auto-reply emails
5. You'll receive notification emails for each contact form submission 