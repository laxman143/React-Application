import { IEmployee } from "../../../model/EmployeeModel"
import { ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_ERROR, GETBYID_EMPLOYEE_REQUEST, GETBYID_EMPLOYEE_SUCCESS, GETBYID_EMPLOYEE_ERROR, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_ERROR, RESET_EMPLOYEE_STATE } from "../types/EmployeeFormTypes"



export const addEmployeeRequest = (employee: IEmployee) =>  {
    
    return {
        type :  ADD_EMPLOYEE_REQUEST,
        payload: employee
    }
}

export const addEmployeeSuccess = (payload: any) =>  {
     return {
        type :  ADD_EMPLOYEE_SUCCESS,
        payload : payload
    }
}

export const addEmployeeError  = (error: any) => {
    return {
        type :  ADD_EMPLOYEE_ERROR,
        payload: error
    }
}




export const getByIdRequest = (id: number) =>  {
    
    return {
        type :  GETBYID_EMPLOYEE_REQUEST,
        payload: id
    }
}

export const getByIdSuccess = (payload: any) =>  {
    
     return {
        type :  GETBYID_EMPLOYEE_SUCCESS,
        payload : payload
    }
}

export const getByIdError  = (error: any) => {
    return {
        type :  GETBYID_EMPLOYEE_ERROR,
        payload: error
    }
}




export const updateEmployeeRequest = (employee: IEmployee) =>  {
    return {
        type :  UPDATE_EMPLOYEE_REQUEST,
        payload: employee
    }
}

export const updateEmployeeSuccess = (payload: any) =>  {
     return {
        type :  UPDATE_EMPLOYEE_SUCCESS,
        payload : payload
    }
}

export const updateEmployeeError  = (error: any) => {
    return {
        type :  UPDATE_EMPLOYEE_ERROR,
        payload: error
    }
}

export const resetEmployeeState = () => {
    return {
        type: RESET_EMPLOYEE_STATE
    }
}