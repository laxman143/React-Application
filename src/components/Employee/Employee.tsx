import React from 'react';
import EmployeeRouting from './EmployeeRouting';

class Employee extends React.Component<any,any> {
    constructor(props:any){
        super(props);
    }

    render() {
        return(<div>
            <EmployeeRouting/>
        </div>);
    }
}

export default Employee;