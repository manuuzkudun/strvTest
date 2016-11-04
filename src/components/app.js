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
        <CommentList comments={this.props.comments}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
};

export default connect(mapStateToProps)(App);
