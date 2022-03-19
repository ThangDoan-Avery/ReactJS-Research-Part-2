import React, { memo } from 'react';

function ChildComponent(props) {
  console.log('children com render');
  return (
    <div>
      <h3>ChildComponent</h3>
      <h3>Number child : {props.number}</h3>
      <button
        className='btn btn-success'
        onClick={() => {
          props.tangSoLuong(props.number + 1);
        }}
      >
        Tăng số lượng
      </button>
    </div>
  );
}

export default memo(ChildComponent);
