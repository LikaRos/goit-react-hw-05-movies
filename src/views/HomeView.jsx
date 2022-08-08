import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'service/service';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};
export const HomeView = () => {
  const [status, setStatus] = useState(STATUS.Idle);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(() => {
        setStatus(STATUS.Error);
      });
  }, []);
  if (status) {
    return (
      <>
        <h1> welcome to MOVIES</h1>;
        <MoviesGallery movies={movies} />
      </>
    );
  }
};

export default HomeView;
