import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './MoviesGallery.module.css';

export const MoviesGallery = ({ movies }) => {
  return (
    <>
      <ul className={styles.list}>
        {movies === null ? (
          <p>Movie is not found</p>
        ) : (
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
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
