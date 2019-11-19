import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//import AnimalCard from './animal/AnimalCard'
//import LocationCard from './location/LocationCard'
//import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'




class ApplicationViews extends Component {

  render() {
    // React.Fragment is the same as <> </>
    return (
      <React.Fragment> 
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
         <Route path="/animal" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
        }} />
         <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
         <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews