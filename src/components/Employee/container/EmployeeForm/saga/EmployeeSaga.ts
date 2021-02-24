import { takeEvery, put, call, take } from "redux-saga/effects";

import axios from 'axios';
import Employee from "../../../Employee";
import { ADD_EMPLOYEE_REQUEST, GETBYID_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_REQUEST } from "../types/EmployeeFormTypes";
import { IEmployee } from "../../../model/EmployeeModel";
import { addEmployeeSuccess, addEmployeeError, getByIdSuccess, updateEmployeeError, updateEmployeeSuccess } from "../actions/EmployeeFormAction";
import { push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
export default history;



export function* waitForAddEmployee() {
    yield takeEvery(ADD_EMPLOYEE_REQUEST,addEmployee);
}

function* addEmployee(employee:any){
    try {
        yield call(() => axios.post(`http://localhost:8000/employees`,employee.payload))
        // yield call(forwardTo, '/employee');
         yield put(addEmployeeSuccess(true))
        // yield put(push('/employee'));
        // history.push('/employee');
        // yield call(forwardTo, '/employee');
    }
    catch(e){
        yield put(addEmployeeError('Employee Add Error'))
    }
}



export function* watiForGetByIDEmployee() {

    yield takeEvery(GETBYID_EMPLOYEE_REQUEST,getByIdEmployee);
    
}


function* getByIdEmployee(emp:any){
    const employee = yield call(() => axios.get(`http://localhost:8000/employees/${emp.payload}`))
    debugger
    yield put(getByIdSuccess(employee.data))
}


export function* waitForUpdateEmployee() {
    yield takeEvery(UPDATE_EMPLOYEE_REQUEST,updateEmployee);
}

function* updateEmployee(employee:any){
    try {
        
        yield call(() => axios.put(`http://localhost:8000/employees/${employee.payload.id}`,employee.payload))
        yield put(updateEmployeeSuccess(true))
    }
    catch(e){
        yield put(updateEmployeeError('Employee Update Error'))
    }
}


function forwardTo(location:any) {
    history.push(location);
  }