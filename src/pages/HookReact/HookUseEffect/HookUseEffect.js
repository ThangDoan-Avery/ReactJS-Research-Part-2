import React, { useState, useEffect } from 'react';
import ToDoAppRPC from './ToDoAppRPC';

export default function HookUseEffect() {
  const [like, setLike] = useState(0);
  const [number, setNumber] = useState(0);
  // const timeout = setInterval(() => {
  //   console.log(1);
  // }, 1000);

  useEffect(() => {
    // Chạy sau khi giao diện được tạo
    // Thay thế cho componentDidMount và componentDidUpdate tương ứng react class component
    // console.log('componentDidMount & componentDidUpdate');
  });

  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi render
    // Thay thế componentDidMount lấy dữ liệu khi từ backend về
    console.log('componentDidMount');

    return () => {
      // Xoá các hàm chạy ngầm khi component mất đi
      console.log('willUnmounted');
      // clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    // Kiểm tra giá trị number thay đổi thì sẽ chạy lại hàm này(Giống componentDidMount)
    console.log('ComponentDidUpdate');
  }, [number]); //Giá trị thay đổi thì hàm này mới chạy lại (So sánh shallow compare)

  console.log('render');
  return (
    <div className='container'>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className='btn btn-success'
      >
        +
      </button>
      <hr />
      <p className='text-danger'>Like : {like}</p>
      <button
        className='btn btn-danger'
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <hr />
      <ToDoAppRPC />
    </div>
  );
}
