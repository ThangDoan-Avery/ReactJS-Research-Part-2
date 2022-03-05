import React, { Component } from 'react';
import ChildComponents from './ChildComponents';

export default class DemoProps extends Component {
  render() {
    let sp1 = {
      id: 1,
      name: 'Iphone',
      price: 2000,
      img: 'https://picsum.photos/id/1/200',
    };
    let sp2 = {
      id: 2,
      name: 'Iphone XS',
      price: 2000,
      img: 'https://picsum.photos/id/2/200',
    };
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <ChildComponents sanPham={sp1} tenSanPham='Iphone' gia={2000} />
          </div>
          <div className='col-4'>
            <ChildComponents sanPham={sp2} tenSanPham='Samsung' gia={1000} />
          </div>
        </div>
      </div>
    );
  }
}
