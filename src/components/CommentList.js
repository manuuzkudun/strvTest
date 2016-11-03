import React, { Component } from 'react';
import Comment from './Comment';

const CommentList = (props) => (
  <div>
    { props.comments.map(comment =>
      <Comment
        key={comment.id}
        userName={comment.userName}
        content={comment.content}
      />
    )}
  </div>
)

export default CommentList;
