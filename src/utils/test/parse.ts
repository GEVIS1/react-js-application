import fs from 'fs/promises';
import { IMovieDBResponseResult } from '../axios';

(async () => {
  try {
    const rawData = await fs.readFile('./output.json', { encoding: 'utf8' });

    if (!rawData) {
      throw Error('File data is empty.');
    }
    const data: IMovieDBResponseResult[] = JSON.parse(rawData);

    type NumKeys = {
      [index: string]: number;
    };
    type KeyValue = {
      [index: string]: unknown;
    };

    const numKeys: NumKeys = {};
    const keyValue: KeyValue = {};

    /**
     * Iterate the data to find the biggest object to use for shaping keyValue's sets
     */
    let biggestSample = {};
    data.forEach((v) => {
      if (Object.keys(v).length > Object.keys(biggestSample).length) {
        biggestSample = v;
      }
    });

    /**
     * Construct the sets
     */
    Object.entries(biggestSample).forEach(([k]) => {
      keyValue[k] = new Set();
    });

    data.forEach((movie) => {
      Object.entries(movie).forEach(([k, v]) => {
        if (!(keyValue[k] instanceof Set)) {
          throw Error('Found key for which there is no set!');
        }

        /**
         * If v is an array, insert each value separately
         */
        if (v instanceof Array) {
          /* eslint-disable no-extra-parens */
          v.forEach((w) => (keyValue[k] as Set<unknown>).add(w));
        } else {
          (keyValue[k] as Set<unknown>).add(v);
          /* eslint-enable no-extra-parens */
        }

        if (numKeys[k] === undefined) {
          numKeys[k] = 1;
          return;
        }
        numKeys[k]++;
        return;
      });
    });

    // Trim huge sets
    const keyValueTable: KeyValue = {};
    Object.entries(keyValue).forEach(([k, v]) => {
      if (v instanceof Set && v.size > 15) {
        keyValueTable[k] = 'Sample size too big/Undefined';
      } else {
        keyValueTable[k] = Array.from(v as Set<unknown>);
      }
    });

    /* eslint-disable no-console */
    console.log('Finished successfully:');
    console.table(numKeys);
    console.table(keyValueTable);
  } catch (error) {
    console.log('Something went wrong.');
    if (error instanceof Error) {
      console.log(error.message);
      console.table(error);
    }
    /* eslint-enable no-console */
  }
})();
