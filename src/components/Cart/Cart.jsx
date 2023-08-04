import { useContext } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { cartItems, setCartItems, totalPrice } = useContext(CartContext)
  
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <CartItem cartItems={cartItems} setCartItems={setCartItems} />
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${totalPrice}</div>
      </section>
    </section>
  ); 
}