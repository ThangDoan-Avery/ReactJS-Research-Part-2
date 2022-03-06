import { combineReducers, createStore } from 'redux';
import { baiTapGameXucXacReducer } from './baiTapGameXucXacReducer';
import { baiTapQuanLyNguoiDungReducer } from './baiTapQuanLyNguoiDungReducer';
import { carDetailReducer } from './carDetailReducer';
import { gioHangReducer } from './gioHangReducer';
import { productDetailReducer } from './productDetailReducer';

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  carDetailReducer,
  productDetailReducer,
  gioHangReducer,
  baiTapGameXucXacReducer,
  baiTapQuanLyNguoiDungReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
