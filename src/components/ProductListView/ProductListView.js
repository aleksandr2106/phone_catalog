import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import './ProductListView.css';

var phones = require('./phones.json'); // forward slashes will depend on the file location

class ProductList extends Component {
  render() {
    return (
      <div className="product_list_view">
        {phones.map(phoneList => (
          <ProductItem
            imageUrl={phoneList.imageUrl}
            name={phoneList.name}
            snippet={phoneList.snippet}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
