import React, { Component } from 'react';
import { connect } from 'react-redux';
import { voteDown, voteUp } from '../actions';
import VoteComponent from '../VoteComponent';
class Votes extends Component {
  render() {
    //take the id and update the votes
    return <VoteComponent {...this.props} />;
  }
}
function mapStateToProps(state, ownProps) {
  return {
    joke: state.jokes.filter(joke => joke.id === ownProps.id)[0]
  };
}
const connected = connect(
  mapStateToProps,
  { voteUp, voteDown }
);
export default connected(Votes);
