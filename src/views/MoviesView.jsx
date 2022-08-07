import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/service';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { SearchForm } from 'components/SearchForm/SearchForm';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

export default function MoviesView() {
  const [status, setStatus] = useState(STATUS.Idle);
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = query => {
    setSearchParams({ query });
    return;
  };

  const query = searchParams.get('query');

  useEffect(() => {
    console.log(query);
    if (query) {
      searchMovies(query)
        .then(({ data }) => setMovies(data.results))
        .catch(() => {
          setStatus(STATUS.Error);
        });
    }
  }, [query]);
  console.log(movies);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesGallery movies={movies} />
    </>
  );
}
