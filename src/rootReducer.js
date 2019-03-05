import { VOTE_UP, VOTE_DOWN, GET_NEW } from './actionTypes';

function rootReducer(state = { nextPage: 0, jokes: [] }, action) {
  switch (action.type) {
    case GET_NEW:
      return {
        nextPage: action.page,
        jokes: [...state.jokes, ...action.jokes]
      };
    case VOTE_UP:
      //action.id
      return {
        jokes: state.jokes.map(joke => {
          return joke.id === action.id
            ? { ...joke, votes: joke.votes + 1 }
            : joke;
        })
      };
    case VOTE_DOWN:
      //action.id
      return {
        jokes: state.jokes.map(joke => {
          return joke.id === action.id
            ? { ...joke, votes: joke.votes - 1 }
            : joke;
        })
      };

    default:
      return state;
  }
}

export default rootReducer;
