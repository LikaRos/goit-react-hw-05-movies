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

export const searchMovies = async query => {
  return axios.get(`/search/movie?api_key=${API_KEY}`, {
    params: {
      query: query,
      per_page: 20,
    },
  });
};
export const fetchCastMovies = async id => {
  const responseCast = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}`
  );

  return responseCast.data.cast;
};
export const fetchReviewsMovies = async id => {
  const responseReviews = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return responseReviews.data.results;
};
