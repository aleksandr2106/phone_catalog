import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductList from '../ProductListView';
import Product from '../ProductView';
import { connect } from 'react-redux';
import Content from '../Content';
import Sidebar from '../Sidebar';

class App extends Component {
  render() {
    const { counter } = this.props;

    return (
      <div>
        <Route path="/" component={ProductList} exact />
        <Route path="/:product" component={Product} exact />
        <div className="App">
          <header>Counter: {counter}</header>

          <div className="layout">
            <Content />
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(App);
