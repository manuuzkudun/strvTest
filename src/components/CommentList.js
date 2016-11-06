import React, { Component } from 'react';
import Comment from './Comment';

const CommentList = (props) => (
  <div>
    <div>
      { props.comments.map(comment =>
        <Comment
          key={comment.id}
          id={comment.id}
          userName={comment.userName}
          content={comment.content}
          date={comment.date}
          parentComment={comment.parentComment}
          userPictureUrl={comment.userPictureUrl}
        />
      )}
    </div>
  </div>
)

export default CommentList;
