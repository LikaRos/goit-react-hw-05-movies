import { useState } from 'react';
import styles from './SearchForm.module.css';

import PropTypes from 'prop-types';

export function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return;
    } else {
      onSubmit(query);
    }
    setQuery('');
  };
  return (
    <>
      <header className="searchbar">
        <form onSubmit={handleSubmit} className={styles.form}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className={styles.input}
            value={query}
            type="text"
            placeholder="Search movies"
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
