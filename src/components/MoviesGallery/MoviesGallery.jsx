import { Link, useLocation, useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './MoviesGallery.module.css';

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');
  return (
    <>
      <ul className={styles.list}>
        {movies.length === 0 && query ? (
          <p>Movie is not found</p>
        ) : (
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
