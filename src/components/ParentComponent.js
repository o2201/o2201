import React, { useState } from 'react';
import CreateAccountForm from './CreateAccountForm';
import Account from './Account';
import Loan from './Loan';
import Login from './Login';
import MakePayment from './MakePayment';
import Navbar from './Navbar';
import Payment from './Payment';
import Register from './Register';
import Transaction from './Transaction';
import TransferButtons from './TransferButtons';

function ParentComponent() {
    const [accountId, setAccountId] = useState(null);

    const createAccount = async (id, balance, currency) => {
        // Call the backend API to create a new account
        const response = await fetch('http://localhost:8080/account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ID: id, Balance: parseFloat(balance), Currency: currency }),
        });

        const account = await response.json();

        // Set the accountId state with the ID of the newly created account
        setAccountId(account.ID);
    };

    return (
        <div>
            <Navbar />
            <Login />
            <Register />
            <CreateAccountForm createAccount={createAccount} />
            {accountId && <Account accountId={accountId} />}
            <Loan />
            <MakePayment />
            <Payment />
            <Transaction />
            <TransferButtons />
        </div>
    );
}

export default ParentComponent;