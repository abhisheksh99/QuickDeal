import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { productCreateReviewReducer, productListReducer, productTopRatedReducer } from './reducers/productReducers';
import {productDetailsReducer,productDeleteReducer,productCreateReducer,productUpdateReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer,userListReducer,userDeleteReducer,userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer,orderDetailsReducer ,orderPayReducer,orderListMyReducer, orderAllReducer, orderDeliverReducer} from './reducers/orderReducers';


const reducer = combineReducers({productList: productListReducer, 
  productDetails:productDetailsReducer,productDelete:productDeleteReducer,productCreate:productCreateReducer,productUpdate:productUpdateReducer,productCreateReview:productCreateReviewReducer,productTopRated:productTopRatedReducer,
cart: cartReducer,
userLogin:userLoginReducer,
userRegister:userRegisterReducer,
userDetails:userDetailsReducer,userUpdateProfile:userUpdateProfileReducer,userList:userListReducer,userDelete:userDeleteReducer,userUpdate:userUpdateReducer,
orderCreate:orderCreateReducer,
orderDetails:orderDetailsReducer,
orderPay:orderPayReducer,
orderListMy:orderListMyReducer,orderAll:orderAllReducer,orderDeliver:orderDeliverReducer});

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
