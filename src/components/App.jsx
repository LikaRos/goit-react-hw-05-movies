// import { service } from 'service/service';
import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router';
import { HomeView } from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import { DetailsView } from 'views/DetailsView';

// import { Cast } from 'views/Cast';
// import { Review } from 'views/Review';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MoviesView />} />
        <Route path="movies/:movieId" element={<DetailsView />}>
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="review" element={<Review />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
