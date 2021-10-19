import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSurvices from '../../hooks/useSurvices/useSurvice';

const Details = () => {
    const {name}=useParams();
    const [survices, setSurvices]=useState([]);
    const [detail, setDetail]=useState({});

useEffect(()=>{
 fetch(`https://raw.githubusercontent.com/Munni2244/api/main/survices.json`)
 .then(res=> res.json())
 .then(data=> setSurvices(data))
},[])

    useEffect(()=>{
        const details= survices.find(survice=> survice.name===name);
        console.log(details);
        setDetail(details)
    },[survices])

   

    return (
      <div className="container mt-5 pt-5 shadow-lg">
            <div style={{marginBottom:'300px'}} className="row p-5">
        <div className="col-lg-6">
        <h1>{detail?.name}</h1>
            <p>{detail?.desc}</p>
        </div>
        <div className="col-lg-6">
            <img width="500px" src={detail?.img} alt="" />
        </div>
        </div>
      </div>
    );
};

export default Details;