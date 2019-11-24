import React, { Component } from 'react'
    // import the components we will need
    import EmployeeCard from "./EmployeeCard"
    import EmployeeManager from "./EmployeeManager"

    class EmployeeList extends Component {
      state = {employees:[]}
    
    componentDidMount(){
      console.log("EMPLOYEE LIST: ComponentDidMount");
      EmployeeManager.getAllWithAnimals()
        .then((employeesArr) => {
            this.setState({
                employees: employeesArr
            })
        })
    }

    render(){
      console.log("EmployeeList: Render");
      console.log("state", this.state.employees)
      console.log("EMPLOYEE LIST PROPS", this.props.match)
      
      return(
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard 
            key={employee.id} 
            employee={employee} 
            deleteEmployee={this.deleteEmployee}
            {...this.props}
            />
          )}
        </div>
      )
    }
    deleteEmployee = id => {
      EmployeeManager.delete(id)
      .then(() => {
        EmployeeManager.getAllWithAnimals()
        .then((newEmployee) => {
          this.setState({
              employees: newEmployee
          })
        })
      })
    }
  }
export default EmployeeList