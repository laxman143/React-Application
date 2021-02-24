import * as React from 'react';
import { Route } from 'react-router';
import EmployeeList from './container/EmployeeList/EmployeeList';
import PrivateRoute from '../Shared';
import EmployeeForm from './container/EmployeeForm';


const EmployeeRouting: React.FC<any> = () => {


    return (
        <>
            <PrivateRoute exact path="/employee" component={EmployeeList} />
            <PrivateRoute exact path="/employee/add" component={EmployeeForm} />
            <PrivateRoute exact path="/employee/edit/:id" component={EmployeeForm} />
        </>
    )
}

export default EmployeeRouting;
