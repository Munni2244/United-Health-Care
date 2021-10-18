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
    src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="text-info mb-3"><i class="fas fa-running text-warning"></i> WELCOME TO UNITED HEALTH CARE </h1>
      <p className="mb-5 text-primary">Founded in 1999, the United Health Foundation is committed to developing and supporting innovative and evidence-based activities that help the health system ...</p>
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
    <h1 className="text-info mb-3"> <i class="fas fa-running text-warning"></i>  WELCOME TO UNITED HEALTH CARE</h1>
      <p className="mb-5 text-primary">Founded in 1999, the United Health Foundation is committed to developing and supporting innovative and evidence-based activities that help the health system ...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="500px"
      className="d-block w-100 "
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="text-info mb-3"> <i class="fas fa-running text-warning"></i> WELCOME TO UNITED HEALTH CARE </h1>
      <p className="mb-5 text-primary">Founded in 1999, the United Health Foundation is committed to developing and supporting innovative and evidence-based activities that help the health system ...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
   
    );
};

export default Banner;