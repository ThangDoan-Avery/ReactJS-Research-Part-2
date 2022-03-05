import React, { Component } from 'react';
import CarItem from './CarItem';

export default class CarList extends Component {
  renderCarItem = () => {
    let { productsData } = this.props;
    return productsData.map((prod, index) => {
      return (
        <div className='col-3' key={index}>
          <CarItem prod={prod} renderSetState={this.props.renderSetState} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className='container'>
        <h5>Danh sách xe </h5>
        <div className='row'>{this.renderCarItem()}</div>
      </div>
    );
  }
}
