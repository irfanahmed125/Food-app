import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Product/ProductSlice'
import CartReducer from './Cart/CartSlice'

const store = configureStore({
    reducer : {
        product : ProductReducer,
        cart : CartReducer,

    },
});
export default store;