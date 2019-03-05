import axios from 'axios';

import { GET_NEW } from './actionTypes';

const BASE_URL = 'https://icanhazdadjoke.com/search';
const LIMIT = 20;

export function getNewJokes(page = 1) {
  return async function(dispatch) {
    //https://icanhazdadjoke.com/search?limit=20&page=2
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=${LIMIT}&page=${page}`,
        { headers: { Accept: 'application/json' } }
      );
      console.log('RESPONSE', response.results);
      return dispatch(getJokes(response.data.results));
    } catch {
      console.log('error');
    }
  };
}

function getJokes(jokes) {
  return {
    type: GET_NEW,
    jokes
  };
}
