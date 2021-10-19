import React from 'react';
import { Link } from 'react-router-dom';
import './Survice.css'

const Survice = (props) => {
    const {name, img}=props.survices;
    return (
        <div className="col-12 col-md-6 col-lg-4  ">

        <div className="survice">
        <img width="400px" height="400px" src={img} alt="" />
            <h1 className="mt-4">{name}</h1>
           <Link to={`details/${name}`}> <button className="btn  btn-secondary mb-2">See Details</button></Link>
        </div>
        </div>
    );
};

export default Survice;