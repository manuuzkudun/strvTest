import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <div className="panel">
          <CommentInput />
        </div>
        <div>
          {this.props.allComments.length} comments
        </div>
        <CommentList comments={this.props.parentComments}/>
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
