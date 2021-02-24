import { FETCH_FACILITY_REQUEST, FETCH_FACILITY_SUCCESS, FETCH_FACILITY_ERROR } from "../types/FacilityTypes"


export const getFacilityRequest = (search:string) =>  {
    return {
        type :  FETCH_FACILITY_REQUEST,
        payload: search
    }
}

export const getFacilitySuccess = (payload: any) =>  {
     return {
        type :  FETCH_FACILITY_SUCCESS,
        payload : payload
    }
}

export const getFacilityFailure  = (error: any) => {
    return {
        type :  FETCH_FACILITY_ERROR,
        payload: error
    }
}
