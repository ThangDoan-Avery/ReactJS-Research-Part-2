import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Register extends Component {
  state = {
    submitted: true,
  };
  handleSubmit = (e) => {
    this.setState({
      submitted: false,
    });
    e.preventDefault();
  };
  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Đăng kí</h3>
        <div className='form-group'>
          <p>Tài khoản</p>
          <input className='from-control' name='taiKhoan' />
        </div>
        <div className='form-group'>
          <p>Họ tên</p>
          <input className='from-control' name='hoTen' />
        </div>
        <div className='form-group'>
          <p>Mật khẩu</p>
          <input className='from-control' name='matKhau' />
        </div>
        <div className='form-group'>
          <p>Email</p>
          <input className='from-control' name='email' />
        </div>
        <div className='form-group'>
          <p>Số điện thoại</p>
          <input className='from-control' name='soDienThoai' />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-success'>
            Đăng kí
          </button>
        </div>

        <Prompt
          when={this.state.submitted}
          message={(location) => 'Bạn thật sự muốn rời trang sao?'}
        />
      </form>
    );
  }
}
