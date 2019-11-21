import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import OwnerCard from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalForm from './animal/AnimalForm'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        {/***************************************************************************************/}
        {/**********                           Animal Routing                            ********/}
        {/***************************************************************************************/}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent \d+ is looking for digits
          console.log("REACT PROPS", props)
          // console.log("THIS PROPS",this.props)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
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