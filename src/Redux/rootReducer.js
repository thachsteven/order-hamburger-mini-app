import { combineReducers } from 'redux';
import BaiTapBurgerReducer from './BaiTapBurgerReducer';

//store tổng của ứng dụng
const rootReducer = combineReducers({
  BaiTapBurgerReducer,
});

export default rootReducer;
