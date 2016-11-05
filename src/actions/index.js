export const ADD_COMMENT = 'ADD_COMMENT';
export const SHOW_ANSWER_INPUT = 'SHOW_ANSWER_INPUT';

export function addComment(commentData) {
  const { content, userId, userName } = commentData;
  return {
    type: ADD_COMMENT,
    payload: {
      content,
      userId,
      userName
    }
  };
}

export function showAnswerInput(id) {
  return {
    type: SHOW_ANSWER_INPUT,
    payload: id
  };
}
