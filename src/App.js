import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        
        <Route path="/">
        <Home></Home>
        </Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
