import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <section id="about">
      <div className="container-fluid">
      <div className="row bg- text-dark footter">
        
        <div className="col-12 col-md-12 col-lg-3 ms-4 mt-4">
          <h1>United Foundation <i class="fas fa-walking text-warning"></i></h1>
        </div>
        <div className="col-12 col-md-12 col-lg-3 mt-4 footer-text">
        <h1>Health Care Guide</h1>
        <ul>
         <Link href=""> <li>Css</li>
          <li>How to Live Healthy</li>
          <li>Lifestyle</li>
        </Link>
        </ul>
      </div>
      <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
        <h2>Catagories</h2>
        <ul>
          <Link href=""><li>Enviroment</li>
          <li> Life Style</li>
          <li>  Ruls</li>
          <li> Motivate</li></Link>
        </ul>
      </div>
    
      <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
        <h2>Comunnity</h2>
        <ul>
          <Link href="">
          <li>Issues</li>
            <li>Discussions</li>
              <li> Corporate sponsors</li>
                <li> Open Collective</li>
               
                 </Link>
        </ul>
      </div>
     
      </div>
    </div>
    </section>
    <footer style={{backgroundColor:'rgb(170, 197, 248)'}} className="col-12 text-center text-dark">
      <small >&copy;Copyright 2021 24july United  proggress</small>
    </footer>
  
        </div>
    );
};

export default Footer;