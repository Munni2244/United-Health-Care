import React from 'react';
import './Icon.css';

const Icon = () => {
    return (
        <div className="container my-5 text-center">
            <div className="row">
             <div style={{border:'1px solid gray', }} className="col-lg-4 col-md-6 col-12  p-5 shadow icon-box">
                 <h1><i class="fas fa-syringe text-danger"></i></h1>
                 <h4>Vaccination</h4>
                 <p>A full list of our country-specific sources is available </p>
             </div>

             <div style={{border:'1px solid gray', }} className="col-lg-4 col-md-6 col-12 p-5 shadow icon-box">
                 <h1><i class="fas fa-stethoscope text-danger"></i></h1>
                 <h4>Therapy</h4>
                 <p>Find San Diego Therapy. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly</p>
             </div>

             <div style={{border:'1px solid gray', }} className="col-lg-4 col-md-6 col-12 p-5 shadow  icon-box">
                 <h1><i class="fas fa-user-md text-danger"></i></h1>
                 <h4>Physicians</h4>
                 <p>A physician is a general term for a doctor who has earned a medical degree.</p>
             </div>
            </div>
        </div>
    );
};

export default Icon;