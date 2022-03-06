import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDienThoai: '',
      loaiNguoiDung: '1',
    },
    errors: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDienThoai: '',
    },
  };

  handleChangeInput = (event) => {
    let { name, value, type } = event.target;
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   },
    // );
    // console.log(value, event);
    let newValues = { ...this.state.values };
    // Cập nhật values cho object values
    newValues[name] = value;
    let newErrors = { ...this.state.errors };
    let errorMess = '';
    if (value === '') {
      errorMess = name + ' không được bỏ trống!';
    }
    if (type === 'email') {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        errorMess = name + 'không đúng định dạng !';
      }
    }
    newErrors[name] = errorMess;
    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
        console.log(event.target.value);
      },
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); //Phương thức cản sự kiện reload của browser
    console.log('values', this.state.values);

    // Kiểm tra hợp lệ => cho submit
    let { values, errors } = this.state;

    // Duyệt các giá trị cuả value
    for (let key in values) {
      if (values[key] === '') {
        alert('Thông tin chưa hợp lệ !');
        return;
      }
    }

    for (let key in errors) {
      if (errors[key] != '') {
        alert('Thông tin chưa hợp lệ !');
        return;
      }
    }
    // Khi thông tin form đã hợp lệ => Đưa dữ liệu lên redux

    const action = {
      type: 'THEM_NGUOI_DUNG',
      nguoiDung: values,
    };
    // Gửi dữ liệu lên reducer
    this.props.dispatch(action);
  };
  render() {
    let { taiKhoan, hoTen, soDienThoai, email, matKhau, loaiNguoiDung } =
      this.props.nguoiDungSua;
    return (
      <form className='card' onSubmit={this.handleSubmit}>
        <div className='card-header'>
          <h3>Form đăng ký</h3>
        </div>
        <div className='row card-body'>
          <div className='col-6'>
            <div className='form-ground'>
              <p>Tài khoản</p>
              <input
                className='form-control'
                name='taiKhoan'
                onChange={this.handleChangeInput}
                value={taiKhoan}
              />
              <div className='text-danger'>{this.state.errors.taiKhoan}</div>
            </div>
            <div className='form-ground'>
              <p>Mật khẩu</p>
              <input
                className='form-control'
                name='matKhau'
                onChange={this.handleChangeInput}
                value={matKhau}
              />
              <div className='text-danger'>{this.state.errors.matKhau}</div>
            </div>
            <div className='form-ground'>
              <p>Email</p>
              <input
                className='form-control'
                name='email'
                onChange={this.handleChangeInput}
                type='email'
                value={email}
              />
              <div className='text-danger'>{this.state.errors.email}</div>
            </div>
          </div>
          <div className='col-6'>
            <div className='form-ground'>
              <p>Họ và tên</p>
              <input
                className='form-control'
                name='hoTen'
                onChange={this.handleChangeInput}
                value={hoTen}
              />
              <div className='text-danger'>{this.state.errors.hoTen}</div>
            </div>
            <div className='form-ground'>
              <p>Số điện thoại</p>
              <input
                className='form-control'
                name='soDienThoai'
                onChange={this.handleChangeInput}
                value={soDienThoai}
              />
              <div className='text-danger'>{this.state.errors.soDienThoai}</div>
            </div>
            <div className='form-ground'>
              <p>Loại người dùng</p>
              <select
                id='loaiNguoiDung'
                className='form-control'
                onChange={this.handleChangeInput}
                value={loaiNguoiDung}
              >
                <option value={1}>Người dùng</option>
                <option value={2}>Quản trị </option>
              </select>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-outline-success'>
            Đăng ký
          </button>
          <button type='button' className='btn btn-outline-primary ml-2'>
            Cập nhật
          </button>
        </div>
      </form>
    );
  }
}

// Callback function : là function đúng vai trò là tham số truyền vào function khác

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDungSua: rootReducer.baiTapQuanLyNguoiDungReducer.nguoiDungSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
