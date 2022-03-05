import React, { Component } from 'react';

export default class CarItem extends Component {
  render() {
    let { prod } = this.props;
    return (
      <div>
        <div className='card'>
          <img src={prod.img} alt='...' />
          <div className='card-body'>
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <button
              className='btn btn-primary'
              data-toggle='modal'
              data-target='#modelId'
              onClick={() => {
                this.props.renderSetState(prod);
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
