import { useContext } from 'react';
import styles from './ProgressControl.module.css'
import { ReactComponent as RightArrow} from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from '../../../icons/left-arrow.svg'
import CartContext from '../../context/CartContext';
import StepContext from '../../context/StepContext';

export default function ProgressControl ({currentStep, onStepChange}) {
  const { totalPrice } = useContext(CartContext)
  const { cardInfo } = useContext(StepContext)

  const handleNextStep = () => {
    onStepChange(currentStep + 1);
  };

  const handlePrevStep = () => {
    onStepChange(currentStep - 1);
  };

  const handleOrderConfirmation = () => {
    console.log('購物車總金額 (小計) :', totalPrice);
    console.log('持卡人姓名:', cardInfo.cardHolder);
    console.log('卡號:', cardInfo.cardNumber);
    console.log('有效期限:', cardInfo.expirationDate);
    console.log('CVC / CCV:', cardInfo.cvc);
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
          <button className={styles.next} onClick={handleOrderConfirmation}>
            確認下單
          </button>
        </section>
      )}
    </section>
  )
}