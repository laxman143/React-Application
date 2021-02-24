import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from "../types/EventsTypes"


export const getEventsRequest = (facilityId: string) =>  {
    
    return {
        type :  FETCH_EVENTS_REQUEST,
        payload: facilityId
    }
}

export const getEventsSuccess = (payload: any) =>  {
     return {
        type :  FETCH_EVENTS_SUCCESS,
        payload : payload
    }
}

export const getEventsFailure  = (error: any) => {
    return {
        type :  FETCH_EVENTS_ERROR,
        payload: error
    }
}
