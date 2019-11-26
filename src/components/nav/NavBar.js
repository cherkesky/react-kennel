import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
}


  render(){
    
    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {
            (this.props.user)
            ? <li><Link className="nav-link" to="/animals">Animals</Link></li>
            : null
            }           
            <li><Link className="nav-link" to="/location">Locations</Link></li>
            {
            (this.props.user)
            ?  <li><Link className="nav-link" to="/employee">Employees</Link></li>
            : null
            }
            {
            (this.props.user)
            ? <>
            {console.log("USER - NavBar", this.props.user)}
            <li><Link className="nav-link" to="/owner">Owners</Link></li>
            </>
            : null
            }
           <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>

          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;