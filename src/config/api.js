// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  API_KEY: import.meta.env.VITE_TMDB_API_KEY,
  LANGUAGE: import.meta.env.VITE_TMDB_LANGUAGE || 'tr-TR',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/original'
};

// API Endpoints
export const ENDPOINTS = {
  SEARCH_MOVIE: '/search/movie',
  TOP_RATED: '/movie/top_rated',
  POPULAR: '/movie/popular',
  MOVIE_DETAILS: '/movie'
};

// Helper function to build API URLs
export const buildApiUrl = (endpoint, params = {}) => {
  const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);
  
  // Add API key
  url.searchParams.append('api_key', API_CONFIG.API_KEY);
  
  // Add language
  url.searchParams.append('language', API_CONFIG.LANGUAGE);
  
  // Add other parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.append(key, value);
    }
  });
  
  return url.toString();
};
