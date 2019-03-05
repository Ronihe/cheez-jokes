import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewJokes } from '../actions';
import Home from '../Home';

class Jokes extends Component {
  async componentDidMount() {
    if (!this.props.jokes.length === 0) {
      await this.props.getNewJokes();
    }
  }

  render() {
    return <Home {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    jokes: state
  };
}
const connected = connect(
  mapStateToProps,
  { getNewJokes }
);
export default connected(Jokes);
