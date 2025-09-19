// Frontend Configuration for Backend deployed on Vercel
// Replace these URLs with your actual deployment URLs

const config = {
  // Vercel backend URL (replace with your actual Vercel URL)
  BACKEND_URL: 'https://your-app-name.vercel.app',
  
  // Frontend URL (replace with your actual frontend URL)
  FRONTEND_URL: 'https://your-frontend.vercel.app',
  
  // API endpoints
  API_ENDPOINTS: {
    SEND_EMAIL: '/api/send-email',
    HEALTH_CHECK: '/health'
  }
};

// Example usage in your frontend (same as before):
// fetch(`${config.BACKEND_URL}${config.API_ENDPOINTS.SEND_EMAIL}`)

export default config;