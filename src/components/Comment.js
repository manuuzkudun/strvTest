import React from 'react';
import CommentInput from './CommentInput';

const loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Comment = (props) => (
  <div className="comment">
    <div className="comment-heading clearfix">
      <div className="pull-left comment-user-image">
        <img className="img-circle" src="http://placehold.it/50x50" />
      </div>
      <div className="pull-left comment-meta">
        <div>{props.userName}</div>
        <div>4 Days ago</div>
      </div>
      <div className="pull-right">
        <i className="fa fa-reply" aria-hidden="true"></i>
      </div>
    </div>
    <div className="comment-content">
      {props.content}
    </div>
  </div>
)

export default Comment;
