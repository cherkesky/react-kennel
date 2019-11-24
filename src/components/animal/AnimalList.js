import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from './AnimalManager'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animalsArr) => {
            this.setState({
                animals: animalsArr
            })
        })
    }

    render(){
      console.log("AnimalList: Render");
      return(
        <>
        {/**********                           Admin Button                            ********/}
        <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {this.props.history.push("/animals/new")}}>
            Admit Animal
        </button>
      </section>
        {/**********                       Setting the state                            ********/}
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props} //passing props to the Edit button
            />
          )}
        </div>
        </>
      )
    }

    deleteAnimal = id => {
      AnimalManager.delete(id)
      .then(() => {
        AnimalManager.getAll()
        .then((newAnimals) => {
          this.setState({
              animals: newAnimals
          })
        })
      })
    }
}

export default AnimalList
