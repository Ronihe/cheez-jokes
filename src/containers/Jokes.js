import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewJokes } from '../actions';
import Home from '../Home';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.newJokes = this.newJokes.bind(this);
  }

  async componentDidMount() {
    if (this.props.jokes.length === 0) {
      await this.props.getNewJokes();
    }
  }
  async newJokes() {
    console.log('when I clicke new jokes', this.props);
    await this.props.getNewJokes(this.props.page);
  }
  render() {
    return (
      <div>
        <button onClick={this.newJokes}>I want new jokes</button>
        <Home {...this.props} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    page: state.nextPage,
    jokes: state.jokes
  };
}
const connected = connect(
  mapStateToProps,
  { getNewJokes }
);
export default connected(Jokes);
