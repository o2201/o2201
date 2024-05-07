import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/accounts">Accounts</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/loans">Loans</Link>
            <Link to="/create-account">Create Account</Link>
            <Link to="/make-payment">Make Payment</Link>
            <Link to="/transfer">Transfer</Link>
            {/* Add more links as needed */}
        </nav>
    );
}

export default Navbar;