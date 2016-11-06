import React, { Component } from 'react';
import CommentInput from './CommentInput';
import { connect } from 'react-redux';
import { showAnswerInput } from '../actions';
import CommentList from './CommentList';
import moment from 'moment';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderReplyButton = this.renderReplyButton.bind(this);
  }

  handleClick(event) {
    this.props.showAnswerInput(this.props.id);
  }

  renderReplyButton() {
    if ( this.props.parentComment === null ) {
      return (
        <div onClick={this.handleClick} className="pull-right">
          <i className="fa fa-reply" aria-hidden="true"></i>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const comments = this.props.comments
      .filter(comment => comment.parentComment === this.props.id);
    const style = typeof(this.props.parentComment) === 'number' ? {marginLeft: '40px'} : null;
    return(
      <div>
        <div className="comment" style={style}>
          <div className="comment-heading clearfix">
            <div className="pull-left comment-user-image">
              <img className="img-circle" src={this.props.user.userPictureUrl} />
            </div>
            <div className="pull-left comment-meta">
              <div className="comment-meta-username">{this.props.user.userName}</div>
              <div className="comment-meta-date">{ moment(this.props.date).fromNow() }</div>
            </div>
              { this.renderReplyButton() }
          </div>
          <div className="comment-content">
            {this.props.content}
          </div>
          {this.props.answerComment === this.props.id ? <CommentInput parentComment={this.props.id}/> : null}
        </div>
        <CommentList comments={comments} />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    answerComment: state.answerComment,
    comments: state.comments
  }
};

export default connect(mapStateToProps, { showAnswerInput })(Comment);
