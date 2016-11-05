import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import answerCommentReducer from './answerCommentReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  answerComment: answerCommentReducer
});

export default rootReducer;
