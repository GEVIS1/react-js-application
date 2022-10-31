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
import Grid from '@mui/material/Unstable_Grid2';

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
  return (
    <Grid
      sx={{
        padding: '0 10vw 0 10vw',
      }}
      container
      spacing={2}
      disableEqualOverflow
      columns={16}
      alignSelf="center"
    >
      {movies.map((m) =>
        <Grid key={m.id} xs={8} display="flex" justifyContent="center">
          <MovieCard movie={m} />
        </Grid>
      )}
    </Grid>
  );
};

export default Dashboard;
