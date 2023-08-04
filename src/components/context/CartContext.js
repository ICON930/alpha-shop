import { useState, createContext } from 'react';
import { productsData } from '../Cart/cartData';

const CartContext = createContext()

export function CartProvider({ children }){
  const [ cartItems, setCartItems ] = useState(productsData);
  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return(
    <CartContext.Provider value={{ cartItems, setCartItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext