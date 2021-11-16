export const FILTER_DATA = ['all', 'documentary', 'comedy', 'horror', 'crime'];
export const SELECTION_DATA = ['release date', 'rating', 'genre'];
export const SELECT_OPTIONS = [
  'Crime',
  'Drama',
  'Horror',
  'Comedy',
  'Action',
  'Fantasy',
  'Romance',
  'Adventure',
  'Documentary',
  'Science Fiction',
];

export const API_BASE = 'http://localhost:4000/movies';
export const API_PAGE = `${API_BASE}?offset=`;
export const API_FILTER = `${API_BASE}?filter=`;
export const API_SORT_BY = `${API_BASE}?sortBy=`;
export const API_SEARCH = `${API_BASE}?search=`;
export const API_DELETE = `${API_BASE}/`;
