import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'

import Home from './home/Home'
import OwnerCard from './owner/OwnerList'

import AnimalList from './animal/AnimalList'
import AnimalForm from './animal/AnimalForm'
import AnimalDetail from './animal/AnimalDetail'
import AnimalEditForm from './animal/AnimalEditForm'

import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'

import EmployeeList from './employee/EmployeeList'
import EmployeeEditForm from './employee/EmployeeEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals.jsx'
import Login from './auth/Login'




class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        {/***************************************************************************************/}
        {/**********                           Animal Routing                            ********/}
        {/***************************************************************************************/}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route
          path="/animals/:animalId(\d+)/edit" render={ props => {
            return <AnimalEditForm {...props} />
          }}
        />

     
        {/***************************************************************************************/}
        {/**********                           Location Routing                          ********/}
        {/***************************************************************************************/}
        <Route path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent \d+ is looking for digits
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        {/***************************************************************************************/}
        {/**********                           Employee Routing                          ********/}
        {/***************************************************************************************/}
        <Route path="/employee" render={(props) => {
          return <EmployeeList {...props}/>
        }} />
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
         return <EmployeeWithAnimals {...props} />
            }} />
        {/***************************************************************************************/}
        {/**********                           Owner Routing                             ********/}
        {/***************************************************************************************/}
        <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />
        {/***************************************************************************************/}
        {/**********                           Login Routing                             ********/}
        {/***************************************************************************************/}
        <Route path="/login" component={Login} />


      </React.Fragment>
    )
  }
}

export default ApplicationViews