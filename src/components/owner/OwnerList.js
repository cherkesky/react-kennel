import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from './OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners:[]
        }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from LocationManager and hang on to that data; put it in state
        OwnerManager.getAllWithAnimals()
        .then((ownersArr) => {
            this.setState({
                owners: ownersArr
            })
        })
    }

    render(){
      console.log("OwnersList: Render");
      console.log("state", this.state.owners)
      return(
        <div className="container-cards">
          {this.state.owners.map(owner =>
            <OwnerCard key={owner.id} owner={owner} />
          )}
        </div>
      )
    }
}

export default OwnerList
