import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext()

export function CartProvider({children}){
    const[cartItems, setCartItems]=useState([])

    const addToCart=(item)=>{
        setCartItems([...cartItems,item])
    }

    const removeFromCart=(item)=>{
        setCartItems(cartItems.filter((p)=>p!==item))
    }

    const clearCart=(item)=>{
        setCartItems([])
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext)
}