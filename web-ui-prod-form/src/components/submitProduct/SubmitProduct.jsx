// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { Component } from 'react';
import shopping_cart from '../../assets/shopping-icon.png';
import sample from '../../assets/sample.png'
import sampleLg from '../../assets/sample-lg.png'
//TODO import addProduct call in config file for endpoint
import * as config from '../../config';

// Stylesheets
import './SubmitProduct.css';

// Mock data
class SubmitProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
    }
  }
 
  componentDidMount() {
    if (config.PUT_PRODUCTS_API) {
      const { products } = mockProductList.data;
      this.setState({ products });
    } else {
      const url = config.PUT_PRODUCTS_API;
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleProductSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return (
      <div class="products-container bg-alt br-all pd-1">
        <div class="product-list fl fl-wrap bg-alt br-all">
          <form onSubmit={this.handleSubmit}>
            <div class="product fl-shrink-0 pd-05 fl fl-nowrap br-all-sm">
              <div class="product-name pd-r-1 mg-l-1 fl fl-column fl-wrap fl-shrink-1">
                <div class="line-clamp-2">Product Name
                <input className="input"
                  name="name"
                  placeholder="Eyeshadow Palette - Set of 3 Palettes"
                  value={this.state.name}
                  onChange={this.handleChange}>
                </input>
                </div>
              </div>
            </div>

            <div class="product fl-shrink-0 pd-05 fl fl-nowrap br-all-sm">
              <div class="product-name pd-r-1 mg-l-1 fl fl-column fl-wrap fl-j-between fl-shrink-1">
                <div class="line-clamp-2">Price
                <input className="input"
                  type="text"
                  name="price"
                  placeholder="125"
                  value={this.state.price}
                  onChange={this.handleChange}>
                </input>
                </div>
              </div>
            </div>

            <div class="product fl-shrink-0 pd-05 fl fl-nowrap br-all-sm">
              <div class="product-name pd-r-1 mg-l-1 fl fl-column fl-wrap fl-j-between fl-shrink-1">
                <div class="line-clamp-2">Discounted Price
                <input className="input"
                  type="text"
                  name="discountedPrice"
                  placeholder="99"
                  value={this.state.discountedPrice}
                  onChange={this.handleChange}>
                </input>
                </div>
              </div>
            </div>

            <div class="product fl-shrink-0 pd-05 fl fl-nowrap br-all-sm">
              <div class="product-name pd-r-1 mg-l-1 fl fl-column fl-wrap fl-j-between fl-shrink-1">
                <div class="line-clamp-2">Rank Seq
                <input className="input"
                  type="text"
                  name="rankSeq"
                  placeholder="10"
                  value={this.state.rankSeq}
                  onChange={this.handleChange}>
                </input>
                </div>
              </div>
            </div>

            <div class="product fl-shrink-0 pd-05 fl fl-nowrap br-all-sm">
              <div class="product-name pd-r-1 mg-l-1 fl fl-column fl-wrap fl-j-between fl-shrink-1">
                <div class="line-clamp-2">Long Description
                <textArea className="input input-long"
                  type="textArea"
                  name="longDescription"
                  placeholder="By combining potent natural ingredients, ancient rituals, and modern science, ACME creates products that perform with experiences that transform. Discovery drives innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate volutpat rhoncus arcu porttitor in."
                  value={this.state.longDescription}
                  onChange={this.handleChange}>
                </textArea>
                </div>
              </div>
            </div>

            <img src={sample} />
            <div class="line-clamp-2">Upload Small Image 512x512</div>
            <label> </label>
            <input type="file" name="imageUrl" class="upload required" accept="image/jpeg, image/png, jpg, jpeg, png"></input>

            <img src={sampleLg} />
            <div class="line-clamp-2">Upload Large Image 1290x1080</div>
            <input type="file" name="imageLargeUrl" class="upload-btn__input required" accept="image/jpeg, image/png, jpg, jpeg, png"></input>
            <input className="btn btn-success" type="submit" value="Add" ></input>
          </form>
        </div >
      </div >
    );
  }
}

export default SubmitProduct;
