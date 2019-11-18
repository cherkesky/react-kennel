import React, { Component } from 'react';

class LocationCard extends Component {
render(){
  return (
    <div>
    <div className="card">
      <div className="card-content">
        <p>Location Name: Over Yonder... </p>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <p>Location Name: Brentwood, TN </p>
    </div>
  </div>
  </div>
  );
}
}

export default LocationCard;