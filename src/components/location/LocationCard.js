import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2 className="card-location">{this.props.location.name}</h2>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Discharge</button>
          </div>
      </div>
    );
  }
}

export default LocationCard;