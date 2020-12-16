// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { Component } from 'react';
import shopping_cart from '../../assets/shopping-icon.png';
//TODO import addProduct call in config file for endpoint
import * as config from '../../config';

// Stylesheets
import './SubmitProduct.css';

// Mock data
import { mockSubmitProduct } from '../../__test__/mocks/products2-mocks';

class SubmitProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    const { products } = mockSubmitProduct.data;
    this.setState({ products });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleProductSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  // generateForm = () => {
  //   const { products } = this.state;
  //   return (
  //     //TODO ADD EDIT/DELETE FORMS TO PRODUCTS FORMS
  //     products.map(product => (
  //       <div className="product-forms" key={product.id} onClick={this.handleProductSubmit}>
  //         <div className="aspect-169 pos-relative">
  //         </div>
  //       </div>
  //     ))
  //   )
  // }

  render() {
    return (
      <div class="product-form-container product-list-flex-direction product product-list fl-shrink-0 pd-05 fl fl-nowrap br-all-sm">
        
            <form onSubmit={this.handleSubmit}>
              <label>Product Name</label>
                <input className="form-control mb-3"
                name="name"
                placeholder="Eyeshadow Palette - Set of 3 Palettes"
                value={this.state.name}
                onChange={this.handleChange}>
              </input>

              <label>Price</label>
              <input 
                type="text"
                name="price"
                placeholder="125"
                value={this.state.price}
                onChange={this.handleChange}>
              </input>

              <label>Discounted Price</label>
              <input className="form-control mb-1"
                type="text"
                name="discountedPrice"
                placeholder="99"
                value={this.state.discountedPrice}
                onChange={this.handleChange}>
              </input>

              <label>Rank Sequence</label>
              <input className="form-control mb-1"
                type="text"
                name="rankSeq"
                placeholder="10"
                value={this.state.rankSeq}
                onChange={this.handleChange}>
              </input>

              <label>Long Description</label>
              <input 
                type="textBox"
                name="longDescription"
                placeholder="By combining potent natural ingredients, ancient rituals, and modern science, ACME creates products that perform with experiences that transform. Discovery drives innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate volutpat rhoncus arcu porttitor in."
                value={this.state.longDescription}
                onChange={this.handleChange}>
              </input>
   
              <label>Upload Small Image </label>
              <input type="file" name="imageUrl" class="upload-btn__input required" accept="image/jpeg, image/png, jpg, jpeg, png"></input>
              <label>Upload Large Image </label>
              <input type="file" name="imageLargeUrl" class="upload-btn__input required" accept="image/jpeg, image/png, jpg, jpeg, png"></input>
            
              <input className="btn btn-success" type="submit" value="Add" ></input>
            </form>
            </div>
    );
  }
}

export default SubmitProduct;
