import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div>
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Laika</span></h3>
          <p>Breed: Beagle & Aussie Shepard</p>
        </div>
      </div>
      <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">Belka</span></h3>
        <p>Breed: Beagle & Aussie Shepard</p>
      </div>
    </div>
    </div>
    );
  }
}

export default AnimalCard;