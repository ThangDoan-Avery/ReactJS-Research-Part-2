import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux';

class CarItemRedux extends Component {
  render() {
      console.log('props',this.props);
      let {item} = this.props;
    return (
      <div className='card'>
          <img src={item.img} alt='...' />
          <div className='card-body'>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button className='btn btn-success' data-toggle="modal" data-target="#modelId" onClick={()=>{
                  this.props.viewDetail(item);

              }}>Xem chi tiết</button>
          </div>
      </div>
    )
  }
}
//Hàm mapDispatchToProps tạo ra các props là phương thức đưa dữ liệu đưa lên redux 
const mapDispatchToProps = (dispatch) => {

    return {
        viewDetail : (carDetail) => {
            // console.log(carDetail);
            const action = {
                type: 'XEM_CHI_TIET', //Thuộc tính bắt buộc khi đưa dữ liệu lên redux
                carDetail:carDetail
            }
            //Dùng hàm dispatch đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps) (CarItemRedux)