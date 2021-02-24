import { takeEvery, put, call } from "redux-saga/effects";

import axios from 'axios'
import { FETCH_FACILITY_REQUEST } from "../types/FacilityTypes";
import { getFacilitySuccess, getFacilityFailure } from "../actions/FacilityActions";
import { IFacilities } from "../../../../model/DealsModel";


export function* waitForGetFacility() {
    
    yield takeEvery(FETCH_FACILITY_REQUEST,getFacility);
    // const customer = yield call(() => axios.get(`http://localhost:8000/facilities`))
        
    //     yield put(getFacilitySuccess(customer.data))
}

function* getFacility(search:any){
    try {
        console.log('search facility');
        console.log(search);
        const customer = yield call(() => axios.get(`http://localhost:8000/facilities`))
        
        // yield put(getFacilitySuccess(customer.data))
        if(search.payload) {
            const data = customer.data.filter((h:IFacilities)=>h.facNmeFacility.includes(search.payload));
            yield put(getFacilitySuccess(data));
            }  else {
                yield put(getFacilitySuccess(customer.data));
            }
        }
        catch(e){
            yield put(getFacilityFailure('Login Error'))
        }
    }
   
