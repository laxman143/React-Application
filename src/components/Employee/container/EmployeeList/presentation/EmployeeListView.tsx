import React, { Component } from 'react';
import { IEmployee } from '../../../model/EmployeeModel';
import { NavLink } from 'react-router-dom';


const EmployeeListView: React.FC<any> = (props) => {
    const { employee , getEmployeeByID, deleteEmployee} = props;

    const deleteEmployeeData = (id:number) => {
        deleteEmployee(id);
    }

    return (<>
        <div className="main-container">
            <div className="mt-4 h-100 overflow-hidden bg-white border border-gray-accent">
                <div className="data-table" id="data-table">
                    <div className="data-table-header" id="data-table-header" >
                        <table>
                            <thead>
                                <tr>
                                    <th> First Name</th>

                                    <th> Last Name</th>

                                    <th> Email</th>

                                    <th>Hopbbies</th>

                                    <th> DOB</th>

                                    <th> Gender</th>

                                    <th> City</th>
                                    <th> Action</th>
                                </tr>
                            </thead>

                        </table>
                    </div>


                    <div className="data-table-body" id="data-table-body">
                        <table>
                            <tbody>

                                {employee && employee.map((employee: IEmployee) =>
                                    <tr>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.hobbies && employee.hobbies.map((hobby:any,index: number)=>
                                          (employee.hobbies.length - 1 === index) ? hobby :  hobby + ' , '
                                        )}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.city}</td>
                                        <td>
                                          <NavLink to={`/employee/edit/${employee.id}`} className="nav-link"> <span className="icon icon-edit mr-2"></span>Edit</NavLink>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ () => deleteEmployeeData(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default EmployeeListView