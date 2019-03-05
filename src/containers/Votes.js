import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action } from '../actionCreator';
import Component from '../components/Component';
class Votes extends Component {
  render() {
    return <Component {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const connected = connect(
  mapStateToProps,
  { action }
);
export default connected(Votes);
