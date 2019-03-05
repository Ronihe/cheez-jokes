import { VOTE_UP, VOTE_DOWN, GET_NEW } from './actionTypes';

function rootReducer(state = [], action) {
  switch (action.type) {
    case GET_NEW:
      console.log('ACTION', action);
      return [...state, ...action.jokes];
    default:
      return state;
  }
}

export default rootReducer;
