import { useState } from 'react';
import styles from './App.module.css';
import StepProgress from './components/Step/StepProgress/StepProgress';
import StepOneAddress from './components/Step/StepOneAddress/StepOneAddress';
import StepTwoShipping from './components/Step/StepTwoShipping/StepTwoShipping';
import StepThreePayment from './components/Step/StepThreePayment/StepThreePayment';
import ProgressControl from './components/Step/ProgressControl/ProgressControl';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';
import { StepProvider } from './components/context/StepContext';

export default function App() {
  const [step, setStep] = useState(1);
  const handleStepChange = (newStep) => setStep(newStep);

  return (
    <div className={styles.mainContainer}>
      <CartProvider>
        <div className={styles.step}>
          <StepProvider>
            <StepProgress currentStep={step} />
            <section className={styles.formContainer}>
              {step === 1 && <StepOneAddress />}
              {step === 2 && <StepTwoShipping />}
              {step === 3 && <StepThreePayment />}
            </section>
            <ProgressControl currentStep={step} onStepChange={handleStepChange} />
          </StepProvider>
        </div>
        <div className={styles.cart}>
          <Cart/>
        </div>
      </CartProvider>
    </div>
  );
}
