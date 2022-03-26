import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Costumers from './pages/Customers';
import CostumerRegister from './pages/CustomerRegister';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/customers/register" component={ CostumerRegister } />
        <Route path="/customers" component={ Costumers } />
        <Route path="/login" component={ Login } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
