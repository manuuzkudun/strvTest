import { ADD_COMMENT } from '../actions';

const INITIAL_STATE = {comments: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return state;
    default:
      return state;
  }
};
