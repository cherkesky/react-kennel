import React, { Component } from 'react'
    // import the components we will need
    import EmployeeCard from "./EmployeeCard"
    import EmployeeManager from "./EmployeeManager"

    class EmployeeList extends Component {
      state = {employees:[]}
    
    componentDidMount(){
      console.log("EMPLOYEE LIST: ComponentDidMount");
      EmployeeManager.getAll()
        .then((employeesArr) => {
            this.setState({
                employees: employeesArr
            })
        })
    }

    render(){
      console.log("EmployeeList: Render");
      console.log("state", this.state.employees)

      return(
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard key={employee.id} employee={employee} />
          )}
        </div>
      )
    }
  }
export default EmployeeList