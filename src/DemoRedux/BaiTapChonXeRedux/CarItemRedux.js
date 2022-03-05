import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarItemRedux extends Component {
  render() {
    console.log(this.props);
    let { item } = this.props;
    return (
      <div className=' card'>
        <img src={item.img} alt='...' />
        <div className='card-body'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button
            className='btn btn-success'
            data-toggle='modal'
            data-target='#modelId'
            onClick={() => {
              this.props.viewDetail(item);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewDetail: (carDetail) => {
      const action = {
        type: 'XEM_CHI_TIET',
        carDetail: carDetail,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(CarItemRedux);
