import React from 'react';

const loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Comment = () => (
  <div className="comment">
    <div className="comment-heading">
      <div>
        <img src="http://placehold.it/60x60" className="img-circle" />
      </div>
      <div>
        Info
      </div>
    </div>
    <div className="comment-content">
      {loreIpsum}
    </div>
  </div>
)

export default Comment;
