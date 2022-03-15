import React, { useState } from 'react';

export default function BaiTapChonXe() {
  let [color, setColor] = useState('./img/black-car.jpg');
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img src={color} alt='...' className='w-100' />
        </div>
      </div>
      <div className='col-6'>
        <div className='row'>
          <div className='col-4'>
            <button
              className='btn bg-dark text-white'
              onClick={() => {
                setColor('./img/black-car.jpg');
              }}
            >
              Black car
            </button>
          </div>
          <div className='col-4'>
            <button
              className='btn bg-danger text-white'
              onClick={() => {
                setColor('./img/red-car.jpg');
              }}
            >
              Red car
            </button>
          </div>
          <div className='col-4'>
            <button
              className='btn bg-secondary text-white'
              onClick={() => {
                setColor('./img/silver-car.jpg');
              }}
            >
              Silver car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
