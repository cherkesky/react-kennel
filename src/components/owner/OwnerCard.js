import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2 className="card-location">{this.props.owner.name}</h2>
            <p className="card-location">{this.props.owner.phoneNumber}</p>
            <p className="card-location"> Pet Name: {this.props.owner.animal["name"]}</p>
          </div>
      </div>
    );
  }
}

export default OwnerCard;