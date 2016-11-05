import React, { Component } from 'react';
import CommentInput from './CommentInput';
import { connect } from 'react-redux';
import { showAnswerInput } from '../actions';


class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.showAnswerInput(this.props.id);
  }

  render() {
    return(
      <div className="comment">
        <div className="comment-heading clearfix">
          <div className="pull-left comment-user-image">
            <img className="img-circle" src="http://placehold.it/50x50" />
          </div>
          <div className="pull-left comment-meta">
            <div>{this.props.userName}</div>
            <div>4 Days ago</div>
          </div>
          <div onClick={this.handleClick} className="pull-right">
            <i className="fa fa-reply" aria-hidden="true"></i>
          </div>
        </div>
        <div className="comment-content">
          {this.props.content}
        </div>
        {this.props.answerComment === this.props.id ? <CommentInput /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answerComment: state.answerComment
  }
};

export default connect(mapStateToProps, { showAnswerInput })(Comment);
