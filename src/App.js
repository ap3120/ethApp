import './App.css';
import Loader from './Loader';
import Send from './Send';
import Particle from './Particles.js';
import Transactions from './Transactions';

function App() {
    return (
        <div className="container">
            <Particle/>
            <Send />
            <Transactions />
        </div>
    );
}

export default App;
