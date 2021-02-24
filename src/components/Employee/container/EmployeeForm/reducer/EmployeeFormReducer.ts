import { ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_ERROR, GETBYID_EMPLOYEE_REQUEST, GETBYID_EMPLOYEE_SUCCESS, GETBYID_EMPLOYEE_ERROR, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_ERROR, RESET_EMPLOYEE_STATE } from "../types/EmployeeFormTypes"




const initialState = {
  employees: [],
  error : '',
  success: false
}

const EmployeeFormReducer = (state = initialState , action: any) => {
    switch(action.type) {
      
        case ADD_EMPLOYEE_REQUEST : {
           
            return {
                ...state,
                employee : action.payload
            }
        }

        case ADD_EMPLOYEE_SUCCESS : {
            return {
                ...state,
                success : action.payload
            }
        }

        case ADD_EMPLOYEE_ERROR: {
            return{
                ...state,
                error: 'Error'
            }
        }


        case UPDATE_EMPLOYEE_REQUEST : {
           
            return {
                ...state,
                employee : action.payload
            }
        }

        case UPDATE_EMPLOYEE_SUCCESS : {
            return {
                ...state,
                success : action.payload
            }
        }

        case UPDATE_EMPLOYEE_ERROR: {
            return{
                ...state,
                error: 'Error'
            }
        }


        
        case GETBYID_EMPLOYEE_REQUEST : {
            return {
                ...state
            }
        }

        case GETBYID_EMPLOYEE_SUCCESS : {
            return {
                ...state,
                employeeEdit: action.payload
            }
        }

        case GETBYID_EMPLOYEE_ERROR: {
            return{
                ...state,
                error: 'Error'
            }
        }

        case RESET_EMPLOYEE_STATE: {
            return {
                ...initialState
            }
        }

        default: return state
    }
}

export default EmployeeFormReducer