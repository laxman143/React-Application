import { takeEvery, put, call } from "redux-saga/effects";

import axios from 'axios';
import { FETCH_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_REQUEST, } from "../types/EmployeeTypes";
import { getEmployeeSuccess, getEmployeeError, deleteEmployeeSuccess } from "../actions/EmployeeActions";
import Employee from "../../../Employee";



export function* waitForEmployee() {
    console.log('call deal')
    yield takeEvery(FETCH_EMPLOYEE_REQUEST,getEmployee);
    const employee = yield call(() => axios.get(`http://localhost:8000/employees`))
    
    yield put(getEmployeeSuccess(employee.data))
    // const customer = yield call(() => axios.get(`http://localhost:8000/deals`))
        
    //     yield put(getDealsSuccess(customer.data))
}

function* getEmployee(search:any){
    try {
        console.log('search');
        console.log(search)
        const employee = yield call(() => axios.get(`http://localhost:8000/employees`))
        yield put(getEmployeeSuccess(employee.data))
      
    }
    catch(e){
        yield put(getEmployeeError('Employee list error'))
    }
}


export function* waitForDelete() {
 
    yield takeEvery(DELETE_EMPLOYEE_REQUEST,deleteEmployee);

}

function* deleteEmployee(employee:any){
    try {
             yield call(() => axios.delete(`http://localhost:8000/employees/${employee.payload}`))
        
        yield put(deleteEmployeeSuccess(employee.payload))
      
    }
    catch(e){
        yield put(getEmployeeError('Employee list error'))
    }
}
