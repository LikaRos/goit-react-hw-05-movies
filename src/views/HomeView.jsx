import { useNavigate, useLocation } from 'react-router-dom';

export const HomeView = () => {
  const location = useLocation();

  const navigate = useNavigate();
  return <h1> welcome to MOVIES</h1>;
};

export default HomeView;
