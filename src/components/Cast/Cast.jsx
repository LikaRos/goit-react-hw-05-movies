import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import { fetchCastMovies } from 'service/service';
import { Link, useParams } from 'react-router-dom';
// import { useLocation, useNavigate, NavLink, Outlet } from 'react-router-dom';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCastMovies(movieId).then(setActors);
  }, [movieId]);
  console.log(actors);

  return (
    <>
      {actors.length ? (
        actors.map(actor => (
          <li className={styles.item} key={actor.id}>
            <Link to={`cast`}>{actor.name}</Link>
            <img
              src={
                actor.profile_path &&
                `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              }
              alt={`${actor.title} portrait`}
              className={styles.img}
            />{' '}
            <h3>{actor.name}</h3>{' '}
          </li>
        ))
      ) : (
        <p className={styles.text}>Actor is not found</p>
      )}
    </>
  );
};

export default Cast;
