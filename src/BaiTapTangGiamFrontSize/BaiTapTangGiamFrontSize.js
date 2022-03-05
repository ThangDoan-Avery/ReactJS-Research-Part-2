import React, { Component } from 'react';

export default class BaiTapTangGiamFrontSize extends Component {
  state = {
    customFS: 14,
  };
  handleFrontSize = (frontSize) => {
    this.setState({
      customFS: this.state.customFS + frontSize,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className='text-center'
          style={{
            fontSize: this.state.customFS,
          }}
        >
          Bài tập thay đổi Front Size
        </div>
        <div className='text-center mt-3'>
          <button
            className='btn btn-outline-primary'
            onClick={() => {
              this.handleFrontSize(1);
            }}
          >
            +
          </button>
          <button
            className='btn btn-outline-primary ml-3'
            onClick={() => {
              this.handleFrontSize(-1);
            }}
          >
            -
          </button>
        </div>
      </React.Fragment>
    );
  }
}
