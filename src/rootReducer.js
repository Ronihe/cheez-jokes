import { VOTE_UP, VOTE_DOWN, GET_NEW } from './actionTypes';

function rootReducer(state = { nextPage: 0, jokes: [] }, action) {
  switch (action.type) {
    case GET_NEW:
      console.log('ACTION', action);
      return {
        nextPage: action.page,
        jokes: [...state.jokes, ...action.jokes]
      };
    default:
      return state;
  }
}

export default rootReducer;
