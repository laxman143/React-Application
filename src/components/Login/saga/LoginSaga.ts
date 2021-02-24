import { put , takeEvery, call, take } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions/LoginAction';
import { REQUEST_LOGIN } from '../types/loginType';


export function* waitForLogin() {
    yield takeEvery(REQUEST_LOGIN,login);
}

function* login(){
    try {
        
        yield put(loginSuccess(true))
    }
    catch(e){
        yield put(loginFailure('Login Error'))
    }
}