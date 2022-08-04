import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Movies
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/movies/:movieId" className={styles.link}>
          MovieDetails
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/:movieId/cast"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/:movieId/reviews"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Reviews
        </NavLink>
      </li> */}
    </ul>
  </nav>
);

export default Navigation;
