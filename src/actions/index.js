export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(commentData) {
  const { content, userId, userName } = commentData;
  return {
    type: ADD_COMMENT,
    payload: {
      content,
      userId,
      userName
    }
  }
}
