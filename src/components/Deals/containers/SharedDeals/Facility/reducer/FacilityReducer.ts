import { FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS, FETCH_FACILITY_ERROR } from "../types/FacilityTypes"


const initialState = {
  facility: [],
  error : ''
}

const FacilityReducer = (state = initialState , action: any) => {
    switch(action.type) {
        case FETCH_FACILITY_REQUEST : {
            return {
                ...state
            }
        }

        case FETCH_FACILITY_SUCCESS : {
            return {
                ...state,
                facility: action.payload
            }
        }

        case FETCH_FACILITY_ERROR: {
            return{
                ...state,
                error: 'Login Error'
            }
        }

        default: return state
    }
}

export default FacilityReducer