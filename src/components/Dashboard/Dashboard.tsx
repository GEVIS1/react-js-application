/**
 * Placeholder dashboard that simply fetches data and displays a MovieCard
 */

import { useEffect, useState } from 'react';

import MovieCard from '../MovieCard/MovieCard';
import axios, {
  IMovieDBResponse,
  IMovieDBResponseResult,
} from '../../utils/axios';
import endpoints from '../../utils/endpoints';

const Dashboard: React.FC = () => {
  // TODO: Write actual dashboard
  const [movies, setMovies] = useState<IMovieDBResponseResult[] | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const randomEndpoint = Math.floor(Math.random() * endpoints.length);
      const { data } = await axios.get<IMovieDBResponse>(
        endpoints[randomEndpoint].url
      );
      setMovies(data.results);
    };
    getMovies();
  }, []);

  if (!movies) return null;
  const randomMovie = Math.floor(Math.random() * movies.length);
  return <MovieCard movie={movies[randomMovie]} />;
};

export default Dashboard;
