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
      <div className="row comment-input-wrapper">
        <div className="col-sm-2">
          <img src={this.props.currentUser.userPictureUrl}
          className="img-circle comment-input-image" />
        </div>
        <div className="col-sm-9">
          <form className="comment-input-form">
            <div className="input-group">
              <input
                type="text"
                ref={(input) => this.textInput = input}
                className="form-control"
                placeholder="Write your comment here..."
                value={this.state.commentText}
                onChange={this.handleChange}
                aria-describedby="basic-addon2" />
              <span className="input-group-addon" id="basic-addon2">
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </span>
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
