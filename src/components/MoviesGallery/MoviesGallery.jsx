import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import MoviesView from 'views/MoviesView';
import styles from './MoviesGallery.module.css';

export const MoviesGallery = ({ movies, fetchMovies }) => {
  const location = useLocation();
  return (
    <>
      {' '}
      <ul>
        {movies &&
          movies.result.map(movie => (
            <li
              key={movie.id}
              className={styles.item}
              onClick={() => fetchMovies(movie.id)}
            >
              <Link to={movie.id}>{movie.name}</Link>
              {/* <Link
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              className={styles.link}
            >
              <p className={styles.name}>
                {movie.title || movie.name || movie.original_title}
              </p>
              <img
                width="400"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : `https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg`
                }
                alt={movie.title}
                className={styles.img_gallary}
              />
            </Link> */}
            </li>
          ))}
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
