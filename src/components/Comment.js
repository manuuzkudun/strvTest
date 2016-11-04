import React from 'react';

const loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Comment = (props) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <div>
        <img src="http://placehold.it/60x60" />
      </div>
      <div>
        {props.userName}
      </div>
    </div>
    <div className="panel-body">
      {props.content}
    </div>
  </div>
)

export default Comment;
