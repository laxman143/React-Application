import { FETCH_DEALS_REQUEST, FETCH_DEALS_SUCCESS, FETCH_DEALS_ERROR } from "../types/DealTypes"

export const getDealsRequest = (search: string) =>  {
    return {
        type :  FETCH_DEALS_REQUEST,
        payload: search
    }
}

export const getDealsSuccess = (payload: any) =>  {
     return {
        type :  FETCH_DEALS_SUCCESS,
        payload : payload
    }
}

export const getDealsFailure  = (error: any) => {
    return {
        type :  FETCH_DEALS_ERROR,
        payload: error
    }
}
