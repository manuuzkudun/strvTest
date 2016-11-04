import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

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
    const commentData = {
      content: this.state.commentText,
      userName: 'Manu Uzkudun',
      userId: 3
    }
    this.props.addComment(commentData);
    this.setState({ commentText: '' });
  }

  render() {
    return(
      <div>
        <img src="http://placehold.it/60x60" className="img-circle" />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a comment"
            value={this.state.commentText}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentInput);
