import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import answerCommentReducer from './answerCommentReducer';
import currentUserReducer from './currentUserReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  answerComment: answerCommentReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
