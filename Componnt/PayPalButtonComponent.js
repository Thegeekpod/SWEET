import React, { useState, useEffect, useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const PayPalButton = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [projectName, setProjectName] = useState('');
  const [showPayPalButtons, setShowPayPalButtons] = useState(false);
  const [showcustompay, setShowcustompay] = useState(true);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: parseFloat(customAmount).toFixed(2),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      saveDataToApi(customAmount, projectName);
    });
  };

  const onError = (err) => {
    console.error('PayPal Error:', err);
  };

//   const saveDataToApi = (customAmount, projectName) => {
//     const apiEndpoint = 'your_api_endpoint'; // Replace with your actual API endpoint
//     const requestData = {
//       price: customAmount,
//       projectName: projectName,
//     };

//     axios.post(apiEndpoint, requestData)
//       .then(response => {
//         console.log('Data saved successfully:', response.data);
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

  const handlePayNowClick = () => {
    setShowPayPalButtons(true);
    setShowcustompay(false);
  };

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
    setShowPayPalButtons(false);
    setShowcustompay(true);
  };

  return (
    <div>
     <p>Please Payment Your Token Ammount(40%)</p>  
<input
        type="text"
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter custom amount"
        value={customAmount}
        onChange={(e) => handleCustomAmountChange(e.target.value)}
      />
      {showcustompay &&
        <button onClick={handlePayNowClick}>Pay Now</button>}

      {showPayPalButtons && (
        <PayPalScriptProvider options={{ 'client-id': 'AYoOB6WNY6aHswj4Q2qBKD2Azsuxve2dSmvpYxTZtd2sa2wq-igVyKTm9T80HI6lzPeW8JOZDktjHHBF' }}>
          <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onError={(err) => onError(err)}
          />
        </PayPalScriptProvider>
      )}
        
      
      <style jsx>
{`/* Container styles */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #80808026;
  border-radius: 10px;
  margin: 25px 28%;
  padding: 19px;
}
@media only screen and (max-width: 768px)
{
    div {
        
        margin: 25px 5%;
        
      }
}
/* Input styles */
input {
  margin: 8px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Button styles */
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* PayPal button container styles */
.paypal-buttons-container {
  margin-top: 15px;
}
`}
      </style>
    </div>
  );
};

export default PayPalButton;
