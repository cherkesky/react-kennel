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
    // React.Fragment is the same as <> </>
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animal" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent \d+ is looking for digits
          console.log("REACT PROPS",props)
         // console.log("THIS PROPS",this.props)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
        }} />
         <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent \d+ is looking for digits
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />
        <Route path="/form" render={(props) => {
          return <AnimalForm />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews