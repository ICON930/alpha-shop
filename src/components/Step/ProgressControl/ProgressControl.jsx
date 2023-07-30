import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow} from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg'

export default function ProgressControl ({currentStep, onStepChange}) {
  const handleNextStep = () => {
    onStepChange(currentStep + 1);
  };

  const handlePrevStep = () => {
    onStepChange(currentStep - 1);
  };

  return (
    <section className={styles.progressControlContainer}>
      {currentStep === 1 && (
        <section className={styles.buttonGroup} data-phase="address">
          <button className={styles.hiddenPrev}></button>
          <button className={styles.next} onClick={handleNextStep}>
            下一步
            <RightArrow className={styles.rightArrow}/>
          </button>
        </section>
      )}

      {currentStep === 2 && (
        <section className={styles.buttonGroup} data-phase="shipping">
          <button className={styles.prev} onClick={handlePrevStep}>
            <LeftArrow className={styles.leftArrow}/>
            上一步
          </button>
          <button className={styles.next} onClick={handleNextStep}>
            下一步
            <RightArrow className={styles.rightArrow}/>
          </button>
        </section>
      )}

      {currentStep === 3 && (
        <section className={styles.buttonGroup} data-phase="credit-card">
          <button className={styles.prev}  onClick={handlePrevStep}>
            <LeftArrow className={styles.leftArrow}/>
            上一步
          </button>
          <button className={styles.next}>
            確認下單
          </button>
        </section>
      )}
    </section>
  )
}