import React, { useState } from 'react';

function CreateAccountForm() {
    const [id, setId] = useState('');
    const [balance, setBalance] = useState('');
    const [currency, setCurrency] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ID: id, Balance: parseFloat(balance), Currency: currency }),
        });

        const account = await response.json();

        // Do something with the newly created account
        console.log(account);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <label>
                Balance:
                <input type="text" value={balance} onChange={(e) => setBalance(e.target.value)} />
            </label>
            <label>
                Currency:
                <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
            </label>
            <button type="submit">Create Account</button>
        </form>
    );
}

export default CreateAccountForm;