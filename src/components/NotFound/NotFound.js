import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../error.gif'

const NotFound = () => {
    return (
       <div style={{backgroundColor:'white'}} className="text-center ">
            <div className="text-center">
            <img width="" height="500px" src={error} alt="" />
            
        </div>
        <Link to="/home"><button style={{width:'300px'}} className="btn btn-danger mb-5">Go Home</button></Link>
       </div>
    );
};

export default NotFound;