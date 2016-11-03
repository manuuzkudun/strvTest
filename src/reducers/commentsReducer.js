import { ADD_COMMENT } from '../actions';

const initialComments = [
  {
    id: 1,
    content: 'Comment 1',
    userId: 1,
    userName: 'Jon Doe'
  },
  {
    id: 2,
    content: 'Comment 2',
    userId: 2,
    userName: 'Alice Foo'
  }
];

const INITIAL_STATE = initialComments;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};
