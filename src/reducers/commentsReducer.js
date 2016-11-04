import { ADD_COMMENT } from '../actions';
import { initialComments } from '../initialComments';

const INITIAL_STATE = initialComments;

const generateId = (state) => {
  return state.length;
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_COMMENT:
      const newComment = { ...action.payload, id: generateId(state)}
      return [ ...state, newComment ];
    default:
      return state;
  }
};
