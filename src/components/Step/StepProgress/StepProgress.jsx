import styles from "./StepProgress.module.css"
import  { ReactComponent as PgComplete } from "../../../icons/pg-complete.svg"

export default function StepProgress ({ currentStep }) {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <span className={`${styles.progressGroup} ${styles.active}`} data-phase="address">
          <span className={styles.progressIcon}>
            {currentStep > 1 ? <PgComplete className={styles.completeIcon} /> : <span className={styles.text}>1</span>}
          </span>
          <span className={styles.progressLabel}>寄送地址</span>
        </span>
        <span className={styles.progressBar} data-order="1"></span>
        <span className={`${styles.progressGroup} ${currentStep < 2 && styles.inactive}`} data-phase="shipping">
          <span className={styles.progressIcon}>
            {currentStep > 2 ? <PgComplete className={styles.completeIcon} /> : <span className={styles.text}>2</span>}
          </span>
          <span className={styles.progressLabel}>運送方式</span>
        </span>
        <span className={styles.progressBar} data-order="2"></span>
        <span className={`${styles.progressGroup} ${currentStep < 3 && styles.inactive}`} data-phase="credit-card">
          <span className={styles.progressIcon}>
            {currentStep > 3 ? <PgComplete className={styles.completeIcon} /> : <span className={styles.text}>3</span>}
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section>
    </div>
  )
}

