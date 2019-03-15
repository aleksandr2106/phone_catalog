import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../../redux/actions';

class Sidebar extends Component {
  render() {
    const { counter } = this.props;

    return <aside>Counter: {counter}</aside>;
  }
}

export default connect(state => ({
  counter: state.counter,
}))(Sidebar);
