import React from 'react';
import { Link } from 'react-router-dom';
import './CityGyms.css';

const CityGyms = ({ gyms }) => {
  return (
    <div className="gyms-container">
      {gyms.map((gym, index) => (
        <div className="gym-card" key={index}>
          <img src={gym.image} alt={gym.name} className="gym-image" />
          <div className="gym-info">
            <h3>{gym.name}</h3>
            <p>{gym.location}</p>
            <Link to={`/book/${gym.id}`} className="book-now">
              Book Now →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityGyms;
