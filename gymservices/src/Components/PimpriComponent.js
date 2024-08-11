// PimpriComponent.js
import React from 'react';
import CityGyms from './CityGyms';
import Gymno4 from './Gymno4.jpg';
import Gymno5 from './Gymno5.jpg';
import Gymno6 from './Gymno6.jpg';

function PimpriComponent() {

    const gyms = [
        { id: 1, name: 'Gold Gym', location: 'Pimpri', image: 'Gymno4.jpg' },
        { id: 2, name: 'Hard Line Gym', location: 'Pimpri', image: 'Gymno5.jpg' },
        { id: 3, name: 'Physc Gym', location: 'Pimpri', image: 'Gymno6.jpg' },
      ];
    
  return <CityGyms gyms={gyms} />;
}

export default PimpriComponent;

// Similarly create BanerComponent.js and WakadComponent.js
