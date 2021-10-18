import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../../../banner-imges/img1.jpg'
import img2 from '../../../banner-imges/img2.jpg'
import img3 from '../../../banner-imges/img3.jpg'

const Banner = () => {
    return (
        
            <div>
            <Carousel>
  <Carousel.Item>
    <img height="500px"
      className="d-block w-100 "
    src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="mb-2 text-warning">Cheast Exsersize</h3>
      <p className="mb-5">Physical therapists work with patients to improve their movement and manage their pain</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="500px"
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="mb-2 text-warning">Hand Pulled</h3>
      <p className="mb-5">Physical therapists help patients with injuries and chronic health </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="500px"
      className="d-block w-100 "
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="mb-2 text-warning">Pulled HarmString</h3>
      <p className="mb-5">Physical therapists work in a variety of settings, ranging from private clinics .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
   
    );
};

export default Banner;