import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'service/service';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
// import styles from './Views.module.css';

import { Outlet } from 'react-router';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  //   useEffect(() => {
  //     if (moviesList.length === 0) fetchMovies().then(setMoviesList);
  //   }, [moviesList]);

  useEffect(() => {
    //  if (moviesList.length === 0)
    fetchMovies().then(({ data }) => setMovies(data));
  }, []);

  return (
    <>
      <ul>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
            </li>
          ))}
      </ul>
      ;
      {/* <MoviesGallery movies={movies} />
      <Outlet /> */}
    </>
  );
}

// useEffect(() => {
//   fetchMovies().then(({ data }) => setMovies(data));
// }, []);

// <ul>
//   {movies &&
//     movies.results.map(movie => (
//       <li key={movie.id}>
//         <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
//       </li>
//     ))}
// </ul>;
