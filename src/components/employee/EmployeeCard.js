import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-employee">{this.props.employee.name}</span></h2>
            <p className="card-location">Taking care of: {this.props.employee.animals[0].name}</p>
          </div>
      </div>
    );
  }
}

export default EmployeeCard;