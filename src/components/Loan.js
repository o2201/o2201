import React, { useState } from 'react';

const Loan = () => {
    const [accountId, setAccountId] = useState('');
    const [amount, setAmount] = useState('');
    const [interest, setInterest] = useState('');
    const [dueDate, setDueDate] = useState('');

    const requestLoan = async () => {
        const response = await fetch('http://localhost:8080/requestLoan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: accountId, // assuming the account ID is used as the loan ID
                accountID: accountId,
                amount: parseFloat(amount),
                interest: parseFloat(interest),
                dueDate: dueDate
            }),
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <div>
            <input type="text" placeholder="Account ID" onChange={e => setAccountId(e.target.value)} />
            <input type="text" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
            <input type="text" placeholder="Interest" onChange={e => setInterest(e.target.value)} />
            <input type="text" placeholder="Due Date" onChange={e => setDueDate(e.target.value)} />
            <button onClick={requestLoan}>Request Loan</button>
        </div>
    );
};

export default Loan;