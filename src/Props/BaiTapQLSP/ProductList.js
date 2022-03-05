import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  renderProductItem = () => {
    let { arrProduct } = this.props;
    return arrProduct.map((product, index) => {
      return (
        <div className='col-4 mt-2' key={index}>
          <ProductItem product={product} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className='row'>
        {this.renderProductItem()}
        {/* <div className='col-4'>
          <ProductItem />
        </div>
        <div className='col-4'>
          <ProductItem />
        </div>
        <div className='col-4'>
          <ProductItem />
        </div> */}
      </div>
    );
  }
}
