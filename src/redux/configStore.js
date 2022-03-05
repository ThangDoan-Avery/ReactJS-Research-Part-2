import { combineReducers, createStore } from 'redux';
import { carDetailReducer } from './carDetailReducer';
import { gioHangReducer } from './gioHangReducer';
import { productDetailReducer } from './productDetailReducer';

const rootReducer = combineReducers({
  //Nơi chứa State của ứng dụng
  carDetailReducer,
  productDetailReducer,
  gioHangReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
