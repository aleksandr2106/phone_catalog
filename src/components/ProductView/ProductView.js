import React, { Component } from 'react';
import './ProductView.css';
import ProductView from '../ProductView';

const baseUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones';
const imagesUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';

const titles = {
  additionalFeatures: 'Additional Features',
  android: 'Android',
  availability: 'Availability and Networks',
  battery: 'Battery',
  camera: 'Camera',
  connectivity: 'Connectivity',
  display: 'Display',
  hardware: 'Hardware',
  sizeAndWeight: 'Size and Weight',
  storage: 'Storage and Memory',
};

const keysToSkip = ['id', 'images', 'name', 'description'];

class Product extends Component {
  state = {
    data: null,
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

  renderFeatureData(key, data) {
    let contents = null;

    if (keysToSkip.includes(key)) {
      return null;
    }

    if (typeof data === 'string' || typeof data === 'number') {
      contents = data;
    } else if (Array.isArray(data)) {
      contents = data.join(', ');
    } else if (typeof data === 'object' && data) {
      contents = Object.keys(data)
        .map(subKey => this.renderFeatureData(subKey, data[subKey]));

    } else if (typeof data === 'boolean') {
      contents = data ? '✓' : '✘';
    }

    return !key ? contents : (
      <div key={key} className="feature-data">
        <h3>{titles[key] || key}</h3>
        <div>{contents}</div>
      </div>
    );
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
                  key={images}
                  className="gallery_img"
                  src={images}
                  alt={this.state.data.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="full_description">
          {this.renderFeatureData(null, data)}
        </div>
      </div>
    );
  }
}

export default Product;
