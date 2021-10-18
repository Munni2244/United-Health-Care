import React from 'react';
import useSurvices from '../../../hooks/useSurvices/useSurvice';
import Survice from './Survice';

const Survices = () => {
 const {survices, setSurvices}= useSurvices();
 
    return (
      <div className="container">
            <div className="row my-5 g-3">
            {
                survices?.map(survice=> <Survice survices={survice} key={survice.id}></Survice>)
            }
        </div>
      </div>
    );
};

export default Survices;