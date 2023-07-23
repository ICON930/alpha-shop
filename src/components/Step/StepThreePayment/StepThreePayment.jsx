import styles from './StepThreePayment.module.css'

export default function StepThreePayment () {
  return (
    <form data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBodyItem}>
        <div className={styles.inputGroup6}>
          <div className={styles.inputLabel}>持卡人姓名</div>
          <input className={styles.inputStyle} type="text" placeholder="John Doe" />
        </div>
        <div className={styles.inputGroup6}>
          <div className={styles.inputLabel}>卡號</div>
          <input className={styles.inputStyle} type="text" placeholder="1111 2222 3333 4444" />
        </div>
        <div className={styles.inputGroup5}>
          <div className={styles.inputLabel}>有效期限</div>
          <input className={styles.inputStyle} type="text" placeholder="MM/YY" />
        </div>
        <div className={styles.inputGroup5}>
          <div className={styles.inputLabel}>CVC / CCV</div>
          <input className={styles.inputStyle} type="text" placeholder="123" />
        </div>
      </section>
    </form>
  )
}