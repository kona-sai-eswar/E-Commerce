import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {cartItems}=useCart()
  return (
    <>
    <div className='navSection'>
      <div className='title'>
        <h2><Link to="/">E-Mart</Link></h2>
      </div>
      <div className='search'>
        <input type="text" placeholder='search..'/>
      </div>
      <div className='user'>
        <div className='user-details'>sign in/sign up</div>
        <div className='cart'><Link to="/cart">Cart <span>{cartItems.length}</span></Link></div>
      </div>
    </div>
    <div className='subMenu'>
      <ul>
        <li><Link to="/mobiles">Mobiles</Link></li>
        <li><Link to="/computers">Computers</Link></li>
        <li><Link to="/watches">Watches</Link></li>
        <li><Link to="/fridges">Fridges</Link></li>
        <li><Link to="/ac">ACs</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar