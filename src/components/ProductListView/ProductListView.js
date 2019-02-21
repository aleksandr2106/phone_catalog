import React, { Component } from "react";
import ProductItem from "../ProductItem";
import "./ProductListView.css";

var phones = require("./phones.json"); // forward slashes will depend on the file location

class ProductList extends Component {
  render() {
    return (
      <div className="product_list_view">
        {phones.map(phone => (
          <ProductItem
            phone_img={phone.imageUrl}
            name={phone.name}
            snippet={phone.snippet}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
