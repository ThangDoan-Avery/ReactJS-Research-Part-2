import React, { Component } from 'react';

export default class ChangeColor extends Component {
  state = {
    colorSrc: './img/products/black-car.jpg',
  };
  handleChangColor = (color) => {
    this.setState({
      colorSrc: `./img/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className='container'>
        <h3 className='text-center mb-4'>Bài tập chọn màu xe</h3>
        <div className='row'>
          <div className='col-6'>
            <img className='w-100' src={this.state.colorSrc} alt='' />
          </div>
          <div className='col-6'>
            <div className='row'>
              <div className='col-3'>
                <button
                  style={{
                    color: 'black',
                  }}
                  onClick={() => {
                    this.handleChangColor('black');
                  }}
                >
                  Black car
                </button>
              </div>
              <div className='col-3'>
                <button
                  style={{
                    color: 'gray',
                  }}
                  onClick={() => {
                    this.handleChangColor('steel');
                  }}
                >
                  Steel car
                </button>
              </div>
              <div className='col-3'>
                <button
                  style={{
                    color: 'silver',
                  }}
                  onClick={() => {
                    this.handleChangColor('silver');
                  }}
                >
                  Silver car
                </button>
              </div>
              <div className='col-3'>
                <button
                  style={{
                    color: 'red',
                  }}
                  onClick={() => {
                    this.handleChangColor('red');
                  }}
                >
                  Red car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
