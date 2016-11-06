import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <div className="comment-input-panel">
          <CommentInput />
        </div>
        <div className="comment-list-wrapper">
          <div className="comments-quantity">
            {this.props.allComments.length} Comments
          </div>
          <div>
            <CommentList comments={this.props.parentComments} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parentComments: state.comments.filter(comment => comment.parentComment === null),
    allComments: state.comments
   }
};

export default connect(mapStateToProps)(App);
