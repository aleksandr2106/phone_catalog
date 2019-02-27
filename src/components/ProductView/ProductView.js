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
        <div className="full_description">
          <div className="single_block_description">
            <h3>Avability and Networks</h3>
            <h4>Avability</h4>
            <ul>
              {data.availability.map(item => {
                return <li key={item}>{item ? <p>item</p> : <p>-</p>}</li>;
              })}
            </ul>
          </div>
          <div className="single_block_description">
            <h3>Battery</h3>
            <h4>Type</h4>
            {data.battery.type ? <p>{data.battery.type}</p> : <p>-</p>}
            <h4>Talktime</h4>
            {data.battery.talkTime ? <p>{data.battery.talkTime}</p> : <p>-</p>}
            <h4>Standby time (max)</h4>
            {data.battery.standbyTime ? (
              <p>{data.battery.standbyTime}</p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div className="single_block_description">
            <h3>Storage and Memory</h3>
            <h4>RAM</h4>
            {data.storage.ram ? <p>{data.storage.ram}</p> : <p>-</p>}
            <h4>Internal Storage</h4>
            {data.storage.flash ? <p>{data.storage.flash}</p> : <p>-</p>}
          </div>
          <div className="single_block_description">
            <h3>Connectivity</h3>
            <h4>Network Support</h4>
            {data.connectivity.cell ? (
              <p>{data.connectivity.cell}</p>
            ) : (
              <p>-</p>
            )}
            <h4>WiFi</h4>
            {data.connectivity.wifi ? (
              <p>{data.connectivity.wifi}</p>
            ) : (
              <p>-</p>
            )}
            <h4>Bluetooth</h4>
            {data.connectivity.bluetooth ? (
              <p>{data.connectivity.bluetooth}</p>
            ) : (
              <p>-</p>
            )}
            <h4>Infared</h4>
            {data.connectivity.infrared ? <p>✓</p> : <p>✘</p>}

            <h4>GPS</h4>
            <p>{data.connectivity.gps ? <p>✓</p> : <p>✘</p>}</p>
          </div>
          <div className="single_block_description">
            <h3>Android</h3>
            <h4>OS Version</h4>
            {data.android.os ? <p>{data.android.os}</p> : <p>-</p>}
            <h4>UI</h4>
            {data.android.ui ? <p>{data.android.ui}</p> : <p>-</p>}
          </div>
          <div className="single_block_description">
            <h3>Size and Weight</h3>
            <h4>Dimensions</h4>
            {data.sizeAndWeight.dimensions.map(item => {
              return <p key={item}>{item ? <p>item</p> : <p>-</p>}</p>;
            })}
            <h4>Weight</h4>
            {data.sizeAndWeight.weight ? (
              <p>{data.sizeAndWeight.weight}</p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div className="single_block_description">
            <h3>Display</h3>
            <h4>Screen Size</h4>
            {data.display.screenSize ? (
              <p>{data.display.screenSize}</p>
            ) : (
              <p>-</p>
            )}
            <h4>Screen Resolution</h4>
            {data.display.screenResolution ? (
              <p>{data.display.screenResolution}</p>
            ) : (
              <p>-</p>
            )}
            <h4>Touch screen</h4>
            {data.display.touchScreen ? <p>✓</p> : <p>✘</p>}
          </div>
          <div className="single_block_description">
            <h3>Hardware</h3>
            <h4>CPU</h4>
            {data.hardware.cpu ? <p>{data.hardware.cpu}</p> : <p>-</p>}
            <h4>USB</h4>
            {data.hardware.usb ? <p>{data.hardware.usb}</p> : <p>-</p>}
            <h4>Audio / headphone jack</h4>
            {data.hardware.audioJack ? (
              <p>{data.hardware.audioJack}</p>
            ) : (
              <p>-</p>
            )}
            <h4>FM Radio</h4>
            {data.hardware.fmRadio ? <p>✓</p> : <p>✘</p>}
            <h4>FM Radio</h4>
            {data.hardware.Accelerometer ? <p>V</p> : <p>✘</p>}
          </div>
          <div className="single_block_description">
            <h3>Camera</h3>
            <h4>Primary</h4>
            {data.camera.primary ? <p>{data.camera.primary}</p> : <p>-</p>}
            <h4>Features</h4>
            {data.camera.features.map(item => {
              return <p key={item}>{item ? <p>item</p> : <p>-</p>}</p>;
            })}
          </div>
          <div className="single_block_description">
            <h3>Additional Features</h3>
            {data.additionalFeatures ? (
              <p>{data.additionalFeatures}</p>
            ) : (
              <p>-</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
