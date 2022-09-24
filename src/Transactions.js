import React, {useContext} from 'react';

import {TransactionContext} from './context/TransactionContext';
import './App.css';

const shortenAddress = (address) => {
    return `${address.slice(0,5)}...${address.slice(address.length-4)}`;
}

const shortenMessage = (message) => {
    if (message.length >25) return message.slice(0,24);
    return message;
}

const TransactionRow = ({addressTo, addressFrom, timestamp, message, amount, url}) => {
    return (
        <tr>
            <td><a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank">{shortenAddress(addressFrom)}</a></td>
            <td><a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank">{shortenAddress(addressTo)}</a></td>
            <td><p>{amount}</p></td>
            <td>{message &&(<p>{shortenMessage(message)}</p>)}</td>
            <td>{timestamp}</td>
        </tr>
    );
}

export default function Transactions(){
    const {currentAccount, transactions} = useContext(TransactionContext);
    const transactionsDisplay = transactions.length>15? transactions.slice(transactions.length-15): transactions;
    return (
        <div className="transactions-container">
            {currentAccount ? (
                <>
                <h2>Latest transactions</h2>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <td>From</td>
                            <td>To</td>
                            <td>Amount (ETH)</td>
                            <td>Message</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsDisplay.reverse().map((transaction, index) => (
                            <TransactionRow key={index} {...transaction}/>
                        ))}
                    </tbody>
                </table>
                </>
            ):(
                <h2>Connect your account to see the latest transactions</h2>
            )}
        </div>
    );
}
