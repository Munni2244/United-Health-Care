import React from 'react';
import hos from '../../about-img/hos.jpg'

const About = () => {
    return (
<div className="container mt-5">
<div className="row">
            <div className="col-12 col-lg-6 col-md-6">
                <img width="500px" className="img-fluid" src={hos} alt="" />
            </div>
            <div className="col-12 col-lg-6 col-md-6">
                <div>
                    <h1>The United Health Care</h1>
                    <p>Some members of Congress are considering significant changes to Medicare that could have a devastating effect on millions of Americans. Proponents call these changes government “negotiation,” but what they are actually proposing is anything but that. These politicians want to repeal a key provision of the Medicare Part D program that protects robust coverage and access to medicines for seniors and people with disabilities.

                    Seniors and people with disabilities have robust access to medicines in Medicare Part D due in large part to a protection known as the “noninterference clause.” The noninterference clause prohibits the Secretary of Health and Human Services from interfering in the private negotiations – which already occur in Medicare Part D – between pharmaceutical manufacturers and Part D insurance plans or pharmacy benefit managers (PBMs).</p>
                </div>
            </div>
        </div>

     
</div>
    );
};

export default About;