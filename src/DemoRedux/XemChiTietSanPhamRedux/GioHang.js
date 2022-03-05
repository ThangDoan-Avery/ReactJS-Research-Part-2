import React, { Component } from 'react';
import { connect } from 'react-redux';

class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>
            <img src={spGH.hinhAnh} alt='...' height={50} />
          </td>
          <td>{spGH.tenSP}</td>
          <td>{spGH.giaBan}</td>
          <td>{spGH.soLuong}</td>
          <td>{spGH.giaBan * spGH.soLuong}</td>
          <td>
            <button className='btn btn-danger'>Xoá</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props);
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.gioHangReducer.gioHang,
  };
};
export default connect(mapStateToProps)(GioHang);
