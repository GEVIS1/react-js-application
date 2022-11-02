/**
 * The Dashboard fetches the movie data for the selected category and displays it in a grid.
 * The category is state sent down from the App component as a prop.
 */

import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import MovieCard from '../MovieCard/MovieCard';
import axios, {
  IMovieDBResponse,
  IMovieDBResponseResult,
} from '../../utils/axios';
import endpoints, { Category } from '../../utils/endpoints';

interface IDashboardProps {
  category: Category;
}

const Dashboard: React.FC<IDashboardProps> = ({ category }) => {
  const [movies, setMovies] = useState<IMovieDBResponseResult[] | null>(null);

  useEffect(() => {
    const categories = endpoints.map((e) => e.type);

    const endpointIndex = categories.indexOf(category);

    const getMovies = async () => {
      const { data } = await axios.get<IMovieDBResponse>(
        endpoints[endpointIndex].url
      );
      setMovies(data.results);
    };
    getMovies();
  }, [category]);

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
