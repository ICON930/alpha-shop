import styles from './Cart.module.css'
import { ReactComponent as MinusButton} from '../../icons/minus.svg'
import { ReactComponent as PlusButton} from '../../icons/plus.svg'
import { productsData } from './cartData.js'

function ProductsInfo({id, name, img, price, quantity }) {
  return(
    <div className={styles.productContainer} id={id} data-count="0" data-price={price}>
      <img className={styles.productImgContainer} alt={name} src={img} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusButton className={styles.minusButton}/>
            <span className={styles.productCount}>{quantity}</span>
            <PlusButton className={styles.plusButton}/>
          </div>
        </div>
        <div className={styles.productPrice}>${price}</div>
      </div>
    </div>
  )
}

export default function CartItem() {
  return(
    <section className={styles.productList}>
      {productsData.map(item => <ProductsInfo {...item} key={item.id}/>)}
    </section>
  )
}