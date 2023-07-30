import styles from './Cart.module.css';
import { ReactComponent as MinusButton } from '../../icons/minus.svg';
import { ReactComponent as PlusButton } from '../../icons/plus.svg';

function ProductsInfo({ id, name, img, price, quantity, handleQuantityChange }) {
  return (
    <div className={styles.productContainer} id={id} data-count={quantity} data-price={price}>
      <img className={styles.productImgContainer} alt={name} src={img} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusButton className={styles.minusButton} onClick={() => handleQuantityChange(id, -1)} />
            <span className={styles.productCount}>{quantity}</span>
            <PlusButton className={styles.plusButton} onClick={() => handleQuantityChange(id, 1)} />
          </div>
        </div>
        <div className={styles.productPrice}>${price}</div>
      </div>
    </div>
  );
}

export default function CartItem({ cartItems, setCartItems }) {
  // 處理數量變動，並更新商品清單
  const handleQuantityChange = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    );
  };

  return (
    <section className={styles.productList}>
      {cartItems.map(item => (
        <ProductsInfo
          {...item}
          key={item.id}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </section>
  );
}