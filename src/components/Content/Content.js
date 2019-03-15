import React, { Component } from 'react';
import store from '../../redux/store';
import { addCounter } from '../../redux/actions';

class Content extends Component {
  render() {
    return (
      <main>
        <button onClick={() => store.dispatch(addCounter(5))}>Click me</button>
      </main>
    );
  }
}

export default Content;
