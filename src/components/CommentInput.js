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
    } else {
      this.textInput['placeholder'] = 'Ooh man! Just write your comment here';
    }
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return(
      <div className="clearfix">
        <div className="pull-left comment-input-image">
          <img src={this.props.currentUser.userPictureUrl} className="img-circle" />
        </div>
        <div className="pull-left comment-input-form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                ref={(input) => this.textInput = input}
                type="text"
                placeholder="Write your comment here..."
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { addComment, showAnswerInput })(CommentInput);
