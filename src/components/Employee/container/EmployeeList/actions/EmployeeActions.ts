import { FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_ERROR, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_ERROR } from "../types/EmployeeTypes"
import { IEmployee } from "../../../model/EmployeeModel"


export const getEmployeeRequest = (search: string) =>  {
    return {
        type :  FETCH_EMPLOYEE_REQUEST,
        payload: search
    }
}

export const getEmployeeSuccess = (payload: any) =>  {
     return {
        type :  FETCH_EMPLOYEE_SUCCESS,
        payload : payload
    }
}

export const getEmployeeError  = (error: any) => {
    return {
        type :  FETCH_EMPLOYEE_ERROR,
        payload: error
    }
}


export const deleteEmployeeRequest = (id: number) =>  {
    
    return {
        type :  DELETE_EMPLOYEE_REQUEST,
        payload: id
    }
}

export const deleteEmployeeSuccess = (payload: any) =>  {
     return {
        type :  DELETE_EMPLOYEE_SUCCESS,
        payload : payload
    }
}

export const deleteEmployeeError  = (error: any) => {
    return {
        type :  DELETE_EMPLOYEE_ERROR,
        payload: error
    }
}

