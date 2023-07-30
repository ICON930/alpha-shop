import { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import { productsData } from './cartData';

export default function Cart() {
  const [cartItems, setCartItems] = useState(productsData);

  // 當商品數量變動時，重新計算總金額
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);

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
