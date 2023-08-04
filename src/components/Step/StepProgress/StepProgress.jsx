import styles from "./StepProgress.module.css"
import  { ReactComponent as PgComplete } from "../../../icons/pg-complete.svg"

const Step = ({ currentStep, stepNumber }) => (
    <span className={styles.progressIcon}>
      {currentStep > stepNumber ? <PgComplete className={styles.completeIcon} /> : <span className={styles.text}>{stepNumber}</span>}
    </span>
);

export default function StepProgress ({ currentStep }) {
  return (
    <div>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <span className={`${styles.progressGroup} ${styles.active}`} data-phase="address">
          <Step currentStep={currentStep} stepNumber={1} />
          <span className={styles.progressLabel}>寄送地址</span>
        </span>
        <span className={styles.progressBar} data-order="1"></span>
        <span className={`${styles.progressGroup} ${currentStep < 2 && styles.inactive}`} data-phase="shipping">
          <Step currentStep={currentStep} stepNumber={2} />
          <span className={styles.progressLabel}>運送方式</span>
        </span>
        <span className={styles.progressBar} data-order="2"></span>
        <span className={`${styles.progressGroup} ${currentStep < 3 && styles.inactive}`} data-phase="credit-card">
          <Step currentStep={currentStep} stepNumber={3} />
          <span className={styles.progressLabel}>付款資訊</span>
        </span>
      </section>
    </div>
  )
}


