/**
 * The MovieCard component draws a specific movie's poster, title, summary and displays its votes, media and release date when hovered.
 * It also has a clickable button when hovered next to votes where you can apply your own vote. You can also remove your own vote.
 */

import { ThumbUp } from '@mui/icons-material';
import { forwardRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import TextTruncate from 'react-text-truncate';

import { IMovieDBResponseResult } from '../../utils/axios';

const useStyles = createUseStyles({
  card: {
    color: '#ffffff',
    width: 500,
    height: 400,
    padding: 20,
    transition: 'transform 100ms',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '&:hover > span': {
      display: 'inline',
    },
    '& > img': {
      height: 300,
      objectFit: 'contain',
      width: 500,
    },
    '& > h2': {
      paddingTop: 10,
    },
  },
  stats: {
    display: 'none',
  },
  mediaType: {
    textTransform: 'capitalize',
  },
});

const MovieCard = forwardRef<HTMLDivElement, { movie: IMovieDBResponseResult }>(
  ({ movie }, ref) => {
    const classes = useStyles();
    const BASE_URL = 'https://image.tmdb.org/t/p/original';
    const originalVotes = movie.vote_count;

    const [votes, setVotes] = useState(movie.vote_count);

    const toggleVote = () => {
      if (votes === movie.vote_count) {
        setVotes((v) => v + 1);
      } else {
        setVotes(originalVotes);
      }
    };

    const iconColor = votes > originalVotes ? 'success' : undefined;

    return (
      <div ref={ref} className={classes.card}>
        <img
          src={`${BASE_URL}/${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
        />

        {/*
        Declare the TextTruncate component from the react-text-truncate dependency. This components has four props that you need to use:
          - line: The number of lines to truncate the text to
          - element: The element to wrap the text in
          - truncateText: The text to append to the end of the truncated text
          - text: The text to truncate
        */}
        <TextTruncate
          line={2}
          element="p"
          truncateText="…"
          text={movie.overview}
        />

        <h2>{movie.title || movie.original_name}</h2>

        {/*
        Declare a span element with the className value - classes.stats. This element will contain the movie's media type,
        release date or first air date and vote count.
        */}
        <span className={classes.stats}>
          {movie.media_type ?
            <span
              className={classes.mediaType}
            >{`Media Type: ${movie.media_type}`}</span>
           : null}{' '}
          {movie.release_date
            ? `Release Date: ${movie.release_date}`
            : movie.first_air_date
            ? `First Air Date: ${movie.first_air_date}`
            : null}{' '}
          <ThumbUp
            color={iconColor}
            onClick={() => toggleVote()}
            sx={{ fontSize: 'small' }}
          />{' '}
          {votes}
        </span>
      </div>
    );
  }
);

export default MovieCard;
