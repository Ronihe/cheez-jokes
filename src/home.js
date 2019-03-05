import React, { Component } from 'react';

class Home extends Component {
  render() {
    return <div>{this.props.jokes.length}</div>;
  }
}

export default Home;
