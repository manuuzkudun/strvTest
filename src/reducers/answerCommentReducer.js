import { SHOW_ANSWER_INPUT } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case SHOW_ANSWER_INPUT:
      return action.payload;
    default:
      return state;
  }
};
