import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Details from './components/SurviceDetails/Details';
import NotFound from './components/NotFound/NotFound';
import Login from './components/UserLogin/Login';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Survices from './components/Home/Survices/Survices';
import PrivateRoute from './components/Context/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
     
     <AuthProvider>
     <BrowserRouter>
     <Navbar/>
      <Switch>
        
        <Route exact path="/">
        <Home></Home>
        </Route>
        
        <Route path="/home">
        <Home></Home>
        </Route>
        
        
        <Route path="/survice">
        <Survices></Survices>
        </Route>
        
        <PrivateRoute path="/contact">
        <Contact></Contact>
        </PrivateRoute>
        
        
        <PrivateRoute path="/about">
       <About></About>
        </PrivateRoute>
        
        
        <Route path="/login">
        <Login></Login>
        </Route>
        
        <PrivateRoute path="/details/:name">
      <Details></Details>
        </PrivateRoute>
        
        <Route path="*">
      <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
     </AuthProvider>
    </div>
  );
}

export default App;
