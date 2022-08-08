import { Link } from 'react-router-dom';
import styles from 'views/Views.module.css';

export default function NotFound() {
  return (
    <div className={styles.menu}>
      <p className={styles.text}>
        Page now found go to the{' '}
        <Link to="/goit-react-hw-05-movies">Open home page</Link>
      </p>
    </div>
  );
}
