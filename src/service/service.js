import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const API_KEY = '3b3b2a52a8d81c1bd80a2943e9f5b0db';

export const moviesById = async id => {
  const responseById = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

  return responseById.data;
};

export const fetchMovies = (page = 1) => {
  return axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);
};

export const searchMovies = async (query, page = 1) => {
  return axios.get(`/search/movie?api_key=${API_KEY}>&page=${page}`, {
    params: {
      query: query,
      page: 1,
      per_page: 20,
    },
  });
};
