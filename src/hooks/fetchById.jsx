import { moviesById } from 'service/service';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const useFetchById = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesById(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);
  return movie;
};
