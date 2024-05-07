import React, { useEffect, useState } from 'react';

function Account() {
    const [account, setAccount] = useState(null);

    useEffect(() => { // This hook will run when the component mounts
        const accountID = localStorage.getItem('accountID'); // Retrieve the account ID from the local storage

        fetch(`http://localhost:8080/account/${accountID}`)
            .then(response => response.json())
            .then(data => setAccount(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Account</h2>
            {account && (
                <div>
                    <p>ID: {account.ID}</p>
                    <p>Balance: {account.Balance}</p>
                    <p>Currency: {account.Currency}</p>
                </div>
            )}
        </div>
    );
}

export default Account;