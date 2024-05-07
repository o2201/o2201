import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Loan from './Loan';
import Account from './Account';
import MakePayment from './MakePayment';
import Navbar from './Navbar';
import Payment from './Payment';
import Transaction from './Transaction';
import TransferButtons from './TransferButtons';
import CreateAccountForm from './CreateAccountForm';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/account" element={<Account />} />
                <Route path="/make-payment" element={<MakePayment />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/transfer-buttons" element={<TransferButtons />} />
                <Route path="/create-account" element={<CreateAccountForm />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);