import React, { useState } from 'react';

const Transaction = () => {
    const [transactionId, setTransactionId] = useState('');
    const [accountId, setAccountId] = useState('');
    const [amount, setAmount] = useState('');

    const createTransaction = async () => {
        const response = await fetch('http://localhost:8080/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ID: transactionId,
                AccountID: accountId,
                Amount: parseFloat(amount)
            }),
        });

        const transaction = await response.json();

        console.log(transaction); // use the transaction constant
    };

    return (
        <div>
            <input type="text" placeholder="Transaction ID" onChange={e => setTransactionId(e.target.value)} />
            <input type="text" placeholder="Account ID" onChange={e => setAccountId(e.target.value)} />
            <input type="text" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
            <button onClick={createTransaction}>Create Transaction</button>
        </div>
    );
};

export default Transaction;