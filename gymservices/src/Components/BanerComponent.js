// PimpriComponent.js
import React from 'react';
import CityGyms from './CityGyms';
import Gymno4 from './Gymno4.jpg';
import Gymno5 from './Gymno5.jpg';
import Gymno6 from './Gymno6.jpg';

function BanerComponent() {

    const gyms = [
        { id: 1, name: 'VJ Fitness Gym', location: 'Baner', image: 'Gymno4.jpg' },
        { id: 2, name: 'Hanuman Gym', location: 'Baner', image: 'Gymno5.jpg' },
        { id: 3, name: 'Silver Gym', location: 'Baner', image: 'Gymno6.jpg' },
      ];
  return <CityGyms gyms={gyms} />;
}

export default BanerComponent;

// Similarly create BanerComponent.js and WakadComponent.js
