import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IndexComponent.css';
import { Carousel } from 'react-bootstrap';

 import Gymno1 from './Gymno1.jpg';
 import Gymno2 from './Gymno2.jpg';
 import Gymno3 from './Gymno3.jpg';
 
 //import pms2 from './pms2.png';

const ProjectCarousel = () => {
    return (
      <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Gymno2}
            alt="Second slide - Institute Management System"
            style={{ height: '60vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <div
              style={{
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                marginBottom :'320px',
                padding: '20px',
                borderRadius: '10px',
                display: 'inline-block'
              }}
            >
              <h3 id='abc'><a href='#'>Offers And Discounts</a></h3>
              <p id='abc'>
                Looking for Discounts And Offers on Your Gym Bookings?  
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Gymno3}
            alt="Second slide - Institute Management System"
            style={{ height: '60vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <div
              style={{
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                marginBottom :'320px',
                padding: '20px',
                borderRadius: '10px',
                display: 'inline-block'
              }}
            >
              <h3 id='abc'><a href='#'>Offers And Discounts</a></h3>
              <p id='abc'>
              Looking for Discounts And Offers on Your Gym Bookings? 
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Gymno1}
            alt="Third slide - Project Management System"
            style={{ height: '60vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <div
              style={{
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                marginBottom :'320px',
                padding: '20px',
                borderRadius: '10px',
                display: 'inline-block'
              }}
            >
              <h3 id='abc'><a href='#'>Offers And Discounts</a></h3>
              <p id='abc'>
              Looking for Discounts And Offers on Your Gym Bookings? 
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ProjectCarousel;
  
  //export default HomeCarousel;