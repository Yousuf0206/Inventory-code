// PurchaseAmountComponent.tsx
import React from 'react';
import  UserContext  from './userContext';

const PurchaseAmountComponent: React.FC = () => {
    const  role : any = React.useContext(UserContext);
  
    if (role!== 'admin') {
      return null;
    }
  
    //...
  

    function setPurchaseAmount(value: string): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div>
      <h2>Purchase Amount</h2>
      <input type="number" value = {purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} />
    </div>
  );
}

export default PurchaseAmountComponent;