import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewJokes } from '../actions';
import Home from '../Home';
import Votes from './Votes';

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
    await this.props.getNewJokes(this.props.page);
  }
  render() {
    const sortedJokes = this.props.jokes.slice().sort((a, b) => {
      return b.votes - a.votes;
    });
    console.log(sortedJokes);
    return (
      <div>
        <div> Top Five</div>
        {sortedJokes.slice(0, 5).map(joke => (
          <div>
            {' '}
            {joke.joke}
            <Votes id={joke.id} />
          </div>
        ))}

        <div> Bottom Five</div>
        {sortedJokes.slice(-5).map(joke => (
          <div>
            {joke.joke} <Votes id={joke.id} />
          </div>
        ))}

        <div>
          <p> Page:{this.props.page ? this.props.page - 1 : 'loading'}</p>
          <button onClick={this.newJokes}>I want new jokes</button>
          <Home {...this.props} />
        </div>
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
