import React, {Component, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeListView from './presentation/EmployeeListView';
import { getEmployeeRequest, deleteEmployeeRequest } from './actions/EmployeeActions';
import { connect } from 'react-redux';

const EmployeeList: React.FC<any> = (props) => {
    const {employee,fetchEmployee,getByIdEmployee,deleteEmployee} = props;
    useEffect(()=> {
        fetchEmployee('search')
    },[])

    const deleteEmployeeData = (id:number) => {
        
        deleteEmployee(id);
    }

     return(<>
            Employee List
            <EmployeeListView employee={employee}  deleteEmployee= {deleteEmployeeData} />
            <NavLink to="/employee/add" className="nav-link"> <span className="icon icon-search mr-2"></span>Add Employee</NavLink>
            
    </>)
}

const mapStateToProps = (state:any) => {
     return {    employee: state.employees.employees }
}

const mapDispatchToProps = (dispatch:any) => {
 return {   
     fetchEmployee: (search: string) => dispatch(getEmployeeRequest(search)),
     deleteEmployee: (id: number) => dispatch(deleteEmployeeRequest(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);