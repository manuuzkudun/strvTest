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
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({commentText: event.target.value});
    this.inputIcon['className'] = "fa fa-caret-right";
  }

  validateSubmit() {
    return (this.state.commentText != '');
  }

  handleSubmit(event) {
    event.preventDefault();
    if ( this.validateSubmit() ) {
      this.props.addComment({
        content: this.state.commentText,
        user: this.props.currentUser,
        parentComment: typeof(this.props.parentComment) === 'number' ? this.props.parentComment: null
      });
      this.props.showAnswerInput(null);
      this.setState({ commentText: '' });
      this.textInput['placeholder'] = 'Write your comment here...';
      this.textInput['className'] = "form-control"
    } else {
      this.textInput['placeholder'] = 'Please, write your comment here';
      this.textInput['className'] = "form-control input-error"
      this.inputIcon['className'] = "fa fa-exclamation-triangle error-icon";
      this.textInput.focus();
    }
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return(
      <div className="comment-input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-2 comment-input-image">
              <img src={this.props.currentUser.userPictureUrl}
              className="img-circle" />
            </div>
            <div className="col-sm-8 comment-input-form">
              <input
                type="text"
                ref={(input) => this.textInput = input}
                className="form-control"
                placeholder="Write your comment here..."
                value={this.state.commentText}
                onChange={this.handleChange}
                aria-describedby="basic-addon2" />
            </div>
            <div
              className="col-sm-2 comment-send-icon"
              onClick={this.handleSubmit}>
              <i
                className="fa fa-caret-right"
                aria-hidden="true"
                ref={(input) => this.inputIcon = input} >
              </i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { addComment, showAnswerInput })(CommentInput);
