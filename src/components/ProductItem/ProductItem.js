import React, { Component } from "react";
import "./ProductItem.css";

class ProductItem extends Component {
  render() {
    const { phone_img, name, snippet } = this.props;
    var phone_img_link = "../";
    phone_img_link += phone_img;
    console.log(phone_img_link);

    return (
      <div className="product_item">
        <img className="product_item_img" src={phone_img_link} alt={name} />
        <h3 className="product_item_name">{name}</h3>
        <p className="product_item_snippet">{snippet}</p>
      </div>
    );
  }
}

export default ProductItem;
