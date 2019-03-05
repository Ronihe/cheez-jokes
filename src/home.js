import React, { Component } from 'react';
import Votes from './containers/Votes';
class Home extends Component {
  render() {
    return (
      <div>
        {this.props.jokes.slice(-20).map((j, idx) => {
          return (
            <li id={j.id} key={j.id}>
              <span> {idx + 1}</span> {j.joke}
              <Votes id={j.id} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default Home;
