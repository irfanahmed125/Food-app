import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, remove } from '../Features/Cart/CartSlice';

const Cart = () => {

  const {cartItem,isError,isLoading}=useSelector(state=>state.cart);
  const dispatch = useDispatch();

  if(isLoading){
    return(
      <h2 className='text-center text-xl mt-5'>Loading...</h2>
    )
  }
  if(isError){
    return(
      <h2 className='text-center text-xl mt-5'>Something went wrong.</h2>
    )
  } 
  if(!cartItem || cartItem.length ===0){
    return(
      <h2 className='text-center text-xl mt-5'>No Data</h2>
    )
  }


  return (
    <>

    <div className='flex flex-wrap my-4'>
      {
        cartItem.map((item,index)=>{
          return(
            <>
             <div key={item.id} class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[300px] max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 hover:scale-110 duration-300">
      <div class="min-h-[200px]">
        <img src={item.img} class="w-full" />
      </div>

      <div class="p-6">
        <h3 class="text-gray-800 text-xl font-bold">{item.name}</h3>
        <p class="mt-4 text-sm text-black-500 leading-relaxed font-serif"> Quantity : 
          <span className='mx-2'>
            <button className='mx-1' onClick={(e)=>dispatch(decrementQuantity(item.id))}> - </button>
          </span>
          {item.qty}
          <span>
            <button className='mx-1' onClick={(e)=>dispatch(incrementQuantity(item.id))}>+</button>
          </span>
        </p>
        <span className='mt-4 text-sm text-black-500 leading-relaxed font-serif'>Price : {item.price}</span>
        {/* <p className='mt-4 text-sm text-black-500 leading-relaxed'>Price : {item.price}</p> */}
        <button type="button"
          class="mt-6 px-5 py-2.5 rounded-lg text-black font-serif font-semibold text-sm tracking-wider border-none outline-none bg-lime-300 w-full hover:bg-amber-500 transition ease-in-out delay-260"
          onClick={(e)=>dispatch(remove(item.id))}>Remove</button>
      </div>
    </div>
      
            
            </>
          )
        })
      }
   
    </div>
  
    
    </>
  )
}

export default Cart