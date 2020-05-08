import React from 'react';
import hogs from '../porkers_data.js';
import HogCard from './HogCard.js';

const HogsContainer = () => {
  // const hoo =    {
  //       name: 'Mudblood',
  //       specialty: 'Mediocre magic',
  //       greased: false,
  //       'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  //       'highest medal achieved': 'bronze'
  //     }

  return (
    <div className="hogsContainer">
      {hogs.map(hog => <HogCard hog={hog}/>)}
    </div>
  )
}

export default HogsContainer
