import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTaskApiAction,
  deleteTaskApiAction,
  getAllTaskAction,
  doneTaskAction,
  rejectTaskAction,
} from '../../../redux/actions/toDoListActions';

export default function ToDoList() {
  // const [arrTask, setArrTask] = useState([]);
  const [task, setTask] = useState({ taskName: '', status: false });
  const { arrTask } = useSelector((rootReducer) => rootReducer.toDoListReducer);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   let promise = axios({
  //     url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
  //     method: 'GET',
  //   });
  //   promise.then((result) => {
  //     // setArrTask(result.data);
  //     //Sau khi lấy dữ liệu từ backend về => dispatch dữ liệu đó lên redux
  //     const action = {
  //       type: 'GET_ALL_API',
  //       arrTask: result.data,
  //     };
  //     dispatch(action);
  //   });
  //   promise.catch((error) => {
  //     console.log('error', error.response.data);
  //   });
  // }, []);

  useEffect(() => {
    //dispatch 1 action là function
    /*
        action có 2 loại:
        + Loại 1: (type: 'TYPE_NAME', payload:data}
        + Loại 2: function
    */
    let action = getAllTaskAction();
    dispatch(action);
  }, []);

  console.log('task', task);

  const handleChangeInput = (e) => {
    let { value, name } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // callapi
    // Khi gọi hàm addTaskApiAction => Hàm chưa gọi
    const action = addTaskApiAction(task);
    dispatch(action);

    // Nếu làm theo cách bình thường
    // Gọi axios thêm
    // Lấy dữ liệu về => dispatch lên reducer xử lý
    // Gọi axios getAll
    // dispatch giá trị sau khi getAll cho reducer xử lý
  };

  return (
    <div className='container text-center'>
      <div className='d-flex justify-content-center align-items-center mt-2'>
        <div>
          <h3>TO DO LIST</h3>
          <form className='input-group mb-3' onSubmit={handleSubmit}>
            <input
              name='taskName'
              type='text'
              className='form-control'
              placeholder='task name'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              onChange={handleChangeInput}
            />
            <div className='input-group-append'>
              <button
                type='submit'
                className='input-group-button btn btn-success'
                id='basic-addon2'
              >
                Add task
              </button>
            </div>
          </form>

          <table className='table'>
            <tbody>
              {arrTask
                .filter((task) => task.status === true)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className='badge badge-success'>completed</span>
                      </td>
                      <td>
                        <button
                          className='btn btn-warning'
                          onClick={() => {
                            const action = rejectTaskAction(task.taskName);
                            dispatch(action);
                          }}
                        >
                          undo
                        </button>
                        <button
                          onClick={() => {
                            const action = deleteTaskApiAction(task.taskName);
                            dispatch(action);
                          }}
                          className='btn btn-danger ml-2'
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>

            <tfoot>
              {arrTask
                .filter(
                  (task) => task.status !== true && task.taskName.trim() !== '',
                )
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className='badge badge-danger'>incompleted</span>
                      </td>
                      <td>
                        <button
                          className='btn btn-success'
                          onClick={() => {
                            dispatch(doneTaskAction(task.taskName));
                          }}
                        >
                          done
                        </button>
                        <button
                          onClick={() => {
                            const action = deleteTaskApiAction(task.taskName);
                            dispatch(action);
                          }}
                          className='btn btn-danger ml-2'
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
