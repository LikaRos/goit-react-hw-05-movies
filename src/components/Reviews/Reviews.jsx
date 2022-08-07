import styles from 'views/Views.module.css';
import { useState, useEffect } from 'react';
import { fetchReviewsMovies } from 'service/service';
import { useParams } from 'react-router-dom';
// import { useLocation, useNavigate, NavLink, Outlet } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviewsMovies(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {reviews.length ? (
        reviews.map(review => (
          <li key={review.id}>
            <h2>Content</h2>
            <p>{review.content}</p>
            <img
              src={
                review.avatar_path &&
                `https://www.themoviedb.org/review/${review.profile_path}`
              }
              alt={`${review.title} portrait`}
              className={styles.img}
            />{' '}
            <h3>{review.name}</h3>{' '}
          </li>
        ))
      ) : (
        <p>Reviews not found</p>
      )}
    </>
  );
};

export default Reviews;
