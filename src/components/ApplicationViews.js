import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import OwnerCard from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalForm from './animal/AnimalForm'
import AnimalDetail from './animal/AnimalDetail'




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
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
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
        <Route path="/form" render={(props) => {
          return <AnimalForm />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews