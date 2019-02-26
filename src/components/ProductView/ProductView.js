import React, { Component } from 'react';
import './ProductView.css';
import ProductView from '../ProductView';

const baseUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones';
const imagesUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
class Product extends Component {
  state = {
    data: '',
    error: '',
  };
  componentDidMount() {
    const productId = this.props.match.params.product;
    const dataUrl = `${baseUrl}/${productId}.json`;

    fetch(dataUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data');
        }

        return response.json();
      })
      .then(dataJson => {
        this.setState({ data: dataJson });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  render() {
    const { data, error } = this.state;

    if (!data) {
      return <div>Loading of data...</div>;
    }

    const productImages = data.images.map(item => imagesUrl + item);
    return (
      <div>
        <div className="description_and_gallary">
          <img
            className="select_img"
            src={productImages[0]}
            alt={this.state.data.name}
          />
          <div className="description_photo">
            <h1>{this.state.data.name}</h1>
            <p>{this.state.data.description}</p>
            <div className="photos_gallery">
              {productImages.map(images => (
                <img
                  className="gallery_img"
                  src={images}
                  alt={this.state.data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
