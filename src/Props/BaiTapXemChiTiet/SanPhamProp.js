import React, { Component } from 'react';

export default class SanPhamProp extends Component {
  render() {
    let { prod } = this.props;
    return (
      <div className='card'>
        <img src={prod.hinhAnh} alt='...' height={300} />
        <div className='card-body'>
          <p>Tên sản phẩm: {prod.tenSP}</p>
          <p>Giá: {prod.giaBan}</p>
          <button
            className='btn btn-success'
            onClick={() => {
              this.props.xemChiTiet(prod);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
