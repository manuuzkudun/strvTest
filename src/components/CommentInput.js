import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, showAnswerInput } from '../actions';

class CommentInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentText: ''
    }
    //TODO: Move it to the redux state
    this.currentUser = {
      userName: 'John Doe',
      userId: 3,
      userPictureUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({commentText: event.target.value});
  }

  handleSubmit(event) {
    const { userId, userName, userPictureUrl } = this.currentUser;
    event.preventDefault();
    const parentComment = typeof(this.props.parentComment) === 'number' ? this.props.parentComment: null;
    const commentData = {
      content: this.state.commentText,
      userName,
      userId,
      userPictureUrl,
      parentComment
    }
    this.props.addComment(commentData);
    this.props.showAnswerInput(null);
    this.setState({ commentText: '' });
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return(
      <div className="clearfix">
        <div className="pull-left comment-input-image">
          <img src={this.currentUser.userPictureUrl} className="img-circle" />
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


  <span class="input-group-addon" id="basic-addon2">@example.com</span>


export default connect(null, { addComment, showAnswerInput })(CommentInput);
