import React from 'react'
import Navbar from './components/Navbar'
import { useCart } from './context/CartContext'

const UserCart = () => {
    let {cartItems, removeFromCart, clearCart}=useCart()
  return (
    <>
        <Navbar/>
        
        <div>
        {cartItems.length<=0 && <p>Cart is empty</p>} 
        {
            

cartItems.length>0 && 
            cartItems.map((item)=>{
                return(
                    <>
                    <div className='cart-section'>
                        <div className='cart-img'>
                            <img src={item.image}/>
                        </div>
                        <div className="cart-details">
                            <h3>{item.product}</h3>
                            <h2>
                                {item.price}
                            </h2>
                            <h3>{item.model}</h3>
                        </div>
                        <button onClick={()=>removeFromCart(item)}>Remove from Cart</button>
                    </div>
                    </>
                )
            })
        }
    </div>
    {cartItems.length>0 && <button onClick={()=>clearCart()}>Clear Cart</button>}
    </>
  )
}

export default UserCart