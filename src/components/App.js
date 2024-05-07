// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ParentComponent from './ParentComponent';
import Transaction from './Transaction';
import Payment from './Payment';
import Loan from './Loan';
import TransferButtons from './TransferButtons';
import Login from './Login';
import Register from './Register';
import Account from './Account';
import CreateAccountForm from './CreateAccountForm';
import MakePayment from './MakePayment';

function App() {
    return (
        <Router>
            <div>
                <h1>Banking App</h1>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/accounts" element={<><Account /><TransferButtons /></>} />
                    <Route path="/create-account" element={<CreateAccountForm />} />
                    <Route path="/make-payment" element={<MakePayment />} />
                    <Route path="/transaction" element={<Transaction />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/loan" element={<Loan />} />
                    <Route path="/parent" element={<ParentComponent />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;