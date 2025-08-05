// Frontend Configuration for Railway Backend
// Replace these URLs with your actual deployment URLs

const config = {
  // Railway backend URL (replace with your actual Railway URL)
  BACKEND_URL: 'https://your-app-name.railway.app',
  
  // Firebase frontend URL (replace with your actual Firebase URL)
  FRONTEND_URL: 'https://your-project.firebaseapp.com',
  
  // API endpoints
  API_ENDPOINTS: {
    SEND_EMAIL: '/api/send-email',
    HEALTH_CHECK: '/health'
  }
};

// Example usage in your frontend:
/*
// Send email from contact form
const sendEmail = async (formData) => {
  try {
    const response = await fetch(`${config.BACKEND_URL}${config.API_ENDPOINTS.SEND_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Health check
const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${config.BACKEND_URL}${config.API_ENDPOINTS.HEALTH_CHECK}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Backend health check failed:', error);
    throw error;
  }
};
*/

export default config; 