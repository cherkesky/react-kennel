import React, { Component } from 'react';

class EmployeeCard extends Component {
render(){
  return (
    <div>
    <div className="card">
      <div className="card-content">
        <p>Employee Name: Mike Dundee!</p>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <p>Employee Name: Garret Dundee</p>
    </div>
  </div>
  </div>
  );
}
}

export default EmployeeCard;