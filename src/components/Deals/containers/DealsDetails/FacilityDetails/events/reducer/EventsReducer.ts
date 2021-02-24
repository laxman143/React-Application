import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from "../types/EventsTypes"



const initialState = {
  events: [],
  error : ''
}

const EventsReducer = (state = initialState , action: any) => {
    switch(action.type) {
        case FETCH_EVENTS_REQUEST : {
            return {
                ...state
            }
        }

        case FETCH_EVENTS_SUCCESS : {
            return {
                ...state,
                events: action.payload
            }
        }

        case FETCH_EVENTS_ERROR: {
            return{
                ...state,
                error: 'Event Error'
            }
        }

        default: return state
    }
}

export default EventsReducer