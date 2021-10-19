import React from 'react';
import { useParams } from 'react-router';
import useSurvices from '../../hooks/useSurvices/useSurvice';

const Details = () => {
    const {id}=useParams();
    const {survices, setSurvices}=useSurvices();
    const details= survices.find(survice=> survice.id===id);
    console.log(details);

    return (
        <div>
            <h1>{details?.name}</h1>
        </div>
    );
};

export default Details;