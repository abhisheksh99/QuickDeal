import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
import {productDetailsReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';
const reducer = combineReducers({productList: productListReducer, 
  productDetails:productDetailsReducer,
cart: cartReducer,
userLogin:userLoginReducer,
userRegister:userRegisterReducer,
userDetails:userDetailsReducer,userUpdateProfile:userUpdateProfileReducer});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :[]

const initialState = {
  cart:{cartItems: cartItemsFromStorage},
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
