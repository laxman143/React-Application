import { FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_ERROR, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_ERROR,  } from "../types/EmployeeTypes"
import { IEmployee } from "../../../model/EmployeeModel"



const initialState = {
  employees: [],
  employeeEdit: {},
  error : ''
}

const EmployeeReducer = (state = initialState , action: any) => {
    switch(action.type) {
        case FETCH_EMPLOYEE_REQUEST : {
            return {
                ...state
            }
        }

        case FETCH_EMPLOYEE_SUCCESS : {
            return {
                ...state,
                employees: action.payload
            }
        }

        case FETCH_EMPLOYEE_ERROR: {
            return{
                ...state,
                error: 'Error'
            }
        }

        case DELETE_EMPLOYEE_REQUEST : {
            return {
                ...state,
                id: action.payload

            }
        }

        case DELETE_EMPLOYEE_SUCCESS : {
            return {
                ...state,
                employees :state.employees.filter((h:IEmployee)=>h.id != action.payload)
            }
        }

        case DELETE_EMPLOYEE_ERROR: {
            return{
                ...state,
                error: 'Error'
            }
        }




        default: return state
    }
}

export default EmployeeReducer