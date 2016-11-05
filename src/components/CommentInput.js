import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, showAnswerInput } from '../actions';

class CommentInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({commentText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const parentComment = typeof(this.props.parentComment) === 'number' ? this.props.parentComment: null;
    const commentData = {
      content: this.state.commentText,
      userName: 'Manu Uzkudun',
      userId: 3,
      parentComment
    }
    this.props.addComment(commentData);
    this.props.showAnswerInput(null);
    this.setState({ commentText: '' });
  }

  render() {
    return(
      <div className="clearfix">
        <div className="pull-left comment-input-image">
          <img src="http://placehold.it/60x60" className="img-circle" />
        </div>
        <div className="pull-left comment-input-form">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a comment"
              value={this.state.commentText}
              onChange={this.handleChange}
            />
              <span><i className="fa fa-caret-right" aria-hidden="true"></i></span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


  <span class="input-group-addon" id="basic-addon2">@example.com</span>


export default connect(null, { addComment, showAnswerInput })(CommentInput);
