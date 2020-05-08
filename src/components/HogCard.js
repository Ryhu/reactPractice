import React from 'react';

export default class HogCard extends React.Component(){

  // props:
  //   {
  //     name: 'Mudblood',
  //     specialty: 'Mediocre magic',
  //     greased: false,
  //     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  //     'highest medal achieved': 'bronze'
  //   },
  render(){
    return (
      <div className="HogCard">
        {this.props.hog}
      </div>
    )
  }
};
