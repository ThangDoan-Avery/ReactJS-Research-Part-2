import axios from 'axios';

// closure function
export const getAllTaskAction = () => {
  return async (dispatch, getState) => {
    // getState(); là hàm dùng để lấy giá trị từ rootReducer
    console.log('getState', getState);
    try {
      let result = await axios({
        url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
        method: 'GET',
      });
      //Sau khi lấy dữ liệu từ backend về => dispatch dữ liệu đó lên redux
      const action = {
        type: 'GET_ALL_TASK',
        arrTask: result.data,
      };
      dispatch(action);
      //thực thi ...
      console.log('arrTask', action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTaskApiAction = (task) => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
        method: 'POST',
        data: task,
      });
      // Sau khi thêm task thành công => dispatch logic getAllTask
      const action = getAllTaskAction();
      dispatch(action);
      console.log('result', result.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTaskApiAction = (taskName) => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url:
          'http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=' + taskName,
        method: 'DELETE',
      });
      const action = getAllTaskAction();
      dispatch(action);
      console.log('result', result);
    } catch (err) {
      console.log(err);
    }
  };
};

export const doneTaskAction = (taskName) => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName= ${taskName}`,
        method: 'PUT',
      });
      await dispatch(getAllTaskAction());
      await alert('Đã hoàn thành task: ' + taskName);
    } catch (err) {
      console.log(err);
    }
  };
};

export const rejectTaskAction = (taskName) => {
  return async (dispatch, getState) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
        method: 'PUT',
      });
      await dispatch(getAllTaskAction());
    } catch (err) {
      console.log(err);
    }
  };
};
