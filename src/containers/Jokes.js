import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewJokes } from '../actions';
import Home from '../Home';
import Vote from './Votes';

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
    // const sortedJokes = this.props.jokes.sort((a, b) => {
    //   return -a.votes + b.votes;
    // });
    // console.log(sortedJokes);
    return (
      <div>
        <div> Top Five</div>

        {/* {sortedJokes.slice(0,5).map((j, idx)=>{
            return 
            (<li id={j.id} key={j.id}>
            <span> {idx + 1}</span> 
            {j.joke}
            <Votes id={j.id} />
    </li>)}} */}

        <div>
          <p> Page:{this.props.page - 1 || 'loading'}</p>
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
