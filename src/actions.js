import axios from 'axios';

import { GET_NEW, VOTE_UP, VOTE_DOWN } from './actionTypes';

const BASE_URL = 'https://icanhazdadjoke.com/search';
const LIMIT = 20;

export function getNewJokes(page = 1) {
  return async function(dispatch) {
    //https://icanhazdadjoke.com/search?limit=20&page=2

    console.log('in actions', page);
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=${LIMIT}&page=${page}`,
        { headers: { Accept: 'application/json' } }
      );
      const jokesWithVotes = response.data.results.map(joke => ({
        ...joke,
        votes: 0
      }));
      page++;
      console.log(page, jokesWithVotes);
      return dispatch(getJokes(jokesWithVotes, page));
    } catch {
      console.log('error');
    }
  };
}

function getJokes(jokes, page) {
  return {
    type: GET_NEW,
    jokes,
    page
  };
}
export function voteUp(id) {
  return { type: VOTE_UP, id: id };
}

export function voteDown(id) {
  return { type: VOTE_DOWN, id: id };
}
