import{ createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItem : [],
        isLoading : false,
        isError : false,
        
    },
    reducers: {

         
      add: (state, action) => {
        const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);      
          if (itemIndex >= 0) {
          state.cartItem[itemIndex].qty += 1;
        } else {
          // const tempProduct = { ...action.payload, qty: 1 };
          // state.cartItem.push(tempProduct);
             state.cartItem =[...state.cartItem,action.payload]
        }
      },
      remove : (state,action)=>{
        state.cartItem=state.cartItem.filter((item)=>item.id !==action.payload);

      },
       // increment to cart
       incrementQuantity: (state, action) => {
  
        state.cartItem.map(item=>item.id == action.payload ? item.qty += 1 : null)
  
      },
  
      // decrement to cart
      decrementQuantity: (state, action) => {
       
        state.cartItem.map(item=>item.id == action.payload ? item.qty -= 1 : null)
  
      },

},

});
export const{add,remove,incrementQuantity,decrementQuantity}=cartSlice.actions;
export default cartSlice.reducer;




