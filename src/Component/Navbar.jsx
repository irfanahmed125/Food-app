import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { FaShoppingCart } from "react-icons/fa";
import { setCategory } from '../Features/Product/ProductSlice';
import { Link } from 'react-router-dom';



const Navbar = () => {

 const  {cartItem} =useSelector(state=>state.cart);
  const dispatch = useDispatch();

  const total = cartItem.reduce((p,c)=>p + c.price * c.qty,0);

  const handleChange =(e)=>{
    dispatch(setCategory(e.target.value));
  }
  return (
    <>
    <div className='bg-lime-300 flex justify-between items-center px-4 md:px-10 py-4 font-serif'>
      
      <Link to={'/'} className='text-1xl font-semibold hover:text-amber-600 transition ease-in-out delay-220'>Food-Store</Link>
      <ul className='flex space-x-6 items-center'>

        <Link  to={'/'} className='text-1xl font-semibold hover:text-amber-600 transition ease-in-out delay-220'>HOME</Link>
        <Link to={'/cart'} className='text-1xl mt-1 hover:text-amber-600 transition ease-in-out delay-220 font-semibold'>CART
        {cartItem.length}
        </Link>
        
        <span>|</span>

        <h3 className='text-1xl font-semibold'>TOTAL: {total.toFixed(2)}</h3>

        <select className='hidden md:inline lg:inline px-1 py-1' onChange={(e)=>handleChange(e)}>
        <option value="Fruits">Search By Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Cooking ingredients">Cooking ingredients</option>
        </select>

      </ul>

    </div>
   
    </>
  )
}

export default Navbar