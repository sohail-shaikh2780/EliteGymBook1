// PimpriComponent.js
import React from 'react';
import CityGyms from './CityGyms';
import Gymno4 from './Gymno4.jpg';
import Gymno5 from './Gymno5.jpg';
import Gymno6 from './Gymno6.jpg';

function WakadComponent() {

    const gyms = [
        { id: 1, name: 'Sky Fitness', location: 'Wakad', image: 'Gymno4.jpg' },
        { id: 2, name: 'Acronym Gym', location: 'Wakad', image: 'Gymno5.jpg' },
        { id: 3, name: 'Solaris', location: 'Wakad', image: 'Gymno6.jpg' },
      ];
  return <CityGyms gyms={gyms} />;
}

export default WakadComponent;

// Similarly create BanerComponent.js and WakadComponent.js
