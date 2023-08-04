import { createContext } from 'react';
import { useState } from 'react';

const StepContext = createContext();

export function StepProvider({ children }){
  const [cardInfo, setCardInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    expirationDate: '',
    cvc: ''
  });

  return(
    <StepContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </StepContext.Provider>
  )
}

export default StepContext