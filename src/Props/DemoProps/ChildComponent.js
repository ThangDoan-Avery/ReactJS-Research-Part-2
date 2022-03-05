import React, { Component } from 'react'

export default class ChildComponent extends Component {
    


   render() {
    /*
        Sự khác biệt state & props 
        + Giống nhau: Đều là thuộc tính của class component để binding dữ liệu lên giao diện
        + Khác nhau: 
            . State chứa các giá trị thay đổi trên giao diện. State có thể thay đổi được giá trị khi gọi phương thức setState.
            . Props là thuộc tính của component chứa giá trị từ component cha truyền vào. Props không thể thay đổi giá trị (readonly).
    */
    //this.props: Là thuộc tính có sẵn của react class component dùng nhận giá trị từ component cha truyền vào. Lưu ý giá trị đó là readonly
    let {sanPham} = this.props;


    return (
      <div className='card'>
          <div className='card-header'>Header</div>
          <img src={sanPham.img} alt='...' />
          <div className='card-body'>
              <p>Tên sản phẩm: {sanPham.name}</p>
              <p>Giá bán: {sanPham.price}</p>
          </div>
      </div>
    )
  }
}
