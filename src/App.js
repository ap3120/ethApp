import './App.css';
import Loader from './Loader';
import Send from './Send';
import Transactions from './Transactions';

function App() {
    return (
        <div className="container">
            <Send />
            <Transactions />
        </div>
    );
}

export default App;
