import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_DEALS_REQUEST } from "../types/DealTypes";
import { getDealsSuccess, getDealsFailure } from "../actions/DealsActions";
import axios from 'axios'
import { IDeals } from "../model/DealsModel";


export function* waitForGetDeals() {
    console.log('call deal')
    yield takeEvery(FETCH_DEALS_REQUEST,getDeals);
    // const customer = yield call(() => axios.get(`http://localhost:8000/deals`))
        
    //     yield put(getDealsSuccess(customer.data))
}

function* getDeals(search:any){
    try {
        console.log('search');
        console.log(search)
        const customer = yield call(() => axios.get(`http://localhost:8000/deals`))
        
        if(search.payload) {
        const data = customer.data.filter((h:IDeals)=>h.deaNmeDeal.includes(search.payload));
        
        yield put(getDealsSuccess(data))
        }  else {
            yield put(getDealsSuccess(customer.data))
        }
    }
    catch(e){
        yield put(getDealsFailure('Login Error'))
    }
}