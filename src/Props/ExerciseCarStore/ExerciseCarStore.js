import React, { Component } from 'react';
import CarList from './CarList';
import ModalCar from './ModalCar';

export default class ExerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: 'black car',
      img: './img/products/black-car.jpg',
      price: 1000,
    },
    {
      id: 2,
      name: 'red car',
      img: './img/products/red-car.jpg',
      price: 2000,
    },
    {
      id: 3,
      name: 'silver car',
      img: './img/products/silver-car.jpg',
      price: 3000,
    },
    {
      id: 3,
      name: 'Steel car',
      img: './img/products/steel-car.jpg',
      price: 4000,
    },
  ];
  state = {
    spChiTiet: {
      id: 1,
      name: 'black car',
      img: './img/products/black-car.jpg',
      price: 1000,
    },
  };
  renderSetState = (item) => {
    this.setState({
      spChiTiet: item,
    });
  };
  render() {
    return (
      <div className='container'>
        <h3>Bài tập truyền prop</h3>
        <ModalCar spModal={this.state.spChiTiet} />
        <CarList
          productsData={this.products}
          renderSetState={this.renderSetState}
        />
      </div>
    );
  }
}
