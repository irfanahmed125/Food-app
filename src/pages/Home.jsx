import React, { useEffect } from 'react'
import { fetchProduct } from '../Features/Product/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Features/Cart/CartSlice';

const Home = () => {
  const {isLoading,product,isError,category}=useSelector(state=>state.product);
  const dispatch = useDispatch();

  const filterProduct = product.filter((item)=>item.category.includes(category));


    useEffect(()=>{

      dispatch(fetchProduct());
      
        },[]);
      

        if(isLoading){
          return(
            <h2 className='text-center mt-5 text-2xl'>Loading...</h2>
          )
        }
        if(isError){
          return(
            <h2 className='text-center mt-5 text-2xl'>Something went wrong</h2>
          )
        }
        if(!product || product.length===0){
          return(
            <h2 className='text-center mt-5 text-2xl'>No Data</h2>
          )
        }
  return (
  <>
  <h3 className='text-center mt-3 text-2xl font-serif py-5'>Fresh Products</h3>
  <div className='flex flex-wrap'>
    {
      filterProduct.map((product)=>{
        return(
          <>
          <div key={product.id} class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 hover:scale-110 duration-300">
      <div class="min-h-[200px]">
        <img src={product.img} class="w-full rounded-lg" />
      </div>
      <div class="p-6 text-center">
        <h3 class="text-1xl font-bold font-serif">{product.name}</h3>
        <p class="mt-3 text-sm text-gray-500 leading-relaxed">{product.description}</p>
          <h3 class="text-1xl font-bold font-serif">Price : ${product.price}</h3>

        <button type="button"
          class="mt-6 px-5 py-2.5 w-full rounded-lg text-black font-semibold text-sm tracking-wider border-none outline-none bg-lime-300 font-serif hover:bg-amber-500 transition ease-in-out delay-260" onClick={(e)=>dispatch(add(product))}>AddToCart</button>
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

export default Home