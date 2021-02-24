import { FETCH_DEALS_REQUEST, FETCH_DEALS_SUCCESS, FETCH_DEALS_ERROR } from "../types/DealTypes"


const initialState = {
  deals: [],
  error : '',
  loader: false
}

const DealsReducer = (state = initialState , action: any) => {
    switch(action.type) {
        case FETCH_DEALS_REQUEST : {
            return {
                ...state,
                loader: true

            }
        }

        case FETCH_DEALS_SUCCESS : {
            return {
                ...state,
                deals: action.payload,
                loader: false
            }
        }

        case FETCH_DEALS_ERROR: {
            return{
                ...state,
                error: 'Login Error'
            }
        }

        default: return state
    }
}

export default DealsReducer