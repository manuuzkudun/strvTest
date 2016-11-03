import React from 'react';

const loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Comment = (props) => (
  <div className="comment">
    <div className="comment-heading">
      <div>
        <img src="http://placehold.it/60x60" className="img-circle" />
      </div>
      <div>
        {props.userName}
      </div>
    </div>
    <div className="comment-content">
      {props.content}
    </div>
  </div>
)

export default Comment;
