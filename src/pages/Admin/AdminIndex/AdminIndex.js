import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class AdminIndex extends Component {
  render() {
    if (localStorage.getItem('userLogin') === 'admin') {
      return <div>AdminIndex</div>;
    }
    alert('Bạn không có quyền vào trang này');
    return <Redirect to='home' />;
  }
}
