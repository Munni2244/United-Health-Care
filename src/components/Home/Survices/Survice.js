import React from 'react';
import './Survice.css'

const Survice = (props) => {
    const {name, img}=props.survices;
    return (
        <div  className="col-4 ">

        <div className="survice">
        <img width="400px" height="400px" src={img} alt="" />
            <h1 className="mt-4">{name}</h1>
            <button className="btn  btn-secondary mb-2">See Details</button>
        </div>
        
        </div>
    );
};

export default Survice;