import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
import {productDetailsReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';
import { orderCreateReducer,orderDetailsReducer ,orderPayReducer,orderListMyReducer} from './reducers/orderReducers';


const reducer = combineReducers({productList: productListReducer, 
  productDetails:productDetailsReducer,
cart: cartReducer,
userLogin:userLoginReducer,
userRegister:userRegisterReducer,
userDetails:userDetailsReducer,userUpdateProfile:userUpdateProfileReducer,
orderCreate:orderCreateReducer,
orderDetails:orderDetailsReducer,
orderPay:orderPayReducer,
orderListMy:orderListMyReducer});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :[]

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) :[]


const initialState = {
  cart:{cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: {userInfo: userInfoFromStorage}
 

};
const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  devTools: true, // Enables Redux DevTools automatically
});

export default store;
