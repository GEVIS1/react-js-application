import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export interface IMovieDBResponseResults {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string; // TODO: string literal?
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string; // TODO: string literal?
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[]; // TODO: string literal?
}

export interface IMovieDBResponse {
  page: number;
  results: IMovieDBResponseResults[];
  total_pages: number;
  total_results: number;
}

export default instance;
