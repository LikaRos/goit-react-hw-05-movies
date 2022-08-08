import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import NotFound from 'views/NotFound';
// import { HomeView } from 'views/HomeView';
// import MoviesView from 'views/MoviesView';
// import { DetailsView } from 'views/DetailsView';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

// const createAsyncComponent = path => lazy(() => import(path));
const HomeView = lazy(() => import('../views/HomeView'));
const MoviesView = lazy(() => import('../views/MoviesView'));
const DetailsView = lazy(() => import('../views/DetailsView'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/goit-react-hw-05-movies/movies"
          element={<MoviesView />}
        />
        <Route
          path="/goit-react-hw-05-movies/movies/:movieId"
          element={<DetailsView />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
