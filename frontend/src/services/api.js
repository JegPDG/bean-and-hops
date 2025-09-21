import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired, clear storage and redirect to login
      const authHeader = error.config.headers.Authorization;
      if (authHeader) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  googleAuth: (credential) => 
    api.post('/auth/google/', { credential }),
  
  logout: (refreshToken) => 
    api.post('/auth/logout/', { refresh_token: refreshToken }),
  
  getProfile: () => 
    api.get('/auth/profile/'),
};

// Reviews API calls
export const reviewsAPI = {
  getReviews: (menuItemId) => {
    const params = menuItemId ? { menu_item: menuItemId } : {};
    return api.get('/reviews/', { params });
  },
  
  createReview: (reviewData) => 
    api.post('/reviews/', reviewData),
  
  toggleLike: (reviewId) => 
    api.post(`/reviews/${reviewId}/like/`),
  
  addReply: (reviewId, content) => 
    api.post(`/reviews/${reviewId}/reply/`, { content }),
};

// Menu API calls
export const menuAPI = {
  getMenuItems: () => 
    api.get('/menuitem/'),
};

export default api;