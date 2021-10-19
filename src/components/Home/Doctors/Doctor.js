import React from 'react';
import doc1 from '../../../about-img/doc1.jpg'
import doc2 from '../../../about-img/doc2.jpg'
import doc3 from '../../../about-img/doc3.jpg'

const Doctor = () => {
    return (
        <div className="container">
        <h1 className="text-center text-info">Our Speciallist</h1>
               <div className="row mt-5">
               <div className="col-lg-4">
                  <img width="320px" height="320px" src={doc1} alt="" />
                  <h4>Dr. Harry</h4>
               </div>
               <div className="col-lg-4">
                  <img width="320px" height="320px" src={doc2} alt="" />
                  <h4>Dr. Marina</h4>
               </div>
               <div className="col-lg-4">
                  <img width="320px" height="320px" src={doc3} alt="" />
              <h4>Dr. Hayat</h4>
           </div>
        </div>
        </div>
    );
};

export default Doctor;