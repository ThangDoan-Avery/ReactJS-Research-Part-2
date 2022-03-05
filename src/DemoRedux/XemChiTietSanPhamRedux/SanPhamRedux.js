import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
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
              this.props.xemChiTietSP(prod);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className='btn btn-danger ml-2'
            onClick={() => {
              this.props.themGioHang(prod);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTietSP: (sanPhamClick) => {
      const action = {
        type: 'XEM_CHI_TIET_SP',
        sanPhamClick: sanPhamClick,
      };
      dispatch(action);
    },
    themGioHang: (sanPham) => {
      const action = {
        type: 'THEM_GIO_HANG',
        sanPham: sanPham,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
