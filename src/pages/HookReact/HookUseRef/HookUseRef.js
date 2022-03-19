import React, { useRef, useState } from 'react';

export default function HookUseRef() {
  const [number, setNumber] = useState(0);

  let tongRef = useRef(0); //Lưu lại  các giá trị thay đổi setState
  const inputUserName = useRef(null);
  const inputPassWord = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); //ngăn chặn reload browser khi submit
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    inputUserName.current.style.color = 'red';
    inputPassWord.current.style.color = 'green';

    console.log('username', username);
    console.log('pass', pass);
  };
  return (
    <div className='container'>
      <div className='form-group'>
        <p>Nhập vào 1 số</p>
        <input
          className='form-control'
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button
          className='btn btn-success mt-2'
          onClick={() => {
            tongRef.current = tongRef.current + Number(number);
            console.log('tong', tongRef.current);
          }}
        >
          Tính tổng
        </button>
      </div>
      <form className='container'>
        <h3>Form useRef</h3>
        <div className='form-group'>
          <p>username</p>
          <input
            className='form-control '
            ref={inputUserName}
            id='username'
            name='username'
          />
        </div>
        <div className='form-group'>
          <p>password</p>
          <input
            className='form-control '
            ref={inputPassWord}
            id='password'
            name='password'
          />
        </div>
        <div className='form-group'>
          <button
            type='submit'
            className='btn btn-success'
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
