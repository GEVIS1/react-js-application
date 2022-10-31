import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

type MovieDBLanguages = 'en' | 'ja' | 'zh' | 'es' | 'fr';

/**
 * An assumed safe interface constructed from running the scripts in the test/ directory..
 *
 * Use sampledata.ts to get a sample set, and then parse.ts to get a quick overview of the data.
 */
export interface IMovieDBResponseResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: MovieDBLanguages;
  original_name: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  media_type?: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDBResponse {
  page: number;
  results: IMovieDBResponseResult[];
  total_pages: number;
  total_results: number;
}

export default instance;
