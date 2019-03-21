import React, { Component } from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    const { imageUrl, name, snippet, id } = this.props;
    console.log(id);
    return (
      <div className="product_item">
        <Link to={`/${id}`} className="product_item_name">
          <img
            className="product_item_img"
            src={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${imageUrl}`}
            alt={name}
          />
        </Link>
        <div className="info_about_phone">
          <Link to={`/${id}`} className="product_item_name">
            {name}
          </Link>
          <p className="product_item_snippet">{snippet}</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
