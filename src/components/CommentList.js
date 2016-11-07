import React, { Component } from 'react';
import Comment from './Comment';

const CommentList = (props) => (
  <div className={props.commentAnswers ? "comment-answers" : ""}>
    { props.comments.map(comment =>
      <Comment
        key={comment.id}
        id={comment.id}
        content={comment.content}
        date={comment.date}
        parentComment={comment.parentComment}
        user={comment.user}
      />
    )}
  </div>
)

export default CommentList;
