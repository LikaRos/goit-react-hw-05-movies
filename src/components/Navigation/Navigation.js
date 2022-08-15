import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <ul >
        <li>
          <NavLink
            to="/goit-react-hw-05-movies"
            state={location}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/goit-react-hw-05-movies/movies"
            state={location}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
