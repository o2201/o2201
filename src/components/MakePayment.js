import React, { useState } from 'react';

const MakePayment = () => {
    const [paymentStatus, setPaymentStatus] = useState('');

    const makePayment = async () => {
        const senderId = prompt('Enter sender ID:'); // Get sender ID from user
        const receiverId = prompt('Enter receiver ID:'); // Get receiver ID from user
        const amount = prompt('Enter amount:'); // Get amount from user

        const response = await fetch('http://localhost:8080/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                senderAccountID: senderId,
                receiverAccountID: receiverId,
                amount: parseFloat(amount)
            }),
        });

        const payment = await response.json();

        // Handle the response from the backend
        // This could involve updating the state of this component or a parent component
        console.log(payment); // use the payment constant

        setPaymentStatus('Payment made successfully');
    };

    // Call the function
    makePayment().catch((error) => {
        console.error('Error making payment:', error);
        setPaymentStatus('Error making payment');
    });

    return (
        <div>
            <button onClick={makePayment}>Make Payment</button>
            <p>{paymentStatus}</p>
        </div>
    );
};

export default MakePayment;