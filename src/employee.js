import React, { Component } from 'react'
import "./employee.css"
import employee_picture from "./employees_pictures"

class Employee extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        employees: []
      };
    }
  
    componentDidMount() {
      fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              employees: result.data
            });
            console.log(result.data);
          },
       
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className="table-wrapper-scroll-y my-custom-scrollbar">

                <table className="table table-bordered table-striped mb-0 h5">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Age</th>
                            <th scope="col">Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.employees.map(emp => (
                            <tr key={emp.id}>
                                <th scope="row">{emp.id}</th>
                                <td>{emp.employee_name}</td>
                                <td>{emp.employee_salary}</td>
                                <td>{emp.employee_age}</td>
                                <td className="text-center">
                                    <img src={process.env.PUBLIC_URL + employee_picture[Math.floor(Math.random() * 24)].picture_src } alt={process.env.PUBLIC_URL + employee_picture[Math.floor(Math.random() * 24)].picture_src } width="100px" height="100px" />
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            
            </div>
        );
      }
    }
  }

  export default Employee;