import React, { useContext } from 'react';
import { AiFilPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import Tilt from 'react-vanilla-tilt';
import Loader from './Loader';
import './App.css';
import { TransactionContext } from './context/TransactionContext';

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder = {placeholder}
        type={type}
        value={value}
        onChange={(e) => handleChange(e, name)}
        className = "input-field"
    />
);
export default function Send(){
    const {connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, isLoading} = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const {addressTo, amount, message} = formData;
        e.preventDefault();
        if(!addressTo || !amount || !message) return;
        sendTransaction();
    }

    return (
        <div className="send-container">
            {!currentAccount && (
                <>
                <button type="button" onClick={connectWallet} className="button">Connect Wallet</button>
                <p>Don't have Metamask yet, click <a href="https://metamask.io/" target="_blank">here</a></p>
                </>
            )}
            <div className="card">
                <div className="icon-border">
                    <SiEthereum fontSize={20} className="eth-icon" />
                </div>
                <p>{`${currentAccount.slice(0,5)}...${currentAccount.slice(currentAccount.length-5,)}`}</p>
                <p>Ethereum</p>
                <Input placeholder="Address to" name="addressTo" type="text" handleChange={handleChange}/>
                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}/>
                <Input placeholder="Message" name="message" type="text" handleChange={handleChange}/>
                <div>
                    {isLoading ? (<Loader />) : (<button type="button" onClick={handleSubmit} className="button" style={{width: '100%'}}>Send Now</button>)}    
                </div>
            </div>
        </div>
    );
}
