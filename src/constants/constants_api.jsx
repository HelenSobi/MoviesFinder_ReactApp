const API_KEY = import.meta.env.VITE_API_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${API_KEY}`,
    }
  };

export const MOVIE_TRAILER = "https://api.themoviedb.org/3/movie/";

export const MOVIE_INFO = "https://api.themoviedb.org/3/movie/";

export const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";

export const SEARCH_END_URL = "&include_adult=false&language=en-US&page=1";

