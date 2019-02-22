import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
  render() {
    const { imageUrl, name, snippet } = this.props;

    return (
      <div className="product_item">
        <img className="product_item_img" src={imageUrl} alt={name} />
        <div className="info_about_phone">
          <a href="#" className="product_item_name">
            {name}
          </a>
          <p className="product_item_snippet">{snippet}</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
