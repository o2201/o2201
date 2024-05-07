import React, { useState } from 'react';

const TransferButtons = () => {
    const [accountId, setAccountId] = useState('');
    const [asset, setAsset] = useState('');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const transferToAlpaca = async () => {
        const response = await fetch('http://localhost:8080/transferToAlpaca', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accountID: accountId,
                amount: parseFloat(amount)
            }),
        });

        const result = await response.json();
        console.log(result);
    };

    const transferToBinance = async () => {
        const response = await fetch('http://localhost:8080/transferToBinance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                asset: asset,
                address: address,
                amount: parseFloat(amount)
            }),
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <div>
            <input type="text" placeholder="Account ID" onChange={e => setAccountId(e.target.value)} />
            <input type="text" placeholder="Asset" onChange={e => setAsset(e.target.value)} />
            <input type="text" placeholder="Address" onChange={e => setAddress(e.target.value)} />
            <input type="text" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
            <button onClick={transferToAlpaca}>Transfer to Alpaca</button>
            <button onClick={transferToBinance}>Transfer to Binance</button>
        </div>
    );
};

export default TransferButtons;