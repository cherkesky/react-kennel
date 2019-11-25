import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    console.log("PROPS FOR EVERY RENDERED CARD", this.props)
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-employee">{this.props.employee.name}</span></h2>
          {/* <p className="card-location">Taking care of: {this.props.employee.animals[0].name}</p> */}
          
          <button type="button" onClick={()=>
          
            this.props.history.push(`/employees/${this.props.employee.id}/edit`)
          
          }>Edit</button>
            <button type="button"
        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Terminate</button>
          </div>
      </div>
    );
  }
}

export default EmployeeCard;