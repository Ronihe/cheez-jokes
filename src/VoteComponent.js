import React, { Component } from 'react';

class VoteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleVoteUp = () => {
    this.props.voteUp(this.props.joke.id);
  };

  handleVoteDown = () => {
    console.log('I am clicking votedown', this.props.joke);
    this.props.voteDown(this.props.joke.id);
    console.log('I am clicking votedown', this.props.joke);
  };

  render() {
    return (
      <span className="Vote">
        [<span>{this.props.joke.votes} votes.</span>
        <i
          className="fas fa-thumbs-up text-success"
          onClick={this.handleVoteUp}
        />{' '}
        <i
          className="fas fa-thumbs-down text-danger"
          onClick={this.handleVoteDown}
        />
        ]
      </span>
    );
  }
}

VoteComponent.defaultProps = {};

VoteComponent.propTypes = {};

export default VoteComponent;
