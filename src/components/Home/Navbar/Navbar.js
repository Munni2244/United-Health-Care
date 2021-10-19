import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const {user, SignOut}=useAuth();
    return (
<div className=""style={{backgroundColor: '#e3f2fd'}}>
<div className="container">
          <nav class="navbar navbar-light ">
  <div class="container-fluid">
    <Link to="home" class="navbar-brand"><img width="150px" height="50px" src={logo} alt="" /></Link>
   <div className="navbbar navbar-expand-lg">
       <Link to="/home">Home</Link>
       <Link to="/survice">Survices</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/about">About</Link>
       <Link to="/login">Register</Link>
       
       <span className="ms-3 fw-bold fs-5">{user.displayName}</span>
       <img width="60px" className="rounded-circle" src={user.photoURL} alt="" />
       {user.email?  <button className="btn btn-danger" onClick={SignOut}> Log Out</button>: <Link to="/login"> Login </Link>}
      
   </div>
  </div>
</nav>
        </div>
</div>
    );
};

export default Navbar;