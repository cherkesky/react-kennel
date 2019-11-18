import React, { Component } from 'react';

class OwnerCard extends Component {
render(){
  return (
    <div>
    <div className="card">
      <div className="card-content">
        <p>Owner Name: Guy Cherkesky</p>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <p>Owner Name: John Doe</p>
    </div>
  </div>
  </div>
  );
}
}

export default OwnerCard;