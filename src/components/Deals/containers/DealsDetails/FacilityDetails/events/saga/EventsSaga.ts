import { takeEvery, put, call } from "redux-saga/effects";

import axios from 'axios'
import { FETCH_EVENTS_REQUEST } from "../types/EventsTypes";
import { getEventsSuccess, getEventsFailure } from "../actions/EventsActions";


export function* waitForGetEvents() {
  
    yield takeEvery(FETCH_EVENTS_REQUEST,getEvents);
    // const customer = yield call(() => axios.get(`http://localhost:8000/events`))
    // debugger
    // yield put(getEventsSuccess(customer.data))
}

function* getEvents(d:any){
    try {
        console.log('facilityID' + d.payload);
        const customer = yield call(() => axios.get(`http://localhost:8000/events`))
        
        yield put(getEventsSuccess(customer.data))
    }
    catch(e){
        yield put(getEventsFailure('Login Error'))
    }
}