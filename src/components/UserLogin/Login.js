import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { SignWithGoogle, HandleEmail, HandlePassword,HandleRegistation,error, toggleLogin, isLogin,HandleName}=useAuth();
   
    return (
        < div className=" d-flex justify-content-center ">
<div className="text-light w-50 login-form shadow">
        <h1> Please {isLogin?'Login':'Register'} </h1>
<form onSubmit={HandleRegistation}>
{ !isLogin && <div class="mb-2">
    <label for="exampleInputName1" className="form ">Name</label>
    <input onBlur={HandleName} type="text" className="form-control" id="exampleInputName1" required/>
  </div>}
  <div class="mb-2">
    <label for="exampleInputEmail1" className="form ">Email address</label>
    <input onBlur={HandleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onBlur={HandlePassword} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="text-danger"><p>{error}</p></div>
  <div class="mb-3 form-check">
    <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Already Registered?</label>
  </div>
  <button type="submit" className="btn btn-info loginBtn">Submit</button> <br />
  <Link to="/home"><input onClick={SignWithGoogle} className="inputBtn" type="button" value="Google Sign In" /></Link>

</form>
        </div>

       
</div>
    );
};

export default Login;