/**
 * A quick download script to confirm expectations about the shape of the data.
 */

import axios from 'axios';
import fs from 'fs/promises';
import { IMovieDBResponse, IMovieDBResponseResult } from '../axios';

(async () => {
  const data: IMovieDBResponseResult[] = [];
  const url =
    'https://api.themoviedb.org/3/discover/movie?api_key=44a956178dd73105f015fb8978c09a47';
  let i = 2;

  try {
    const firstRequest = await axios.get<IMovieDBResponse>(url);

    data.push(...firstRequest.data.results);

    for (; i < firstRequest.data.total_pages; i++) {
      const { results } = await (await axios.get<IMovieDBResponse>(url)).data;
      data.push(...results);

      // eslint-disable-next-line no-console
      if (i % 100 === 0) console.log(i);
    }

    await fs.writeFile('./output.json', JSON.stringify(data));
  } catch (error) {
    await fs.writeFile('./output.json', JSON.stringify(data));
    // eslint-disable-next-line no-console
    console.log(i);
    // eslint-disable-next-line no-console
    console.error('Crashed.');
  }
})();
