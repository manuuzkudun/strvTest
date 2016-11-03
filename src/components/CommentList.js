import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    return(
      <div>
        <div>
          Comments List
        </div>
        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>

    );
  }
}

export default CommentList;
