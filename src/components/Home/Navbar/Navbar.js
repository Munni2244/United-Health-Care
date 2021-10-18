import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';

const Navbar = () => {
    return (
<div className=""style={{backgroundColor: '#e3f2fd'}}>
<div className="container">
          <nav class="navbar navbar-light ">
  <div class="container-fluid">
    <Link  class="navbar-brand"><img width="150px" height="50px" src={logo} alt="" /></Link>
   <div className="navbbar">
       <Link to="/">Contact</Link>
       <Link to="/">About</Link>
       <Link to="/">Login</Link>
   </div>
  </div>
</nav>
        </div>
</div>
    );
};

export default Navbar;