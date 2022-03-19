import { combineReducers, createStore } from 'redux';
import { baiTapGameXucXacReducer } from './Reducers/baiTapGameXucXacReducer';
import { baiTapQuanLyNguoiDungReducer } from './Reducers/baiTapQuanLyNguoiDungReducer';
import { carDetailReducer } from './Reducers/carDetailReducer';
import { FakeBookAppReducer } from './Reducers/FakeBookAppReducer';
import { gioHangReducer } from './Reducers/gioHangReducer';
import { productDetailReducer } from './Reducers/productDetailReducer';

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  carDetailReducer,
  productDetailReducer,
  gioHangReducer,
  baiTapGameXucXacReducer,
  baiTapQuanLyNguoiDungReducer,
  FakeBookAppReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
