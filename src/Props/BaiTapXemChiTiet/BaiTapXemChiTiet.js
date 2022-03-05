import React, { Component } from 'react';
import SanPhamProp from './SanPhamProp';

const dataPhone = [
  {
    maSP: 1,
    tenSP: 'VinSmart Live',
    manHinh: 'AMOLED, 6.2, Full HD+',
    heDieuHanh: 'Android 9.0 (Pie)',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 5700000,
    hinhAnh: './img/products/vsphone.jpg',
  },
  {
    maSP: 2,
    tenSP: 'Meizu 16Xs',
    manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
    heDieuHanh: 'Android 9.0 (Pie); Flyme',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 7600000,
    hinhAnh: './img/products/meizuphone.jpg',
  },
  {
    maSP: 3,
    tenSP: 'Iphone XS Max',
    manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
    heDieuHanh: 'iOS 12',
    cameraSau: 'Chính 12 MP & Phụ 12 MP',
    cameraTruoc: '7 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 27000000,
    hinhAnh: './img/products/applephone.jpg',
  },
];

export default class BaiTapXemChiTiet extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './img/products/applephone.jpg',
    },
  };
  renderChiTietSP = (prod) => {
    this.setState({
      sanPhamChiTiet: prod,
    });
  };
  renderProduct = () => {
    return dataPhone.map((prod, index) => {
      return (
        <div className='col-4' key={index}>
          {/* <div className='card'>
            <img src={prod.hinhAnh} alt='...' height={300} />
            <div className='card-body'>
              <p>Tên sản phẩm: {prod.tenSP}</p>
              <p>Giá: {prod.giaBan}</p>
              <button
                className='btn btn-success'
                onClick={() => {
                  this.renderChiTietSP(prod);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div> */}
          <SanPhamProp prod={prod} xemChiTiet={this.renderChiTietSP} />
        </div>
      );
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      hinhAnh,
      giaBan,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.state.sanPhamChiTiet;
    return (
      <div className='container-fluid'>
        <h3 className='text-center display-4'>Danh sách sản phẩm</h3>
        <div className='row'>
          {this.renderProduct()}
          {/* <div className='col-4'>
            <div className='card'>
              <img src='https://i.pravatar.cc?u=1' alt='...' />
              <div className='card-body'>
                <p>Tên sản phẩm:</p>
                <p>Giá:</p>
                <button className='btn btn-success'>Xem chi tiết</button>
              </div>
            </div>
          </div> */}
        </div>
        <div className='mt-3'>
          <div className='row'>
            <div className='col-4'>
              <h3>Tên sản phẩm</h3>
              <img src={hinhAnh} alt='...' height={300} />
            </div>
            <div className='col-8'>
              <h3>Thông số kỹ thuật</h3>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
