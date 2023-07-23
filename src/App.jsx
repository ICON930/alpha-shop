import styles from './App.module.css';
import StepProgress from './components/Step/StepProgress/StepProgress';
import StepOneAddress from './components/Step/StepOneAddress/StepOneAddress';
import StepTwoShipping from './components/Step/StepTwoShipping/StepTwoShipping';
import StepThreePayment from './components/Step/StepThreePayment/StepThreePayment';
import ProgressControl from './components/Step/ProgressControl/ProgressControl';
import Cart from './components/Cart/Cart';

export default function App () {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.step}>
        <StepProgress/>
        <section className={styles.formContainer}>
          {/* <StepOneAddress/> */}
          {/* <StepTwoShipping/> */}
          <StepThreePayment/>
        </section>
        <ProgressControl/> 
      </div>
      <div className={styles.cart}>
        <Cart/>
      </div>
    </div>
  )
}