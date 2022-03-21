import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import HOCModal from './HOCModal';

export default function DemoHOCModal() {
  const [component, setComponent] = useState(<Register />);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h3 className='text-center'>HOC</h3>
      <div className='d-flex justify-content-center'>
        <button
          type='button'
          className='btn btn-primary'
          data-toggle='modal'
          data-target='#modelId'
          onClick={() => {
            const action = {
              type: 'OPEN_FORM',
              component: <Register />,
              handleSubmit: () => {
                console.log('Đăng kí submit');
              },
            };
            dispatch(action);
          }}
        >
          Đăng kí
        </button>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-primary ml-3'
          data-toggle='modal'
          data-target='#modelId'
          onClick={() => {
            const action = {
              type: 'OPEN_FORM',
              component: <Login />,
              handleSubmit: () => {
                console.log('Đăng nhập submit');
              },
            };
            dispatch(action);
          }}
        >
          Đăng nhập
        </button>
      </div>
      <HOCModal component={component} />
    </div>
  );
}
