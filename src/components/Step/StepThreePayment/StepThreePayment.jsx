import { useContext } from 'react';
import styles from './StepThreePayment.module.css';
import StepContext from '../../context/StepContext';

export default function StepThreePayment() {
  const { setCardInfo } = useContext(StepContext)

  const handleCardInfoChange = (event) => {
    const { name, value } = event.target;
    setCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };
  
  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBodyItem}>
        <div className={styles.inputGroup6}>
          <div className={styles.inputLabel}>持卡人姓名</div>
          <input
            className={styles.inputStyle}
            type="text"
            name="cardHolder"
            placeholder="John Doe"
            onChange={handleCardInfoChange}
          />
        </div>
        <div className={styles.inputGroup6}>
          <div className={styles.inputLabel}>卡號</div>
          <input
            className={styles.inputStyle}
            type="text"
            name="cardNumber"
            placeholder="1111 2222 3333 4444"
            onChange={handleCardInfoChange}
          />
        </div>
        <div className={styles.inputGroup5}>
          <div className={styles.inputLabel}>有效期限</div>
          <input
            className={styles.inputStyle}
            type="text"
            name="expirationDate"
            placeholder="MM/YY"
            onChange={handleCardInfoChange}
          />
        </div>
        <div className={styles.inputGroup5}>
          <div className={styles.inputLabel}>CVC / CCV</div>
          <input
            className={styles.inputStyle}
            type="text"
            name="cvc"
            placeholder="123"
            onChange={handleCardInfoChange}
          />
        </div>
      </section>
    </form>
  );
}