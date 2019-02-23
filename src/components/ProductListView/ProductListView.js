import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import './ProductListView.css';

var phones = require('./phones.json'); // forward slashes will depend on the file location

class ProductList extends Component {
  state = {
    inputPhoneQuery: '',
    sortMethod: 'newest',
  };

  replaceSortMethod = e => {
    this.setState({ sortMethod: e.target.value });
  };

  sortItems = (first, second) => {
    switch (this.state.sortMethod) {
      case 'alphabetical': {
        return (first.name > second.name) - (first.name < second.name);
      }
      case 'reverseAlphabetical': {
        return (first.name < second.name) - (first.name > second.name);
      }
      case 'newest': {
        return first.age - second.age;
      }
    }
  };
  render() {
    return (
      <div className="product_list_view">
        <div className="product_filter">
          <div className="input_filter">
            <p>Search </p>
            <input
              type="text"
              onChange={e => this.setState({ inputPhoneQuery: e.target.value })}
              value={this.state.inputPhoneQuery}
              placeholder="Enter phone name"
            />
          </div>
          <div className="product_sort">
            <p>Sort </p>
            <select
              value={this.state.sortMethod}
              onChange={this.replaceSortMethod}
            >
              <option value="newest">Newest</option>
              <option value="alphabetical">Alphavite</option>
              <option value="reverseAlphabetical">Reverse Alphavite</option>
            </select>
          </div>
        </div>

        <div className="product_list">
          {phones
            .sort(this.sortItems)
            .filter(
              phoneList =>
                phoneList.name
                  .toLowerCase()
                  .includes(this.state.inputPhoneQuery.toLowerCase()) ||
                phoneList.snippet
                  .toLowerCase()
                  .includes(this.state.inputPhoneQuery.toLowerCase())
            )
            .map(phoneList => (
              <ProductItem
                imageUrl={phoneList.imageUrl}
                name={phoneList.name}
                snippet={phoneList.snippet}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
